// slide-122.js - 练习：设计一个合作机制
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 122,
  title: '练习：设计一个合作机制'
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
  slide.addText("练习：设计一个合作机制", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Scenario box
  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fill: { color: theme.light }
  });
  slide.addText("场景：你刚认识一位潜在商业伙伴，计划长期合作。你如何设计3种机制确保合作？", {
    x: 0.7, y: 1.1, w: 8.6, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  // Three mechanism design cards
  const mechanisms = [
    {
      num: "1",
      title: "声誉机制",
      points: ["公开合作协议", "建立第三方见证", "定期公开进展"]
    },
    {
      num: "2",
      title: "惩罚机制",
      points: ["明确违约条款", "设立违约金", "保留法律追索权"]
    },
    {
      num: "3",
      title: "激励相容",
      points: ["利益深度绑定", "分阶段合作", "递增信任额度"]
    }
  ];

  mechanisms.forEach((m, i) => {
    const x = 0.5 + i * 3.1;

    slide.addShape("rect", {
      x: x, y: 2.0, w: 2.9, h: 2.9,
      fill: { color: "ffffff" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Number circle
    slide.addShape("ellipse", {
      x: x + 1.1, y: 2.15, w: 0.7, h: 0.7,
      fill: { color: theme.accent }
    });
    slide.addText(m.num, {
      x: x + 1.1, y: 2.15, w: 0.7, h: 0.7,
      fontSize: 22, fontFace: "Arial",
      color: "ffffff", bold: true, align: "center", valign: "middle"
    });

    slide.addText(m.title, {
      x: x, y: 2.95, w: 2.9, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });

    m.points.forEach((p, j) => {
      const y = 3.5 + j * 0.45;
      slide.addText("• " + p, {
        x: x + 0.25, y: y, w: 2.5, h: 0.4,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary, valign: "middle"
      });
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("122", {
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
  pres.writeFile({ fileName: "slide-122-preview.pptx" });
}
