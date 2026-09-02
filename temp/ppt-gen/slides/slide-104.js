// slide-104.js - Change Readiness Checklist
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 104,
  title: '变革准备度检查清单'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革准备度检查清单", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const categories = [
    {
      cat: "领导层准备",
      items: ["高层明确承诺和参与", "资源已经到位", "时间表已经确定"]
    },
    {
      cat: "组织准备",
      items: ["利益相关方已经识别", "沟通计划已经制定", "培训资源已经准备"]
    },
    {
      cat: "员工准备",
      items: ["员工了解变革原因", "早期成功案例已经建立", "反馈机制已经运行"]
    }
  ];

  categories.forEach((c, i) => {
    const y = 1.0 + i * 1.45;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2.5, h: 1.3,
      fill: { color: theme.accent }
    });
    slide.addText(c.cat, {
      x: 0.5, y: y + 0.45, w: 2.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    c.items.forEach((item, j) => {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 3, y: y + j * 0.43, w: 0.3, h: 0.3,
        fill: { color: theme.light }
      });
      slide.addText(item, {
        x: 3.4, y: y + j * 0.43, w: 6, h: 0.35,
        fontSize: 12, fontFace: "Microsoft YaHei",
        color: theme.secondary, align: "left"
      });
    });
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
  pres.writeFile({ fileName: "slide-104-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
