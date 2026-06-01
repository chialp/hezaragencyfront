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

    const authors = await User.find({ role: "author" })
      .select("_id username role isActive lastLogin loginCount createdAt updatedAt")
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      count: authors.length,
      authors,
    });
  } catch (error) {
    console.error("GET /api/auth/admin/authors error:", error);
    return NextResponse.json(
      { message: "خطا در دریافت نویسنده‌ها" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const auth = await requireAdmin();

    if (auth.error) {
      return NextResponse.json(
        { message: auth.error.message },
        { status: auth.error.status }
      );
    }

    await connectDB();

    const body = await req.json();
    const username = body?.username?.trim();
    const password = body?.password;
    const role = body?.role || "author";
    const isActive = body?.isActive ?? true;

    if (!username || !password) {
      return NextResponse.json(
        { message: "نام کاربری و رمز عبور الزامی است" },
        { status: 400 }
      );
    }

    if (!["admin", "author"].includes(role)) {
      return NextResponse.json(
        { message: "نقش کاربر نامعتبر است" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return NextResponse.json(
        { message: "این نام کاربری قبلاً ثبت شده است" },
        { status: 400 }
      );
    }

    const newUser = await User.create({
      username,
      password,
      role,
      isActive,
    });

    return NextResponse.json(
      {
        success: true,
        message: "کاربر با موفقیت ایجاد شد",
        user: newUser.getPublicProfile(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/auth/admin/authors error:", error);
    return NextResponse.json(
      { message: "خطا در ایجاد کاربر" },
      { status: 500 }
    );
  }
}
