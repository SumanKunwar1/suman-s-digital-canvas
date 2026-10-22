// Review screenshots of the built site at the widths the brief asks for.
// Usage: npm run build && npm run shots  → review/<page>-<width>.png
import { mkdir } from "node:fs/promises";
import { chromium } from "@playwright/test";
import { serve } from "./serve.mjs";

const PORT = 4323;
const widths = (process.env.WIDTHS ?? "1440,375").split(",").map(Number);
const pages = (process.env.PAGES ?? "/,/work/fullbag-erp/,/work/fullbag-accounting/,/work/fullbag-transport/,/cv/,/nope/").split(",");

await mkdir("review", { recursive: true });
const server = await serve("out", PORT);
const browser = await chromium.launch();
try {
  for (const width of widths) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: "reduce" });
    const page = await ctx.newPage();
    for (const p of pages) {
      await page.goto(`http://localhost:${PORT}${p}`, { waitUntil: "networkidle" });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      const name = p === "/" ? "home" : p.replace(/\//g, "-").replace(/^-|-$/g, "");
      await page.screenshot({ path: `review/${name}-${width}.png`, fullPage: true });
      console.log(`${name} @${width}: ${overflow > 0 ? `HORIZONTAL OVERFLOW ${overflow}px` : "ok"}`);
    }
    await ctx.close();
  }
} finally {
  await browser.close();
  server.close();
}
