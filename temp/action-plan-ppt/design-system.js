// design-system.js
// 红灰配色、浅底设计系统

const theme = {
  // 基础色板
  primary: "8B1A1A",      // 深砖红（主标题/重点/章节色）
  secondary: "2B2B2B",    // 深炭灰（正文文字/标题）
  accent: "B85450",       // 暖红（强调/装饰线条）
  light: "D4A5A5",        // 浅粉灰（次要装饰/分隔）
  bg: "FAF7F2",           // 暖白（背景）

  // 扩展色（基于主色派生）
  ink: "1A1A1A",          // 极致黑（关键文字）
  inkSoft: "4A4A4A",      // 软黑（次要文字）
  inkMute: "8C8C8C",      // 静默灰（说明文字）
  paper: "FFFFFF",        // 纯白（卡片底）
  paperWarm: "F5F0E8",    // 暖米色（卡片底变体）
  paperLine: "E8DDD0",    // 浅米线（分割线）
  redDeep: "6B0F0F",      // 极深红（重点强调）
  redBright: "C84141",    // 鲜红（数据/数字）
  redLight: "E8C4C0",     // 极浅红（背景装饰）
  goldAccent: "B8860B",   // 金色（稀缺点缀）
};

const fonts = {
  cn: "Microsoft YaHei",
  en: "Arial",
};

// 字号体系（基于10x5.625英寸画布）
const fontSize = {
  hero: 54,       // 封面/大标题
  mega: 44,       // 章节扉页
  h1: 32,         // 内容页主标题
  h2: 22,         // 二级标题
  h3: 18,         // 小标题
  body: 14,       // 正文
  bodySm: 12,     // 小正文
  caption: 10,    // 注释
  number: 64,     // 大数字
  numberMega: 96, // 极大数字
};

const spacing = {
  edge: 0.5,      // 页面边距
  gutter: 0.3,    // 元素间距
  block: 0.6,     // 块间距
};

// 通用装饰元素
function addHeaderBar(slide, theme, title) {
  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  // 顶部文字
  slide.addText(title, {
    x: 0.5, y: 0.18, w: 7, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "left"
  });
}

function addFooterMark(slide, theme) {
  // 左下小标识（替代页码徽章）
  slide.addShape("rect", {
    x: 0.5, y: 5.35, w: 0.25, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("行动计划·执行设计", {
    x: 0.5, y: 5.42, w: 3, h: 0.2,
    fontSize: 8, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "left"
  });
}

module.exports = { theme, fonts, fontSize, spacing, addHeaderBar, addFooterMark };
