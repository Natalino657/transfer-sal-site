import fs from "node:fs/promises";
import path from "node:path";

const IMAGE_EXT = /\.(png|jpe?g|webp|avif)$/i;


export async function listFeedbackImageUrls(): Promise<string[]> {
  const dir = path.join(process.cwd(), "public", "feedback");
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const names = entries
      .filter((e) => e.isFile() && IMAGE_EXT.test(e.name))
      .map((e) => e.name)
      .sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
      );
    return names.map((name) => `/feedback/${encodeURIComponent(name)}`);
  } catch {
    return [];
  }
}
