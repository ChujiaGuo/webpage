import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: "export",
    assetPrefix: isProd ? '/webpage/' : '',
    basePath: isProd ? '/webpage' : '',
    /* config options here */
};

export default nextConfig;
