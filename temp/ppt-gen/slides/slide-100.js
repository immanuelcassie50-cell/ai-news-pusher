// slide-100.js - Team Discussion Guide
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 100,
  title: '小组讨论：角色扮演指引'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("小组讨论：角色扮演指引", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Roles
  slide.addText("角色分配：", {
    x: 0.5, y: 1.0, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const roles = [
    { role: "变革负责人", mission: "推进变革，争取支持" },
    { role: "抵触员工", mission: "表达担忧，测试变革策略" },
    { role: "中立员工", mission: "提出实际问题，推动完善方案" },
    { role: "支持员工", mission: "分享认可，但也要提出建设性意见" },
    { role: "HR负责人", mission: "提供政策支持，平衡各方利益" }
  ];

  roles.forEach((r, i) => {
    const y = 1.4 + i * 0.75;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 2.5, h: 0.65,
      fill: { color: theme.accent }
    });
    slide.addText(r.role, {
      x: 0.5, y: y + 0.15, w: 2.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 3, y: y, w: 6.5, h: 0.65,
      fill: { color: theme.light }
    });
    slide.addText(r.mission, {
      x: 3.2, y: y + 0.15, w: 6.1, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  slide.addText("讨论时间：25分钟 | 演示时间：每组5分钟", {
    x: 0.5, y: 5.1, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
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
  pres.writeFile({ fileName: "slide-100-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
