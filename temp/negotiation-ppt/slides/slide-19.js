// slide-19.js - 分饼 vs 把饼做大 核心认知
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 19, title: '分饼 vs 把饼做大' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M1 · 两种思维的根本差异", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("从\"分饼思维\"升级到\"把饼做大\"", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Comparison table
  const headers = ["维度", "分饼思维", "把饼做大思维"];
  const rows = [
    ["看待资源", "资源是固定的，一方多就意味着另一方少", "资源可通过交换和创造变得更多"],
    ["关注点", "关注立场（他要什么，我要什么）", "关注利益（他为什么想要，他真正在乎什么）"],
    ["信息策略", "尽量隐藏自己的信息", "用战略性透明换对方的真实信息"],
    ["关系观", "谈判是冲突，关系会受损", "谈判可以是合作，关系可以增强"],
    ["方案来源", "妥协、分摊、轮流", "共同创造、整合、发明"],
    ["结果预期", "一方赢一方输，或都凑合", "双方都比\"不谈\"更好"]
  ];

  // Header row
  const colX = [0.4, 2.3, 5.5];
  const colW = [1.85, 3.1, 4.1];

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.5, w: 9.2, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  headers.forEach((h, i) => {
    slide.addText(h, {
      x: colX[i] + 0.15, y: 1.5, w: colW[i] - 0.3, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle"
    });
  });

  rows.forEach((r, i) => {
    const y = 2.0 + i * 0.42;
    const bgColor = i % 2 === 0 ? "FFFFFF" : theme.bg;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 9.2, h: 0.42,
      fill: { color: bgColor }, line: { color: theme.light, width: 0.5 }
    });
    r.forEach((c, j) => {
      const isFirst = j === 0;
      slide.addText(c, {
        x: colX[j] + 0.15, y: y, w: colW[j] - 0.3, h: 0.42,
        fontSize: isFirst ? 11 : 10.5,
        fontFace: "Microsoft YaHei",
        color: isFirst ? theme.primary : (j === 1 ? theme.secondary : theme.primary),
        bold: isFirst, valign: "middle"
      });
    });
  });

  // Footer
  slide.addText("\"把饼做大\"是这门课的元原则——卡住时回到这里：我在分饼还是在把饼做大？", {
    x: 0.4, y: 4.95, w: 8.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true, bold: true
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("19", {
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
  pres.writeFile({ fileName: "slide-19-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
