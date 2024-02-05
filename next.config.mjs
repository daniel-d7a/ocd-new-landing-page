/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyimage.com",
        port: "",
        // pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        // pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "img.fixthephoto.com",
        port: "",
        // pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
