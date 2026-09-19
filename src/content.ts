/// 全站文案都在 src/content.json 里，可以直接改 JSON，
/// 也可以登录 Pages CMS 后台用表单界面改（配置见仓库根目录的 .pages.yml）。
/// 这个文件只负责把 JSON 数据喂给组件，不存放任何文案。
import data from "./content.json";

export type NavLink = {
  label: string;
  href: string;
};

export const content = data;

export type Content = typeof content;
