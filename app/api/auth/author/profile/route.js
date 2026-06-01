import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import User from "../../../../models/User";
import { requireAuth } from "../../../../lib/auth";

function calculateActivityScore(user) {
  let score = 0;

  score += Math.min(user.loginCount * 2, 50);

  if (user.lastLogin) {
    const daysSinceLastLogin = Math.floor(
      (Date.now() - new Date(user.lastLogin).getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysSinceLastLogin <= 7) score += 30;
    else if (daysSinceLastLogin <= 30) score += 15;
  }

  const membershipDays = Math.floor(
    (Date.now() - new Date(user.createdAt).getTime()) / (1000 * 60 * 60 * 24)
  );

  if (membershipDays >= 180) score += 20;
  else if (membershipDays >= 90) score += 10;

  return Math.min(score, 100);
}

export async function GET(req) {
  try {
    const auth = await requireAuth();

    if (auth.error) {
      return NextResponse.json(
        { message: auth.error.message },
        { status: auth.error.status }
      );
    }

    await connectDB();

    const { searchParams } = new URL(req.url);
    const queryUserId = searchParams.get("userId");

    let targetUserId = auth.user.userId;

    if (auth.user.role === "admin" && queryUserId) {
      targetUserId = queryUserId;
    }

    const user = await User.findById(targetUserId);

    if (!user) {
      return NextResponse.json(
        { message: "کاربر یافت نشد" },
        { status: 404 }
      );
    }

    if (auth.user.role === "author" && user._id.toString() !== auth.user.userId) {
      return NextResponse.json(
        { message: "دسترسی غیرمجاز" },
        { status: 403 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
        isActive: user.isActive,
        lastLogin: user.lastLogin,
        loginCount: user.loginCount,
        createdAt: user.createdAt,
        writingStats: {
          totalArticles: 0,
          lastArticleDate: null,
          activityScore: calculateActivityScore(user),
        },
      },
    });
  } catch (error) {
    console.error("GET /api/auth/author/profile error:", error);
    return NextResponse.json(
      { message: "خطای سرور" },
      { status: 500 }
    );
  }
}
