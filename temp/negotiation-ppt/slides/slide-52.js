// slide-52.js - 牌的实战配对
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 52, title: '牌的实战配对' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 牌的实战：把六张牌配对到具体场景", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("同样的牌，在不同场景下用法不同", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("挑一个你最近面对的谈判，看看你能用哪几张牌", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // 3 scenario cards
  const scenarios = [
    {
      title: "和老板谈升职",
      setup: "你希望从 P6 升 P7 + 涨薪 30%",
      cards: [
        { type: "时间", use: "用业绩交付完的窗口期谈" },
        { type: "退路", use: "面试了 1 家对手公司——不细说" },
        { type: "关系", use: "老板是你成长路上的重要人物" },
        { type: "灵活", use: "不只盯钱：title / 期权 / 培训" }
      ]
    },
    {
      title: "和供应商谈降价",
      setup: "对方要求涨价 5%，你希望保持原价",
      cards: [
        { type: "时间", use: "年中期谈，避开对方旺季" },
        { type: "信息", use: "了解对方的库存 + 现金流" },
        { type: "退路", use: "已经接触了 2 家备选供应商" },
        { type: "专业", use: "提供降本建议 = 关系升级" }
      ]
    },
    {
      title: "和伴侣谈春节安排",
      setup: "你希望出去旅行，对方希望回父母家",
      cards: [
        { type: "时间", use: "春节前 2 个月谈 = 主动权" },
        { type: "关系", use: "对方父母身体不好 = 真痛点" },
        { type: "灵活", use: "3 天旅行 + 3 天回家 = 折中" },
        { type: "信息", use: "了解对方小时候的春节记忆" }
      ]
    }
  ];

  scenarios.forEach((s, i) => {
    const x = 0.4 + i * 3.1;
    const y = 1.7;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 3.1,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 0.5,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(s.title, {
      x: x + 0.15, y: y, w: 2.7, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle"
    });
    slide.addText(s.setup, {
      x: x + 0.15, y: y + 0.55, w: 2.7, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, italic: true
    });
    // Cards
    s.cards.forEach((c, j) => {
      const cy = y + 0.95 + j * 0.5;
      slide.addShape(pres.shapes.RECTANGLE, {
        x: x + 0.15, y: cy, w: 0.8, h: 0.4,
        fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
      });
      slide.addText(c.type, {
        x: x + 0.15, y: cy, w: 0.8, h: 0.4,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: "FFFFFF", bold: true, align: "center", valign: "middle"
      });
      slide.addText(c.use, {
        x: x + 1.0, y: cy, w: 1.85, h: 0.4,
        fontSize: 9.5, fontFace: "Microsoft YaHei",
        color: theme.primary, valign: "middle", lineSpacing: 12
      });
    });
  });

  // Bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.95, w: 9.2, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("每个谈判前都过一遍：我的六张牌分别是强是弱？怎么用？", {
    x: 0.5, y: 4.95, w: 8.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("52", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-52-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
