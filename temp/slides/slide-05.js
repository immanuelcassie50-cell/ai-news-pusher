// slide-05.js - Content: 描述性定义
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 5,
  title: 'demo02: 描述性定义练习'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("描述性定义练习", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("用数据说话，而非形容词", {
    x: 0.5, y: 0.8, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Comparison table header
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 4.3, h: 0.45,
    fill: { color: theme.secondary }
  });
  slide.addText("模糊描述（听到的）", {
    x: 0.5, y: 1.3, w: 4.3, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addShape("rect", {
    x: 4.9, y: 1.3, w: 4.6, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("描述性定义（精准描述）", {
    x: 4.9, y: 1.3, w: 4.6, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Example 1
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 4.3, h: 1.1,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 1 }
  });
  slide.addText('客户对我们不满意', {
    x: 0.6, y: 2.1, w: 4, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  slide.addShape("rect", {
    x: 4.9, y: 1.85, w: 4.6, h: 1.1,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 1 }
  });
  slide.addText("23起投诉：12起因交付延期、7起因质量、4起因响应慢\nNPS从45降至38", {
    x: 5.0, y: 2.0, w: 4.4, h: 0.8,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Example 2
  slide.addShape("rect", {
    x: 0.5, y: 3.05, w: 4.3, h: 1.1,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 1 }
  });
  slide.addText('团队士气低落', {
    x: 0.6, y: 3.3, w: 4, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  slide.addShape("rect", {
    x: 4.9, y: 3.05, w: 4.6, h: 1.1,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 1 }
  });
  slide.addText("出勤率92%（降5%）、加班率8%（降12%）\n建议3条（去年同期15条）、满意度68分", {
    x: 5.0, y: 3.2, w: 4.4, h: 0.8,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Key point
  slide.addShape("rect", {
    x: 0.5, y: 4.4, w: 9, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("三要素：1.具体数据  2.时间边界  3.维度拆分", {
    x: 0.6, y: 4.55, w: 8.8, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center"
  });

  // Page number
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("5", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
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
  pres.writeFile({ fileName: "slide-05-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
