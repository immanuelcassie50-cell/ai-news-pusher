/**
 * Slide 07 - 日常保养 vs 专业干预
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("日常保养 vs 专业干预", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("了解两者的边界，在合适的时机选择合适的方式", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Two column comparison
  const colW = 4.3;
  const colH = 3.6;
  const colY = 1.55;

  // Left column - 日常保养
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: colY, w: colW, h: colH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 45, opacity: 0.1 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: colY, w: colW, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("日常保养", {
    x: 0.5, y: colY, w: colW, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle", bold: true
  });

  slide.addText("适用场景", {
    x: 0.7, y: colY + 0.75, w: 4, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText([
    { text: "• 压力情绪的日常疏导", options: { breakLine: true } },
    { text: "• 轻度焦虑和低落情绪", options: { breakLine: true } },
    { text: "• 睡眠质量轻度下降", options: { breakLine: true } },
    { text: "• 人际关系轻度困扰" }
  ], {
    x: 0.7, y: colY + 1.1, w: 4, h: 1.1,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    lineSpaceMult: 1.4
  });

  slide.addText("常用方法", {
    x: 0.7, y: colY + 2.25, w: 4, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText([
    { text: "• 正念冥想与呼吸练习", options: { breakLine: true } },
    { text: "• 情绪日记与自我反思", options: { breakLine: true } },
    { text: "• 运动与放松技巧", options: { breakLine: true } },
    { text: "• 社交支持与倾诉" }
  ], {
    x: 0.7, y: colY + 2.6, w: 4, h: 1.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    lineSpaceMult: 1.4
  });

  // Right column - 专业干预
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: colY, w: colW, h: colH,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 2, angle: 45, opacity: 0.1 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: colY, w: colW, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("专业干预", {
    x: 5.2, y: colY, w: colW, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle", bold: true
  });

  slide.addText("适用场景", {
    x: 5.4, y: colY + 0.75, w: 4, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText([
    { text: "• 持续两周以上的抑郁情绪", options: { breakLine: true } },
    { text: "• 严重的焦虑或惊恐发作", options: { breakLine: true } },
    { text: "• 创伤后应激反应", options: { breakLine: true } },
    { text: "• 有自伤或自杀念头" }
  ], {
    x: 5.4, y: colY + 1.1, w: 4, h: 1.1,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    lineSpaceMult: 1.4
  });

  slide.addText("专业支持", {
    x: 5.4, y: colY + 2.25, w: 4, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText([
    { text: "• 心理咨询师/治疗师", options: { breakLine: true } },
    { text: "• 精神科医生", options: { breakLine: true } },
    { text: "• 心理危机干预热线", options: { breakLine: true } },
    { text: "• 住院治疗（严重情况）" }
  ], {
    x: 5.4, y: colY + 2.6, w: 4, h: 1.0,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    lineSpaceMult: 1.4
  });

  // Bottom note
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.25, w: 9, h: 0.35,
    fill: { color: theme.secondary, transparency: 90 }
  });
  slide.addText("重要提醒：日常保养不能替代专业治疗，当自我调节无效时应及时寻求专业帮助", {
    x: 0.5, y: 5.25, w: 9, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle", bold: false
  });

  // Page number
  slide.addText("07", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 1",
  title: "日常保养 vs 专业干预",
  pageNumber: 7
};

module.exports = { createSlide, slideConfig };
