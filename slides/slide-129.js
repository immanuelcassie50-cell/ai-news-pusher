// slide-129.js - 五大模块回顾
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 129,
  title: '五大模块回顾'
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
  slide.addText("五大模块回顾", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Five modules in a visual flow
  const modules = [
    { num: "01", title: "困境入门", desc: "理解囚徒困境的本质", color: theme.primary },
    { num: "02", title: "合作可能", desc: "重复博弈如何产生合作", color: theme.secondary },
    { num: "03", title: "现实案例", desc: "商业、政治、社交中的博弈", color: theme.accent },
    { num: "04", title: "机制设计", desc: "如何设计促进合作的规则", color: theme.primary },
    { num: "05", title: "个人应用", desc: "TFT策略的实际运用", color: theme.secondary }
  ];

  // Horizontal flow with connecting line
  slide.addShape(pres.shapes.LINE, {
    x: 1.2, y: 2.0, w: 7.6, h: 0,
    line: { color: theme.light, width: 3 }
  });

  modules.forEach((m, i) => {
    const x = 0.5 + i * 1.85;

    // Circle with number
    slide.addShape("ellipse", {
      x: x + 0.55, y: 1.7, w: 0.6, h: 0.6,
      fill: { color: m.color }
    });
    slide.addText(m.num, {
      x: x + 0.55, y: 1.7, w: 0.6, h: 0.6,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true, align: "center", valign: "middle"
    });

    // Card below
    slide.addShape("rect", {
      x: x, y: 2.5, w: 1.7, h: 1.6,
      fill: { color: "ffffff" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 135, opacity: 0.06 }
    });

    slide.addText(m.title, {
      x: x, y: 2.6, w: 1.7, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });

    slide.addText(m.desc, {
      x: x + 0.1, y: 3.1, w: 1.5, h: 0.9,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", valign: "top"
    });
  });

  // Bottom summary
  slide.addShape("rect", {
    x: 0.5, y: 4.35, w: 9, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("从困境认知 → 合作机制 → 实践应用的完整路径", {
    x: 0.5, y: 4.35, w: 9, h: 0.7,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("129", {
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
  pres.writeFile({ fileName: "slide-129-preview.pptx" });
}
