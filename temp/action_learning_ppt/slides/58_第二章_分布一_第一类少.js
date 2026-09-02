// 58_第二章_分布一_第一类少 - 列表+装饰型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 58,
  title: '分布一：第一类很少'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("DISTRIBUTION  01  /  第一类很少", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 8,
    align: "left", valign: "middle", margin: 0
  });

  // 大标题
  slide.addText("如果第一类很少", {
    x: 0.5, y: 0.85, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 左侧大数字装饰
  slide.addText("01", {
    x: 0.5, y: 1.7, w: 3, h: 3.3,
    fontSize: 220, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "center", valign: "middle", margin: 0
  });

  // 右侧文字
  slide.addText("已有方案中，真正有扎实依据的不多。", {
    x: 4.0, y: 1.7, w: 5.5, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });

  // 分隔
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.0, y: 2.25, w: 0.6, h: 0.05,
    fill: { color: theme.accent }, line: { type: 'none' }
  });

  // 重点
  slide.addText("接下来重点不只是找新方案，", {
    x: 4.0, y: 2.4, w: 5.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("还需要把已有方案里哪些真的成立说清楚。", {
    x: 4.0, y: 2.8, w: 5.5, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "top", margin: 0
  });

  // 三个动作
  const acts = [
    { num: "①", t: "回看方案依据", d: "哪些真的有因果逻辑支撑" },
    { num: "②", t: "把『为什么有效』讲清楚", d: "建立方案的判断标准" },
    { num: "③", t: "找新方案前先打地基", d: "扎实的『一』决定整体质量" }
  ];

  acts.forEach((a, i) => {
    const y = 3.6 + i * 0.5;
    slide.addText(a.num, {
      x: 4.0, y: y, w: 0.4, h: 0.4,
      fontSize: 18, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(a.t, {
      x: 4.4, y: y, w: 2.2, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(a.d, {
      x: 6.6, y: y, w: 3, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle", margin: 0
    });
  });

  addFooter(slide, pres, theme, "58", "第二章 系统盘点");
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
  pres.writeFile({ fileName: "58_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
