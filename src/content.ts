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
    { label: "服务", href: "#services" },
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

  /// ============================================================
  /// 首屏以下的板块，内容全是占位，等你给素材我替换
  /// ============================================================

  about: {
    label: "About",
    title: "关于我",
    paragraphs: [
      "我在一家 FDE（Forward Deployed Engineer）公司做交付：日常就是在客户现场，把一句模糊的业务诉求拆成能落地的方案，然后亲手把它做出来。",
      "TODO：这里补一段你的背景——做过哪些行业、擅长什么、为什么选这条路。真实的细节比形容词有用得多。",
    ],
    facts: [
      { label: "现在在做", value: "FDE 公司 · 客户现场交付" },
      { label: "关注方向", value: "LLM 应用 / 流程自动化 / 数据系统" }, // TODO: 换成你的方向
      { label: "工作方式", value: "从调研、方案到上线，一头扎到底" },
    ],
  },

  work: {
    label: "Work",
    title: "项目",
    intro: "先放三个占位，等你的真实素材。",
    projects: [
      {
        title: "客户侧 AI 助手", // TODO: 替换成真实项目名
        description:
          "把内部知识库和工单系统接起来，让一线同事用自然语言就能查到准确答案。",
        tags: ["LLM", "RAG", "Python"],
        meta: "案例整理中",
      },
      {
        title: "运营流程自动化",
        description:
          "把每周靠人工重复的报表和对账流程做成定时任务，出错率和耗时都降下来了。",
        tags: ["自动化", "数据管道"],
        meta: "案例整理中",
      },
      {
        title: "内部数据看板",
        description:
          "从零搭起一套业务指标口径和看板，让团队不用再各自维护一份 Excel。",
        tags: ["数据建模", "可视化"],
        meta: "案例整理中",
      },
    ],
  },

  services: {
    label: "Services",
    title: "我能帮你做什么",
    intro: "如果你手上有类似的场景，可以直接找我聊。",
    items: [
      {
        title: "AI 场景落地",
        description: "从业务问题出发，判断哪些环节真的适合用模型做，把方案跑到上线。",
      },
      {
        title: "流程与数据自动化",
        description: "把重复的人工流程拆解、重写，接成稳定可维护的自动化管道。",
      },
      {
        title: "原型到生产",
        description: "快速做出可演示的原型，再补齐工程化、监控和交接文档。",
      },
      {
        title: "团队协作与赋能",
        description: "和客户团队一起干活，把方法和工具留在他们手里。",
      },
    ],
  },

  contact: {
    label: "Contact",
    title: "聊聊你的场景",
    intro:
      "留个邮箱，或者直接写信给我。说明白你的业务场景和现在的卡点，我一般会在一个工作日内回复。",
    email: "hello@example.com", // TODO: 换成你的真实邮箱
    note: "TODO：社交链接（GitHub / 即刻 / LinkedIn / 微信公众号）待补充",
  },
};

export type Content = typeof content;
