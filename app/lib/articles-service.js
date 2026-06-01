import connectDB from "./db";
import Article from "../models/Article";

export async function getArticles(query = {}) {
  await connectDB();

  return Article.find(query)
    .populate("author", "username role")
    .sort({ createdAt: -1 });
}
