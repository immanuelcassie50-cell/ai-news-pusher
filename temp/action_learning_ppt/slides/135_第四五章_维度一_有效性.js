// 页 135: 解释说明 - 维度一 有效性
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 135,
  title: '维度一：有效性'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小红点
  slide.addShape(pres.shapes.OVAL, {
    x: 0.5, y: 0.5, w: 0.12, h: 0.12,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("维度一  /  Dimension 01", {
    x: 0.7, y: 0.4, w: 6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 6,
    align: "left", valign: "middle", margin: 0
  });

  // 大数字水印
  slide.addText("01", {
    x: 7.8, y: 0.4, w: 1.8, h: 1.4,
    fontSize: 96, fontFace: "Georgia",
    color: theme.light, bold: true,
    align: "right", valign: "middle", margin: 0
  });

  // 标题
  slide.addText("有效性", {
    x: 0.5, y: 0.85, w: 7, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 核心问题
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.75, w: 0.08, h: 1.0,
    fill: { color: theme.accent }, line: { type: 'none' }
  });
  slide.addText("核心问题", {
    x: 0.7, y: 1.75, w: 8, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, charSpacing: 4,
    align: "left", valign: "middle", margin: 0
  });
  slide.addText("做了这件事，目标会动吗？动多少？", {
    x: 0.7, y: 2.05, w: 8.5, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle", margin: 0
  });

  // 评估从三个角度检查
  slide.addText("从一个方案的 三个角度 检查", {
    x: 0.5, y: 3.1, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, charSpacing: 3,
    align: "left", valign: "middle", margin: 0
  });

  // 三个角度 - 横向三个块
  const angles = [
    { num: "I", label: "对应指标", desc: "它和你的指标体系有对应吗？" },
    { num: "II", label: "支撑依据", desc: "成功案例或清晰因果逻辑？" },
    { num: "III", label: "机制 vs 行动", desc: "处理根因还是症状？可持续吗？" }
  ];

  angles.forEach((a, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 3.7, w: 2.9, h: 1.4,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: 3.85, w: 0.4, h: 0.4,
      fill: { color: theme.primary }, line: { type: 'none' }
    });
    slide.addText(a.num, {
      x: x + 0.2, y: 3.85, w: 0.4, h: 0.4,
      fontSize: 11, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });
    slide.addText(a.label, {
      x: x + 0.7, y: 3.85, w: 2.0, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle", margin: 0
    });
    slide.addText(a.desc, {
      x: x + 0.2, y: 4.35, w: 2.6, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "top", margin: 0
    });
  });

  addFooter(slide, pres, theme, "135", "第四五章 从候选到落地");
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
  pres.writeFile({ fileName: "135_preview.pptx" });
}

module.exports = { createSlide, slideConfig };
