// slide-26_第一章_核心认知 - 大字总结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 26,
  title: '第一章核心认知'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // 章节标识
  slide.addText("CHAPTER 01", {
    x: 0.5, y: 0.4, w: 3, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  // 页面标题
  slide.addText("核心认知", {
    x: 0.5, y: 0.9, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 核心认知内容
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.8, w: 9, h: 2.8,
    fill: { color: theme.bg, transparency: 30 }, line: { type: 'none' }
  });

  slide.addText("01", {
    x: 0.7, y: 2.0, w: 0.8, h: 0.5,
    fontSize: 24, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("AI不是风口，而是基础设施", {
    x: 1.5, y: 2.0, w: 7.8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("就像电力、互联网一样，AI将渗透到商业的每一个环节，早布局早受益", {
    x: 1.5, y: 2.5, w: 7.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("02", {
    x: 0.7, y: 3.1, w: 0.8, h: 0.5,
    fontSize: 24, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("技术已来，应用落后", {
    x: 1.5, y: 3.1, w: 7.8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("AI工具和能力的成熟度远超企业实际应用水平，存在巨大的价值挖掘空间", {
    x: 1.5, y: 3.6, w: 7.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "left", valign: "middle", margin: 0
  });

  slide.addText("03", {
    x: 0.7, y: 4.2, w: 0.8, h: 0.5,
    fontSize: 24, fontFace: "Georgia",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("窗口期有限，行动需及时", {
    x: 1.5, y: 4.2, w: 7.8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("先行者红利正在缩窄，现在入场为时未晚，但犹豫观望将丧失优势", {
    x: 1.5, y: 4.7, w: 7.8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "left", valign: "middle", margin: 0
  });

  // 页码
  slide.addText("26", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "000814",
    secondary: "003566",
    accent:    "ffc300",
    light:     "ffd60a",
    bg:        "001d3d"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-26-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
