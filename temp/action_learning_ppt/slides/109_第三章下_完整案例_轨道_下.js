// 页 109: 完整案例 轨道交通 - 下 (原理)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 109,
  title: '完整案例 轨道交通 (下)'
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
  slide.addText("完整案例  ·  轨道交通  ·  下", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("完整案例：轨道交通（下）", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("从外部原理，到本地重建", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 核心原理
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.05, w: 9, h: 1.3,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("核心原理", {
    x: 0.7, y: 2.15, w: 8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, charSpacing: 4, bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("需求平移", {
    x: 0.7, y: 2.4, w: 8, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("通过价格机制和提前购买激励，把需求从峰值时段向两侧平移，使总需求曲线从集中尖峰变成相对平缓的分布。", {
    x: 0.7, y: 2.9, w: 8, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  // 回到本地
  slide.addText("回到轨道交通 —— 可能的路径", {
    x: 0.5, y: 3.55, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三个路径
  const paths = [
    {
      x: 0.5,
      title: "峰值差异化票价",
      desc: "用价格激励人主动避峰"
    },
    {
      x: 3.7,
      title: "错峰上下班项目",
      desc: "与主要雇主合作，从需求源头改变需求曲线"
    },
    {
      x: 6.9,
      title: "周期性票价优惠",
      desc: "让非高峰时段的性价比更高"
    }
  ];

  paths.forEach((p) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: p.x, y: 4.05, w: 2.8, h: 1.2,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: p.x, y: 4.05, w: 2.8, h: 0.06,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText(p.title, {
      x: p.x + 0.15, y: 4.15, w: 2.5, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(p.desc, {
      x: p.x + 0.15, y: 4.55, w: 2.5, h: 0.6,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  addFooter(slide, pres, theme, "109", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "109_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
