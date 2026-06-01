import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import User from "../../../models/User";
import { signToken } from "../../../lib/auth";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const username = body?.username?.trim();
    const password = body?.password;

    console.log("LOGIN BODY:", body);
    console.log("USERNAME:", username);
    console.log("PASSWORD:", password);

    if (!username || !password) {
      return NextResponse.json(
        { message: "نام کاربری و رمز عبور الزامی است" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ username });

    console.log("FOUND USER:", user);

    if (!user) {
      return NextResponse.json(
        { message: "نام کاربری یا رمز عبور اشتباه است" },
        { status: 400 }
      );
    }

    console.log("USER PASSWORD IN DB:", user.password);
    console.log("USER IS ACTIVE:", user.isActive);

    if (!user.isActive) {
      return NextResponse.json(
        { message: "حساب کاربری غیرفعال است" },
        { status: 403 }
      );
    }

    const isPasswordValid = String(password) === String(user.password);
    console.log("DIRECT PASSWORD CHECK:", isPasswordValid);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "نام کاربری یا رمز عبور اشتباه است" },
        { status: 400 }
      );
    }

    await user.updateLoginStats();

    const token = signToken({
      userId: user._id.toString(),
      username: user.username,
      role: user.role,
    });

    const response = NextResponse.json({
      success: true,
      message: "ورود موفقیت‌آمیز بود",
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("POST /api/auth/login error:", error);
    return NextResponse.json(
      { message: "خطای سرور" },
      { status: 500 }
    );
  }
}
