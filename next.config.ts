import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    //additionalData: `@import "styles/_mixins.scss";`,
  },
  reactStrictMode:true,
  
};

export default nextConfig;
