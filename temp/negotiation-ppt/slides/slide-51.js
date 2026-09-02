// slide-51.js - 六张牌
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 51, title: '六张牌' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 六张可交换的牌", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("六种筹码：你以为你没有牌，其实有六张", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("把每张牌评估一下：你有多少？值多少？可以怎么用？", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  const chips = [
    {
      n: "01", t: "时间牌",
      d: "谁能拖，谁就掌握节奏",
      e: "对方急着月底签约 / 你可以再等一个月",
      give: "例：用 1 周延后换 3% 降价"
    },
    {
      n: "02", t: "信息牌",
      d: "你知道对方不知道的 = 权力",
      e: "对方不知道你的 BATNA / 你知道对方老板很急",
      give: "例：让对方知道你的备选 = 提升议价力"
    },
    {
      n: "03", t: "关系牌",
      d: "长期合作意愿 / 私人关系 / 信用",
      e: "10 年客户 / 朋友介绍 / 行业口碑",
      give: "例：用长期合同换短期让利"
    },
    {
      n: "04", t: "退路牌",
      d: "BATNA 的强度 = 你的真实退路",
      e: "备选方案越具体，退路越硬",
      give: "例：随时能走 = 议价力在握"
    },
    {
      n: "05", t: "灵活牌",
      d: "你能接受多种形式，而不是非此即彼",
      e: "不只盯价格 / 能接受时间、条款、附加服务",
      give: "例：用支付方式灵活换总价折扣"
    },
    {
      n: "06", t: "专业牌",
      d: "行业洞察 / 解决方案设计能力 / 标准",
      e: "你能提供对方想不到的方案",
      give: "例：用专业建议换对方的让步"
    }
  ];

  chips.forEach((c, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.4 + col * 3.1;
    const y = 1.7 + row * 1.55;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 1.45,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 0.4,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(c.n + " · " + c.t, {
      x: x + 0.15, y: y, w: 2.7, h: 0.4,
      fontSize: 11.5, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle"
    });
    slide.addText(c.d, {
      x: x + 0.15, y: y + 0.45, w: 2.7, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 13, bold: true
    });
    slide.addText("典型", {
      x: x + 0.15, y: y + 0.8, w: 2.7, h: 0.22,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });
    slide.addText(c.e, {
      x: x + 0.15, y: y + 1.0, w: 2.7, h: 0.4,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, lineSpacing: 12
    });
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("51", {
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
  pres.writeFile({ fileName: "slide-51-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
