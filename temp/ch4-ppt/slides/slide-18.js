// slide-18.js - 输入时你要做什么
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 18,
  title: '输入时你要做什么'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("输入时你要做什么", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 三件事
  const items = [
    {
      title: "给清晰的背景",
      desc: "谁的任务、用在哪里、什么场合",
      example: "例：这是我负责的项目月报，要在下周一部门会上用"
    },
    {
      title: "给明确的步骤范围",
      desc: "这一轮只做一件事，不要贪心",
      example: "例：这轮只做竞品对比表格，不要写分析结论"
    },
    {
      title: "给具体的格式要求",
      desc: "表格还是段落？中文还是中英对照？长度大概多少？",
      example: "例：做成三列表格，包含产品名、核心参数、优劣势"
    }
  ];

  items.forEach((item, idx) => {
    const yPos = 1.2 + idx * 1.35;

    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: yPos, w: 9, h: 1.2,
      fill: { color: "FFFFFF" },
      rectRadius: 0.1
    });

    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: yPos + 0.15, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(String(idx + 1), {
      x: 0.7, y: yPos + 0.15, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(item.title, {
      x: 1.4, y: yPos + 0.1, w: 3, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(item.desc, {
      x: 1.4, y: yPos + 0.5, w: 7.9, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });

    slide.addText(item.example, {
      x: 1.4, y: yPos + 0.85, w: 7.9, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light, italic: true,
      align: "left", valign: "middle"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-18-preview.pptx" });
}

module.exports = { createSlide, slideConfig };