// 页 162: 五栏/列表 - 五种方法回顾
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 162,
  title: '五种方法回顾'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("方法回顾  /  Five Methods", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("五种重新思考的方法", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 副标
  slide.addText("当常规方向走不通时，你还有这些方法可以尝试。", {
    x: 0.5, y: 1.5, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 五种方法 - 横向五列
  const methods = [
    { num: "01", title: "问题重构", core: "往深走 / 往上走 / 横向", chapter: "第三章上" },
    { num: "02", title: "假设挑战", core: "做不到清单 / 重新审视", chapter: "第三章上" },
    { num: "03", title: "外部视角", core: "陌生人 / 跨行业 / 极端用户", chapter: "第三章下" },
    { num: "04", title: "逆向思维", core: "目标 / 受益方 / 流程反转", chapter: "第三章下" },
    { num: "05", title: "组合创新", core: "重新组装 / 强制组合", chapter: "第三章下" }
  ];

  methods.forEach((m, i) => {
    const x = 0.5 + i * 1.85;
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.1, w: 1.75, h: 2.8,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 顶部数字色块
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 2.1, w: 1.75, h: 0.8,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(m.num, {
      x: x, y: 2.1, w: 1.75, h: 0.8,
      fontSize: 28, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(m.title, {
      x: x + 0.1, y: 3.0, w: 1.55, h: 0.5,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 分割
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.7, y: 3.55, w: 0.35, h: 0.03,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    // 核心
    slide.addText(m.core, {
      x: x + 0.1, y: 3.65, w: 1.55, h: 0.8,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "top", margin: 0
    });
    // 章节
    slide.addText(m.chapter, {
      x: x + 0.1, y: 4.5, w: 1.55, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.accent, charSpacing: 2,
      align: "center", valign: "middle", margin: 0
    });
  });

  // 底部
  slide.addText("每一种方法的本质 —— 都是跳出同一套假设。", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "center", valign: "middle", margin: 0
  });

  // 页脚
  addFooter(slide, pres, theme, "162", "写在最后");
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
  pres.writeFile({ fileName: "162_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
