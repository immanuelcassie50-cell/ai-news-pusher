// 页 148: 案例 - 示例：账单异常自动检测
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 148,
  title: '示例：账单异常自动检测'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("示例  /  Example", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("示例：账单异常自动检测机制", {
    x: 0.5, y: 0.85, w: 9, h: 0.55,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 评估表 - 单行示例
  // 表头
  const headers = ["方案简述", "可行性", "受限需谁改", "有效性", "突破性", "评级"];
  const colWidths = [2.5, 1.0, 1.6, 1.0, 1.0, 1.1];
  const startX = 0.5;
  let cx = startX;

  headers.forEach((h, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: 1.55, w: colWidths[i], h: 0.45,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(h, {
      x: cx, y: 1.55, w: colWidths[i], h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    cx += colWidths[i];
  });

  // 示例行
  const exampleRow = ["账单异常自动检测", "受限", "IT部门负责人", "高", "高", "★★★"];
  cx = startX;
  exampleRow.forEach((v, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: 2.0, w: colWidths[i], h: 0.6,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addText(v, {
      x: cx, y: 2.0, w: colWidths[i], h: 0.6,
      fontSize: i === 5 ? 18 : 12,
      fontFace: i === 5 ? "Georgia" : "Microsoft YaHei",
      color: i === 5 ? theme.accent : (i === 1 || i === 2 ? theme.accent : theme.secondary),
      bold: i === 5,
      align: "center", valign: "middle", margin: 0
    });
    cx += colWidths[i];
  });

  // 解释块
  slide.addText("为什么这样评", {
    x: 0.5, y: 2.85, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 3,
    align: "left", valign: "middle", margin: 0
  });

  // 三栏说明
  const points = [
    { label: "可行性：受限", body: "需要 IT 部门支持，当前立场不明确 —— 先推进利益相关方工作" },
    { label: "有效性：高", body: "账单问题是 60% 投诉的根源；解决根源比解决处理速度效果更持续" },
    { label: "突破性：高", body: "现有方案完全没有触碰账单问题 —— 改变的是问题入口" }
  ];

  points.forEach((p, i) => {
    const y = 3.35 + i * 0.55;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.08, h: 0.45,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(p.label, {
      x: 0.7, y: y, w: 2.4, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(p.body, {
      x: 3.2, y: y, w: 6.3, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部结论
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.95, w: 9, h: 0.35,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("评级 ★★★ —— 但需先推进利益相关方工作，让可行性发生改变。", {
    x: 0.5, y: 4.95, w: 9, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "148", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "148_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
