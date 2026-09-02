// 页 106: 第二步 寻找场景 - 解释
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 106,
  title: '第二步 寻找场景'
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
  slide.addText("跨行业迁移  ·  STEP 02", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("第二步 · 寻找场景", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("哪些行业在解决类似结构的问题？找 2~3 个就够了", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 核心问题大引述
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.15, w: 9, h: 0.85,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("这个通用问题，哪些行业或领域在解决，而且有相对成熟的做法？", {
    x: 0.7, y: 2.15, w: 8.6, h: 0.85,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle", margin: 0
  });

  // 两个例子卡片
  const examples = [
    {
      x: 0.5,
      tag: "示例 1",
      problem: "在固定基础设施容量下，在需求峰值时期最大化吞吐量",
      answers: "航空业的机场时刻管理 / 酒店业的 Revenue Management / 急诊室的分诊流量管理"
    },
    {
      x: 5.1,
      tag: "示例 2",
      problem: "推动大规模人群采纳陌生的新行为",
      answers: "公共卫生领域的行为干预 / 互联网产品的 onboarding 设计 / 金融产品的普惠化推广"
    }
  ];

  examples.forEach((e) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: e.x, y: 3.2, w: 4.4, h: 1.9,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addText(e.tag, {
      x: e.x + 0.2, y: 3.3, w: 4, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, charSpacing: 4, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText("抽象后的问题", {
      x: e.x + 0.2, y: 3.6, w: 4, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.light, italic: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(e.problem, {
      x: e.x + 0.2, y: 3.85, w: 4, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "top", margin: 0
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: e.x + 0.2, y: 4.3, w: 0.3, h: 0.03,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    slide.addText("外部场景", {
      x: e.x + 0.2, y: 4.35, w: 4, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.light, italic: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(e.answers, {
      x: e.x + 0.2, y: 4.6, w: 4, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  addFooter(slide, pres, theme, "106", "第三章（下）换一个视角思考");
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
  pres.writeFile({ fileName: "106_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
