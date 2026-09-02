// slide-119.js - 行为数据分析
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 119,
  title: '行为数据分析'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("行为数据分析", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("从数据中发现真相", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Flow diagram - horizontal
  const stages = [
    { title: "数据来源", items: ["埋点采集", "日志记录", "第三方工具", "用户上报"] },
    { title: "关键指标", items: ["DAU/WAU/MAU", "转化率", "留存率", "流失率"] },
    { title: "分析方法", items: ["漏斗分析", "路径分析", "归因分析", "群组分析"] },
    { title: "洞察提炼", items: ["趋势发现", "异常检测", "相关性", "因果推断"] },
    { title: "行动建议", items: ["优先级", "AB测试", "迭代计划", "效果追踪"] }
  ];

  const boxW = 1.7;
  const boxH = 2.2;
  const startX = 0.5;
  const startY = 1.8;
  const gapX = 0.15;

  stages.forEach((stage, i) => {
    const x = startX + i * (boxW + gapX);

    // Box background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: boxW, h: boxH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: x + boxW / 2 - 0.2, y: startY - 0.2, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: x + boxW / 2 - 0.2, y: startY - 0.2, w: 0.4, h: 0.4,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(stage.title, {
      x: x + 0.1, y: startY + 0.3, w: boxW - 0.2, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });

    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.3, y: startY + 0.7, w: boxW - 0.6, h: 0.02,
      fill: { color: theme.light }
    });

    // Items
    stage.items.forEach((item, j) => {
      slide.addText("• " + item, {
        x: x + 0.1, y: startY + 0.85 + j * 0.3, w: boxW - 0.2, h: 0.28,
        fontSize: 9, fontFace: "Microsoft YaHei",
        color: theme.secondary
      });
    });

    // Arrow between boxes
    if (i < stages.length - 1) {
      slide.addText("→", {
        x: x + boxW, y: startY + boxH / 2 - 0.2, w: gapX + 0.1, h: 0.4,
        fontSize: 16, fontFace: "Arial",
        color: theme.accent, align: "center", valign: "middle"
      });
    }
  });

  // Bottom highlight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.25, w: 8.5, h: 0.06,
    fill: { color: theme.accent }
  });

  slide.addText("数据驱动决策：用数据验证假设，用证据支撑结论，避免主观臆断", {
    x: 0.5, y: 4.45, w: 8.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("119", {
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
  pres.writeFile({ fileName: "slide-119-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
