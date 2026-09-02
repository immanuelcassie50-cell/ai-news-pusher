// slide-79.js - 工作坊复盘
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 79,
  title: '工作坊复盘'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("工作坊复盘", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // 4P retrospective model
  const retrospective = [
    {
      title: "Product 产出",
      desc: "我们最终做出了什么？",
      questions: ["产出了预期的结果吗？", "质量符合标准吗？", "有哪些创新亮点？"]
    },
    {
      title: "Process 过程",
      desc: "我们是如何做的？",
      questions: ["流程是否顺畅高效？", "时间控制是否合理？", "参与度如何？"]
    },
    {
      title: "People 人员",
      desc: "参与者的体验如何？",
      questions: ["每个人都被充分听到了吗？", "团队协作效果如何？", "有哪些能力提升？"]
    },
    {
      title: "Preview 展望",
      desc: "下次如何做得更好？",
      questions: ["哪些做法要保留？", "哪些做法要改进？", "有什么新尝试的想法？"]
    }
  ];

  retrospective.forEach((item, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 0.5 + col * 4.6;
    const y = 1.2 + row * 2.0;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.4, h: 1.85,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.4, h: 0.5,
      fill: { color: i === 0 ? theme.primary : i === 1 ? theme.accent : i === 2 ? theme.secondary : theme.primary }
    });

    slide.addText(item.title, {
      x: x + 0.2, y: y + 0.05, w: 2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true
    });
    slide.addText(item.desc, {
      x: x + 2.2, y: y + 0.05, w: 2, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", align: "right"
    });

    // Questions
    item.questions.forEach((q, j) => {
      slide.addText("• " + q, {
        x: x + 0.25, y: y + 0.6 + j * 0.38, w: 4, h: 0.35,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.secondary
      });
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("79", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };