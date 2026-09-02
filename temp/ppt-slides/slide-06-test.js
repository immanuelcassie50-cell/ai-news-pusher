// slide-06.js - 配套工具一览
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 6,
  title: '配套工具一览'
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
  slide.addText("配套工具一览", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 8 tools in 2x4 grid
  const tools = [
    "任务地图模板",
    "公文类型速查卡",
    "四问法检查清单",
    "通知写作提示词库",
    "请示写作提示词库",
    "报告写作提示词库",
    "纪要写作提示词库",
    "AI边界自检表"
  ];

  const cardW = 2.15;
  const cardH = 1.5;
  const startX = 0.55;
  const startY = 1.15;
  const gapX = 0.12;
  const gapY = 0.12;

  tools.forEach((tool, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });

    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: 0.05,
      fill: { color: row === 0 ? theme.primary : theme.accent }
    });

    // Number
    slide.addText(String(i + 1), {
      x: x + 0.1, y: y + 0.15, w: 0.35, h: 0.35,
      fontSize: 18, fontFace: "Arial",
      color: row === 0 ? theme.primary : theme.accent, bold: true
    });

    // Tool name
    slide.addText(tool, {
      x: x + 0.1, y: y + 0.55, w: cardW - 0.2, h: 0.85,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top"
    });
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4a4a4a",
    accent: "E8364F",
    light: "c0c0c0",
    bg: "fafafa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/新课开发/公文写作/5、综合实战——高频场景的协同写作与组织迁移/ppt/slides/slide-06-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
