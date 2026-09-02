// slide-131.js - 行为博弈论视角
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 131,
  title: '行为博弈论视角'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("行为博弈论视角", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Opening statement
  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 9, h: 0.6,
    fill: { color: theme.light }
  });
  slide.addText("Real people don't always act \"rationally\"", {
    x: 0.7, y: 1.1, w: 8.6, h: 0.6,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle"
  });

  // Three aspects with icons
  const aspects = [
    {
      icon: "BR",
      title: "Bounded rationality",
      cnTitle: "有限理性",
      points: [
        "人们无法完美计算所有可能性",
        "信息获取成本限制决策质量",
        "认知负荷导致简化策略"
      ]
    },
    {
      icon: "CB",
      title: "Cognitive biases",
      cnTitle: "认知偏差",
      points: [
        "过度自信：高估自己的判断",
        "后见之明：事后认为可预测",
        "锚定效应：被初始信息绑架"
      ]
    },
    {
      icon: "EF",
      title: "Emotions in games",
      cnTitle: "情绪因素",
      points: [
        "愤怒导致不理性的报复",
        "恐惧使人做出次优选择",
        "信任感影响合作意愿"
      ]
    }
  ];

  aspects.forEach((a, i) => {
    const x = 0.5 + i * 3.1;

    // Icon circle
    slide.addShape("ellipse", {
      x: x + 1.05, y: 1.85, w: 0.8, h: 0.8,
      fill: { color: i === 0 ? theme.primary : i === 1 ? theme.secondary : theme.accent }
    });
    slide.addText(a.icon, {
      x: x + 1.05, y: 1.85, w: 0.8, h: 0.8,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // English title
    slide.addText(a.title, {
      x: x, y: 2.75, w: 2.9, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Chinese subtitle
    slide.addText(a.cnTitle, {
      x: x, y: 3.1, w: 2.9, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });

    // Divider line
    slide.addShape(pres.shapes.LINE, {
      x: x + 0.3, y: 3.5, w: 2.3, h: 0,
      line: { color: theme.light, width: 1 }
    });

    // Points (body text NOT bold)
    a.points.forEach((p, j) => {
      const y = 3.65 + j * 0.45;
      slide.addText("- " + p, {
        x: x + 0.15, y: y, w: 2.6, h: 0.42,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, bold: false,
        align: "left", valign: "middle"
      });
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("131", {
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
  pres.writeFile({ fileName: "slide-131-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
