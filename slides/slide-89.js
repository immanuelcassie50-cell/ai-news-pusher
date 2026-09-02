// slide-89.js - 案例：战略联盟设计
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 89,
  title: '案例：战略联盟设计'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("案例：战略联盟设计", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("如何设计联盟结构，让各方均能受益", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Two-column layout
  // Left column - Joint committees and governance
  slide.addShape("roundRect", {
    x: 0.5, y: 1.65, w: 4.3, h: 2.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 135, opacity: 0.06 },
    rectRadius: 0.1
  });

  // Left accent bar
  slide.addShape("rect", {
    x: 0.5, y: 1.65, w: 0.08, h: 2.8,
    fill: { color: theme.accent }
  });

  slide.addText("联合委员会与治理机制", {
    x: 0.75, y: 1.8, w: 3.9, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText([
    { text: "设立联合决策机构", options: { bullet: true, breakLine: true } },
    { text: "各派代表参与，共同商讨", options: { breakLine: true, indentLevel: 1 } },
    { text: "建立信息共享平台", options: { bullet: true, breakLine: true } },
    { text: "定期沟通，减少信息不对称", options: { breakLine: true, indentLevel: 1 } },
    { text: "明确权限边界", options: { bullet: true, breakLine: true } },
    { text: "哪些事各自决定，哪些需共同批准", options: { indentLevel: 1 } }
  ], {
    x: 0.75, y: 2.35, w: 3.9, h: 2.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  // Right column - Dispute resolution
  slide.addShape("roundRect", {
    x: 5.2, y: 1.65, w: 4.3, h: 2.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 135, opacity: 0.06 },
    rectRadius: 0.1
  });

  // Right accent bar
  slide.addShape("rect", {
    x: 5.2, y: 1.65, w: 0.08, h: 2.8,
    fill: { color: theme.secondary }
  });

  slide.addText("争端解决机制", {
    x: 5.45, y: 1.8, w: 3.9, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText([
    { text: "预设仲裁条款", options: { bullet: true, breakLine: true } },
    { text: "发生争议时按规则处理", options: { breakLine: true, indentLevel: 1 } },
    { text: "分级响应机制", options: { bullet: true, breakLine: true } },
    { text: "小事先协商，大事再仲裁", options: { breakLine: true, indentLevel: 1 } },
    { text: "退出条款明确", options: { bullet: true, breakLine: true } },
    { text: "允许体面退出，减少鱼死网破", options: { indentLevel: 1 } }
  ], {
    x: 5.45, y: 2.35, w: 3.9, h: 2.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  // Bottom insight box
  slide.addShape("roundRect", {
    x: 0.5, y: 4.65, w: 9, h: 0.8,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.08
  });

  slide.addText("关键洞察：好的联盟设计，不是让各方依赖彼此，而是让各方愿意依赖彼此", {
    x: 0.7, y: 4.65, w: 8.6, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("89", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
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
  pres.writeFile({ fileName: "slide-89-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
