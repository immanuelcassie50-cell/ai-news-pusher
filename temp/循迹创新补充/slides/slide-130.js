// slide-130.js - 讲师介绍
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 130,
  title: '讲师介绍'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 1.0,
    fill: { color: theme.primary }
  });

  slide.addText("讲师介绍", {
    x: 0.5, y: 0.3, w: 5, h: 0.45,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("罗宏伟", {
    x: 5.5, y: 0.35, w: 4, h: 0.4,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "right"
  });

  // Profile card - left side
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.3, w: 3.5, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Avatar placeholder
  slide.addShape(pres.shapes.OVAL, {
    x: 1.5, y: 1.6, w: 1.5, h: 1.5,
    fill: { color: theme.light }
  });

  slide.addText("罗", {
    x: 1.5, y: 1.6, w: 1.5, h: 1.5,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  // Name under avatar
  slide.addText("罗宏伟", {
    x: 0.5, y: 3.25, w: 3.5, h: 0.45,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  slide.addText("创新方法论导师", {
    x: 0.5, y: 3.65, w: 3.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center"
  });

  // Divider
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.0, y: 4.05, w: 2.5, h: 0.02,
    fill: { color: theme.light }
  });

  // Contact info
  slide.addText("循迹创新系列课程开发者", {
    x: 0.5, y: 4.2, w: 3.5, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  slide.addText("以用户为圆心的创新方法", {
    x: 0.5, y: 4.5, w: 3.5, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });

  // Info cards - right side
  const infoCards = [
    {
      title: "背景介绍",
      items: ["15年+产品创新经验", "服务过50+家企业", "培训学员10000+人"]
    },
    {
      title: "专业领域",
      items: ["用户研究与洞察", "设计思维实践", "创新管理体系建设"]
    },
    {
      title: "授课风格",
      items: ["实战案例丰富", "方法论+工具并重", "互动性强接地气"]
    }
  ];

  const cardStartX = 4.3;
  const cardW = 5.2;
  const cardH = 1.15;
  const cardGap = 0.15;

  infoCards.forEach((card, i) => {
    const y = 1.3 + i * (cardH + cardGap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cardStartX, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cardStartX, y: y, w: 0.06, h: cardH,
      fill: { color: theme.accent }
    });

    // Title
    slide.addText(card.title, {
      x: cardStartX + 0.2, y: y + 0.1, w: 4.8, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Items
    slide.addText(card.items.join(" | "), {
      x: cardStartX + 0.2, y: y + 0.45, w: 4.8, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("130", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
