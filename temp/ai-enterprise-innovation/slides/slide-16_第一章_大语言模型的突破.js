// slide-16_第一章_大语言模型的突破 - 解释说明
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 16,
  title: '大语言模型的突破'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部标签
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.4, w: 0.08, h: 0.4,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("KEY BREAKTHROUGH", {
    x: 0.7, y: 0.4, w: 4, h: 0.4,
    fontSize: 11, fontFace: "Arial",
    color: theme.accent, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });

  // 页面标题
  slide.addText("GPT时刻的意义", {
    x: 0.5, y: 0.9, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 核心概念框
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 9, h: 1.4,
    fill: { color: theme.primary }, line: { color: theme.accent, width: 2 }
  });

  slide.addText("大语言模型（LLM）展现了\"涌现能力\"（Emergent Capabilities）", {
    x: 0.7, y: 1.85, w: 8.6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("在模型规模超过某个临界点后，突然涌现出在小模型上不存在的能力——\n推理、代码生成、多步规划、跨域知识整合……", {
    x: 0.7, y: 2.4, w: 8.6, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "center", valign: "top", margin: 0
  });

  // 三个关键特征
  const features = [
    { title: "通用智能", desc: "一个模型可以处理多种任务，无需针对每个任务单独训练" },
    { title: "自然语言交互", desc: "人类可以用自然语言与AI系统进行复杂对话和推理" },
    { title: "知识涌现", desc: "从海量数据中自动学习到此前未明确教过的知识和模式" }
  ];

  const cardWidth = 2.8;
  const startX = 0.6;
  const gap = 0.3;
  const y = 3.4;

  features.forEach((feat, i) => {
    const x = startX + i * (cardWidth + gap);

    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: 1.5,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    // 顶部小条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardWidth, h: 0.06,
      fill: { color: theme.accent }, line: { type: 'none' }
    });

    // 标题
    slide.addText(feat.title, {
      x: x, y: y + 0.2, w: cardWidth, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 描述
    slide.addText(feat.desc, {
      x: x + 0.15, y: y + 0.7, w: cardWidth - 0.3, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      align: "center", valign: "top", margin: 0
    });
  });

  // 页码
  slide.addText("16", {
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
  pres.writeFile({ fileName: "slide-16-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
