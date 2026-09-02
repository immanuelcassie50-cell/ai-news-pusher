// 页 19: 案例 - 员工流失 (入职6个月)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 19,
  title: '第一章 天花板一 案例：员工流失'
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
  slide.addText("案例  /  CEILING 01", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("另一个例子 —— 员工流失", {
    x: 0.5, y: 0.85, w: 9, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 案例框
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 9, h: 3.55,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.55, w: 0.1, h: 3.55,
    fill: { color: theme.primary }, line: { type: 'none' }
  });

  // 故事线
  slide.addText("一个团队想解决「员工流失率高」的问题，于是做了：", {
    x: 0.85, y: 1.7, w: 8.4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三种方案
  const actions = [
    { num: "1", text: "加薪方案" },
    { num: "2", text: "福利改善方案" },
    { num: "3", text: "文化建设方案" }
  ];
  actions.forEach((a, i) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.85 + i * 2.85, y: 2.2, w: 2.7, h: 0.6,
      fill: { color: theme.bg }, line: { type: 'none' }
    });
    slide.addShape(pres.shapes.OVAL, {
      x: 0.95 + i * 2.85, y: 2.35, w: 0.3, h: 0.3,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(a.num, {
      x: 0.95 + i * 2.85, y: 2.35, w: 0.3, h: 0.3,
      fontSize: 11, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    slide.addText(a.text, {
      x: 1.35 + i * 2.85, y: 2.32, w: 2.15, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // 转折
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.85, y: 3.0, w: 8.4, h: 0.05,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("后来发现", {
    x: 0.85, y: 3.15, w: 8.4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 关键数据
  slide.addText("60%", {
    x: 0.85, y: 3.55, w: 1.6, h: 1.0,
    fontSize: 60, fontFace: "Georgia",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("的离职发生在", {
    x: 2.5, y: 3.6, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("入职 6 个月内", {
    x: 2.5, y: 3.95, w: 4, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("根本原因：入职培训体系不完善、新人无法在短期内胜任工作。", {
    x: 0.85, y: 4.55, w: 8.4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  // 关键判断
  slide.addText("问题定义把解法范围框定在了「留住已经不满意的人」，而不是「帮新人快速成功」。", {
    x: 0.5, y: 5.2, w: 9, h: 0.18,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "19", "第一章 看清常规方案的天花板");
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
  pres.writeFile({ fileName: "19_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
