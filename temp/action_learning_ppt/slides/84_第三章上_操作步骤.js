// 页 84: 第三章上 - 操作步骤（流程 5 步）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 84,
  title: '操作步骤 5 步'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 顶部小标
  slide.addText("方法一  /  5 步操作流程", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("问题重构的 5 个操作步骤", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副说明
  slide.addText("按顺序走完这 5 步，你的问题陈述会经历一次完整的重构", {
    x: 0.5, y: 1.42, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 5 步横向流程
  const steps = [
    { num: "1", title: "写下原问题", desc: "把当前的问题陈述写在纸上" },
    { num: "2", title: "往深走", desc: "用「为什么」连续追问 3-5 次" },
    { num: "3", title: "往上走", desc: "问「最终为了什么」，找到上一层目标" },
    { num: "4", title: "横向移动", desc: "问「改变对象/环节，目标能否达成」" },
    { num: "5", title: "对比判断", desc: "哪个版本打开的解法空间最大" }
  ];

  const stepW = 1.7;
  const startX = 0.5;
  const gap = 0.15;
  const totalW = steps.length * stepW + (steps.length - 1) * gap;
  const groupStartX = (10 - totalW) / 2;

  steps.forEach((s, i) => {
    const xPos = groupStartX + i * (stepW + gap);
    // 圆形序号
    slide.addShape(pres.shapes.OVAL, {
      x: xPos + (stepW - 0.6) / 2, y: 1.95, w: 0.6, h: 0.6,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(s.num, {
      x: xPos + (stepW - 0.6) / 2, y: 1.95, w: 0.6, h: 0.6,
      fontSize: 22, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(s.title, {
      x: xPos, y: 2.7, w: stepW, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 描述
    slide.addText(s.desc, {
      x: xPos, y: 3.15, w: stepW, h: 1.0,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "top", margin: 0
    });
    // 连接线
    if (i < steps.length - 1) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: xPos + stepW + 0.01, y: 2.22, w: gap - 0.02, h: 0.04,
        fill: { color: theme.light }, line: { type: 'none' }
      });
    }
  });

  // 底部小贴士
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.5, w: 9, h: 0.6,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addText("重要提醒  /  ", {
    x: 0.7, y: 4.5, w: 1.4, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("问题重构不是推翻目标，而是找到更好的切入点 —— 根本目标没有变", {
    x: 2.0, y: 4.5, w: 7.3, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "84", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "84_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
