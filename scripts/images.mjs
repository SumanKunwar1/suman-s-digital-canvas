// Converts raw screenshots into the AVIF + WebP files the site serves.
// Put PNGs in screenshots/ (e.g. screenshots/erp-attendance.png), run `npm run images`,
// then add each one to the product's `shots` list in content/work.ts with the printed size.
// Phone screenshots: start the file name with "phone-" so they get a narrower size.
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "screenshots";
const OUT = "public/shots";
await mkdir(OUT, { recursive: true });

for (const file of (await readdir(SRC)).filter((f) => /\.(png|jpe?g)$/i.test(f))) {
  const name = path.parse(file).name;
  const maxWidth = name.startsWith("phone-") ? 720 : 2000;
  const img = sharp(path.join(SRC, file)).resize({ width: maxWidth, withoutEnlargement: true });
  const { width, height } = await img.clone().webp({ quality: 82 }).toFile(path.join(OUT, `${name}.webp`));
  await img.clone().avif({ quality: 55 }).toFile(path.join(OUT, `${name}.avif`));
  console.log(`{ src: "/shots/${name}", width: ${width}, height: ${height}, alt: "" },`);
}
