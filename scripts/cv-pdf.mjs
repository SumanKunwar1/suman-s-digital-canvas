// Optional: prints the built /cv page to out/cv-from-page.pdf. The download button serves
// public/Suman-Kunwar-CV.pdf, which is Suman's own CV file.
import { chromium } from "@playwright/test";
import { serve } from "./serve.mjs";

const PORT = 4322;
const server = await serve("out", PORT);
const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/cv/`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.pdf({ path: "out/cv-from-page.pdf", format: "A4", preferCSSPageSize: true, printBackground: true });
  const pages = await page.evaluate(() => Math.ceil(document.documentElement.scrollHeight / 1122));
  console.log(`CV PDF written (about ${pages} page${pages === 1 ? "" : "s"} tall in print).`);
} finally {
  await browser.close();
  server.close();
}
