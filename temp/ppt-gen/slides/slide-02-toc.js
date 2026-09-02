// slide-02.js - 目录页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'toc',
  index: 2,
  title: '课程目录'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧红色装饰条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 标题
  slide.addText("课程目录", {
    x: 0.5, y: 0.4, w: 4, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // 目录项
  const sections = [
    { num: "01", title: "变革认知与信任基础" },
    { num: "02", title: "员工变革心理画像" },
    { num: "03", title: "变革共识建立策略" },
    { num: "04", title: "信任维护与沟通机制" },
    { num: "05", title: "变革韧性文化建设" },
    { num: "06", title: "变革领导力与利益相关方管理" },
    { num: "07", title: "综合演练与行动计划" }
  ];

  sections.forEach((section, i) => {
    const y = 1.3 + i * 0.55;

    // 序号
    slide.addText(section.num, {
      x: 0.6, y: y, w: 0.6, h: 0.45,
      fontSize: 22, fontFace: "Arial",
      color: theme.accent, bold: true, align: "left", valign: "middle"
    });

    // 标题
    slide.addText(section.title, {
      x: 1.3, y: y, w: 5, h: 0.45,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false, align: "left", valign: "middle"
    });

    // 分隔线
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: y + 0.48, w: 5.5, h: 0.008,
      fill: { color: theme.light }
    });
  });

  // 右侧装饰
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 7.8, y: 1.3, w: 2, h: 3.5,
    fill: { color: theme.primary }
  });

  slide.addText("数字化\n转型\n系列", {
    x: 7.8, y: 2.3, w: 2, h: 1.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
