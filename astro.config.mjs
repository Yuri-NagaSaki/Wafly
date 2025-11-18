// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Cloudflare Pages 静态部署配置
export default defineConfig({
  output: 'static',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    format: 'file',
  },
});
