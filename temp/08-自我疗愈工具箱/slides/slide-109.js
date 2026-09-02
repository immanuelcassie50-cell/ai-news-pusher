/**
 * Slide 109 - 卡片2：腹式呼吸
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Card label badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.35, w: 1.8, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("工具卡片 2", {
    x: 0.5, y: 0.35, w: 1.8, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Title
  slide.addText("腹式呼吸", {
    x: 2.5, y: 0.3, w: 5, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("激活放松反应的基础呼吸法", {
    x: 2.5, y: 0.85, w: 5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Main card area with hand illustration placeholder
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.4, w: 5.5, h: 3.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 6, offset: 3, angle: 45, opacity: 0.1 }
  });

  // 6 Steps
  const steps = [
    { num: "1", title: "姿势", desc: "躺或坐，放松身体" },
    { num: "2", title: "手位", desc: "一只手放胸口，一只手放腹部" },
    { num: "3", title: "吸气", desc: "用鼻子从腹部缓缓吸气" },
    { num: "4", title: "呼气", desc: "用嘴巴缓缓呼出" },
    { num: "5", title: "节奏", desc: "吸气4秒，呼气6秒" },
    { num: "6", title: "时长", desc: "练习5-10分钟" }
  ];

  const stepStartY = 1.5;
  const stepHeight = 0.52;

  steps.forEach((step, i) => {
    const y = stepStartY + i * stepHeight;

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.75, y: y + 0.08, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(step.num, {
      x: 0.75, y: y + 0.08, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: theme.secondary, bold: true, align: "center", valign: "middle"
    });

    // Step title
    slide.addText(step.title, {
      x: 1.3, y: y + 0.05, w: 0.9, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });

    // Step description
    slide.addText(step.desc, {
      x: 2.2, y: y + 0.05, w: 3.5, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false
    });
  });

  // Hand position diagram area
  slide.addShape(pres.ShapeType.ellipse, {
    x: 4.3, y: 3.6, w: 1.4, h: 1,
    fill: { color: theme.bg },
    line: { color: theme.accent, width: 2 }
  });
  slide.addText("腹部\n起伏", {
    x: 4.3, y: 3.75, w: 1.4, h: 0.8,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false, align: "center", valign: "middle"
  });

  // Right side -适用场景
  slide.addShape(pres.ShapeType.rect, {
    x: 6.2, y: 1.4, w: 3.3, h: 1.5,
    fill: { color: theme.accent }
  });
  slide.addText("适用场景", {
    x: 6.4, y: 1.55, w: 3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });
  slide.addText([
    { text: "• 日常放松", options: { breakLine: true } },
    { text: "• 冥想练习前", options: { breakLine: true } },
    { text: "• 压力管理", options: { breakLine: true } },
    { text: "• 任何放松时刻" }
  ], {
    x: 6.4, y: 1.95, w: 3, h: 0.85,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    lineSpaceMult: 1.3
  });

  // Key tip box
  slide.addShape(pres.ShapeType.rect, {
    x: 6.2, y: 3.05, w: 3.3, h: 1.75,
    fill: { color: theme.primary }
  });
  slide.addText("练习提示", {
    x: 6.4, y: 3.2, w: 3, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("专注于腹部起伏\n胸部保持静止", {
    x: 6.4, y: 3.6, w: 2.9, h: 0.6,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false
  });
  slide.addText("感受横膈膜的\n下降与上升", {
    x: 6.4, y: 4.25, w: 2.9, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false
  });

  // Page number
  slide.addText("109", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "tool-card",
  module: "Tool Cards",
  title: "腹式呼吸",
  pageNumber: 109
};

module.exports = { createSlide, slideConfig };
