import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

const getSwaggerUI = () => {
  const swaggerDistPath = path.join(
    process.cwd(),
    "node_modules",
    "swagger-ui-dist"
  );
  let html = readFileSync(path.join(swaggerDistPath, "index.html"), "utf-8");

  // 1. Swagger JSON endpoint set karo
  html = html.replace(
    "https://petstore.swagger.io/v2/swagger.json",
    "/api/docs/json"
  );

  // 2. Assets ke paths ko `/api/docs/` se prefix karo
  html = html.replace(
    /(href|src)="\.\/swagger-ui/g,
    `$1="/api/docs/swagger-ui`
  );
  html = html.replace(
    /(href|src)="\.\/swagger-initializer\.js/g,
    `$1="/api/docs/swagger-initializer.js`
  );
  
  // ✅ FIX: index.css ko bhi replace karo taaki 404 na aaye
  html = html.replace(
    /(href|src)="(\.\/)?index\.css"/g,
    `$1="/api/docs/index.css"`
  );

  // ✅ Favicon replace karo
  html = html.replace(
    /href="\.\/favicon-/g,
    `href="/api/docs/favicon-`
  );

  return html;
};

export async function GET() {
  const html = getSwaggerUI();
  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}