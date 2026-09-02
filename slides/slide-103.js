// slide-103.js - Internal Organizational Games
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 103,
  title: '组织内部的博弈'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("组织内部的博弈", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Three conflict zones
  const conflicts = [
    {
      left: "部门 vs 部门",
      desc: "销售要业绩，生产要稳定\n财务要控制成本，研发要投入\n各自的KPI可能导致内部博弈",
      color: theme.primary
    },
    {
      left: "总部 vs 区域",
      desc: "总部要标准，区域要灵活\n总部要集中，区域要授权\n集权与分权的永恒张力",
      color: theme.accent
    },
    {
      left: "管理 vs 员工",
      desc: "管理层要效率，员工要福利\n短期绩效 vs 长期发展\n委托代理问题",
      color: theme.secondary
    }
  ];

  conflicts.forEach((c, idx) => {
    const y = 1.2 + idx * 1.35;

    // Left colored label
    slide.addShape("roundRect", {
      x: 0.5, y: y, w: 2.8, h: 1.1,
      fill: { color: c.color },
      rectRadius: 0.08
    });
    slide.addText(c.left, {
      x: 0.5, y: y, w: 2.8, h: 1.1,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Right description box
    slide.addShape("roundRect", {
      x: 3.5, y: y, w: 6.0, h: 1.1,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 },
      rectRadius: 0.08
    });
    slide.addText(c.desc, {
      x: 3.7, y: y + 0.1, w: 5.6, h: 0.9,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape("roundRect", {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.08
  });
  slide.addText("组织设计的关键：将内部竞争博弈转化为内部合作博弈", {
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
  slide.addText("103", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 11, fontFace: "Arial",
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
  pres.writeFile({ fileName: "slide-103-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
