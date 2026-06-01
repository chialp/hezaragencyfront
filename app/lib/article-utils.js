import slugify from "slugify";

export function createSlug(text) {
  if (!text) return "";
  return slugify(text, {
    lower: true,
    strict: true,
    trim: true,
    locale: "fa",
  });
}

export function countWordsFromBlocks(blocks = []) {
  let total = 0;

  for (const block of blocks) {
    if (!block) continue;

    if (block.type === "text" || block.type === "quote" || block.type === "code") {
      const values = block.value || {};
      for (const key of ["fa", "en", "ku"]) {
        const text = values[key];
        if (typeof text === "string" && text.trim()) {
          total += text.trim().split(/\s+/).length;
        }
      }
    }

    if (block.type === "faq" && block.data?.items?.length) {
      for (const item of block.data.items) {
        for (const key of ["fa", "en", "ku"]) {
          const q = item?.question?.[key] || "";
          const a = item?.answer?.[key] || "";
          if (q.trim()) total += q.trim().split(/\s+/).length;
          if (a.trim()) total += a.trim().split(/\s+/).length;
        }
      }
    }
  }

  return total;
}
