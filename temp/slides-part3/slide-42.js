// slide-42.js - 实操产出 · 使用提示词生成SOP
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 42,
  title: '实操产出 · 使用提示词生成SOP'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("实操产出 · 使用提示词生成SOP", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Time badge
  slide.addShape("roundRect", {
    x: 8.2, y: 0.45, w: 1.3, h: 0.45,
    fill: { color: theme.secondary },
    rectRadius: 0.1
  });
  slide.addText("20分钟", {
    x: 8.2, y: 0.45, w: 1.3, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Process flow - 3 steps
  const steps = [
    { num: "1", title: "复制提示词", desc: "把SOP提示词模板复制到AI工具，填入你的具体信息" },
    { num: "2", title: "运行生成", desc: "运行，拿到AI生成的初稿" },
    { num: "3", title: "人工验证", desc: "用下方验证清单逐项检查" }
  ];

  steps.forEach((step, i) => {
    const x = 0.5 + i * 3.15;

    // Step card
    slide.addShape("rect", {
      x: x, y: 1.5, w: 2.95, h: 3.5,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Step header
    slide.addShape("rect", {
      x: x, y: 1.5, w: 2.95, h: 0.6,
      fill: { color: theme.primary }
    });
    slide.addText("第" + step.num + "步", {
      x: x, y: 1.5, w: 2.95, h: 0.6,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // Step number circle
    slide.addShape("ellipse", {
      x: x + 1.1, y: 2.3, w: 0.7, h: 0.7,
      fill: { color: theme.secondary }
    });
    slide.addText(step.num, {
      x: x + 1.1, y: 2.3, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    // Step title
    slide.addText(step.title, {
      x: x + 0.15, y: 3.2, w: 2.65, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });

    // Step description
    slide.addText(step.desc, {
      x: x + 0.15, y: 3.75, w: 2.65, h: 1.1,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, align: "center", valign: "top"
    });

    // Arrow between steps
    if (i < 2) {
      slide.addShape("rect", {
        x: x + 2.95, y: 3.1, w: 0.2, h: 0.05,
        fill: { color: theme.secondary }
      });
    }
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("42", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "22223b",
    secondary: "c94134",
    accent: "c9ada7",
    light: "f5f5f5",
    bg: "fafafa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-42-preview.pptx" });
}

module.exports = { createSlide, slideConfig };