// slide-108.js - Knowledge Review
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 108,
  title: '核心知识点回顾'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("核心知识点回顾", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Five modules summary
  const modules = [
    { num: "01", title: "囚徒困境的本质", desc: "个体理性与集体理性的冲突" },
    { num: "02", title: "合作的可能性条件", desc: "重复博弈与声誉机制" },
    { num: "03", title: "现实案例与模式", desc: "商业、政治、社会中的博弈" },
    { num: "04", title: "机制设计三方向", desc: "改变收益、改变预期、改变文化" },
    { num: "05", title: "个人与组织应用", desc: "声誉投资、谈判策略、组织激励" }
  ];

  modules.forEach((m, idx) => {
    const y = 1.15 + idx * 0.82;

    // Number box
    slide.addShape("roundRect", {
      x: 0.5, y: y, w: 0.8, h: 0.65,
      fill: { color: idx === 0 ? theme.primary : idx === 4 ? theme.accent : theme.secondary },
      rectRadius: 0.08
    });
    slide.addText(m.num, {
      x: 0.5, y: y, w: 0.8, h: 0.65,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(m.title, {
      x: 1.5, y: y, w: 3.5, h: 0.65,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(m.desc, {
      x: 5.0, y: y, w: 4.5, h: 0.65,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });

    // Divider line (except last)
    if (idx < 4) {
      slide.addShape("rect", {
        x: 0.5, y: y + 0.72, w: 9, h: 0.01,
        fill: { color: theme.light }
      });
    }
  });

  // Bottom note
  slide.addShape("roundRect", {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.08
  });
  slide.addText("五大模块构建完整的博弈论思维框架", {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("108", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

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
  pres.writeFile({ fileName: "slide-108-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
