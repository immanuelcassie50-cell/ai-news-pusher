const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "完整版PMR 5分钟",
  type: "content",
  pageNumber: 23
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
  slide.addText("完整版PMR 5分钟", {
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

  // 12 muscle groups - numbered timeline from feet to face
  const muscleGroups = [
    { num: 1, name: "双脚", action: "脚趾蜷曲" },
    { num: 2, name: "小腿", action: "脚尖上翘" },
    { num: 3, name: "大腿", action: "膝盖下压" },
    { num: 4, name: "髋部", action: "收紧臀部" },
    { num: 5, name: "腹部", action: "收缩腹肌" },
    { num: 6, name: "胸部", action: "深吸气屏住" },
    { num: 7, name: "双手", action: "握拳收紧" },
    { num: 8, name: "前臂", action: "手掌推墙" },
    { num: 9, name: "上臂", action: "弯曲肱二头肌" },
    { num: 10, name: "肩部", action: "耸起贴近耳朵" },
    { num: 11, name: "面部", action: "皱眉咬牙" },
    { num: 12, name: "全身", action: "整体紧绷" }
  ];

  // Vertical timeline on left
  slide.addShape(pres.ShapeType.rect, {
    x: 1.2, y: 1.3, w: 0.04, h: 3.8,
    fill: { color: theme.accent }
  });

  // Draw timeline entries
  muscleGroups.forEach((group, i) => {
    const y = 1.35 + i * 0.32;

    // Circle marker
    slide.addShape(pres.ShapeType.ellipse, {
      x: 1.08, y: y, w: 0.28, h: 0.28,
      fill: { color: theme.primary }
    });
    slide.addText(String(group.num), {
      x: 1.08, y: y, w: 0.28, h: 0.28,
      fontSize: 9, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Name and action
    slide.addText(group.name, {
      x: 1.5, y: y - 0.02, w: 0.9, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(group.action, {
      x: 2.4, y: y - 0.02, w: 1.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "left", valign: "middle"
    });
  });

  // Right side - key points card
  slide.addShape(pres.ShapeType.rect, {
    x: 4.3, y: 1.3, w: 5.1, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("练习要点", {
    x: 4.5, y: 1.4, w: 2, h: 0.45,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const keyPoints = [
    "选择一个舒适的位置坐下或躺下",
    "先做几次深呼吸，让身体放松下来",
    "从脚部开始，逐渐向上移动到面部",
    "每个肌群：绷紧5秒 → 保持5秒 → 释放",
    "释放时注意感受紧张消退的感觉",
    "保持呼吸自然，不要屏气",
    "如果没有感觉特别紧张，正常现象，继续",
    "最后花30秒整体感受全身的放松状态"
  ];

  slide.addText(
    keyPoints.map((p, i) => ({
      text: p,
      options: { bullet: true, breakLine: i < keyPoints.length - 1 }
    })),
    {
      x: 4.5, y: 1.9, w: 4.7, h: 3.0,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "top",
      paraSpaceAfter: 6
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
  slide.addText("23", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
