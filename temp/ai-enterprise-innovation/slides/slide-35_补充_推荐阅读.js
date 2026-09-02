// slide-35_补充_推荐阅读 - 列表展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 35,
  title: '推荐阅读'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 页面标题
  slide.addText("延伸学习资源", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 分类阅读资源
  const resources = [
    {
      category: "书籍",
      items: [
        { title: "《AI 2041》", author: "李开复" },
        { title: "《The Age of AI》", author: "Henry Kissinger等" },
        { title: "《人类简史》三部曲", author: "尤瓦尔·赫拉利" }
      ]
    },
    {
      category: "报告",
      items: [
        { title: "Gartner AI成熟度曲线", author: "Gartner" },
        { title: "麦肯锡AI全球调研报告", author: "McKinsey" },
        { title: "中国AI产业白皮书", author: "中国信通院" }
      ]
    },
    {
      category: "媒体",
      items: [
        { title: "MIT Technology Review", author: "" },
        { title: "机器之心", author: "" },
        { title: "36氪AI专题", author: "" }
      ]
    }
  ];

  const cardWidth = 2.9;
  const startX = 0.5;
  const gap = 0.25;

  resources.forEach((res, i) => {
    const x = startX + i * (cardWidth + gap);

    // 卡片背景
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: cardWidth, h: 3.5,
      fill: { color: theme.secondary }, line: { type: 'none' }
    });

    // 分类标题
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.2, w: cardWidth, h: 0.5,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(res.category, {
      x: x, y: 1.2, w: cardWidth, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // 资源列表
    res.items.forEach((item, j) => {
      const y = 1.9 + j * 0.9;

      slide.addText(item.title, {
        x: x + 0.15, y: y, w: cardWidth - 0.3, h: 0.4,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: "FFFFFF", bold: true,
        align: "left", valign: "middle", margin: 0
      });

      if (item.author) {
        slide.addText(item.author, {
          x: x + 0.15, y: y + 0.4, w: cardWidth - 0.3, h: 0.3,
          fontSize: 10, fontFace: "Microsoft YaHei",
          color: "90e0ef",
          align: "left", valign: "middle", margin: 0
        });
      }
    });
  });

  // 页码
  slide.addText("35", {
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
  pres.writeFile({ fileName: "slide-35-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
