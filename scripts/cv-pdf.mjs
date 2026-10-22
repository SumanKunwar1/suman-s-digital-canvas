// Prints the built /cv page to PDF, so the download always matches the site.
// Runs after `next build`; writes out/suman-kunwar-cv.pdf and keeps a copy in public/ for `next dev`.
import { copyFile } from "node:fs/promises";
import { chromium } from "@playwright/test";
import { serve } from "./serve.mjs";

const PORT = 4322;
const server = await serve("out", PORT);
const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/cv/`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({ path: "out/suman-kunwar-cv.pdf", format: "A4", preferCSSPageSize: true, printBackground: true });
  await copyFile("out/suman-kunwar-cv.pdf", "public/suman-kunwar-cv.pdf");
  const pages = await page.evaluate(() => Math.ceil(document.documentElement.scrollHeight / 1122));
  console.log(`CV PDF written (about ${pages} page${pages === 1 ? "" : "s"} tall in print).`);
} finally {
  await browser.close();
  server.close();
}
