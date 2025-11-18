// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Cloudflare Pages 静态部署配置
export default defineConfig({
  output: 'static',
  build: {
    format: 'file',
  },
});
