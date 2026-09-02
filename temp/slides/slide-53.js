// slide-53.js - 三问确定风险偏好
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 53,
  title: '三问确定风险偏好'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("三问确定风险偏好", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Three question cards
  const questions = [
    {
      num: "1",
      question: "如果最后掉到保底档，能不能接受？",
      detail: "接受到什么程度？“有点遗憾”还是“会觉得四年过得憋屈”"
    },
    {
      num: "2",
      question: "如果冲的学校录到了完全不喜欢的调剂专业，愿不愿意？",
      detail: "还是宁可去稳一点但专业更合适的"
    },
    {
      num: "3",
      question: "家里对复读的真实态度是什么？",
      detail: "很多家长嘴上说“大不了复读”，但真到那时候未必撑得住"
    }
  ];

  const cardH = 1.3;
  const startY = 1.1;
  const gap = 0.2;

  questions.forEach((q, i) => {
    const y = startY + i * (cardH + gap);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.08 },
      rectRadius: 0.1
    });

    // Number badge
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + (cardH - 0.55) / 2, w: 0.55, h: 0.55,
      fill: { color: theme.accent }
    });
    slide.addText(q.num, {
      x: 0.7, y: y + (cardH - 0.55) / 2, w: 0.55, h: 0.55,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Question text
    slide.addText(q.question, {
      x: 1.5, y: y + 0.15, w: 7.8, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // Detail text
    slide.addText(q.detail, {
      x: 1.5, y: y + 0.65, w: 7.8, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "top"
    });
  });

  // Bottom insight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.light },
    rectRadius: 0.08
  });
  slide.addText("三个问题没有标准答案，关键是帮学生和家长期真实的答案", {
    x: 0.7, y: 5.0, w: 8.6, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge (circle style)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("53", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
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
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-53-preview.pptx" })
    .then(() => console.log("Created: slide-53-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
