# 个人网站

个人网站：全屏背景视频的 Hero 首屏 + 顶部玻璃拟态导航（React Bits 扫光按钮）+ 关于我 / 在做的事 / 服务 / 联系四个板块。联系靠微信二维码和邮箱，不放表单。

## 本地运行

最简单的方式：双击项目里的 `启动网站.cmd`，会自动开服务器并打开浏览器。

手动方式：

```bash
npm install
npm run dev      # 本地预览 http://localhost:5173
npm run build    # 产出静态文件到 dist/
```

注意：不要直接双击 `index.html` 打开，Vite 工程必须通过本地服务器访问，直接双击会是空白页。

## 改内容

所有文案、链接、数据、客户评价都集中在 [src/content.ts](src/content.ts)，改字不用动组件。

视觉常量在 [src/theme.ts](src/theme.ts)：主按钮渐变、数字字体、背景视频地址。

## 文件结构

```
src/
  content.ts              全站文案
  theme.ts                渐变 / 字体 / 视频地址
  App.tsx                 页面入口
  components/
    Hero.tsx              首屏骨架（视频 + 布局）
    Backdrop.tsx          全站固定的背景视频层（下滚渐暗）
    Nav.tsx               桌面导航 + 汉堡按钮
    MobileMenu.tsx        移动端遮罩 + 抽屉
    StatsCard.tsx         数据卡片
    Logo.tsx              品牌图标
    SpecularButton.tsx    React Bits 扫光按钮（WebGL / ogl）
    SpecularButton.css
    sections/             关于我 / 项目 / 服务 / 联系 / 页脚
```

## 说明

- 背景视频全站固定，滚过首屏后会渐入一层深色薄纱（浓度在 `Backdrop.tsx` 的 `0.85` 调整）。
- 背景视频自托管在 `public/hero.mp4`（约 14MB），换素材直接替换该文件，路径写在 `src/theme.ts`。
- 导航里四个锚点用的是 React Bits 的 `SpecularButton`，鼠标靠近时边缘会有一道扫光跟随。
- 字体（Geist Sans / Silkscreen）已改为本地自托管，不再依赖 Google Fonts——国内访问不了 Google Fonts，会让访客看到系统默认字体。
- 联系方式只有两个：微信二维码（`public/wechat-qr.jpg`，点击可复制微信号）和邮箱。**故意不做邮箱表单**——国内访客更愿意扫码加微信，表单反而多一道手续。

## 上线部署

现在跑在 **Cloudflare Pages** 上，仓库是 https://github.com/wonderful-2/personal-website ：

- 线上地址：https://personal-website-c96.pages.dev
- 构建命令 `npm run build`，输出目录 `dist`（Node 版本由 `.nvmrc` 锁定为 20）
- 往 `main` 分支推送即自动重新部署，不用手动操作

注意：国内网络对 `github.com` 是选择性阻断（`api.github.com` 却通常能通），推送失败时重试几次通常就能过。

## 待补充

- [ ] 绑定自己的域名（目前是 Cloudflare 分配的 `pages.dev` 子域名）
- [ ] 「在做的事」板块换成真实的项目（做出第一个之后）
- [ ] 首屏视频换素材（现在是 14MB 的通用素材，可换成自己的）
