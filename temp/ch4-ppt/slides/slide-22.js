// slide-22.js - 环节动作总结表
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 22,
  title: '环节动作总结表'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("环节动作总结表", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 表格
  const tableData = [
    {环节: "输入时", 核心动作: "给背景+明确范围+格式要求", 最常见误区: "需求一口气全说，或者格式要求不提"},
    {环节: "生成时", 核心动作: "准备验证标准和下一轮调整思路", 最常见误区: "什么也不做，等着刷新"},
    {环节: "收到输出后", 核心动作: "30秒判断：方向/遗漏/下一步", 最常见误区: "立刻复制粘贴，没有判断"},
    {环节: "迭代时", 核心动作: "精确说哪里改、改成什么、为什么", 最常见误区: "说\"不对，重写\""},
    {环节: "收尾时", 核心动作: "保存有效的提示词进Get笔记", 最常见误区: "取完内容就关，什么都没留下"}
  ];

  // 表头
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("对话环节", {
    x: 0.5, y: 1.2, w: 1.8, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("你的核心动作", {
    x: 2.3, y: 1.2, w: 3.5, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("最常见的误区", {
    x: 5.8, y: 1.2, w: 3.7, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 数据行
  tableData.forEach((row, idx) => {
    const y = 1.7 + idx * 0.7;
    const bgColor = idx % 2 === 0 ? "FFFFFF" : "F8F8F8";

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.7,
      fill: { color: bgColor }
    });

    slide.addText(row.环节, {
      x: 0.5, y: y, w: 1.8, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(row.核心动作, {
      x: 2.3, y: y, w: 3.5, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle"
    });
    slide.addText(row.最常见误区, {
      x: 5.8, y: y, w: 3.7, h: 0.7,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "middle"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-22-preview.pptx" });
}

module.exports = { createSlide, slideConfig };