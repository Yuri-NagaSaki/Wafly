# 使用指南

## 快速配置指南

### 1. 修改站点基本信息

编辑 `src/config/site.config.ts`：

```typescript
export const siteConfig: SiteConfig = {
  title: '你的站点名称',
  description: '你的站点描述',
  contactEmail: 'your-email@example.com',
  adminContact: '联系管理员的提示文本',
  // ...
};
```

### 2. 自定义错误页面文本

在同一文件中修改 `errorPages` 配置：

```typescript
errorPages: {
  'waf-block': {
    title: '自定义标题',              // 浏览器标签页标题
    heading: '自定义大标题',          // 页面主标题
    subHeading: '自定义副标题',       // 副标题
    description: '详细描述信息',      // 详细说明文本
    showContactInfo: true,           // 是否显示联系信息
  },
}
```

### 3. 更换背景图片

**方法一：替换默认图片**
```bash
# 将你的图片放到 public 目录，覆盖原有文件
cp your-bg-1.jpg public/1.jpg
cp your-bg-2.jpg public/2.jpg
```

**方法二：修改配置文件**
```typescript
images: {
  background1: '/my-custom-bg-1.jpg',
  background2: '/my-custom-bg-2.jpg',
}
```

## 样式定制

### 修改颜色主题

编辑 `src/styles/error-page.css`：

```css
/* 主标题颜色 */
.text-black {
  color: #your-color;
}

/* 副标题颜色 */
.text-grey-darker {
  color: #your-color;
}

/* 分割线颜色 */
.bg-grey-light {
  background-color: #your-color;
}

/* 页脚文字颜色 */
.sub-footer ul li {
  color: #your-color;
}
```

### 修改字体

在 `src/layouts/BaseLayout.astro` 中修改 Google Fonts 链接：

```html
<link
  href="https://fonts.googleapis.com/css?family=YourFont:400,500,600,900"
  rel="stylesheet"
/>
```

然后在 CSS 中更新字体族：

```css
.font-sans {
  font-family: 'YourFont', sans-serif;
}
```

## 部署流程

### 准备工作

1. **确保图片已准备好**
   ```bash
   ls -la public/
   # 应该看到 1.jpg 和 2.jpg
   ```

2. **测试构建**
   ```bash
   npm run build
   npm run preview
   ```
   访问 http://localhost:4321 确认页面正常

### 部署到 Cloudflare Pages

#### 选项 1: Git 集成（推荐）

1. 初始化 Git（如果还没有）
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. 推送到 GitHub/GitLab
   ```bash
   git remote add origin your-repo-url
   git push -u origin main
   ```

3. 在 Cloudflare Dashboard 创建 Pages 项目
   - 访问 https://dash.cloudflare.com
   - Workers & Pages → Create → Pages → Connect to Git
   - 选择你的仓库
   - 构建设置：
     - **Framework preset**: Astro
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`

#### 选项 2: 直接部署

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录
wrangler login

# 构建
npm run build

# 部署
wrangler pages deploy dist --project-name=your-project-name
```

### 在 Cloudflare 配置自定义错误页面

部署完成后：

1. 进入你的域名设置
2. **Security** → **Settings** → **Custom Pages**
3. 配置各个错误页面：

| 错误类型 | URL 设置 |
|---------|---------|
| WAF Block | `https://your-pages.pages.dev/waf-block.html` |
| IP/Country Block | `https://your-pages.pages.dev/ip-block.html` |
| 5XX Errors | `https://your-pages.pages.dev/5xx.html` |
| Under Attack Mode | `https://your-pages.pages.dev/under-attack.html` |

**注意**：Astro 默认生成 `.html` 文件，确保 URL 包含 `.html` 后缀！

## 常见定制需求

### 1. 添加多语言支持

创建多个配置对象：

```typescript
// src/config/site.config.ts
export const zhConfig = { /* 中文配置 */ };
export const enConfig = { /* 英文配置 */ };

// src/pages/waf-block-en.astro
import { enConfig } from '../config/site.config';
const pageConfig = enConfig.errorPages['waf-block'];
```

### 2. 为不同页面使用不同背景

```astro
<!-- src/pages/waf-block.astro -->
<ErrorPage
  config={pageConfig}
  backgroundImage1="/waf-bg-1.jpg"
  backgroundImage2="/waf-bg-2.jpg"
/>
```

### 3. 添加自定义 HTML 内容

在配置中使用 HTML：

```typescript
description: `
  <strong>重要提示</strong><br>
  <ul>
    <li>第一点说明</li>
    <li>第二点说明</li>
  </ul>
`,
```

### 4. 隐藏 Cloudflare 信息

编辑 `src/components/ErrorPage.astro`，注释掉页脚部分：

```astro
<!--
<div class="sub-footer">
  <div class="w-full h-2 bg-grey-light my-3 md:my-6"></div>
  <ul>
    <li>Cloudflare事件ID: ::RAY_ID::</li>
    <li>你的IP: ::CLIENT_IP::</li>
    <li>Performance & Security by Cloudflare</li>
  </ul>
</div>
-->
```

## 测试检查清单

部署前确保：

- [ ] 所有配置文本已更新
- [ ] 背景图片已替换或配置正确
- [ ] 本地运行 `npm run dev` 正常
- [ ] 构建成功 `npm run build`
- [ ] 预览正常 `npm run preview`
- [ ] 所有错误页面都能访问（/waf-block, /ip-block 等）
- [ ] 响应式设计在移动端正常

## 获取帮助

如果遇到问题：

1. 检查浏览器控制台是否有错误
2. 查看构建日志
3. 确认 Node.js 版本 >= 18
4. 尝试清除缓存重新构建：
   ```bash
   rm -rf node_modules dist .astro
   npm install
   npm run build
   ```

## 相关资源

- [Astro 文档](https://docs.astro.build)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Cloudflare Custom Pages 设置](https://developers.cloudflare.com/support/more-dashboard-apps/cloudflare-custom-pages/)
