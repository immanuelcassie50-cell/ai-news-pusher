const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addImage({
    data: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=960&h=540&fit=crop',
    x: 0, y: 0, w: 10, h: 5.625
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("如何让全家参与进来？", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });

  // Key principle
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 1.25, w: 9.2, h: 0.7,
    fill: { color: theme.accent, transparency: 80 },
    rectRadius: 0.08
  });
  slide.addText("核心原则：系统是为了家人，不是为了控制家人", {
    x: 0.5, y: 1.35, w: 9.0, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  // Family participation steps
  const steps = [
    { who: "统一认知", what: "召开家庭会议，解释信息过载的危害", icon: "1" },
    { who: "共建规则", what: "全家一起制定信息来源清单和评估标准", icon: "2" },
    { who: "分工协作", what: "谁负责查资料，谁负责评估，谁做记录", icon: "3" },
    { who: "定期复盘", what: "每月一次家庭会议，回顾决策效果", icon: "4" }
  ];

  steps.forEach((step, i) => {
    const y = 2.1 + i * 0.85;
    // Step number
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.6, y: y + 0.1, w: 0.55, h: 0.55,
      fill: { color: theme.secondary }
    });
    slide.addText(step.icon, {
      x: 0.6, y: y + 0.1, w: 0.55, h: 0.55,
      fontSize: 16, fontFace: "Arial", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Who
    slide.addText(step.who, {
      x: 1.35, y: y + 0.08, w: 1.8, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    // What
    slide.addText(step.what, {
      x: 3.2, y: y + 0.08, w: 6.3, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    // Line
    if (i < steps.length - 1) {
      slide.addShape(pres.ShapeType.line, {
        x: 0.85, y: y + 0.7, w: 0, h: 0.15,
        line: { color: theme.light, width: 1.5 }
      });
    }
  });

  // Page number
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("77", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.3,
    fontSize: 10, fontFace: "Arial", bold: true,
    color: theme.primary, align: "center", valign: "middle"
  });

  return slide;
};
module.exports = { createSlide };
