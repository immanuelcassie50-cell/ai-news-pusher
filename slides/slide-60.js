// slide-60.js - Application in career development (职业发展中的应用)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 60,
  title: '职业发展中的应用'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("职业发展中的应用", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("如何利用地缘政治框架进行行业选择和职业规划", {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Four career applications
  const applications = [
    {
      num: "01",
      title: "行业周期判断",
      desc: "利用海权/陆权框架判断哪些行业处于上升期",
      example: "海上贸易上升期 → 港口、造船、物流受益",
      icon: "海"
    },
    {
      num: "02",
      title: "地域选择",
      desc: "根据地缘热点区域确定职业发展方向",
      example: "一带一路沿线 → 基础设施建设、外语人才需求",
      icon: "陆"
    },
    {
      num: "03",
      title: "企业战略眼光",
      desc: "选择有地缘政治视野的企业和项目",
      example: "华为、中交建等出海企业需要战略人才",
      icon: "谋"
    },
    {
      num: "04",
      title: "风险预判能力",
      desc: "提前识别可能受地缘冲突影响的行业",
      example: "2022年俄乌冲突 → 能源、粮食供应链重构",
      icon: "势"
    }
  ];

  applications.forEach((app, idx) => {
    const row = Math.floor(idx / 2);
    const col = idx % 2;
    const x = 0.5 + col * 4.6;
    const y = 1.55 + row * 1.85;

    // Card
    slide.addShape("rect", {
      x: x, y: y, w: 4.4, h: 1.65,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Icon circle
    slide.addShape("ellipse", {
      x: x + 0.2, y: y + 0.25, w: 0.8, h: 0.8,
      fill: { color: theme.accent }
    });
    slide.addText(app.icon, {
      x: x + 0.2, y: y + 0.25, w: 0.8, h: 0.8,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Number
    slide.addText(app.num, {
      x: x + 1.15, y: y + 0.15, w: 0.8, h: 0.35,
      fontSize: 11, fontFace: "Arial",
      color: theme.light, bold: false,
      align: "left", valign: "middle"
    });

    // Title
    slide.addText(app.title, {
      x: x + 1.15, y: y + 0.4, w: 3.0, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(app.desc, {
      x: x + 1.15, y: y + 0.8, w: 3.0, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });

    // Example
    slide.addShape("rect", {
      x: x + 0.2, y: y + 1.2, w: 4.0, h: 0.35,
      fill: { color: theme.light, transparency: 50 }
    });
    slide.addText(app.example, {
      x: x + 0.3, y: y + 1.2, w: 3.8, h: 0.35,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom insight
  slide.addText("核心能力：地缘政治视野 + 行业专业知识 = 不可替代性", {
    x: 0.5, y: 5.15, w: 8.5, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("60", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
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
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/slides/slide-60-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
