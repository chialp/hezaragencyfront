import { NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import User from "../../../../models/User";
import { requireAdmin } from "../../../../lib/auth";

export async function GET() {
  try {
    const auth = await requireAdmin();

    if (auth.error) {
      return NextResponse.json(
        { message: auth.error.message },
        { status: auth.error.status }
      );
    }

    await connectDB();

    const user = await User.findById(auth.user.userId);

    if (!user) {
      return NextResponse.json(
        { message: "کاربر یافت نشد" },
        { status: 404 }
      );
    }

    const totalUsers = await User.countDocuments();
    const totalAuthors = await User.countDocuments({ role: "author" });
    const totalAdmins = await User.countDocuments({ role: "admin" });
    const activeUsers = await User.countDocuments({ isActive: true });

    return NextResponse.json({
      success: true,
      user: user.getPublicProfile(),
      systemStats: {
        totalUsers,
        totalAuthors,
        totalAdmins,
        activeUsers,
        inactiveUsers: totalUsers - activeUsers,
      },
    });
  } catch (error) {
    console.error("GET /api/auth/admin/profile error:", error);
    return NextResponse.json(
      { message: "خطای سرور" },
      { status: 500 }
    );
  }
}
