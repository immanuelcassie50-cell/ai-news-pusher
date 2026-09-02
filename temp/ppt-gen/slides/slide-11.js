// slide-11.js - Three Key Relationships
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 11,
  title: '变革中的三组关键关系'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革中的三组关键关系", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const relations = [
    {
      title: "组织 ↔ 员工",
      subtitle: "心理契约",
      content: "组织承诺发展的机会\n员工承诺投入与贡献",
      color: theme.accent
    },
    {
      title: "管理者 ↔ 员工",
      subtitle: "信任关系",
      content: "管理者言行一致\n员工愿意跟随",
      color: theme.primary
    },
    {
      title: "变革目标 ↔ 个人利益",
      subtitle: "利益对齐",
      content: "让员工看到关联\n让变革与己相关",
      color: theme.secondary
    }
  ];

  relations.forEach((r, i) => {
    const y = 1.1 + i * 1.45;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 1.3,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.1, h: 1.3,
      fill: { color: r.color }
    });
    slide.addText(r.title, {
      x: 0.8, y: y + 0.15, w: 3, h: 0.45,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: r.color, bold: true, align: "left"
    });
    slide.addText(r.subtitle, {
      x: 0.8, y: y + 0.6, w: 2.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
    slide.addText(r.content, {
      x: 3.5, y: y + 0.3, w: 5.8, h: 0.8,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  slide.addText("三组关系中任何一组断裂，变革都将受阻", {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-11-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
