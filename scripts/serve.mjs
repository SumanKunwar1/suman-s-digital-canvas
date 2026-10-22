// Tiny static server for out/, used by the PDF and screenshot scripts.
// Mirrors nginx: /path/ → /path/index.html, unknown paths → 404.html.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".ico": "image/x-icon",
};

export function serve(root, port = 4321) {
  const server = createServer(async (req, res) => {
    let file = path.join(root, decodeURIComponent(new URL(req.url, "http://x").pathname));
    try {
      if ((await stat(file)).isDirectory()) file = path.join(file, "index.html");
      const body = await readFile(file);
      res.writeHead(200, { "content-type": types[path.extname(file)] ?? "application/octet-stream" });
      res.end(body);
    } catch {
      res.writeHead(404, { "content-type": types[".html"] });
      res.end(await readFile(path.join(root, "404.html")).catch(() => "Not found"));
    }
  });
  return new Promise((resolve) => server.listen(port, () => resolve(server)));
}
