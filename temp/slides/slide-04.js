// slide-04.js - Content: 课题三层定义
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'content',
  index: 4,
  title: 'demo01: 课题三层定义表'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("课题三层定义表", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Left: 问题描述
  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 4.3, h: 1.2,
    fill: { color: theme.primary }
  });
  slide.addText("原始问题", {
    x: 0.6, y: 1.2, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText('「新员工流失率高，怎么留住人？」', {
    x: 0.6, y: 1.6, w: 4, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true
  });

  // Three layers - right side
  const layers = [
    { label: "第一层 现象层", content: "制造事业部新员工流失率达28%，显著高于行业平均15%", color: theme.secondary },
    { label: "第二层 原因层", content: "培养周期长（6-12个月），新员工在产出期前丧失信心", color: theme.accent },
    { label: "第三层 课题层", content: "如何设计「快速成就体验」机制，让新员工在90天内建立岗位自信？", color: theme.primary }
  ];

  layers.forEach((layer, i) => {
    const y = 1.1 + i * 1.35;

    // Layer card
    slide.addShape("rect", {
      x: 5.0, y: y, w: 4.5, h: 1.2,
      fill: { color: "FFFFFF" },
      line: { color: layer.color, width: 2 }
    });

    // Color bar on left
    slide.addShape("rect", {
      x: 5.0, y: y, w: 0.12, h: 1.2,
      fill: { color: layer.color }
    });

    // Label
    slide.addText(layer.label, {
      x: 5.25, y: y + 0.1, w: 4, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: layer.color, bold: true
    });

    // Content
    slide.addText(layer.content, {
      x: 5.25, y: y + 0.45, w: 4, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });

  // Bottom insight
  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 9, h: 0.7,
    fill: { color: theme.light }
  });
  slide.addText("破题关键：从「怎么留人」改为「怎么让新人在90天内建立自信」，答案就清晰了", {
    x: 0.6, y: 4.8, w: 8.8, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Page number
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("4", {
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
  pres.writeFile({ fileName: "slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
