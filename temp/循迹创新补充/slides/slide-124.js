// slide-124.js - 课程知识点回顾
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 124,
  title: '课程知识点回顾'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 1.0,
    fill: { color: theme.primary }
  });

  slide.addText("课程知识点回顾", {
    x: 0.5, y: 0.25, w: 6, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("循迹创新方法论全景图", {
    x: 0.5, y: 0.7, w: 6, h: 0.25,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Four module cards - horizontal layout
  const modules = [
    { num: "01", title: "循迹", subtitle: "用户洞察", desc: "发现用户真实需求与痛点" },
    { num: "02", title: "重问", subtitle: "HMW问题定义", desc: "重新定义有价值的创新问题" },
    { num: "03", title: "开局", subtitle: "SCAMPER创新", desc: "系统化激发创新解决方案" },
    { num: "04", title: "试真", subtitle: "验证优化", desc: "用数据验证想法持续迭代" }
  ];

  const cardW = 2.1;
  const cardH = 2.8;
  const startX = 0.5;
  const startY = 1.35;
  const gap = 0.25;

  modules.forEach((mod, i) => {
    const x = startX + i * (cardW + gap);
    const y = startY;

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: 0.08,
      fill: { color: theme.accent }
    });

    // Number
    slide.addText(mod.num, {
      x: x, y: y + 0.25, w: cardW, h: 0.5,
      fontSize: 32, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center"
    });

    // Module title
    slide.addText(mod.title, {
      x: x, y: y + 0.8, w: cardW, h: 0.45,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });

    // Subtitle
    slide.addText(mod.subtitle, {
      x: x, y: y + 1.2, w: cardW, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });

    // Divider line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.4, y: y + 1.65, w: cardW - 0.8, h: 0.02,
      fill: { color: theme.light }
    });

    // Description
    slide.addText(mod.desc, {
      x: x + 0.15, y: y + 1.8, w: cardW - 0.3, h: 0.85,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
  });

  // Bottom summary bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.6, w: 10, h: 0.7,
    fill: { color: theme.light }
  });

  slide.addText("从洞察到验证的完整旅程 — 循迹创新方法论", {
    x: 0.5, y: 4.75, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("124", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
