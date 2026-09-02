// 页 75: 第三章上 - 三个重构方向（三栏）
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 75,
  title: '三个重构方向导览'
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
  slide.addText("方法一  /  三个重构方向", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("三个重构方向", {
    x: 0.5, y: 0.8, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副说明
  slide.addText("改变问题的表述方式有三种基本动作", {
    x: 0.5, y: 1.42, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三栏卡片
  const directions = [
    {
      num: "01",
      title: "往深走",
      en: "GO DEEPER",
      desc: "从表象到本质",
      detail: "不断追问「为什么」，找到产生症状的原因而非症状本身",
      color: theme.primary
    },
    {
      num: "02",
      title: "往上走",
      en: "GO UP",
      desc: "从解决问题到消除问题",
      detail: "追问最终目标，从更高层次的入口看问题",
      color: theme.accent
    },
    {
      num: "03",
      title: "横向移动",
      en: "GO LATERAL",
      desc: "改变对象或切入点",
      detail: "改变「谁在做」或「在哪个环节做」，重新定义问题的边界",
      color: theme.secondary
    }
  ];

  directions.forEach((d, i) => {
    const xPos = 0.5 + i * 3.05;
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 1.95, w: 2.85, h: 3.0,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    // 顶部色块
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos, y: 1.95, w: 2.85, h: 0.7,
      fill: { color: d.color }, line: { type: 'none' }
    });
    // 数字
    slide.addText(d.num, {
      x: xPos + 0.2, y: 1.95, w: 0.8, h: 0.7,
      fontSize: 28, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 英文
    slide.addText(d.en, {
      x: xPos + 1.0, y: 1.95, w: 1.7, h: 0.7,
      fontSize: 10, fontFace: "Georgia",
      color: "FFFFFF",
      align: "right", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(d.title, {
      x: xPos + 0.2, y: 2.8, w: 2.5, h: 0.5,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: d.color, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 描述
    slide.addText(d.desc, {
      x: xPos + 0.2, y: 3.3, w: 2.5, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 分割
    slide.addShape(pres.shapes.RECTANGLE, {
      x: xPos + 0.2, y: 3.7, w: 0.4, h: 0.03,
      fill: { color: theme.light }, line: { type: 'none' }
    });
    // 详细说明
    slide.addText(d.detail, {
      x: xPos + 0.2, y: 3.85, w: 2.5, h: 1.0,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  // 底部
  slide.addText("三个方向都改变的是问题的切入位置，目标本身没变", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "75", "第三章（上）换一套假设思考");
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
  pres.writeFile({ fileName: "75_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
