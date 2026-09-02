// slide-11.js - Content: 不要做的事
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 11,
  title: '不要做的事'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title with warning
  slide.addText("不要做的事", {
    x: 0.5, y: 0.3, w: 3, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Warning items - 2x2 grid
  const warnings = [
    {
      title: "期待AI直接生成[能用的Word文件]",
      desc: "简单文档可以，复杂报告（多级标题/表格/特殊格式）质量不稳定，手动调整比从Markdown整理更费时"
    },
    {
      title: "把豆包输出截图",
      desc: "截图是图片，后续步骤如果需要处理文字，还要再转一次。有下载文字选项的用下载，没有的用全选复制"
    },
    {
      title: "把大段搜索结果原文粘进千问",
      desc: "先自己筛选，把有价值的部分剪下来给千问。搜索结果越长，千问越容易被无关内容带偏"
    },
    {
      title: "一次塞太多信息给千问",
      desc: "千问单次对话有上下文限制，信息太多会导致处理不全或[遗忘]早期内容"
    }
  ];

  warnings.forEach((warn, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const xPos = 0.5 + col * 4.7;
    const yPos = 1.0 + row * 2.0;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: yPos, w: 4.4, h: 1.8,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Red X icon
    slide.addShape(pres.shapes.OVAL, {
      x: xPos + 0.2, y: yPos + 0.2, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText("✕", {
      x: xPos + 0.2, y: yPos + 0.2, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(warn.title, {
      x: xPos + 0.85, y: yPos + 0.2, w: 3.3, h: 0.6,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(warn.desc, {
      x: xPos + 0.2, y: yPos + 0.85, w: 4.0, h: 0.8,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };