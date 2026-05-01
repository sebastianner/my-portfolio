import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getContent(type: string) {
  const dir = path.join(process.cwd(), `content/${type}`);
  const files = fs.readdirSync(dir);

  const items = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const source = fs.readFileSync(filePath, "utf-8");

      const { data, content } = matter(source);

      const processed = await remark().use(html).process(content);

      return {
        slug: file.replace(".md", ""),
        ...data,
        content: processed.toString(),
      };
    }),
  );

  return items;
}
