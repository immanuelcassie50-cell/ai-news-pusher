// slide-08.js - 学员成果预览（8份产出）
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 8, title: '8 份产出物' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("学员成果  ·  YOUR 8 DELIVERABLES", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  // Title
  slide.addText("8 份真实产出，贯穿整个课程", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("不是课堂作业，是回去第二天就能用上的真东西", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  const outputs = [
    { n: "01", t: "谈判场景卡", d: "锁定一个真实要谈的谈判" },
    { n: "02", t: "完整准备清单", d: "按八步流程为真实场景" },
    { n: "03", t: "让步节奏设计", d: "为真实场景设计具体让步" },
    { n: "04", t: "利益分析图", d: "对方利益的四维度分析" },
    { n: "05", t: "战术预判清单", d: "对方战术 + 你的应对" },
    { n: "06", t: "关系型谈判策略", d: "怎么在关系中谈利益" },
    { n: "07", t: "谈判复盘模板", d: "为下次谈判准备" },
    { n: "08", t: "30 天行动计划", d: "回到工作中的应用规划" }
  ];

  outputs.forEach((o, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = 0.4 + col * 2.35;
    const y = 1.75 + row * 1.55;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.2, h: 1.35,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // Top accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.2, h: 0.06,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    // Number
    slide.addText(o.n, {
      x: x + 0.15, y: y + 0.15, w: 1, h: 0.4,
      fontSize: 22, fontFace: "Arial",
      color: theme.accent, bold: true
    });
    // Title
    slide.addText(o.t, {
      x: x + 0.15, y: y + 0.55, w: 1.9, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    // Desc
    slide.addText(o.d, {
      x: x + 0.15, y: y + 0.92, w: 1.9, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, lineSpacing: 13
    });
  });

  // Footer
  slide.addText("你今天带的不是知识，是工具和方法；回去带的，是 8 份真实可用的产出。", {
    x: 0.4, y: 5.0, w: 8.5, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, italic: true
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("08", {
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
  pres.writeFile({ fileName: "slide-08-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
