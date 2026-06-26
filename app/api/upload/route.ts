import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Upload a file (resume or image)
 *     description: Uploads a resume file (PDF, DOC, DOCX) or image (PNG, JPG, JPEG, WEBP) and returns the public URL.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               resume:
 *                 type: string
 *                 format: binary
 *                 description: The resume file to upload (Max 5MB)
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The image file to upload (Max 5MB)
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 url:
 *                   type: string
 *                   description: The public URL of the uploaded file
 *       400:
 *         description: Bad request (No file, invalid file type, or file too large)
 *       500:
 *         description: Internal server error
 */
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const resumeFile = formData.get("resume") as File | null;
    const imageFile = formData.get("image") as File | null;
    const file = resumeFile || imageFile;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const fileType = file.type;

    // Validate file type based on field name
    if (resumeFile) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(fileType)) {
        return NextResponse.json(
          { error: "Only PDF, DOC, or DOCX files are allowed" },
          { status: 400 }
        );
      }
    } else if (imageFile) {
      const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"];
      if (!allowedTypes.includes(fileType)) {
        return NextResponse.json(
          { error: "Only PNG, JPG, JPEG, WEBP, or GIF images are allowed" },
          { status: 400 }
        );
      }
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size must be less than 5MB" },
        { status: 400 }
      );
    }

    // Save file to public/uploads folder
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadDir = path.join(process.cwd(), "public/uploads");
    await mkdir(uploadDir, { recursive: true });

    // Generate unique filename to avoid overwrites
    const filename = `${Date.now()}-${file.name.replace(/\s/g, "_")}`;
    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    // Return the public URL
    return NextResponse.json({
      success: true,
      url: `/uploads/${filename}`,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}