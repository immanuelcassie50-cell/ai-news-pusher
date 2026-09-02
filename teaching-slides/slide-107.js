const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("会议前的准备工作", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("准备越充分，会议越顺畅", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Preparation items - timeline/flow layout
  const preparations = [
    { num: "01", title: "议题确认", desc: "与发起人确认议题和期望", icon: "◎", color: theme.accent },
    { num: "02", title: "参与者分析", desc: "了解参与者背景和立场", icon: "◉", color: theme.primary },
    { num: "03", title: "场地布置", desc: "座位安排/白板/投影", icon: "◧", color: "#43aa8b" },
    { num: "04", title: "工具准备", desc: "便签/笔/计时器", icon: "▤", color: theme.secondary },
    { num: "05", title: "时间规划", desc: "各环节时间安排", icon: "◔", color: "#e07a5f" },
    { num: "06", title: "应急预案", desc: "预判可能的突发状况", icon: "⚡", color: "#9b5de5" }
  ];

  // Connection line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.0, w: 9, h: 0.03,
    fill: { color: theme.secondary, transparency: 60 }
  });

  // 3x2 grid
  preparations.forEach((p, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.4 + col * 3.15;
    const y = 1.5 + row * 1.55;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 2.95, h: 1.35,
      fill: { color: "ffffff" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Top accent
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 2.95, h: 0.1,
      fill: { color: p.color }
    });

    // Icon
    slide.addText(p.icon, {
      x: x + 0.15, y: y + 0.2, w: 0.5, h: 0.5,
      fontSize: 22, fontFace: "Arial",
      color: p.color
    });

    // Number
    slide.addText(p.num, {
      x: x + 0.7, y: y + 0.2, w: 0.6, h: 0.3,
      fontSize: 16, fontFace: "Arial",
      color: p.color, bold: true
    });

    // Title
    slide.addText(p.title, {
      x: x + 0.15, y: y + 0.55, w: 2.65, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(p.desc, {
      x: x + 0.15, y: y + 0.9, w: 2.65, h: 0.35,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom reminder
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 4.75, w: 9.2, h: 0.95,
    fill: { color: theme.light }
  });

  slide.addText("提前checklist", {
    x: 0.6, y: 4.82, w: 2.0, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("会议前24小时：确认场地/设备 | 会议前2小时：发送议程 | 会议前30分钟：到场布置", {
    x: 0.6, y: 5.12, w: 8.8, h: 0.5,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  return slide;
}

module.exports = { createSlide };
