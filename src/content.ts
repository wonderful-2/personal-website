/// ============================================================
/// 全站文案都在这里，改字不用碰组件。
/// 带 TODO 的是等你补充的真实内容。
/// ============================================================

export type NavLink = {
  label: string;
  href: string;
  hasChevron?: boolean;
};

export const content = {
  /// 品牌名 / 你的名字（导航左上角）
  brand: "耿通",

  nav: [
    { label: "关于我", href: "#about" },
    { label: "项目", href: "#work" },
    { label: "服务", href: "#services", hasChevron: true },
    { label: "联系", href: "#contact" },
  ] satisfies NavLink[],

  /// 导航右侧按钮 / 移动端底部按钮
  primaryCta: "取得联系",

  /// 主标题
  headline: "把 AI 交付到客户的真实业务里",

  /// 邮箱 CTA
  emailCta: {
    placeholder: "输入你的邮箱",
    button: "取得联系",
    sent: "已收到",
  },

  /// 数据卡片（数字用 Silkscreen 字体，建议 2-6 个字符 + 符号）
  stats: {
    value: "40+",
    body: "在客户一线交付的 AI 项目，从现场调研一路做到上线。", // TODO: 换成你的真实数据
  },

  /// 客户评价卡片
  testimonial: {
    company: "Stratify", // TODO: 换成真实客户/公司名
    companyLogoLetter: "S",
    quote:
      "“和耿通合作之后，我们把原来靠人堆的重复流程，换成了能自己跑起来的系统。”",
    avatar: "https://i.pravatar.cc/72?img=12",
    name: "Sara Klein", // TODO: 换成真实姓名
    role: "Dir of Operations", // TODO: 换成真实职位
  },
};

export type Content = typeof content;

