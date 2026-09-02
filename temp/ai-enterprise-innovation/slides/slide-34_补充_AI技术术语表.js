// slide-34_补充_AI技术术语表 - 表格展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 34,
  title: 'AI技术术语表'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("附录：AI技术术语表", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 术语表格
  const terms = [
    [
      { text: "术语", options: { fill: { color: theme.accent }, color: theme.primary, bold: true, align: "center" } },
      { text: "英文", options: { fill: { color: theme.accent }, color: theme.primary, bold: true, align: "center" } },
      { text: "解释", options: { fill: { color: theme.accent }, color: theme.primary, bold: true, align: "center" } }
    ],
    [
      { text: "大语言模型", options: { align: "center" } },
      { text: "LLM", options: { align: "center" } },
      { text: "Large Language Model，基于深度学习的大规模语言模型", options: { align: "left" } }
    ],
    [
      { text: "生成式AI", options: { align: "center" } },
      { text: "Generative AI", options: { align: "center" } },
      { text: "能够生成文本、图像、音频等内容的人工智能", options: { align: "left" } }
    ],
    [
      { text: "提示工程", options: { align: "center" } },
      { text: "Prompt Engineering", options: { align: "center" } },
      { text: "设计和优化输入提示词以获得更好输出的技术", options: { align: "left" } }
    ],
    [
      { text: "涌现能力", options: { align: "center" } },
      { text: "Emergent Capabilities", options: { align: "center" } },
      { text: "模型规模超过临界点后突然出现的新能力", options: { align: "left" } }
    ],
    [
      { text: "AI Agent", options: { align: "center" } },
      { text: "AI Agent", options: { align: "center" } },
      { text: "能够自主规划、执行多步任务的AI系统", options: { align: "left" } }
    ],
    [
      { text: "RAG", options: { align: "center" } },
      { text: "Retrieval-Augmented Generation", options: { align: "center" } },
      { text: "检索增强生成，结合知识库检索与生成的AI架构", options: { align: "left" } }
    ]
  ];

  slide.addTable(terms, {
    x: 0.5, y: 1.2, w: 9, h: 3.8,
    colW: [2.0, 2.5, 4.5],
    border: { pt: 0.5, color: theme.secondary },
    fontFace: "Microsoft YaHei",
    fontSize: 11,
    color: "FFFFFF",
    fill: { color: theme.secondary }
  });

  // 页码
  slide.addText("34", {
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
  pres.writeFile({ fileName: "slide-34-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
