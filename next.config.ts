import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    
    remotePatterns: [
      new URL('https://psjoersjmxrgsioticxz.supabase.co/storage/v1/object/public/images/**'),
      new URL('https://placehold.co/')
    ],
    
  }
};

export default nextConfig;
