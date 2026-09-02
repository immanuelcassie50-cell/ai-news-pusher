// slide-41.js - Practical exercise: Analyze a country's strategy
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'exercise',
  index: 41,
  title: '实战练习：用指标分析某国战略'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("实战练习：用指标分析某国战略", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Exercise label
  slide.addShape("roundRect", {
    x: 8.3, y: 0.2, w: 1.4, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("实战练习", {
    x: 8.3, y: 0.2, w: 1.4, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Analysis framework
  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 9, h: 0.5,
    fill: { color: theme.light }
  });
  slide.addText("分析框架：四维指标评估", {
    x: 0.7, y: 1.1, w: 8.6, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Four analysis dimensions
  const dimensions = [
    { num: "1", title: "军费结构", question: "海军vs陆军比例？" },
    { num: "2", title: "基建投向", question: "港口vs铁路投资？" },
    { num: "3", title: "外交重心", question: "海洋联盟vs陆陆联盟？" },
    { num: "4", title: "军事部署", question: "海外基地vs边境驻军？" }
  ];

  dimensions.forEach((dim, idx) => {
    const x = 0.5 + idx * 2.35;
    const y = 1.75;

    // Number circle
    slide.addShape("ellipse", {
      x: x + 0.85, y: y, w: 0.45, h: 0.45,
      fill: { color: theme.accent }
    });
    slide.addText(dim.num, {
      x: x + 0.85, y: y, w: 0.45, h: 0.45,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(dim.title, {
      x: x, y: y + 0.55, w: 2.2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Question
    slide.addText(dim.question, {
      x: x, y: y + 0.9, w: 2.2, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Case study template
  slide.addShape("rect", {
    x: 0.5, y: 3.2, w: 9, h: 1.7,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 3.2, w: 9, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("练习案例", {
    x: 0.7, y: 3.2, w: 8.6, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Case study grid
  const cases = [
    { country: "日本", hint: "航母化、防卫转向" },
    { country: "印度", hint: "两洋战略、混合型" },
    { country: "澳大利亚", hint: "奥库斯、AUKUS" },
    { country: "土耳其", hint: "北约成员、地理特殊" }
  ];

  cases.forEach((c, idx) => {
    const x = 0.7 + idx * 2.25;

    slide.addShape("rect", {
      x: x, y: 3.8, w: 2.0, h: 0.9,
      fill: { color: theme.light }
    });

    slide.addText(c.country, {
      x: x, y: 3.85, w: 2.0, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(c.hint, {
      x: x, y: 4.25, w: 2.0, h: 0.4,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Bottom instruction
  slide.addShape("rect", {
    x: 0.5, y: 5.05, w: 9, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("思考：你分析的国家的战略取向是海权、陆权还是混合型？", {
    x: 0.7, y: 5.05, w: 8.6, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("41", {
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
  pres.writeFile({ fileName: "slide-41-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
