import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // adjust if your prisma path is different
import path from "path";
import { writeFile } from "fs/promises";
import { randomUUID } from "crypto";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { json } from "stream/consumers";

export async function POST(request: Request) {
const session = await auth()
console.log(FormData)
  try {
    // Parse the incoming form data
    const formData = await request.formData();
    const category = formData.get("category") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string  ;
    
 
    const published = formData.get("published") === "on";
    const description = formData.get("description") as string
    console.log(content, title, category, published, description, session?.user?.id, )
    // Handle file upload
    const file = formData.get("image") as File | null;
    let imageUrl: string | null = null;

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create unique filename to avoid overwriting
      const fileExt = path.extname(file.name) || ".png";
      const fileName = `${randomUUID()}${fileExt}`;
      const uploadDir = path.join(process.cwd(), "public", "uploads");

      // Save file to /public/uploads
      await writeFile(path.join(uploadDir, fileName), buffer);

      // This will be the URL you can use in <img>
      imageUrl = `/uploads/${fileName}`;
    }

    // Create post in Prisma
    const newPost = await prisma.post.create({
      data: {
        title,
        category,
        content,
        published,
        authorId:session?.user?.id , 
        description,
        imageUrl: imageUrl ?? undefined  ,
      },
    });

   return NextResponse.redirect(new URL('/', request.url));

  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
