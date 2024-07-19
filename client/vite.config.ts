import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const envDir = `${process.cwd}/env`;

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, envDir) };

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: process.env.VITE_BASE,
  });
};
