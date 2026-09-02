// slide-29.js - 案例二：跨部门协作
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 29, title: '案例二：跨部门协作' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 案例二：跨部门协作", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("技术部 vs 业务部：一次合作僵局", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("\"我们忙不过来 / 这需求不合理\"——表面是部门之争，底下是资源与考核的冲突", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Stakeholder table
  const headers = ["方", "立场 (Position)", "利益 (Interest)"];
  const rows = [
    ["业务部", "\"上个月就提的需求了，到底做不做？\"", "客户合同承诺 / 季度 KPI 压力 / 自己团队绩效"],
    ["技术部", "\"需求不停变，资源就这么多，做不完。\"", "系统稳定 / 团队不加班 / 长期技术债务"],
    ["公司", "两边都得干", "业务增长 + 工程效率 + 人才稳定"]
  ];

  // Header row
  const colX = [0.4, 1.6, 5.5];
  const colW = [1.15, 3.85, 4.1];

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.75, w: 9.2, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  headers.forEach((h, i) => {
    slide.addText(h, {
      x: colX[i] + 0.15, y: 1.75, w: colW[i] - 0.3, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
  });

  rows.forEach((r, i) => {
    const y = 2.2 + i * 0.65;
    const bgColor = i % 2 === 0 ? "FFFFFF" : theme.bg;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 9.2, h: 0.65,
      fill: { color: bgColor }, line: { color: theme.light, width: 0.5 }
    });
    // Party badge
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: colW[0], h: 0.65,
      fill: { color: theme.secondary }, line: { color: theme.secondary, width: 0 }
    });
    slide.addText(r[0], {
      x: 0.4, y: y, w: colW[0], h: 0.65,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(r[1], {
      x: colX[1] + 0.15, y: y, w: colW[1] - 0.3, h: 0.65,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle", lineSpacing: 14
    });
    slide.addText(r[2], {
      x: colX[2] + 0.15, y: y, w: colW[2] - 0.3, h: 0.65,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle", lineSpacing: 14
    });
  });

  // Insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.3, w: 9.2, h: 1.0,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addText("挖到利益后的解", {
    x: 0.55, y: 4.35, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("·  业务部承诺提前 6 周冻结需求，冻结期内零变更\n·  技术部承诺冻结期内交付；解冻期集中 review\n·  双方共同向公司申请了需求冻结期 KPI 豁免权\n·  结果：交付准时率从 40% 升到 85%，加班下降 30%", {
    x: 0.55, y: 4.65, w: 9, h: 0.7,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 14
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("29", {
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
  pres.writeFile({ fileName: "slide-29-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
