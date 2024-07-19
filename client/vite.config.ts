import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const envDir = "src/environments";

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, `${process.cwd()}/${envDir}`);

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: env.VITE_BASE,
    envDir,
  });
};
