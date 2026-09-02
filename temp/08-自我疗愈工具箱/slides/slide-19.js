const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "快速身体扫描3分钟版",
  type: "content",
  pageNumber: 19
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left red accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("快速身体扫描3分钟版", {
    x: 0.6, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // 9 body areas in timeline layout
  const areas = [
    { name: "脚趾", time: "15秒" },
    { name: "双脚", time: "15秒" },
    { name: "小腿", time: "15秒" },
    { name: "大腿", time: "15秒" },
    { name: "腹部", time: "20秒" },
    { name: "胸部", time: "15秒" },
    { name: "双手", time: "15秒" },
    { name: "双臂", time: "15秒" },
    { name: "面部", time: "20秒" }
  ];

  // Timeline line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 2.0, w: 8.4, h: 0.03,
    fill: { color: theme.accent }
  });

  // Body areas positioned along timeline
  const startX = 0.9;
  const spacing = 0.9;

  areas.forEach((area, i) => {
    const x = startX + i * spacing;

    // Circle marker
    slide.addShape(pres.ShapeType.ellipse, {
      x: x, y: 1.85, w: 0.35, h: 0.35,
      fill: { color: theme.primary }
    });

    // Area name above
    slide.addText(area.name, {
      x: x - 0.25, y: 1.35, w: 0.85, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Time below
    slide.addText(area.time, {
      x: x - 0.25, y: 2.3, w: 0.85, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "middle"
    });
  });

  // Instructions card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 2.85, w: 8.8, h: 2.25,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("操作指南", {
    x: 0.8, y: 2.95, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Two columns of instructions
  const leftInstructions = [
    "找一个舒适的位置坐下或躺下",
    "闭上眼睛，先做几次深呼吸放松",
    "将注意力带到脚趾，感受那里的感觉",
    "缓慢向上移动注意力，每个部位停留指定时间"
  ];

  const rightInstructions = [
    "不需要刻意改变任何感觉，只是觉察",
    "如果某个部位没有特别感觉，也正常，继续前进",
    "保持呼吸自然，不要屏气",
    "最后将全身作为一个整体感受几秒"
  ];

  slide.addText(
    leftInstructions.map((s, i) => ({
      text: s,
      options: { bullet: true, breakLine: i < leftInstructions.length - 1 }
    })),
    {
      x: 0.8, y: 3.4, w: 4.2, h: 1.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "top"
    }
  );

  slide.addText(
    rightInstructions.map((s, i) => ({
      text: s,
      options: { bullet: true, breakLine: i < rightInstructions.length - 1 }
    })),
    {
      x: 5.0, y: 3.4, w: 4.2, h: 1.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "top"
    }
  );

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("19", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
