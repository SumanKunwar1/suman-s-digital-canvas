// Renders the 1200×630 Open Graph image from the built home page, so it uses the site's
// own font, colours and the hero's product demo window.
import { copyFile } from "node:fs/promises";
import { chromium } from "@playwright/test";
import { serve } from "./serve.mjs";

const PORT = 4326;
const server = await serve("out", PORT);
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, reducedMotion: "reduce" });
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle" });
  await page.evaluate(() => {
    const bench = document.querySelector(".bench").outerHTML;
    document.body.innerHTML = `
      <div class="hero" style="height:630px;border-radius:0;padding:0;overflow:hidden">
        <div style="display:grid;grid-template-columns:1fr 500px;gap:56px;padding:72px 64px;align-items:center">
          <div>
            <p class="hero-name" style="font-size:26px">Suman Kunwar</p>
            <p class="hero-statement" style="font-size:58px;font-weight:800;margin-top:14px">I build software that schools and businesses in Nepal use every day.</p>
            <p class="hero-meta" style="font-size:20px;margin-top:28px">Full stack developer in Rome, Italy</p>
          </div>
          <div style="transform:scale(.92);transform-origin:center">${bench}</div>
        </div>
      </div>`;
  });
  await page.screenshot({ path: "out/og.png" });
  await copyFile("out/og.png", "public/og.png");
  console.log("Open Graph image written.");
} finally {
  await browser.close();
  server.close();
}
