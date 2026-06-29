import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const slug = (await params).slug;
  const filePath = path.join(
    process.cwd(),
    "node_modules",
    "swagger-ui-dist",
    ...slug
  );

  try {
    const file = await readFile(filePath);
    const ext = path.extname(filePath);
    let contentType = "application/octet-stream";
    if (ext === ".css") contentType = "text/css";
    else if (ext === ".js") contentType = "application/javascript";
    else if (ext === ".png") contentType = "image/png";
    else if (ext === ".svg") contentType = "image/svg+xml";
    else if (ext === ".ico") contentType = "image/x-icon";
    else if (ext === ".json") contentType = "application/json";

    return new NextResponse(file, {
      headers: { "Content-Type": contentType },
    });
  } catch (error) {
    return new NextResponse("File not found", { status: 404 });
  }
}