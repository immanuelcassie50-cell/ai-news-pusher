// slide-55.js - Leader Roles in Change
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 55,
  title: '变革中管理者的六个关键角色'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革中管理者的六个关键角色", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const roles = [
    { role: "设计师", desc: "设计变革愿景和路径", color: theme.accent },
    { role: "沟通者", desc: "传递信息，解答疑惑", color: theme.primary },
    { role: "支持者", desc: "提供资源和情感支撑", color: theme.accent },
    { role: "协调者", desc: "化解冲突，推动协作", color: theme.primary },
    { role: "监督者", desc: "跟踪进展，及时干预", color: theme.accent },
    { role: "激励者", desc: "调动积极性，庆祝胜利", color: theme.primary }
  ];

  roles.forEach((r, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const x = 0.5 + col * 3.1;
    const y = 1.1 + row * 2.1;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 1.9,
      fill: { color: r.color }
    });
    slide.addText(r.role, {
      x: x, y: y + 0.4, w: 2.9, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(r.desc, {
      x: x + 0.2, y: y + 1.1, w: 2.5, h: 0.6,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "center"
    });
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
  pres.writeFile({ fileName: "slide-55-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
