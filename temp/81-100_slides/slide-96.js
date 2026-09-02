// slide-96.js - 处理课堂突发情况
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'backup',
  index: 96,
  title: '处理课堂突发情况'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("处理课堂突发情况", {
    x: 0.5, y: 0.35, w: 8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Backup label
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 8.5, y: 0.35, w: 1, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("备用", {
    x: 8.5, y: 0.35, w: 1, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // Scenarios
  const scenarios = [
    {
      situation: "学员质疑你的专业性",
      solution: "保持镇定，感谢质疑，表示会后再深入探讨；用数据和案例说话"
    },
    {
      situation: "学员过度沉默",
      solution: "提问开放式问题，安排小组讨论，减少点名压力，适当活跃气氛"
    },
    {
      situation: "学员注意力涣散",
      solution: "插入互动游戏，改变讲授方式（站起、走动），使用案例引发兴趣"
    },
    {
      situation: "学员之间发生争执",
      solution: "立即暂停，不要站队；分别私下沟通，回归课程主题"
    },
    {
      situation: "学员迟到或早退",
      solution: "开班前强调纪律；迟到轻声欢迎但不打断；早退时简短感谢"
    },
    {
      situation: "技术设备故障",
      solution: "提前准备Plan B（纸质材料）；不慌张，展现专业态度"
    }
  ];

  scenarios.forEach((s, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 0.5 + col * 4.6;
    const y = 1.05 + row * 1.45;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.4, h: 1.35,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Situation header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText("情况：" + s.situation, {
      x: x + 0.1, y: y, w: 4.2, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle", margin: 0
    });

    // Solution
    slide.addText("应对：" + s.solution, {
      x: x + 0.15, y: y + 0.5, w: 4.1, h: 0.8,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top", margin: 0
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("96", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4A4A4A",
    accent: "FF6B6B",
    light: "F5F5F5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-96-preview.pptx" });
}

module.exports = { createSlide, slideConfig };