// slide-66.js - 本章核心要点 (Chapter 6 Summary)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 66,
  title: '本章核心要点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("本章核心要点", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Chapter badge
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.05, w: 1.8, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("第六章 · 冲突处理", {
    x: 0.5, y: 1.05, w: 1.8, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  // Key points in 2x2 grid
  const points = [
    { num: "01", title: "四阶段模型", desc: "潜伏期→爆发期→蔓延期→消退期\n早期介入成本最低" },
    { num: "02", title: "中立三原则", desc: "立场中立、过程公正、情绪隔离\n不做裁判做促进" },
    { num: "03", title: "五种干预技术", desc: "重新框定、情感标注、暂停提问\n角色互换、共同利益" },
    { num: "04", title: "六种降级法", desc: "暂停、转移、接纳、分解\n映射、聚焦" }
  ];

  points.forEach((pt, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 0.5 + col * 4.6;
    const y = 1.65 + row * 1.7;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.4, h: 1.5,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: y + 0.2, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(pt.num, {
      x: x + 0.2, y: y + 0.2, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(pt.title, {
      x: x + 0.85, y: y + 0.25, w: 3.3, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(pt.desc, {
      x: x + 0.2, y: y + 0.75, w: 4, h: 0.65,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom reminder
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 8.5, h: 0.4,
    fill: { color: theme.light }
  });
  slide.addText("记住：冲突处理的核心不是消除冲突，而是将破坏性冲突转化为建设性对话", {
    x: 0.7, y: 5.0, w: 8.3, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("66", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };