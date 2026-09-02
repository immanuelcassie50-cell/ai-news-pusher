// slide-21.js - 场景扫描
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 21, title: '场景扫描' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M1 · 场景扫描", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("你今天，已经谈过几次了", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("把这三个条件放进日常生活扫描——你会发现谈判情境的密度远超你的认知", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Conditions reminder
  const conds = ["① 双方有诉求", "② 诉求不一致", "③ 无单方面强制权"];
  conds.forEach((c, i) => {
    const x = 0.4 + i * 3.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.75, w: 2.9, h: 0.45,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(c, {
      x: x, y: 1.75, w: 2.9, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, align: "center", valign: "middle"
    });
  });

  // 10 everyday scenes - 2 columns of 5
  const scenes = [
    "谈薪资", "买东西讲价", "决定去哪里吃饭", "分配工作任务", "和伴侣讨论周末安排",
    "和孩子谈作业和游戏时间", "跨部门争取资源", "客户合同的价格谈判", "客诉处理中的补偿方案", "创业合伙人的股权分配"
  ];

  scenes.forEach((s, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.7;
    const y = 2.4 + row * 0.5;
    // Pill
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: y, w: 4.5, h: 0.4,
      fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 },
      rectRadius: 0.05
    });
    // Number
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.1, y: y + 0.07, w: 0.26, h: 0.26,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(`${i + 1}`, {
      x: x + 0.1, y: y + 0.07, w: 0.26, h: 0.26,
      fontSize: 9, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(s, {
      x: x + 0.45, y: y, w: 4.0, h: 0.4,
      fontSize: 11.5, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("21", {
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
  pres.writeFile({ fileName: "slide-21-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
