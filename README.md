# 个人网站

单屏 Hero 首页：全屏背景视频 + 顶部玻璃拟态导航 + 底部锚定的标题、邮箱 CTA 和两张玻璃卡片。

## 本地运行

```bash
npm install
npm run dev      # 本地预览 http://localhost:5173
npm run build    # 产出静态文件到 dist/
```

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
    Nav.tsx               桌面导航 + 汉堡按钮
    MobileMenu.tsx        移动端遮罩 + 抽屉
    EmailSignup.tsx       邮箱 CTA
    StatsCard.tsx         数据卡片
    TestimonialCard.tsx   客户评价卡片
    Logo.tsx              品牌图标
```

## 待补充

- [ ] 真实姓名 / 品牌名（`content.brand`）
- [ ] 主标题与一句话介绍（`content.headline`）
- [ ] 邮箱 CTA 接上真实表单服务（`src/components/EmailSignup.tsx` 里的 TODO）
- [ ] 数据卡片换成真实数字（`content.stats`）
- [ ] 客户评价换成真实内容（`content.testimonial`）
- [ ] 后续页面：关于我、项目列表、博客等
