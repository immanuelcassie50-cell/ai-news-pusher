// slide-65.js - 降级技术
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 65,
  title: '降级技术'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("降级技术", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Two columns of techniques
  const leftTechs = [
    { title: "暂停技术", desc: "强制休息，给情绪降温时间", example: "\"我们先休息10分钟\"" },
    { title: "转移技术", desc: "引入新话题或活动打破僵局", example: "\"让我们换个角度思考...\"" },
    { title: "接纳技术", desc: "承认情绪存在，不否定感受", example: "\"我能理解你现在很沮丧\"" }
  ];

  const rightTechs = [
    { title: "分解技术", desc: "将大问题拆解为小议题", example: "\"这个议题可以分几步解决\"" },
    { title: "映射技术", desc: "用第三方案例提供参考", example: "\"类似情况别人是怎么处理的\"" },
    { title: "聚焦技术", desc: "将注意力引向共同目标", example: "\"我们最初的目标是什么？\"" }
  ];

  // Left column
  leftTechs.forEach((tech, i) => {
    const y = 1.25 + i * 1.35;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 4.4, h: 1.15,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 4.4, h: 0.06,
      fill: { color: theme.accent }
    });

    slide.addText(tech.title, {
      x: 0.7, y: y + 0.15, w: 4, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(tech.desc, {
      x: 0.7, y: y + 0.48, w: 4, h: 0.28,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addText(tech.example, {
      x: 0.7, y: y + 0.75, w: 4, h: 0.28,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true
    });
  });

  // Right column
  rightTechs.forEach((tech, i) => {
    const y = 1.25 + i * 1.35;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.1, y: y, w: 4.4, h: 1.15,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.1, y: y, w: 4.4, h: 0.06,
      fill: { color: theme.secondary }
    });

    slide.addText(tech.title, {
      x: 5.3, y: y + 0.15, w: 4, h: 0.35,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(tech.desc, {
      x: 5.3, y: y + 0.48, w: 4, h: 0.28,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    slide.addText(tech.example, {
      x: 5.3, y: y + 0.75, w: 4, h: 0.28,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("65", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };