// slide-111.js - 原型测试方法
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 111,
  title: '原型测试方法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("原型测试方法", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Subtitle
  slide.addText("让用户验证你的假设", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // Three testing methods - card style
  const methods = [
    { title: "走廊测试", desc: "在走廊或办公区随机邀请路人进行5分钟快速测试", icon: "🚶" },
    { title: "预约测试", desc: "邀请目标用户进行有计划的深度测试，获取系统性反馈", icon: "📅" },
    { title: "远程测试", desc: "通过视频会议工具远程进行，不受地理限制", icon: "💻" }
  ];

  methods.forEach((method, i) => {
    const x = 0.5 + i * 3.1;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.65, w: 2.9, h: 1.6,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Icon
    slide.addText(method.icon, {
      x: x + 0.15, y: 1.75, w: 0.5, h: 0.5,
      fontSize: 24
    });

    // Title
    slide.addText(method.title, {
      x: x + 0.15, y: 2.25, w: 2.6, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(method.desc, {
      x: x + 0.15, y: 2.6, w: 2.6, h: 0.6,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom section - 2 columns
  // Left: Observation points
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.45, w: 4.4, h: 1.85,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.45, w: 4.4, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("观察要点", {
    x: 0.5, y: 3.45, w: 4.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText([
    { text: "用户的第一反应是什么？", options: { bullet: true, breakLine: true } },
    { text: "用户在哪个步骤卡住了？", options: { bullet: true, breakLine: true } },
    { text: "用户有哪些困惑或误解？", options: { bullet: true, breakLine: true } },
    { text: "用户的情绪变化如何？", options: { bullet: true } }
  ], {
    x: 0.7, y: 3.9, w: 4.0, h: 1.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Right: Recording methods
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 3.45, w: 4.4, h: 1.85,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 3.45, w: 4.4, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("记录方法", {
    x: 5.1, y: 3.45, w: 4.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText([
    { text: "屏幕录制 + 录音", options: { bullet: true, breakLine: true } },
    { text: "观察笔记和计时", options: { bullet: true, breakLine: true } },
    { text: "任务完成率统计", options: { bullet: true, breakLine: true } },
    { text: "用户主观评分收集", options: { bullet: true } }
  ], {
    x: 5.3, y: 3.9, w: 4.0, h: 1.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("111", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "333333",
    secondary: "666666",
    accent: "C41A1A",
    light: "D9D9D9",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-111-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
