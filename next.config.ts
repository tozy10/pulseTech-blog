import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains:['placehold.co', 'www.freepik.com'],
    
    remotePatterns: [
      new URL('https://psjoersjmxrgsioticxz.supabase.co/'),
      new URL('https://placehold.co/')
    ],
    
  }
};

export default nextConfig;
