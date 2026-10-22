import type { NextConfig } from "next";

// Static export: `next build` writes plain HTML to out/, which nginx serves as-is.
// trailingSlash gives every route its own folder with an index.html.
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default config;
