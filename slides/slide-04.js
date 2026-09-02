// slide-04.js - Knowledge Point 2: Three-Step Method (Attention Management)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 4,
  title: '知识点二：注意力管理三步法则'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("知识点二：注意力管理三步法则", {
    x: 0.5, y: 0.2, w: 9, h: 0.45,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Definition card
  slide.addShape("roundRect", {
    x: 0.4, y: 1.0, w: 9.2, h: 0.7,
    fill: { color: theme.light, transparency: 40 },
    rectRadius: 0.08
  });
  slide.addText([
    { text: "定义：", options: { bold: true, color: theme.primary } },
    { text: "注意力管理不是节省时间，而是管理注意力资源的质量。", options: { color: theme.secondary } }
  ], {
    x: 0.6, y: 1.0, w: 8.8, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    valign: "middle"
  });

  // Three Steps - Timeline layout
  const steps = [
    { num: "1", title: "聚焦", desc: "明确目标，一次只做一件事" },
    { num: "2", title: "保持", desc: "排除干扰，维持专注状态" },
    { num: "3", title: "切换", desc: "完成一项后，有意识过渡到下一项" }
  ];

  const stepStartX = 0.6;
  const stepY = 1.95;
  const stepW = 2.7;
  const stepH = 1.6;
  const stepGap = 0.35;

  // Timeline connecting line
  slide.addShape("rect", {
    x: stepStartX + 0.35,
    y: stepY + 0.8,
    w: (stepW + stepGap) * 2 + stepW - 0.7,
    h: 0.04,
    fill: { color: theme.accent }
  });

  steps.forEach((step, idx) => {
    const x = stepStartX + idx * (stepW + stepGap);

    // Step card
    slide.addShape("roundRect", {
      x: x, y: stepY, w: stepW, h: stepH,
      fill: { color: "FFFFFF" },
      rectRadius: 0.1,
      shadow: { type: "outer", color: "000000", blur: 3, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Step number circle
    slide.addShape("ellipse", {
      x: x + stepW / 2 - 0.3, y: stepY - 0.3, w: 0.6, h: 0.6,
      fill: { color: theme.primary }
    });
    slide.addText(step.num, {
      x: x + stepW / 2 - 0.3, y: stepY - 0.3, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Arrow between steps
    if (idx < steps.length - 1) {
      slide.addText("→", {
        x: x + stepW, y: stepY + 0.55, w: stepGap, h: 0.5,
        fontSize: 24, fontFace: "Arial",
        color: theme.accent, bold: true,
        align: "center", valign: "middle"
      });
    }

    // Step title
    slide.addText(step.title, {
      x: x + 0.15, y: stepY + 0.45, w: stepW - 0.3, h: 0.45,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    // Step description
    slide.addText(step.desc, {
      x: x + 0.15, y: stepY + 0.9, w: stepW - 0.3, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center", valign: "top"
    });
  });

  // Case card (bottom left)
  slide.addShape("roundRect", {
    x: 0.4, y: 3.75, w: 5.8, h: 1.25,
    fill: { color: "FFFFFF" },
    rectRadius: 0.08,
    shadow: { type: "outer", color: "000000", blur: 3, offset: 2, angle: 135, opacity: 0.06 }
  });
  slide.addShape("rect", {
    x: 0.4, y: 3.75, w: 0.06, h: 1.25,
    fill: { color: theme.accent }
  });
  slide.addText("案例", {
    x: 0.6, y: 3.82, w: 1, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText('谷爱凌在夺冠前分享："我会把训练和休息完全分开。训练时100%专注，休息时完全不回想训练。"这种"深度沉浸+完全放空"的节奏，是注意力管理的典范。', {
    x: 0.6, y: 4.15, w: 5.4, h: 0.8,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  // Practice card (bottom right)
  slide.addShape("roundRect", {
    x: 6.4, y: 3.75, w: 3.2, h: 1.25,
    fill: { color: theme.primary, transparency: 90 },
    rectRadius: 0.08,
    line: { color: theme.primary, width: 1.5 }
  });
  slide.addText("练习", {
    x: 6.55, y: 3.82, w: 1, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });
  slide.addText("选择一个正在进行的项目，用三步法规划你接下来的工作节奏。", {
    x: 6.55, y: 4.15, w: 2.9, h: 0.8,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "top"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("4", {
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
    secondary: "4a4e69",
    accent: "9a8c98",
    light: "c9ada7",
    bg: "f2e9e4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/slides/slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };