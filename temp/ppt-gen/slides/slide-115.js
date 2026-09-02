// slide-115.js - Change Management System Integration
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 115,
  title: '变革管理与系统集成'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革管理与系统集成", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  // Integration points
  const integrations = [
    { system: "ERP系统", role: "变革会影响流程和岗位，需要充分沟通和培训", icon: "🏢" },
    { system: "CRM系统", role: "销售人员使用，客户数据管理方式改变", icon: "👥" },
    { system: "OA系统", role: "审批流程变化，需要部门协调配合", icon: "📋" },
    { system: "HR系统", role: "绩效考核、岗位调整需要HR深度参与", icon: "👔" }
  ];

  integrations.forEach((int, i) => {
    const y = 1.0 + i * 1.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 1.5, h: 0.95,
      fill: { color: theme.accent }
    });
    slide.addText(int.icon, {
      x: 0.5, y: y + 0.25, w: 1.5, h: 0.45,
      fontSize: 20, align: "center"
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 2, y: y, w: 7.5, h: 0.95,
      fill: { color: theme.light }
    });
    slide.addText(int.system, {
      x: 2.2, y: y + 0.15, w: 3, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(int.role, {
      x: 2.2, y: y + 0.5, w: 7.1, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
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
  pres.writeFile({ fileName: "slide-115-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
