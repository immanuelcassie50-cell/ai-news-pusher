// slide-17_第一章_AI能力矩阵 - 表格展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 17,
  title: 'AI能力矩阵'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("AI能力成熟度矩阵", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 表格数据
  const tableData = [
    [
      { text: "能力领域", options: { fill: { color: theme.accent }, color: theme.primary, bold: true, align: "center" } },
      { text: "成熟度", options: { fill: { color: theme.accent }, color: theme.primary, bold: true, align: "center" } },
      { text: "企业采用率", options: { fill: { color: theme.accent }, color: theme.primary, bold: true, align: "center" } },
      { text: "商业化程度", options: { fill: { color: theme.accent }, color: theme.primary, bold: true, align: "center" } }
    ],
    [
      { text: "文本生成与处理", options: { align: "center" } },
      { text: "★★★★★", options: { color: theme.accent, align: "center" } },
      { text: "78%", options: { align: "center" } },
      { text: "极高", options: { align: "center" } }
    ],
    [
      { text: "图像生成与识别", options: { align: "center" } },
      { text: "★★★★☆", options: { color: theme.accent, align: "center" } },
      { text: "62%", options: { align: "center" } },
      { text: "高", options: { align: "center" } }
    ],
    [
      { text: "代码生成与调试", options: { align: "center" } },
      { text: "★★★★☆", options: { color: theme.accent, align: "center" } },
      { text: "45%", options: { align: "center" } },
      { text: "高", options: { align: "center" } }
    ],
    [
      { text: "数据分析与洞察", options: { align: "center" } },
      { text: "★★★☆☆", options: { color: theme.light, align: "center" } },
      { text: "38%", options: { align: "center" } },
      { text: "中等", options: { align: "center" } }
    ],
    [
      { text: "复杂推理与规划", options: { align: "center" } },
      { text: "★★☆☆☆", options: { color: theme.light, align: "center" } },
      { text: "22%", options: { align: "center" } },
      { text: "较低", options: { align: "center" } }
    ],
    [
      { text: "多模态融合", options: { align: "center" } },
      { text: "★★☆☆☆", options: { color: theme.light, align: "center" } },
      { text: "18%", options: { align: "center" } },
      { text: "较低", options: { align: "center" } }
    ]
  ];

  slide.addTable(tableData, {
    x: 0.5, y: 1.2, w: 9, h: 3.5,
    colW: [2.8, 1.8, 2.2, 2.2],
    border: { pt: 0.5, color: theme.secondary },
    fontFace: "Microsoft YaHei",
    fontSize: 12,
    color: "FFFFFF",
    fill: { color: theme.secondary }
  });

  // 底部说明
  slide.addText("数据来源：2024企业AI采用调研报告 | 成熟度基于技术可用性与商业化程度综合评估", {
    x: 0.5, y: 4.9, w: 9, h: 0.3,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: "90e0ef",
    align: "left", valign: "middle", margin: 0
  });

  // 页码
  slide.addText("17", {
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
  pres.writeFile({ fileName: "slide-17-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
