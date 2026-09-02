// 页 117: 目标反转案例 - 新员工离职
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 117,
  title: '目标反转案例 新员工离职'
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
  slide.addText("目标反转  ·  CASE", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("案例：新员工入职 3 个月内离职率高", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标 - 反转
  slide.addText("反转后的问题：怎么才能让新员工更快地想离职？", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三栏：更严重的做法 | 当前实际 | 改善方向
  const cols = [
    {
      x: 0.5,
      title: "让问题更严重的做法",
      color: theme.accent,
      items: [
        "入职第一天就把最难的任务压过来",
        "不给新员工介绍任何背景信息",
        "让新员工完全靠自己摸索，没人指导",
        "在大家都不认识时要求在会议上发表观点"
      ]
    },
    {
      x: 3.7,
      title: "当前实际",
      color: theme.secondary,
      items: [
        "检查一下：上面这些有没有在做？",
        "（很多时候答案是\"有一部分\"）",
        "",
        "这种发现非常有价值"
      ]
    },
    {
      x: 6.9,
      title: "反转成改善方向",
      color: theme.primary,
      items: [
        "有结构的入职引导期",
        "从相对容易的任务开始建立信心",
        "配备入职导师",
        "在新员工熟悉环境前不暴露在高压评判场景"
      ]
    }
  ];

  cols.forEach((c, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: 2.0, w: 2.8, h: 3.1,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: 2.0, w: 2.8, h: 0.5,
      fill: { color: c.color }, line: { type: 'none' }
    });
    slide.addText(c.title, {
      x: c.x, y: 2.0, w: 2.8, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    const richItems = [];
    c.items.forEach((it, idx) => {
      if (it === "") {
        richItems.push({ text: " ", options: { fontSize: 8 } });
      } else {
        const isHighlight = (i === 0 && idx === 0) || (i === 2 && idx === 0);
        richItems.push({
          text: "• " + it + (idx < c.items.length - 1 ? "\n" : ""),
          options: {
            fontSize: 11,
            color: isHighlight ? c.color : theme.secondary,
            bold: isHighlight
          }
        });
      }
    });

    slide.addText(richItems, {
      x: c.x + 0.15, y: 2.6, w: 2.5, h: 2.45,
      fontFace: "Microsoft YaHei",
      align: "left", valign: "top", margin: 0,
      paraSpaceAfter: 4
    });
  });

  addFooter(slide, pres, theme, "117", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "117_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
