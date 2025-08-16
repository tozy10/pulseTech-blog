import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 
import { randomUUID } from "crypto";
import { auth } from "@/auth";
import { createClient } from "@supabase/supabase-js";

// server-side Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  const session = await auth();

  try {
    // Parse form data
    const formData = await request.formData();
    const category = formData.get("category") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const published = formData.get("published") === "on";
    const description = formData.get("description") as string;

    // Handle file upload
    const file = formData.get("image") as File | null;
    let imageUrl: string | null = null;

    if (file && file.size > 0) {
      const fileExt = file.name.split(".").pop() || "png";
      const filename = `${randomUUID()}.${fileExt}`;

      // Upload file to Supabase Storage bucket "images"
      const { error } = await supabase.storage
        .from("images") // make sure this bucket exists
        .upload(filename, file, { contentType: file.type });

      if (error) throw error;

      // Get public URL
      const { data } = supabase.storage.from("images").getPublicUrl(filename);
      imageUrl = data.publicUrl;
    }

    // Create post in Prisma
    await prisma.post.create({
      data: {
        title,
        category,
        content,
        published,
        authorId: session?.user?.id,
        description,
        imageUrl: imageUrl ?? undefined,
      },
    });

    return NextResponse.redirect(new URL("/", request.url));
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
