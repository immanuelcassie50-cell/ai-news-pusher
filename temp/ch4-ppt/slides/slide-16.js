// slide-16.js - 模式选择口诀
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 16,
  title: '模式选择口诀'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("模式选择口诀", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // 口诀卡片
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 1.5,
    fill: { color: theme.primary },
    rectRadius: 0.12
  });
  slide.addText("需求模糊先收敛", {
    x: 0.7, y: 1.35, w: 8.6, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("步骤清晰分步做", {
    x: 0.7, y: 1.85, w: 8.6, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("要专业视角锁角色", {
    x: 0.7, y: 2.35, w: 8.6, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 对应模式
  const modes = [
    { key: "需求模糊先收敛", mode: "A 逐步收敛型" },
    { key: "步骤清晰分步做", mode: "B 分步执行型" },
    { key: "要专业视角锁角色", mode: "C 角色锁定型" },
    { key: "要准确可靠检验驱动", mode: "D 检验驱动型" }
  ];

  modes.forEach((item, idx) => {
    const yPos = 3.0 + idx * 0.6;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: yPos, w: 9, h: 0.5,
      fill: { color: "FFFFFF" },
      rectRadius: 0.08
    });
    slide.addText(item.key, {
      x: 0.7, y: yPos, w: 4, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
    slide.addText("→", {
      x: 4.5, y: yPos, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: theme.primary,
      align: "center", valign: "middle"
    });
    slide.addText(item.mode, {
      x: 5.0, y: yPos, w: 4, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "C43C3C", secondary: "4A4A4A", accent: "C43C3C", light: "888888", bg: "F5F5F5" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "./output/slide-16-preview.pptx" });
}

module.exports = { createSlide, slideConfig };