// 页 120: 反转三 流程 - 解释
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 120,
  title: '反转三 流程反转'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 顶部标识
  slide.addText("反转三  ·  PROCESS REVERSAL", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("流程反转", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("把当前流程画出来，从最后一步开始往前看", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三个问题
  const questions = [
    {
      n: "01",
      title: "哪个步骤是结果最不可缺的前提？",
      desc: "从最终结果倒推 —— 这个步骤在当前流程里处于什么位置？它是不是应该更靠前？"
    },
    {
      n: "02",
      title: "有没有可以并行的串行步骤？",
      desc: "有没有两个步骤其实可以同时进行，但因为流程设计的惯性被设计成了先后顺序？\n串行改并行，往往是提升流程效率最直接的方式。"
    },
    {
      n: "03",
      title: "有没有\"一直有\"但说不清为什么的步骤？",
      desc: "试着追问：这一步最初是为了解决什么问题？现在还有那个问题吗？\n有时候流程里有些步骤是历史积累的，早就失去了它最初存在的理由。"
    }
  ];

  questions.forEach((q, i) => {
    const y = 2.05 + i * 1.07;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.97,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.85, h: 0.97,
      fill: { color: i === 1 ? theme.accent : theme.primary }, line: { type: 'none' }
    });
    slide.addText(q.n, {
      x: 0.5, y: y, w: 0.85, h: 0.97,
      fontSize: 22, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    slide.addText(q.title, {
      x: 1.55, y: y + 0.1, w: 7.8, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(q.desc, {
      x: 1.55, y: y + 0.45, w: 7.8, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  addFooter(slide, pres, theme, "120", "第三章（下）换一个视角思考");
  return slide;
}

function addFooter(slide, pres, theme, pageNum, sectionName) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 5.42, w: 3, h: 0.02,
    fill: { color: theme.light }, line: { type: 'none' }
  });
  slide.addText(`行动学习 · 创新解决方案  /  ${pageNum}`, {
    x: 0.5, y: 5.46, w: 5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'left', valign: 'middle', margin: 0
  });
  slide.addText(sectionName, {
    x: 6, y: 5.46, w: 3.5, h: 0.25,
    fontSize: 9, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'right', valign: 'middle', margin: 0
  });
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary:   "6B0F0F",
    secondary: "3D3D3D",
    accent:    "B8232C",
    light:     "D4C5BE",
    bg:        "F5F0EC"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "120_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
