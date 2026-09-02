// slide-56.js - STEA检查清单
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 56,
  title: 'STEA检查清单'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("STEA检查清单", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Checklist items
  const checklist = [
    { step: "S", item: "我是否先暂停，没有立即介入评判？" },
    { step: "S", item: "我是否观察到了孩子此刻的情绪？" },
    { step: "S", item: "我是否用语言命名了孩子的情绪？" },
    { step: "T", item: "我是否尝试找到情绪背后的需求？" },
    { step: "T", item: "我是否提问而非质问？" },
    { step: "E", item: "我是否邀请孩子一起想解决方案？" },
    { step: "E", item: "我是否记录了所有可能的方案？" },
    { step: "A", item: "我们是否明确约定了各自要做什么？" },
    { step: "A", item: "我们是否约好了检查的时间？" }
  ];

  const startY = 1.15;
  const itemHeight = 0.48;

  checklist.forEach((item, idx) => {
    const y = startY + idx * itemHeight;

    // Step indicator
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y + 0.06, w: 0.36, h: 0.36,
      fill: { color: theme.accent }
    });
    slide.addText(item.step, {
      x: 0.5, y: y + 0.06, w: 0.36, h: 0.36,
      fontSize: 11, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Checkbox
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 1.0, y: y + 0.08, w: 0.28, h: 0.28,
      line: { color: theme.light, width: 1 },
      fill: { color: "FFFFFF" }
    });

    // Item text
    slide.addText(item.item, {
      x: 1.45, y: y, w: 8, h: 0.45,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-56-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
