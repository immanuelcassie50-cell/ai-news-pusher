// slide-109.js - Key Frameworks
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 109,
  title: '核心分析框架'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("核心分析框架", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Four frameworks in 2x2 grid
  const frameworks = [
    { title: "收益矩阵分析", desc: "将情境转化为2x2收益矩阵\n识别每个玩家的最优策略\n找到均衡点", icon: "1" },
    { title: "重复博弈策略", desc: "判断是单次还是重复博弈\n设计触发策略\n建立长期合作预期", icon: "2" },
    { title: "背叛成本评估", desc: "量化背叛的短期收益\n计算声誉损失的长期成本\n权衡利弊", icon: "3" },
    { title: "合作收益计算", desc: "识别正和空间\n计算合作剩余\n设计分配机制", icon: "4" }
  ];

  const cardWidth = 4.35;
  const cardHeight = 1.85;
  const startX = 0.5;
  const gapX = 0.3;
  const startY = 1.15;
  const gapY = 0.25;

  frameworks.forEach((f, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = startX + col * (cardWidth + gapX);
    const y = startY + row * (cardHeight + gapY);

    // Card
    slide.addShape("roundRect", {
      x: x, y: y, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 },
      rectRadius: 0.08
    });

    // Number circle
    slide.addShape("ellipse", {
      x: x + 0.2, y: y + 0.2, w: 0.55, h: 0.55,
      fill: { color: idx === 0 ? theme.primary : idx === 1 ? theme.accent : idx === 2 ? theme.secondary : theme.light }
    });
    slide.addText(f.icon, {
      x: x + 0.2, y: y + 0.2, w: 0.55, h: 0.55,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(f.title, {
      x: x + 0.9, y: y + 0.2, w: 3.2, h: 0.5,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(f.desc, {
      x: x + 0.2, y: y + 0.85, w: cardWidth - 0.4, h: 0.9,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });
  });

  // Bottom note
  slide.addShape("roundRect", {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.08
  });
  slide.addText("框架是工具，洞察是目的 — 用框架分析，用智慧决策", {
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
  slide.addText("109", {
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
  pres.writeFile({ fileName: "slide-109-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
