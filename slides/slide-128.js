// slide-128.js - 进阶：猜平均数博弈
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 128,
  title: '进阶：猜平均数博弈'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("进阶：猜平均数博弈", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Keynes quote (straight quotes)
  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 9, h: 0.65,
    fill: { color: theme.light }
  });
  slide.addText("Keynesian beauty contest: everyone guessing what others will guess", {
    x: 0.7, y: 1.1, w: 8.6, h: 0.65,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle"
  });

  // Left panel - Game rules
  slide.addShape("rect", {
    x: 0.5, y: 1.95, w: 4.4, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("游戏规则", {
    x: 0.5, y: 1.95, w: 4.4, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  const rules = [
    "每人写一个 0-100 的数字",
    "最接近平均值 2/3 的获胜",
    "需要猜测别人会猜什么",
    "理性与预期的无限递归"
  ];

  rules.forEach((r, i) => {
    const y = 2.55 + i * 0.48;
    slide.addText((i + 1) + ". " + r, {
      x: 0.7, y: y, w: 4, h: 0.44,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right panel - Financial applications
  slide.addShape("rect", {
    x: 5.1, y: 1.95, w: 4.4, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("金融市场应用", {
    x: 5.1, y: 1.95, w: 4.4, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  const apps = [
    "股价：不是看价值，是看他人预期",
    "房地产：买的是\"还会涨\"的预期",
    "郁金香泡沫：理性的疯狂",
    "所有投机本质都是猜平均数"
  ];

  apps.forEach((a, i) => {
    const y = 2.55 + i * 0.48;
    slide.addText("- " + a, {
      x: 5.3, y: y, w: 4, h: 0.44,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Insight bar
  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 8.5, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("第二层思维：你以为的均值，不是真正的均值", {
    x: 0.5, y: 4.7, w: 8.5, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("128", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 11, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-128-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
