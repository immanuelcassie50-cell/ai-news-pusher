/**
 * Slide 115 - 何时寻求专业帮助
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
  slide.addText("何时寻求专业帮助", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("识别需要专业支持的警示信号", {
    x: 0.5, y: 0.9, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Warning signs section - left side
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.4, w: 5.8, h: 2.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.08 }
  });

  slide.addText("⚠️ 警示信号", {
    x: 0.7, y: 1.55, w: 5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const warningSigns = [
    { sign: "持续痛苦", detail: "情绪困扰持续超过2周" },
    { sign: "睡眠问题", detail: "长期失眠或嗜睡" },
    { sign: "身体症状", detail: "无法解释的疼痛或不适" },
    { sign: "行为改变", detail: "社交退缩或功能下降" },
    { sign: "危险信号", detail: "有自伤或自杀想法" }
  ];

  warningSigns.forEach((item, i) => {
    const y = 2.0 + i * 0.45;

    // Warning icon
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.7, y: y + 0.05, w: 0.25, h: 0.25,
      fill: { color: item.sign === "危险信号" ? theme.primary : theme.light }
    });

    slide.addText(item.sign, {
      x: 1.05, y: y, w: 1.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });
    slide.addText(item.detail, {
      x: 2.5, y: y, w: 3.5, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false
    });
  });

  // Help channels section - right side
  slide.addShape(pres.ShapeType.rect, {
    x: 6.5, y: 1.4, w: 3, h: 2.6,
    fill: { color: theme.accent }
  });

  slide.addText("求助渠道", {
    x: 6.7, y: 1.55, w: 2.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  const channels = [
    { type: "心理咨询师", desc: "专业评估与辅导" },
    { type: "精神科医生", desc: "诊断与药物治疗" },
    { type: "危机热线", desc: "24小时紧急支持" }
  ];

  channels.forEach((ch, i) => {
    const y = 2.05 + i * 0.7;

    slide.addShape(pres.ShapeType.rect, {
      x: 6.7, y: y, w: 2.6, h: 0.55,
      fill: { color: "FFFFFF" }
    });
    slide.addText(ch.type, {
      x: 6.85, y: y + 0.05, w: 2.3, h: 0.25,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });
    slide.addText(ch.desc, {
      x: 6.85, y: y + 0.28, w: 2.3, h: 0.22,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false
    });
  });

  // Bottom message
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.2, w: 9, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("寻求帮助是勇敢的表现", {
    x: 0.7, y: 4.35, w: 8.6, h: 0.35,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });
  slide.addText("心理健康问题就像身体疾病一样，需要时就医并不可耻", {
    x: 0.7, y: 4.7, w: 8.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false, align: "center"
  });

  // Page number
  slide.addText("115", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Appendix",
  title: "何时寻求专业帮助",
  pageNumber: 115
};

module.exports = { createSlide, slideConfig };
