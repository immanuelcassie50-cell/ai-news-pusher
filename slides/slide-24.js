// slide-24.js - Soviet/Russian land power dilemma (苏联/俄罗斯的陆权困境)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 24,
  title: '苏联/俄罗斯的陆权困境'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("苏联/俄罗斯的陆权困境", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Central diagram - Land power characteristics
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 4.4, h: 2.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.08, h: 2.6,
    fill: { color: theme.primary }
  });

  slide.addText("陆权国家的核心特征", {
    x: 0.75, y: 1.35, w: 4.0, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const landFeatures = [
    "陆军主导：规模庞大的地面部队",
    "战略纵深：广袤领土提供防御缓冲",
    "铁路网络：西伯利亚大铁路等动脉",
    "心脏地带：麦金德理论的核心区"
  ];

  landFeatures.forEach((feat, idx) => {
    const y = 1.85 + idx * 0.55;

    slide.addShape("rect", {
      x: 0.75, y: y + 0.12, w: 0.12, h: 0.12,
      fill: { color: theme.accent }
    });

    slide.addText(feat, {
      x: 1.0, y: y, w: 3.7, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right side - The dilemma
  slide.addShape("rect", {
    x: 5.1, y: 1.2, w: 4.4, h: 2.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 5.1, y: 1.2, w: 0.08, h: 2.6,
    fill: { color: theme.accent }
  });

  slide.addText("俄罗斯的战略困境", {
    x: 5.35, y: 1.35, w: 4.0, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  const dilemmas = [
    "出海口受限：波罗的海、黑海被封锁",
    "北极航道：潜力巨大但开发困难",
    "邻国众多：需要分散防御力量",
    "气候限制：港口常年冰封"
  ];

  dilemmas.forEach((dilemma, idx) => {
    const y = 1.85 + idx * 0.55;

    slide.addShape("ellipse", {
      x: 5.35, y: y + 0.1, w: 0.18, h: 0.18,
      fill: { color: theme.accent }
    });

    slide.addText(dilemma, {
      x: 5.65, y: y, w: 3.6, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom comparison
  slide.addShape("rect", {
    x: 0.5, y: 4.0, w: 9.0, h: 0.9,
    fill: { color: theme.primary, transparency: 95 },
    line: { color: theme.primary, width: 1 }
  });

  slide.addText("核心矛盾：", {
    x: 0.7, y: 4.15, w: 1.2, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("陆权国家追求领土安全 → 扩张边境 → 过度拉伸战线 → 内部虚弱", {
    x: 1.85, y: 4.15, w: 7.4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  slide.addText("VS 海权国家：依托盟友体系与海上通道，实现力量投送", {
    x: 1.85, y: 4.5, w: 7.4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("24", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-24-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
