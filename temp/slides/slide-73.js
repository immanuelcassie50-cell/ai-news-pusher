// slide-73.js - Case: Mother Wants Me to Persuade Daughter
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 73, title: '案例：母亲让劝女儿' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left decorative bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("案例：母亲让劝女儿", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Title underline
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 2.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Case steps
  const steps = [
    {
      num: "1",
      text: "母亲私下找我：女儿喜欢那个专业，但你能不能帮我劝劝她，那个专业以后真的不好找工作"
    },
    {
      num: "2",
      text: '我拒绝直接"劝"，而是分别单独聊'
    },
    {
      num: "3",
      text: "母亲真正担心的不是专业本身，是她自己年轻时类似选择没走通吃过亏"
    },
    {
      num: "4",
      text: '女儿真正在意的不是妈妈不理解，是觉得自己从来没被真正问过"你为什么喜欢这个"'
    },
    {
      num: "5",
      text: '在两人都在场的情况下把信息摆出来，谈话性质完全变了：从"谁该听谁的"→"我们各自在担心什么、想要什么"'
    }
  ];

  const startY = 1.1;
  const itemHeight = 0.82;

  steps.forEach((step, idx) => {
    const y = startY + idx * itemHeight;

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.72,
      fill: { color: "FFFFFF" },
      rectRadius: 0.08,
      shadow: { type: `outer`, color: `000000`, blur: 2, offset: 1, angle: 135, opacity: 0.05 }
    });

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.65, y: y + 0.16, w: 0.4, h: 0.4,
      fill: { color: theme.primary }
    });
    slide.addText(step.num, {
      x: 0.65, y: y + 0.16, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: `center`, valign: `middle`
    });

    // Text
    slide.addText(step.text, {
      x: 1.2, y: y + 0.05, w: 8.1, h: 0.62,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      valign: "middle"
    });
  });

  // Key takeaway
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 5.2, w: 9, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.06
  });
  slide.addText('拒绝直接"劝"，而是让双方都听见彼此', {
    x: 0.7, y: 5.2, w: 8.6, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  // Page number badge (circle style, bottom-left)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("73", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-73-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
