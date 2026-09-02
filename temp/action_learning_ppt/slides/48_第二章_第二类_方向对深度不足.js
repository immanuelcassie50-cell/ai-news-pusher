// 48_第二章_第二类 - 解释+三形态
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 48,
  title: '第二类：方向对，但力度不足'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("TYPE  02  /  方向对，深度不足", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("第二类方案：方向对，但力度不足", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 引言
  slide.addText("方向是对的，但按现有设计执行，效果会有限。常见的三种形态：", {
    x: 0.5, y: 1.6, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 三个形态（横向带图标块）
  const forms = [
    {
      x: 0.5, icon: "①", t: "方案太浅",
      d: "只处理了表象问题，没有触及根本原因"
    },
    {
      x: 3.7, icon: "②", t: "方案太碎",
      d: "解决了几个局部问题，但彼此之间没有系统性联系"
    },
    {
      x: 6.9, icon: "③", t: "依赖人工推动",
      d: "形不成机制，一旦停止推动，问题就回来"
    }
  ];

  forms.forEach((f) => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: f.x, y: 2.2, w: 2.9, h: 2.5,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // 顶部细线
    slide.addShape(pres.shapes.RECTANGLE, {
      x: f.x, y: 2.2, w: 2.9, h: 0.06,
      fill: { color: theme.accent }, line: { type: 'none' }
    });
    // 大图标
    slide.addText(f.icon, {
      x: f.x + 0.2, y: 2.4, w: 0.8, h: 0.8,
      fontSize: 44, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 标题
    slide.addText(f.t, {
      x: f.x + 1.0, y: 2.5, w: 1.8, h: 0.6,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    // 描述
    slide.addText(f.d, {
      x: f.x + 0.2, y: 3.4, w: 2.5, h: 1.2,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  // 底部金句
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.95, w: 0.06, h: 0.3,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("这类方案需要的是『深化』，不是放弃或替换。", {
    x: 0.7, y: 4.95, w: 9, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  addFooter(slide, pres, theme, "48", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "48_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
