// slide-61.js - 准备表案例展示
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 61, title: '准备表案例' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 案例：一份真实的准备表", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("采购 50 台笔记本：从准备到结果", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("一份填得好的准备表，对应的真实结果", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  const items = [
    { l: "① 谈判主题", v: "采购 50 台商务笔记本" },
    { l: "② 我的目标", v: "5500 元/台以内，3 年质保" },
    { l: "③ 我的底线", v: "6000 元/台，2 年质保" },
    { l: "④ 我的 BATNA", v: "B 供应商报价 5800 + 2 年质保" },
    { l: "⑤ 对方的目标", v: "清库存 + 拿下标杆客户" },
    { l: "⑥ 对方底线", v: "不少于 5700 元" },
    { l: "⑦ 对方 BATNA", v: "电商平台 + 中关村代理" },
    { l: "⑧ 关键利益", v: "实：钱 + 服务 / 程：先到先得 / 关：长期合作" },
    { l: "⑨ 我的六张牌", v: "时间：月底截止 / 信息：B 供应商报价 / 关系：5 年老客户" },
    { l: "⑩ 备选方案", v: "A: 5500 / B: 5700+3年 / C: 5800+2年+培训" }
  ];

  items.forEach((it, i) => {
    const y = 1.7 + i * 0.3;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 5.5, h: 0.28,
      fill: { color: i % 2 === 0 ? "FFFFFF" : theme.bg },
      line: { color: theme.light, width: 0.5 }
    });
    slide.addText(it.l, {
      x: 0.5, y: y, w: 1.5, h: 0.28,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
    slide.addText(it.v, {
      x: 2.0, y: y, w: 3.8, h: 0.28,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Result panel
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.1, y: 1.7, w: 3.5, h: 3.0,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.1, y: 1.7, w: 3.5, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("谈判结果", {
    x: 6.1, y: 1.7, w: 3.5, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle", align: "center"
  });
  slide.addText("最终方案：", {
    x: 6.25, y: 2.25, w: 3.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("5600 元/台 + 3 年质保 + 50 台免费上门部署", {
    x: 6.25, y: 2.55, w: 3.2, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, lineSpacing: 14
  });
  slide.addText("对比：", {
    x: 6.25, y: 3.2, w: 3.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("原报价 6200 / 备选 B 5800\n最终 5600 + 部署", {
    x: 6.25, y: 3.5, w: 3.2, h: 0.7,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 13
  });
  slide.addText("节省：每台 600 + 部署费 ≈ 5 万", {
    x: 6.25, y: 4.25, w: 3.2, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("61", {
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
  pres.writeFile({ fileName: "slide-61-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
