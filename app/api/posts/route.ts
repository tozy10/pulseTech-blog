import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 
import path from "path";
import { randomUUID } from "crypto";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import {createClient} from  "@supabase/supabase-js"
import { json } from "stream/consumers";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
export async function POST(request: Request) {
const session = await auth()
  try {
    // Parse the incoming form data
    const formData = await request.formData();
    const category = formData.get("category") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string  ;
    
 
    const published = formData.get("published") === "on";
    const description = formData.get("description") as string
   
    // Handle file upload
    const file = formData.get("image") as File | null;
    let imageUrl: string | null = null;

    if (file && file.size > 0) {
      const fileExt = file.name.split(".").pop() || "png";
      const filename = `${randomUUID()}.${fileExt}`;

      const{data, error} = await supabase.storage
      .from("images")
      .upload(fileName, file{
        contentType: file.type,
      });
      if (error) throw error;

      const{
        data: {publicUrl},
      } = supabase.storage.from("uploads").getPublicUrl(filename);
      imageUrl = publicUrl;
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
