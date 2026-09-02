// slide-28.js - 不同年龄差的养育策略
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 28,
  title: '不同年龄差的养育策略'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("不同年龄差的养育策略", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Strategies for each type
  const strategies = [
    {
      range: "1-2岁",
      strategies: [
        "设置明确的\"玩具归属\"规则",
        "分别的专注时间更重要",
        "避免时刻要求分享"
      ]
    },
    {
      range: "3-4岁",
      strategies: [
        "鼓励老大参与照顾老二",
        "但不要强制\"小老师\"角色",
        "创造共同游戏的机会"
      ]
    },
    {
      range: "5岁以上",
      strategies: [
        "尊重各自的社交圈",
        "给老大更多独立空间",
        "老小可以向老大学习"
      ]
    },
    {
      range: "同年龄组",
      strategies: [
        "建立轮换共享制度",
        "每人都有专属物品",
        "公平的注意力分配"
      ]
    }
  ];

  const colWidth = 2.25;
  const startX = 0.5;
  const gap = 0.25;

  strategies.forEach((strat, idx) => {
    const x = startX + idx * (colWidth + gap);

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: colWidth, h: 4.0,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: colWidth, h: 0.55,
      fill: { color: theme.secondary }
    });
    slide.addText(strat.range, {
      x: x, y: 1.2, w: colWidth, h: 0.55,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Strategies
    strat.strategies.forEach((strategy, sIdx) => {
      const y = 1.95 + sIdx * 1.0;

      // Number circle
      slide.addShape(pres.shapes.OVAL, {
        x: x + 0.15, y: y + 0.05, w: 0.35, h: 0.35,
        fill: { color: theme.accent }
      });
      slide.addText((sIdx + 1).toString(), {
        x: x + 0.15, y: y + 0.05, w: 0.35, h: 0.35,
        fontSize: 12, fontFace: "Arial",
        color: "FFFFFF", bold: true,
        align: "center", valign: "middle"
      });

      // Strategy text
      slide.addText(strategy, {
        x: x + 0.6, y: y, w: colWidth - 0.75, h: 0.85,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "top"
      });
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-28-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
