import { mkdir, writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";

export async function saveUpload(file, folder = "uploads") {
  if (!file || typeof file !== "object" || !file.size) return "";

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const ext = path.extname(file.name) || "";
  const fileName = `${Date.now()}-${crypto.randomUUID()}${ext}`;

  const uploadDir = path.join(process.cwd(), "public", folder);
  await mkdir(uploadDir, { recursive: true });

  const filePath = path.join(uploadDir, fileName);
  await writeFile(filePath, buffer);

  return `/${folder}/${fileName}`;
}
