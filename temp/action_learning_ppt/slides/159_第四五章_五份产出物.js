// 页 159: 列表 - 五份产出物
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 159,
  title: '五份产出物'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("产出物  /  Deliverables", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("完成这套文档，你应该带走以下产出物", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 五份产出物 - 横向五卡
  const outputs = [
    { num: "I", title: "方案分类表", source: "第二章" },
    { num: "II", title: "问题重构/假设审计表", source: "第三章上" },
    { num: "III", title: "外部视角/逆向思维记录", source: "第三章下" },
    { num: "IV", title: "候选方案评估表", source: "第四章" },
    { num: "V", title: "最终方案组合", source: "第五章" }
  ];

  outputs.forEach((o, i) => {
    const x = 0.5 + i * 1.85;
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.7, w: 1.75, h: 2.5,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 顶部色条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.7, w: 1.75, h: 0.6,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    // 罗马数字
    slide.addText(o.num, {
      x: x, y: 1.7, w: 1.75, h: 0.6,
      fontSize: 24, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(o.title, {
      x: x + 0.1, y: 2.4, w: 1.55, h: 1.2,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 分割
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.7, y: 3.55, w: 0.35, h: 0.03,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    // 来源
    slide.addText(o.source, {
      x: x + 0.1, y: 3.65, w: 1.55, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, charSpacing: 2,
      align: "center", valign: "middle", margin: 0
    });
  });

  // 底部说明
  slide.addText("这五份东西，加上目标体系、对事分析、利益相关方分析 ——", {
    x: 0.5, y: 4.4, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("构成一个完整的、有内在逻辑联系的课题推进方案。", {
    x: 0.5, y: 4.8, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "159", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "159_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
