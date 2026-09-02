// 46_第二章_第一类 - 解释+三条件
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 46,
  title: '第一类：有效，直接保留'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("TYPE  01  /  有效方案", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("第一类方案：有效，直接保留", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 引导句
  slide.addText("这类方案具备以下三个条件，就直接推进，不需要创新。", {
    x: 0.5, y: 1.6, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三个条件（横向）
  const conds = [
    {
      x: 0.5, num: "01", t: "方向对",
      d: "针对对事分析中识别出来的真实、关键的影响因素"
    },
    {
      x: 3.7, num: "02", t: "可推进",
      d: "在当前资源和权限范围内可以推进"
    },
    {
      x: 6.9, num: "03", t: "有依据",
      d: "有类似情境的成功案例支撑，或清晰的因果逻辑可说明『做了为什么有效』"
    }
  ];

  conds.forEach((c) => {
    // 卡片底
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: 2.2, w: 2.9, h: 2.5,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 大编号
    slide.addText(c.num, {
      x: c.x + 0.2, y: 2.35, w: 1.5, h: 0.7,
      fontSize: 44, fontFace: "Georgia",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 小分隔线
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x + 0.2, y: 3.1, w: 0.5, h: 0.04,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    // 标题
    slide.addText(c.t, {
      x: c.x + 0.2, y: 3.25, w: 2.5, h: 0.5,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 描述
    slide.addText(c.d, {
      x: c.x + 0.2, y: 3.8, w: 2.5, h: 0.85,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  // 底部结论
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.95, w: 9, h: 0.4,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("结论：对这类方案，不需要创新，推进就好。", {
    x: 0.7, y: 4.95, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "46", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "46_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
