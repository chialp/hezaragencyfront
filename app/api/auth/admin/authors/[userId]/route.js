import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { requireAdmin } from "@/lib/auth";

export async function PUT(req, { params }) {
  try {
    const auth = await requireAdmin();

    if (auth.error) {
      return NextResponse.json(
        { message: auth.error.message },
        { status: auth.error.status }
      );
    }

    await connectDB();

    const { userId } = params;
    const body = await req.json();

    const username = body?.username?.trim();
    const password = body?.password;
    const role = body?.role;
    const isActive = body?.isActive;

    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json(
        { message: "کاربر موردنظر پیدا نشد" },
        { status: 404 }
      );
    }

    if (username) {
      const existingUser = await User.findOne({
        username,
        _id: { $ne: userId },
      });

      if (existingUser) {
        return NextResponse.json(
          { message: "این نام کاربری قبلاً استفاده شده است" },
          { status: 400 }
        );
      }

      user.username = username;
    }

    if (password) {
      user.password = password;
    }

    if (role !== undefined) {
      if (!["admin", "author"].includes(role)) {
        return NextResponse.json(
          { message: "نقش کاربر نامعتبر است" },
          { status: 400 }
        );
      }

      user.role = role;
    }

    if (isActive !== undefined) {
      user.isActive = isActive;
    }

    await user.save();

    return NextResponse.json({
      success: true,
      message: "کاربر با موفقیت ویرایش شد",
      user: user.getPublicProfile(),
    });
  } catch (error) {
    console.error("PUT /api/auth/admin/authors/[userId] error:", error);
    return NextResponse.json(
      { message: "خطا در ویرایش کاربر" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const auth = await requireAdmin();

    if (auth.error) {
      return NextResponse.json(
        { message: auth.error.message },
        { status: auth.error.status }
      );
    }

    await connectDB();

    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json(
        { message: "کاربر موردنظر پیدا نشد" },
        { status: 404 }
      );
    }

    if (user.role === "admin") {
      return NextResponse.json(
        { message: "حذف ادمین مجاز نیست" },
        { status: 400 }
      );
    }

    await User.findByIdAndDelete(userId);

    return NextResponse.json({
      success: true,
      message: "کاربر با موفقیت حذف شد",
    });
  } catch (error) {
    console.error("DELETE /api/auth/admin/authors/[userId] error:", error);
    return NextResponse.json(
      { message: "خطا در حذف کاربر" },
      { status: 500 }
    );
  }
}
