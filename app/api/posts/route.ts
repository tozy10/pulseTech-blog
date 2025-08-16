import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 
import { randomUUID } from "crypto";
import { auth } from "@/auth";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  const session = await auth();

  try {
    // Parse the incoming form data
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

      // upload to "images" bucket (make sure it exists in Supabase Storage)
      const { error } = await supabase.storage
        .from("images")
        .upload(filename, file, { contentType: file.type });

      if (error) throw error;

      // get public URL
      const {
