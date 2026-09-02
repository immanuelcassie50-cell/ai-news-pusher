// 45_第二章_三类方案框架 - 三栏+1
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 45,
  title: '三类方案的分类框架'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("FRAMEWORK  /  分类框架", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("三类方案，三种处理方式", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 三栏卡片
  const cards = [
    {
      x: 0.5, num: "一", color: theme.primary,
      title: "有效",
      sub: "直接保留",
      desc: "方向对、依据扎实、资源可达，保留并推进即可"
    },
    {
      x: 3.7, num: "二", color: theme.accent,
      title: "方向对",
      sub: "深度不足",
      desc: "方向正确但力度不足或路径不完整，需要在同一方向上深化"
    },
    {
      x: 6.9, num: "三", color: theme.secondary,
      title: "关键空白",
      sub: "应该有但没有",
      desc: "对事分析里的关键突破口，现有方案中完全没有覆盖的方向"
    }
  ];

  cards.forEach((c) => {
    // 卡片底
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: 1.8, w: 2.9, h: 3.2,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 顶部色条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: 1.8, w: 2.9, h: 0.6,
      fill: { color: c.color }, line: { type: 'none' }
    });
    // 类别数字
    slide.addText(`第${c.num}类`, {
      x: c.x + 0.2, y: 1.8, w: 1.4, h: 0.6,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", charSpacing: 3,
      align: "left", valign: "middle", margin: 0
    });
    // 大编号
    slide.addText(c.num, {
      x: c.x + 1.5, y: 1.8, w: 1.3, h: 0.6,
      fontSize: 28, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "right", valign: "middle", margin: 0
    });
    // 主标
    slide.addText(c.title, {
      x: c.x + 0.2, y: 2.55, w: 2.6, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: c.color, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 副标
    slide.addText(c.sub, {
      x: c.x + 0.2, y: 3.15, w: 2.6, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
    // 描述
    slide.addText(c.desc, {
      x: c.x + 0.2, y: 3.7, w: 2.6, h: 1.2,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  // 底部提醒
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.07, w: 0.06, h: 0.3,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("每类方案需要不同的处理方式。", {
    x: 0.7, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "45", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "45_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
