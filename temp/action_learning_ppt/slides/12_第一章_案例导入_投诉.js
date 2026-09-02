// 页 12: 案例框 - 投诉率12%案例 (上半)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 12,
  title: '第一章 案例导入：投诉率只降了12%'
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
  slide.addText("案例  /  CASE", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("努力了八个月，投诉率为什么只降了 12%？", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 案例框
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 9, h: 3.3,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 0.1, h: 3.3,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 任务背景
  slide.addText("任务背景", {
    x: 0.85, y: 1.6, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("客户体验团队接到任务：半年内把客户投诉量降低 30%。团队非常认真地工作了。", {
    x: 0.85, y: 1.9, w: 8.4, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top", margin: 0
  });

  // 措施列表 - 5项
  const measures = [
    "全员投诉处理技巧培训",
    "投诉回复 SLA 从 72 小时压缩到 24 小时",
    "建立每周的投诉分析会",
    "增设专门的客诉处理岗位",
    "上线满意度调研系统"
  ];
  measures.forEach((m, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    slide.addShape(pres.shapes.OVAL, {
      x: 0.9 + col * 2.8, y: 2.6 + row * 0.55, w: 0.15, h: 0.15,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(m, {
      x: 1.15 + col * 2.8, y: 2.55 + row * 0.55, w: 2.65, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 结果对比
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.85, y: 3.95, w: 8.4, h: 0.7,
    fill: { color: theme.bg }, line: { type: 'none' }
  });
  slide.addText([
    { text: "六个月后：", options: { color: theme.secondary, fontSize: 14 } },
    { text: "投诉量下降了 12%", options: { color: theme.accent, fontSize: 18, bold: true } },
    { text: "    /    目标：", options: { color: theme.secondary, fontSize: 14 } },
    { text: "30%", options: { color: theme.primary, fontSize: 18, bold: true } }
  ], {
    x: 1, y: 3.95, w: 8.2, h: 0.7,
    fontFace: "Microsoft YaHei",
    align: "left", valign: "middle", margin: 0
  });

  // 转折
  slide.addText("团队困惑 —— 每一项措施都执行得很扎实，方向也没有错。但数字就是不到位。", {
    x: 0.5, y: 4.85, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "12", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "12_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
