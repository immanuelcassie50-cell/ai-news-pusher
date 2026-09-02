// slide-95.js - 成功案例分享第1页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 95,
  title: '学员案例'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("学员案例", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Case study card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 4.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Case badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.5, w: 1.8, h: 0.45,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("案例1", {
    x: 0.8, y: 1.5, w: 1.8, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Case title
  slide.addText("3个月改变的真实故事", {
    x: 2.8, y: 1.5, w: 6, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Divider
  slide.addShape(pres.shapes.LINE, {
    x: 0.8, y: 2.15, w: 8.4, h: 0,
    line: { color: theme.light, width: 0.5, transparency: 50 }
  });

  // Timeline
  const timeline = [
    { period: "第1个月", text: "开始每天安排专属时间，孩子从抵触到接受" },
    { period: "第2个月", text: "觉察到比较语言的危害，主动停止并记录" },
    { period: "第3个月", text: "手足冲突明显减少，孩子开始互相合作" }
  ];

  timeline.forEach((item, idx) => {
    const y = 2.4 + idx * 0.85;

    // Period badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.8, y: y, w: 1.5, h: 0.5,
      fill: { color: theme.light, transparency: 50 },
      rectRadius: 0.08
    });
    slide.addText(item.period, {
      x: 0.8, y: y, w: 1.5, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(item.text, {
      x: 2.5, y: y, w: 6.7, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Result highlight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 4.55, w: 8.4, h: 0.5,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.08
  });
  slide.addText("结果：家庭氛围明显改善，孩子自信心提升", {
    x: 0.8, y: 4.55, w: 8.4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-95-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
