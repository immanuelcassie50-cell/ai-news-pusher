// 页 136: 列表 - 有效性三角度
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 136,
  title: '有效性三角度'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("有效性的三种检查  /  Three Angles", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("一个方案是否有效，问这三件事", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三个角度
  const angles = [
    {
      num: "I",
      title: "它针对的是哪个引领性指标？",
      body: "如果找不到与对事分析中指标体系的对应关系，需要认真想一下 —— 这个方案究竟在解决什么问题？没有对应指标的方案，可能在解决一个并不是那么重要的问题。"
    },
    {
      num: "II",
      title: "它有没有支撑性的依据？",
      body: "可以是类似情境的成功案例（哪怕来自其他行业），也可以是清晰的因果逻辑 —— 做了 A，为什么会导致 B，为什么 B 会让指标改善？依据链条说不清楚，方案的有效性就值得怀疑。"
    },
    {
      num: "III",
      title: "它在处理根本原因，还是症状？",
      body: "效果是一次性的，还是可以持续的？能够形成持续运作机制的方案，比需要持续推动才能维持效果的方案，有效性更高。"
    }
  ];

  angles.forEach((a, i) => {
    const y = 1.6 + i * 1.15;
    // 数字方块
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.7, h: 0.7,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(a.num, {
      x: 0.5, y: y, w: 0.7, h: 0.7,
      fontSize: 22, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(a.title, {
      x: 1.35, y: y - 0.05, w: 8.1, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 正文
    slide.addText(a.body, {
      x: 1.35, y: y + 0.32, w: 8.1, h: 0.75,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  addFooter(slide, pres, theme, "136", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "136_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
