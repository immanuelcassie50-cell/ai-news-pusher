// slide-107.js - Change Sponsor Roles and Responsibilities
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 107,
  title: '变革发起人角色与责任'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("变革发起人角色与责任", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const responsibilities = [
    { role: "倡导变革", details: "公开支持变革愿景，分享变革的紧迫性" },
    { role: "调配资源", details: "确保变革所需的人力、财力、时间资源" },
    { role: "清除障碍", details: "帮助解决跨部门协调和资源冲突问题" },
    { role: "保持关注", details: "持续关注变革进展，在关键时刻介入支持" },
    { role: "传递信号", details: "通过行为示范传递高层对变革的重视" },
    { role: "庆祝成功", details: "认可团队进步，激励持续变革动力" }
  ];

  responsibilities.forEach((r, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.5;
    const y = 1.0 + row * 1.45;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4, h: 1.3,
      fill: { color: theme.light }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: 1.3,
      fill: { color: theme.accent }
    });
    slide.addText(r.role, {
      x: x + 0.2, y: y + 0.15, w: 3.6, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(r.details, {
      x: x + 0.2, y: y + 0.6, w: 3.6, h: 0.6,
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
  pres.writeFile({ fileName: "slide-107-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
