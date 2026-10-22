# sumankunwar.info.np

Suman Kunwar's portfolio. Next.js, exported as static HTML and served by nginx.

## Change something

- Contact details, availability, experience, education, skills: `content/site.ts`
- Case studies: `content/work.ts`
- Interactive demos in the hero: `components/Workbench.tsx`

Rules for design and copy: [DESIGN_RULES.md](DESIGN_RULES.md). Content brief: [BRIEF.md](BRIEF.md). Facts from the codebases: [FACTS.md](FACTS.md).

## Add screenshots (demo data only)

1. Save PNGs in `screenshots/`. Name phone screens `phone-….png`.
2. `npm run images` converts them to AVIF and WebP in `public/shots/` and prints a line for each.
3. Paste those lines into the product's `shots: []` in `content/work.ts` and write the alt text. For FullBagERP, the first shot is also the home page hero and the Open Graph image.

## Build and check

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/, plus the Open Graph image
npm run shots   # review screenshots at 1440 and 375px in review/, flags horizontal overflow
```

## Deploy

Copy the contents of `out/` to the web root on the server. The nginx server block needs:

```nginx
location / {
    try_files $uri $uri/ $uri.html =404;
}
error_page 404 /404.html;
```

## CV

The "Download CV" buttons serve `public/Suman-Kunwar-CV.pdf`. To update the CV, replace that file (keep the name).
