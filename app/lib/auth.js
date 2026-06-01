import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

export async function getAuthUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return null;

    const decoded = verifyToken(token);
    return decoded;
  } catch {
    return null;
  }
}

export async function requireAuth() {
  const user = await getAuthUser();

  if (!user) {
    return {
      error: {
        status: 401,
        message: "ابتدا وارد حساب شوید",
      },
    };
  }

  return { user };
}

export async function requireAdmin() {
  const auth = await requireAuth();

  if (auth.error) return auth;

  if (auth.user.role !== "admin") {
    return {
      error: {
        status: 403,
        message: "دسترسی ادمین لازم است",
      },
    };
  }

  return auth;
}
