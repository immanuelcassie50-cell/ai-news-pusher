// slide-87.js - Early Win Identification
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 87,
  title: '早期成功案例识别与推广'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("早期成功案例识别与推广", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Process flow
  const steps = [
    { title: "发现", desc: "识别早期成功案例", icon: "🔍" },
    { title: "验证", desc: "确认成功的真实性和可复制性", icon: "✓" },
    { title: "宣传", desc: "通过多种渠道传播成功故事", icon: "📢" },
    { title: "推广", desc: "将成功经验复制到更大范围", icon: "📈" }
  ];

  steps.forEach((s, i) => {
    const x = 0.5 + i * 2.4;
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.6, y: 1.2, w: 0.8, h: 0.8,
      fill: { color: theme.accent }
    });
    slide.addText(s.icon, {
      x: x + 0.6, y: 1.35, w: 0.8, h: 0.5,
      fontSize: 20, align: "center"
    });
    slide.addText(s.title, {
      x: x, y: 2.1, w: 2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center"
    });
    slide.addText(s.desc, {
      x: x, y: 2.5, w: 2, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });
    if (i < steps.length - 1) {
      slide.addShape(pres.shapes.LINE, {
        x: x + 2, y: 1.6, w: 0.4, h: 0,
        line: { color: theme.accent, width: 2 }
      });
    }
  });

  // Key principles
  slide.addText("关键原则：", {
    x: 0.5, y: 3.4, w: 2, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const principles = [
    "选择有代表性的案例，让目标人群看到自己的影子",
    "案例要具体、可量化、有数据支撑",
    "讲述真实的故事，而不是完美的宣传材料",
    "让"成功者"自己讲述，比别人讲更有说服力"
  ];

  principles.forEach((p, i) => {
    slide.addText("• " + p, {
      x: 0.5, y: 3.8 + i * 0.42, w: 9, h: 0.38,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
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
  pres.writeFile({ fileName: "slide-87-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
