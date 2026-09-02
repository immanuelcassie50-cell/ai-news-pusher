// slide-135.js - 结束页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 135,
  title: '循迹创新'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Large decorative shape
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 4.5, h: 5.625,
    fill: { color: theme.primary }
  });

  // Accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.5, y: 0, w: 0.1, h: 5.625,
    fill: { color: theme.accent }
  });

  // Left section - course name
  slide.addText("循迹创新", {
    x: 0.3, y: 1.8, w: 4, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("以用户为圆心的创新方法", {
    x: 0.3, y: 2.6, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Course info on left
  slide.addText("课程开发者：罗宏伟", {
    x: 0.3, y: 3.5, w: 4, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Right section - content
  slide.addText("课程信息", {
    x: 5.0, y: 0.8, w: 4.5, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Info items
  const infoItems = [
    { label: "模块一", value: "循迹 - 用户洞察" },
    { label: "模块二", value: "重问 - HMW问题定义" },
    { label: "模块三", value: "开局 - SCAMPER创新" },
    { label: "模块四", value: "试真 - 验证优化" }
  ];

  infoItems.forEach((item, i) => {
    const y = 1.4 + i * 0.55;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.0, y: y, w: 0.08, h: 0.4,
      fill: { color: theme.accent }
    });

    slide.addText(item.label, {
      x: 5.2, y: y, w: 1.2, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });

    slide.addText(item.value, {
      x: 6.4, y: y, w: 3.3, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Divider
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.0, y: 3.7, w: 4.5, h: 0.02,
    fill: { color: theme.light }
  });

  // Copyright section
  slide.addText("版权声明", {
    x: 5.0, y: 3.9, w: 4.5, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("本课程内容版权归属罗宏伟所有\n未经许可，请勿转载或用于商业用途", {
    x: 5.0, y: 4.25, w: 4.5, h: 0.6,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Contact info
  slide.addText("联系我们", {
    x: 5.0, y: 4.9, w: 4.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("循迹创新，与你同行", {
    x: 5.0, y: 5.15, w: 4.5, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("135", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
