/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  rules: {
    "react/no-unescpaed-entities": "off",
  },
};

export default nextConfig;
