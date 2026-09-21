import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  output: process.env.GITHUB_ACTIONS ? "export" : undefined,
  basePath: process.env.GITHUB_ACTIONS ? "/sawlink" : "",
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
  ...(process.env.GITHUB_ACTIONS ? {} : {
    async headers() {
      return [{
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      }];
    },
  }),
};

export default nextConfig;
