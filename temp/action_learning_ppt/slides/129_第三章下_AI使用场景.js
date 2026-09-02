// 页 129: AI使用场景 - 三栏
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 129,
  title: 'AI · 三种使用场景'
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
  slide.addText("AI 辅助  ·  三种有效场景", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("三种有效的 AI 使用场景", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("在你用方法一到五完成框架突破之后，再让 AI 帮你填充内容", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三栏
  const scenarios = [
    {
      x: 0.5,
      n: "01",
      title: "生成跨行业案例",
      desc: "在完成方法三第一步（问题抽象化）之后，用 AI 搜索有类似结构的外部案例。",
      detail: "比手动搜索要快很多",
      hint: "我在解决这样一个问题：[抽象化后的问题]\n请给我列举 5~8 个其他行业的典型案例，以及每个案例背后的底层逻辑。"
    },
    {
      x: 3.7,
      n: "02",
      title: "假约束验证",
      desc: "把一条\"做不到\"的判断提交给 AI，请它从反方向挑战这个判断。",
      detail: "在三个不同角度挑战这个判断",
      hint: "我们认为\"[某条约束]\"是无法改变的。\n请告诉我：这个判断在什么情况下可能不成立？有没有其他组织克服了类似限制？"
    },
    {
      x: 6.9,
      n: "03",
      title: "问题重构的灵感激发",
      desc: "当你自己的重构视角遇到瓶颈时，用 AI 生成更多视角供选择。",
      detail: "5 种完全不同的重新表述",
      hint: "以下是我们正在解决的问题：[当前问题陈述]\n请给我五种完全不同的方式来重新表述这个问题，每种应指向不同类型的解法方向。"
    }
  ];

  scenarios.forEach((s, i) => {
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: s.x, y: 2.05, w: 2.8, h: 3.05,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 顶部色条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: s.x, y: 2.05, w: 2.8, h: 0.08,
      fill: { color: i === 1 ? theme.accent : theme.primary }, line: { type: 'none' }
    });
    // 编号
    slide.addText(s.n, {
      x: s.x + 0.2, y: 2.2, w: 2.4, h: 0.6,
      fontSize: 36, fontFace: "Georgia",
      color: i === 1 ? theme.accent : theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(s.title, {
      x: s.x + 0.2, y: 2.85, w: 2.4, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 描述
    slide.addText(s.desc, {
      x: s.x + 0.2, y: 3.25, w: 2.4, h: 0.85,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
    // 提示词
    slide.addShape(pres.shapes.RECTANGLE, {
      x: s.x + 0.2, y: 4.15, w: 2.4, h: 0.85,
      fill: { color: "FAF7F4" }, line: { type: 'none' }
    });
    slide.addText("参考提示词结构：", {
      x: s.x + 0.3, y: 4.18, w: 2.2, h: 0.2,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(s.hint, {
      x: s.x + 0.3, y: 4.36, w: 2.2, h: 0.6,
      fontSize: 8, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  addFooter(slide, pres, theme, "129", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "129_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
