// slide-22.js - 模块1小结
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 22, title: '模块1小结' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M1 · 模块小结", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("模块一 · 五个关键认知", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const items = [
    { n: "01", t: "谈判的发生条件", d: "双方有诉求 / 诉求不一致 / 双方都无单方面强制权" },
    { n: "02", t: "谈判的权力结构", d: "权力在双方——和说服（权力在对方）的根本区别" },
    { n: "03", t: "谈判的目标", d: "不是赢，是创造双方都比\"不谈\"更好的结果" },
    { n: "04", t: "谈判与日常生活的关系", d: "每天都在发生，只是你没意识到" },
    { n: "05", t: "思维升级", d: "从\"分饼\"到\"把饼做大\"——利益挖掘创造正和空间" }
  ];

  items.forEach((it, i) => {
    const y = 1.55 + i * 0.65;
    // Background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 9.2, h: 0.55,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    // Number
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 0.7, h: 0.55,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(it.n, {
      x: 0.4, y: y, w: 0.7, h: 0.55,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center", valign: "middle"
    });
    // Title
    slide.addText(it.t, {
      x: 1.25, y: y, w: 3.0, h: 0.55,
      fontSize: 12.5, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
    // Description
    slide.addText(it.d, {
      x: 4.4, y: y, w: 5.1, h: 0.55,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Bottom box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.95, w: 9.2, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("练习：场景扫描 + 橙子实验 + 错误认知自查 + 场景卡激活", {
    x: 0.5, y: 4.95, w: 8.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("22", {
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
  pres.writeFile({ fileName: "slide-22-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
