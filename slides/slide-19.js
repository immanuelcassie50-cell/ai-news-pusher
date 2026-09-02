// slide-19.js - 模块二过渡页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 19,
  title: '现代演变——从冷战到新世纪'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Large accent shape on left
  slide.addShape("rect", {
    x: 0, y: 0, w: 3.5, h: 5.625,
    fill: { color: theme.primary }
  });

  // Module number
  slide.addText("MODULE 02", {
    x: 0.3, y: 0.8, w: 2.9, h: 0.5,
    fontSize: 14, fontFace: "Arial",
    color: theme.light, bold: true,
    align: "left", valign: "middle",
    charSpacing: 3
  });

  // Module indicator
  slide.addShape("rect", {
    x: 0.3, y: 1.35, w: 0.8, h: 0.06,
    fill: { color: theme.accent }
  });

  // Chinese title
  slide.addText("现代演变", {
    x: 0.3, y: 1.6, w: 2.9, h: 0.9,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("从冷战到新世纪", {
    x: 0.3, y: 2.4, w: 2.9, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "left", valign: "middle"
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.3, y: 3.1, w: 2.0, h: 0.04,
    fill: { color: theme.secondary }
  });

  // Subtitle topics on left
  slide.addText([
    { text: "核威慑与海权", options: { breakLine: true } },
    { text: "航母战斗群", options: { breakLine: true } },
    { text: "海上通道安全", options: { breakLine: true } },
    { text: "新世纪挑战" }
  ], {
    x: 0.3, y: 3.35, w: 2.9, h: 1.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Right side - chapter preview
  slide.addText("即将探索", {
    x: 4.0, y: 1.5, w: 5.5, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addShape("rect", {
    x: 4.0, y: 2.0, w: 1.0, h: 0.05,
    fill: { color: theme.accent }
  });

  const chapters = [
    { num: "01", title: "美国海权战略的传承与发展" },
    { num: "02", title: "苏联/俄罗斯的陆权复兴尝试" },
    { num: "03", title: "核平衡与两极格局的稳定" },
    { num: "04", title: "全球化时代的海上通道博弈" },
    { num: "05", title: "新世纪：新兴力量与规则重塑" }
  ];

  chapters.forEach((ch, i) => {
    const y = 2.25 + i * 0.6;

    slide.addShape("ellipse", {
      x: 4.0, y: y + 0.08, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });

    slide.addText(ch.num, {
      x: 4.0, y: y + 0.08, w: 0.35, h: 0.35,
      fontSize: 10, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(ch.title, {
      x: 4.5, y: y, w: 5, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("19", {
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
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-19-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
