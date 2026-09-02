// 页 146: 解释 - 练习 评估你的候选方案
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 146,
  title: '练习：评估你的候选方案'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("练习  /  Exercise", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("评估你的候选方案", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 操作方式
  slide.addText("操作方式", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 3,
    align: "left", valign: "middle", margin: 0
  });

  // 步骤列表
  const steps = [
    "把你的候选方案（来自第三章发散 + 第二章保留的第一类）逐一进行评估",
    "先做可行性筛选 —— 可行性高的进入矩阵；可行性受限的，先放进「可行性提升路径」",
    "对进入矩阵的方案做 ★★★ / ★★ / ★ / ✗ 的判断",
    "先各自独立填写，不要互相讨论，15~20 分钟",
    "完成后两人一组互相分享 —— 重点讨论有分歧的地方"
  ];

  steps.forEach((s, i) => {
    const y = 2.0 + i * 0.5;
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y, w: 0.32, h: 0.32,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: y, w: 0.32, h: 0.32,
      fontSize: 12, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    slide.addText(s, {
      x: 0.95, y: y - 0.05, w: 8.5, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 底部提醒
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.6, w: 9, h: 0.6,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("💡  关于「有效性」的常见困惑 —— 见下一页示例。", {
    x: 0.5, y: 4.6, w: 9, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "146", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "146_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
