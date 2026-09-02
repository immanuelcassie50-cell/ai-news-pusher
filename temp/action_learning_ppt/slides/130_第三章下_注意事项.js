// 页 130: 注意事项 - 列表
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 130,
  title: 'AI使用注意事项'
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
  slide.addText("AI 辅助  ·  三个注意事项", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("使用 AI 的几个注意事项", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("AI 加速但不承担判断 —— 关键决策仍需要你自己", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三个注意
  const cautions = [
    {
      n: "01",
      title: "跨行业案例需自己验证",
      desc: "AI 生成的跨行业案例需要你自己验证其真实性，不能直接作为事实依据引用。",
      emphasis: "AI 可能虚构看似合理但实际不存在的案例"
    },
    {
      n: "02",
      title: "假约束判断结合实际",
      desc: "AI 对\"假约束\"的判断基于通用规律，不了解你的具体组织情境。",
      emphasis: "你需要结合实际情况自己确认"
    },
    {
      n: "03",
      title: "AI 输出也要做质量评估",
      desc: "AI 的输出结果，要放进第二章的\"方案分类\"流程里做质量评估，而不是因为\"AI 说的\"就直接采纳。",
      emphasis: "AI 来源不构成自动背书"
    }
  ];

  cautions.forEach((c, i) => {
    const y = 2.05 + i * 1.07;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.97,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.85, h: 0.97,
      fill: { color: i === 1 ? theme.accent : theme.primary }, line: { type: 'none' }
    });
    slide.addText(c.n, {
      x: 0.5, y: y, w: 0.85, h: 0.97,
      fontSize: 24, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    slide.addText(c.title, {
      x: 1.55, y: y + 0.05, w: 7.8, h: 0.32,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(c.desc, {
      x: 1.55, y: y + 0.35, w: 7.8, h: 0.32,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(c.emphasis, {
      x: 1.55, y: y + 0.65, w: 7.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true,
      align: "left", valign: "middle", margin: 0
    });
  });

  addFooter(slide, pres, theme, "130", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "130_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
