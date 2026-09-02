// slide-84.js - Incentive Alignment (激励机制对齐)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 84,
  title: '激励机制对齐'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("激励机制对齐", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Problem statement
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fill: { color: "c53030", transparency: 90 },
    line: { color: "c53030", width: 1 }
  });
  slide.addText("问题：个人激励与团队目标可能冲突，导致\"囚徒困境\"", {
    x: 0.7, y: 1.1, w: 8.6, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "c53030", bold: false,
    align: "center", valign: "middle"
  });

  // Example: Sales rep
  slide.addText("案例：销售代表的困境", {
    x: 0.5, y: 1.95, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Two boxes showing conflict
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.4, w: 4.3, h: 1.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });
  slide.addText("个人激励", {
    x: 0.7, y: 2.5, w: 3.9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "c53030", bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("追求个人业绩、短期成交\n忽视客户长期价值", {
    x: 0.7, y: 2.9, w: 3.9, h: 0.7,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.2, y: 2.4, w: 4.3, h: 1.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
  });
  slide.addText("公司目标", {
    x: 5.4, y: 2.5, w: 3.9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("建立长期客户关系\n提供整体解决方案", {
    x: 5.4, y: 2.9, w: 3.9, h: 0.7,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Solutions
  slide.addText("对齐方法", {
    x: 0.5, y: 3.9, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const solutions = [
    { title: "KPI设计", desc: "将团队指标纳入个人考核" },
    { title: "共享目标", desc: "设定共同的销售目标" },
    { title: "长期激励", desc: "客户留存率影响长期收益" }
  ];

  const cardWidth = 2.9;
  const startX = 0.55;
  const startY = 4.3;
  const gapX = 0.25;

  solutions.forEach((sol, idx) => {
    const x = startX + idx * (cardWidth + gapX);

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardWidth, h: 0.65,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: 0.06, h: 0.65,
      fill: { color: theme.accent }
    });

    slide.addText(sol.title + "：" + sol.desc, {
      x: x + 0.15, y: startY, w: cardWidth - 0.25, h: 0.65,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Page number badge
  slide.addText("84", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.secondary, bold: false,
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
  pres.writeFile({ fileName: "slide-84-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
