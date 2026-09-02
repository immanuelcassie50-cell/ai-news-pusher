// slide-126.js - 创新工具箱
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 126,
  title: '创新工具箱'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.95,
    fill: { color: theme.primary }
  });

  slide.addText("创新工具箱", {
    x: 0.5, y: 0.25, w: 5, h: 0.45,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("课程核心工具一览", {
    x: 0.5, y: 0.65, w: 5, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // 4 tool categories - 2x2 grid
  const tools = [
    {
      title: "用户研究工具",
      items: ["用户访谈提纲", "观察记录表", "用户旅程地图", "同理心地图"],
      color: theme.accent
    },
    {
      title: "HMW问题工具",
      items: ["HMW问题转化表", "问题分类矩阵", "优先级评估", "聚焦筛选法"],
      color: theme.primary
    },
    {
      title: "SCAMPER工具",
      items: ["SCAMPER检核表", "发散收敛表", "组合创新卡", "方案评分卡"],
      color: theme.secondary
    },
    {
      title: "验证测试工具",
      items: ["原型测试脚本", "A/B测试方案", "用户反馈表", "迭代记录表"],
      color: theme.accent
    }
  ];

  const boxW = 4.4;
  const boxH = 1.85;
  const startX = 0.5;
  const startY = 1.2;
  const gapX = 0.3;
  const gapY = 0.25;

  tools.forEach((tool, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (boxW + gapX);
    const y = startY + row * (boxH + gapY);

    // Box background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: boxW, h: boxH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Left color bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: boxH,
      fill: { color: tool.color }
    });

    // Title
    slide.addText(tool.title, {
      x: x + 0.25, y: y + 0.12, w: boxW - 0.4, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Items
    const itemsText = tool.items.map((item, idx) => {
      return `${idx + 1}. ${item}`;
    }).join("\n");

    slide.addText(itemsText, {
      x: x + 0.25, y: y + 0.55, w: boxW - 0.4, h: 1.2,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("126", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
