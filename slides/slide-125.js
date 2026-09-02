// slide-125.js - 进阶：警惕'诱骗-背叛'策略
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 125,
  title: "进阶：警惕'诱骗-背叛'策略"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("进阶：警惕'诱骗-背叛'策略", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Warning box
  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 9, h: 0.6,
    fill: { color: theme.accent, transparency: 20 }
  });
  slide.addText("有些对手可能假装合作，等待时机成熟后突然背叛", {
    x: 0.7, y: 1.1, w: 8.6, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });

  // Two columns
  // Left: Warning signs
  slide.addShape("rect", {
    x: 0.5, y: 1.9, w: 4.4, h: 2.8,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.9, w: 4.4, h: 0.5,
    fill: { color: "c53030" }
  });
  slide.addText("警告信号", {
    x: 0.5, y: 1.9, w: 4.4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  const warnings = [
    "初期过于热情，主动让步太多",
    "要求你先投入，自己迟迟不行动",
    "合同条款模糊，解释权归对方",
    "在关键节点突然变更条件"
  ];

  warnings.forEach((w, i) => {
    const y = 2.55 + i * 0.5;
    slide.addText("⚠ " + w, {
      x: 0.7, y: y, w: 4, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Right: Protection measures
  slide.addShape("rect", {
    x: 5.1, y: 1.9, w: 4.4, h: 2.8,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });

  slide.addShape("rect", {
    x: 5.1, y: 1.9, w: 4.4, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("自我保护措施", {
    x: 5.1, y: 1.9, w: 4.4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  const protections = [
    "小步试探，不一开始就全押",
    "保留退出选项和止损线",
    "要求对等的承诺和投入",
    "建立第三方监督机制"
  ];

  protections.forEach((p, i) => {
    const y = 2.55 + i * 0.5;
    slide.addText("✓ " + p, {
      x: 5.3, y: y, w: 4, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape("rect", {
    x: 0.5, y: 4.85, w: 9, h: 0.55,
    fill: { color: theme.primary }
  });
  slide.addText("信任需要时间验证，别因短期利益牺牲长期安全", {
    x: 0.5, y: 4.85, w: 9, h: 0.55,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("125", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-125-preview.pptx" });
}
