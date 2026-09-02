// slide-82.js - 演练二：知识点的三种讲法
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 82,
  title: '演练二：知识点的三种讲法'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("演练二：知识点的三种讲法", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Instruction text
  slide.addText("选择一个知识点，分别用三种方法讲解（每种2-3分钟）", {
    x: 0.5, y: 1.15, w: 9, h: 0.45,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, margin: 0
  });

  // Three method cards
  const methods = [
    {
      title: "讲授法",
      icon: "A",
      desc: "系统性地讲解知识点的概念、原理、流程",
      tips: ["逻辑清晰", "重点突出", "善用比喻"]
    },
    {
      title: "案例法",
      icon: "B",
      desc: "通过真实案例展示知识点在实际中的应用",
      tips: ["案例真实", "分析深入", "引导思考"]
    },
    {
      title: "实操法",
      icon: "C",
      desc: "让学员亲手操作，体验知识点的具体应用",
      tips: ["步骤明确", "现场指导", "即时反馈"]
    }
  ];

  methods.forEach((method, i) => {
    const x = 0.5 + i * 3.1;

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.75, w: 2.9, h: 3.35,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 1.05, y: 1.95, w: 0.8, h: 0.8,
      fill: { color: theme.primary }
    });
    slide.addText(method.icon, {
      x: x + 1.05, y: 1.95, w: 0.8, h: 0.8,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Method title
    slide.addText(method.title, {
      x: x + 0.15, y: 2.85, w: 2.6, h: 0.45,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", margin: 0
    });

    // Description
    slide.addText(method.desc, {
      x: x + 0.15, y: 3.3, w: 2.6, h: 0.85,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", valign: "top", margin: 0
    });

    // Tips
    method.tips.forEach((tip, j) => {
      slide.addText("• " + tip, {
        x: x + 0.25, y: 4.15 + j * 0.35, w: 2.4, h: 0.35,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.accent, margin: 0
      });
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("82", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4A4A4A",
    accent: "FF6B6B",
    light: "F5F5F5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-82-preview.pptx" });
}

module.exports = { createSlide, slideConfig };