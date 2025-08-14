import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteTagger from "vite-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), viteTagger({ prefixName: "wb" })],
    server: {
      host: "::",
      port: 8080,
      allowedHosts: [
        "localhost",
        ".fly.dev", // 所有 fly.dev 子域名
        ".vercel.app", // 如果也用 Vercel
        ".netlify.app", // 如果也用 Netlify
      ],
    },
    base: "./",
  };
});
