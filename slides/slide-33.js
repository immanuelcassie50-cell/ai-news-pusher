// slide-33.js - Indicator 1: Military expenditure structure analysis
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 33,
  title: '指标一：军费结构分析'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("指标一：军费结构分析", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Indicator label badge
  slide.addShape("roundRect", {
    x: 8.5, y: 0.2, w: 1.2, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("指标1", {
    x: 8.5, y: 0.2, w: 1.2, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Left: Concept explanation
  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 4.4, h: 2.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 4.4, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("核心逻辑", {
    x: 0.5, y: 1.15, w: 4.4, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  const coreLogic = [
    "军费结构折射战略优先级",
    "海军 vs 陆军比重判断海权/陆权倾向",
    "军备采购方向：航母vs坦克"
  ];

  coreLogic.forEach((point, idx) => {
    const y = 1.8 + idx * 0.6;

    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.1, w: 0.18, h: 0.18,
      fill: { color: theme.accent }
    });

    slide.addText(point, {
      x: 1.0, y: y, w: 3.7, h: 0.55,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "top"
    });
  });

  // Right: Case comparison
  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 4.4, h: 2.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 4.4, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("典型案例", {
    x: 5.1, y: 1.15, w: 4.4, h: 0.5,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Sea power example
  slide.addShape("rect", {
    x: 5.25, y: 1.8, w: 2.0, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("海权国家", {
    x: 5.25, y: 1.8, w: 2.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("海军占比 > 40%", {
    x: 5.25, y: 2.25, w: 2.0, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Land power example
  slide.addShape("rect", {
    x: 7.45, y: 1.8, w: 2.0, h: 0.4,
    fill: { color: theme.secondary }
  });
  slide.addText("陆权国家", {
    x: 7.45, y: 1.8, w: 2.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("陆军占比 > 60%", {
    x: 7.45, y: 2.25, w: 2.0, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  // Examples
  slide.addText("美国：11艘航母战斗群", {
    x: 5.25, y: 2.75, w: 4.1, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });
  slide.addText("俄罗斯：坦克数量全球前列", {
    x: 5.25, y: 3.1, w: 4.1, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Bottom: Data source note
  slide.addShape("rect", {
    x: 0.5, y: 3.95, w: 9, h: 0.65,
    fill: { color: theme.light }
  });
  slide.addText("数据来源：SIPRI军费数据库 | NATO军事预算报告 | 各國國防白皮書", {
    x: 0.7, y: 3.95, w: 8.6, h: 0.65,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Key insight box
  slide.addShape("rect", {
    x: 0.5, y: 4.75, w: 9, h: 0.55,
    fill: { color: theme.accent, transparency: 88 }
  });
  slide.addText("关键洞察：军费结构是判断国家战略取向的最直接指标之一", {
    x: 0.7, y: 4.75, w: 8.6, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("33", {
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
  pres.writeFile({ fileName: "slide-33-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
