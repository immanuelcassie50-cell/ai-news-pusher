// slide-07.js - 课程结构概览（七大模块）
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 7, title: '课程结构概览' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("课程结构  ·  COURSE STRUCTURE", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  // Title
  slide.addText("七大模块，从认识到情境的完整链路", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 7 modules as a staircase pyramid (top to bottom inverted)
  const modules = [
    { n: "M1", t: "重新认识谈判", e: "拆除误解，建立正确认知", layer: "认知基础" },
    { n: "M2", t: "立场 vs 利益", e: "从分饼思维到把饼做大", layer: "核心认知" },
    { n: "M3", t: "谈判前准备", e: "BATNA + 三个数字 + 筹码", layer: "杠杆" },
    { n: "M4", t: "核心技术", e: "锚定 + 让步 + 信息管理", layer: "工具" },
    { n: "M5", t: "心理战", e: "识别和应对 7 种战术", layer: "反操控" },
    { n: "M6", t: "关系型谈判", e: "利益和关系都重要时", layer: "温度" },
    { n: "M7", t: "九大情境实战", e: "把前六模块整合到场景", layer: "综合" }
  ];

  // Layout: 7 boxes stacked vertically with widening width
  modules.forEach((m, i) => {
    const y = 1.45 + i * 0.5;
    // Background bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 9.2, h: 0.45,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    // Left tag
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 0.95, h: 0.45,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(m.n, {
      x: 0.4, y: y, w: 0.95, h: 0.45,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center", valign: "middle"
    });
    // Title
    slide.addText(m.t, {
      x: 1.5, y: y, w: 2.4, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
    // Desc
    slide.addText(m.e, {
      x: 4.0, y: y, w: 3.8, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
    // Layer
    slide.addText(m.layer, {
      x: 7.9, y: y, w: 1.6, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle", align: "right", italic: true
    });
  });

  // Bottom note
  slide.addText("模块 1-3 是认知和准备（知道 + 想到）｜模块 4-6 是核心能力（做到）｜模块 7 是综合应用（自然化）", {
    x: 0.4, y: 5.0, w: 8.5, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("07", {
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
  pres.writeFile({ fileName: "slide-07-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
