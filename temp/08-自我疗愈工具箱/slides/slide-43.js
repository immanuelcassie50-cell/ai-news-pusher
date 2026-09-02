const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "正念微练习的日常融入",
  type: "content",
  pageNumber: 43
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

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("43", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("正念微练习的日常融入", {
    x: 0.5, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Key insight
  slide.addText("嵌入式正念：不需要专门时间，在日常活动中自然融入", {
    x: 0.5, y: 1.15, w: 9, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Activities grid
  const activities = [
    { icon: "🪥", activity: "刷牙", tip: "感受牙刷的触感，牙膏的味道" },
    { icon: "🚿", activity: "洗手", tip: "感受水流、温度、泡沫" },
    { icon: "🚶", activity: "走路", tip: "感受脚掌与地面的接触" },
    { icon: "🛗", activity: "等电梯", tip: "观察周围环境，听声音" },
    { icon: "🍵", activity: "喝水", tip: "感受水流过喉咙的感觉" },
    { icon: "🚶‍♀️", activity: "走廊", tip: "注意每一步的节奏" },
    { icon: "🪑", activity: "坐下", tip: "感受椅子支撑身体的感觉" },
    { icon: "⏰", activity: "看时间", tip: "先停顿一秒，再看手机" }
  ];

  activities.forEach((act, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = 0.5 + col * 2.35;
    const y = 1.75 + row * 1.45;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 2.2, h: 1.25,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 45, opacity: 0.08 }
    });

    // Icon
    slide.addText(act.icon, {
      x: x, y: y + 0.1, w: 2.2, h: 0.45,
      fontSize: 22,
      align: "center", valign: "middle"
    });

    // Activity name
    slide.addText(act.activity, {
      x: x, y: y + 0.55, w: 2.2, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Tip
    slide.addText(act.tip, {
      x: x + 0.1, y: y + 0.85, w: 2, h: 0.35,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "middle"
    });
  });

  // Bottom message
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.75, w: 9, h: 0.5,
    fill: { color: theme.bg }
  });

  slide.addText("每次只需几秒钟，日积月累，正念就会成为生活的自然一部分", {
    x: 0.5, y: 4.75, w: 9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
