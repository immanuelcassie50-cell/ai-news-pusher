// slide-11.js - Content: 价值观冲突
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 11,
  title: 'demo12: 价值观冲突定位'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("价值观冲突定位", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Case description
  slide.addShape("rect", {
    x: 0.5, y: 0.95, w: 9, h: 0.65,
    fill: { color: theme.primary }
  });
  slide.addText("案例：营销总监主张大量招聘抢占市场 vs 财务总监主张控制成本稳健发展", {
    x: 0.6, y: 1.05, w: 8.8, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Left vs Right comparison
  // Left: Zhang
  slide.addShape("rect", {
    x: 0.5, y: 1.8, w: 4.3, h: 2.0,
    fill: { color: theme.accent }
  });
  slide.addText("张强（营销）", {
    x: 0.6, y: 1.9, w: 4, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("立场：增长优先，市场份额是核心竞争力\n\n价值观：进攻型\n相信'不进则退'，要抓住窗口期", {
    x: 0.6, y: 2.3, w: 4, h: 1.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Right: Li
  slide.addShape("rect", {
    x: 5.0, y: 1.8, w: 4.5, h: 2.0,
    fill: { color: theme.secondary }
  });
  slide.addText("李谨（财务）", {
    x: 5.1, y: 1.9, w: 4.2, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("立场：稳健优先，现金流是企业生命线\n\n价值观：防守型\n相信'活下来比什么都重要'", {
    x: 5.1, y: 2.3, w: 4.2, h: 1.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Solution
  slide.addShape("rect", {
    x: 0.5, y: 4.0, w: 9, h: 1.3,
    fill: { color: "FFFFFF" },
    line: { color: theme.primary, width: 2 }
  });

  slide.addText("解决方案", {
    x: 0.6, y: 4.1, w: 2, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("1. 找到共同上层目标：企业可持续增长\n2. 妥协方案：招聘与业绩挂钩 + 设立观察期\n3. 机制保障：月度经营分析会，用数据说话", {
    x: 0.6, y: 4.5, w: 8.8, h: 0.7,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Page number
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("11", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "edf2f4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-11-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
