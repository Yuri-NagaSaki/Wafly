# Cloudflare WAF 自定义页面

基于 Astro 构建的动态化 Cloudflare WAF 错误页面系统。完全组件化、配置驱动，保持原有页面样式的同时实现了灵活的动态配置。

![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?style=flat&logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat&logo=typescript)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=flat&logo=cloudflare)

## 功能特性

- **完全组件化** - 使用 Astro 组件架构，易于维护和扩展
- **配置驱动** - 所有文本和设置集中在配置文件中管理
- **保持原样式** - 100% 保留原项目的视觉效果和响应式设计
- **TypeScript** - 严格类型检查，更安全的开发体验
- **Cloudflare 优化** - 专为 Cloudflare Pages 优化部署
- **零依赖运行时** - 纯静态输出，超快加载速度

## 包含的错误页面

| 页面 | 路径 | 用途 |
|------|------|------|
| WAF 拦截 | `/waf-block` | WAF 规则触发时显示 |
| IP 封禁 | `/ip-block` | IP 地址被封禁时显示 |
| 攻击模式 | `/under-attack` | 站点处于"攻击模式"时显示 |
| 验证码 | `/captcha` | 需要人机验证时显示 |
| 客户端错误 | `/100x` | 4xx 等客户端错误 |
| 服务器错误 | `/5xx` | 5xx 服务器错误 |

## 快速开始

### 前置要求

- Node.js 18+
- npm 或 pnpm

### 安装

```bash
# 克隆项目
git clone <your-repo-url> cloudflare-waf-pages
cd cloudflare-waf-pages

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 `http://localhost:4321` 查看所有错误页面。

### 构建

```bash
# 构建生产版本
npm run build

# 本地预览构建结果
npm run preview
```

## ⚙️ 配置说明

所有配置都在 `src/config/site.config.ts` 文件中：

```typescript
export const siteConfig: SiteConfig = {
  // 基础信息
  title: 'Cloudflare 安全防护',
  description: '本站正在使用安全服务来保护自己免受在线攻击',
  contactEmail: 'admin@example.com',
  adminContact: '请自行联系网站管理员',

  // 背景图片
  images: {
    background1: '/1.jpg',  // 左侧背景
    background2: '/2.jpg',  // 右侧背景
  },

  // 错误页面配置
  errorPages: {
    'waf-block': {
      title: '访问已被拦截',
      heading: '很抱歉，您的访问已被拦截',
      subHeading: '本站正在使用安全服务来保护自己免受在线攻击',
      description: '您执行的操作触发了安全防御机制...',
      showContactInfo: true,
    },
    // ... 更多页面配置
  },
};
```

### 自定义步骤

1. **修改基础信息**：编辑 `siteConfig` 中的 `title`、`contactEmail` 等字段
2. **更换背景图片**：替换 `public/` 目录下的 `1.jpg` 和 `2.jpg`，或修改配置文件中的路径
3. **调整错误信息**：修改 `errorPages` 中对应页面的文本内容
4. **自定义样式**：编辑 `src/styles/error-page.css` 文件

## 部署到 Cloudflare Pages

### 方法一：通过 Cloudflare Dashboard（推荐）

1. 将代码推送到 GitHub/GitLab
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
3. 进入 **Workers & Pages** > **Create Application** > **Pages** > **Connect to Git**
4. 选择你的仓库
5. 配置构建设置：
   - **构建命令**: `npm run build`
   - **构建输出目录**: `dist`
   - **Node 版本**: 18 或更高
6. 点击 **Save and Deploy**

### 方法二：使用 Wrangler CLI

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署
npm run build
wrangler pages deploy dist
```

### 配置 Cloudflare 使用自定义页面

部署完成后，在 Cloudflare Dashboard 中配置：

1. 进入你的域名设置
2. 导航到 **Custom Pages**
3. 为不同的错误类型设置对应的页面 URL：
   - WAF Block: `https://your-pages-url.pages.dev/waf-block`
   - IP Block: `https://your-pages-url.pages.dev/ip-block`
   - Under Attack: `https://your-pages-url.pages.dev/under-attack`
   - 等等...

## 项目结构

```
cloudflare-waf-pages/
├── public/                  # 静态资源
│   ├── 1.jpg               # 左侧背景图
│   ├── 2.jpg               # 右侧背景图
│   └── favicon.svg
├── src/
│   ├── components/         # Astro 组件
│   │   └── ErrorPage.astro # 错误页面组件
│   ├── config/             # 配置文件
│   │   └── site.config.ts  # 站点配置（重要！）
│   ├── layouts/            # 页面布局
│   │   └── BaseLayout.astro
│   ├── pages/              # 页面路由
│   │   ├── index.astro     # 首页（页面预览）
│   │   ├── waf-block.astro
│   │   ├── ip-block.astro
│   │   ├── under-attack.astro
│   │   ├── captcha.astro
│   │   ├── 100x.astro
│   │   └── 5xx.astro
│   └── styles/             # 样式文件
│       └── error-page.css  # 错误页面样式
├── astro.config.mjs        # Astro 配置
├── wrangler.toml           # Cloudflare 配置
├── package.json
└── tsconfig.json
```

## 样式自定义

如需修改样式，编辑 `src/styles/error-page.css`：

```css
/* 修改主标题颜色 */
.text-black {
  color: #your-color;
}

/* 修改背景色 */
.bg-white {
  background-color: #your-bg-color;
}

/* 响应式断点在文件底部 */
@media (max-width: 767px) {
  /* 移动端样式 */
}
```

## 高级配置

### 添加新的错误页面

1. 在 `src/config/site.config.ts` 中添加配置：
```typescript
errorPages: {
  'my-custom-error': {
    title: '自定义错误',
    heading: '自定义错误标题',
    subHeading: '副标题',
    description: '详细描述',
    showContactInfo: true,
  },
}
```

2. 创建页面文件 `src/pages/my-custom-error.astro`：
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import ErrorPage from '../components/ErrorPage.astro';
import { siteConfig } from '../config/site.config';

const pageConfig = siteConfig.errorPages['my-custom-error'];
---

<BaseLayout title={pageConfig.title}>
  <ErrorPage config={pageConfig} />
</BaseLayout>
```

### 使用不同的背景图片

为特定页面使用不同背景：

```astro
<ErrorPage
  config={pageConfig}
  backgroundImage1="/custom-bg-1.jpg"
  backgroundImage2="/custom-bg-2.jpg"
/>
```

## Cloudflare 占位符

以下占位符会被 Cloudflare 自动替换：

- `::RAY_ID::` - Cloudflare Ray ID
- `::CLIENT_IP::` - 访问者 IP 地址
- `::IM_UNDER_ATTACK_BOX::` - 攻击模式验证框

这些占位符已在代码中预设，无需手动配置。

## 开发命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览构建结果 |
| `npm run astro check` | 类型检查 |

## 故障排除

### 页面显示空白

- 检查 `public/` 目录下是否有背景图片
- 确认配置文件中的图片路径正确

### 构建失败

- 确保 Node.js 版本 >= 18
- 删除 `node_modules` 和 `package-lock.json`，重新安装依赖

### Cloudflare Pages 部署失败

- 检查构建命令和输出目录配置
- 查看 Cloudflare Pages 部署日志获取详细错误信息

## 许可证

Apache  License

## 致谢

基于 [Cloudflare-Custom-Pages](https://github.com/BlueSkyXN/Cloudflare-Custom-Pages) 项目改造。

---

**Made with ❤️ using [Astro](https://astro.build)**
