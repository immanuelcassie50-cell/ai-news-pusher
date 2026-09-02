// 60_第二章_分布三_第三类空白 - 三栏图标型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 60,
  title: '分布三：第三类有大片空白'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("DISTRIBUTION  03  /  第三类空白", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("如果第三类有大片空白", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 引导
  slide.addText("有一些关键的影响因素在你的方案里根本没有被触及。通常有两种原因：", {
    x: 0.5, y: 1.55, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三个并列原因
  const reasons = [
    {
      x: 0.5, color: theme.secondary, icon: "?",
      t: "不知道怎么做", en: "DON'T  KNOW  HOW",
      d: "大家都没找到路径"
    },
    {
      x: 3.7, color: theme.accent, icon: "X",
      t: "觉得做不到", en: "FEEL  CAN'T  DO",
      d: "用『做不到』回避了"
    },
    {
      x: 6.9, color: theme.primary, icon: "!",
      t: "需要用方法突破", en: "BREAKTHROUGH",
      d: "是创新工作的真正主战场"
    }
  ];

  reasons.forEach((r) => {
    // 卡片
    slide.addShape(pres.shapes.RECTANGLE, {
      x: r.x, y: 2.2, w: 2.9, h: 2.7,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 顶部色条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: r.x, y: 2.2, w: 2.9, h: 0.06,
      fill: { color: r.color }, line: { type: 'none' }
    });
    // 大图标
    slide.addShape(pres.shapes.OVAL, {
      x: r.x + 1.1, y: 2.45, w: 0.7, h: 0.7,
      fill: { color: r.color }, line: { type: 'none' }
    });
    slide.addText(r.icon, {
      x: r.x + 1.1, y: 2.45, w: 0.7, h: 0.7,
      fontSize: 28, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 英文小标
    slide.addText(r.en, {
      x: r.x + 0.2, y: 3.3, w: 2.5, h: 0.3,
      fontSize: 10, fontFace: "Georgia",
      color: r.color, charSpacing: 4, bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 中文标题
    slide.addText(r.t, {
      x: r.x + 0.2, y: 3.6, w: 2.5, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // 描述
    slide.addText(r.d, {
      x: r.x + 0.2, y: 4.1, w: 2.5, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "top", margin: 0
    });
  });

  // 底部箭头说明
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.7, y: 5.05, w: 2.9, h: 0.3,
    fill: { color: theme.primary }, line: { type: 'none' }
  });
  slide.addText("→  需要结构化创新方法填补", {
    x: 3.7, y: 5.05, w: 2.9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "60", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "60_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
