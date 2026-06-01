import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import User from "../../../models/User";
import { requireAuth } from "../../../lib/auth";

export async function GET() {
  try {
    const auth = await requireAuth();

    if (auth.error) {
      return NextResponse.json(
        { authenticated: false, message: auth.error.message },
        { status: auth.error.status }
      );
    }

    await connectDB();

    const user = await User.findById(auth.user.userId).select(
      "_id username role isActive lastLogin loginCount createdAt updatedAt"
    );

    if (!user) {
      return NextResponse.json(
        { authenticated: false, message: "کاربر یافت نشد" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      authenticated: true,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
        isActive: user.isActive,
        lastLogin: user.lastLogin,
        loginCount: user.loginCount,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (error) {
    console.error("GET /api/auth/me error:", error);
    return NextResponse.json(
      { authenticated: false, message: "خطای سرور" },
      { status: 500 }
    );
  }
}
