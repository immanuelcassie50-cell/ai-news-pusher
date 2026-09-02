// slide-68.js - Practical Tools Overview
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 68,
  title: '实用工具清单'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("实用工具清单", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const tools = [
    { name: "变革共识检查表", desc: "评估团队对变革的理解和认同程度" },
    { name: "员工心态识别卡", desc: "快速识别员工处于哪种变革心态" },
    { name: "信任度评估问卷", desc: "定期评估组织内的信任水平" },
    { name: "沟通效果反馈表", desc: "评估沟通是否达到预期效果" },
    { name: "利益相关方地图", desc: "识别并管理关键利益相关方" },
    { name: "变革行动检查表", desc: "确保变革措施落地执行" }
  ];

  tools.forEach((t, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.5;
    const y = 1.1 + row * 1.4;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4, h: 1.2,
      fill: { color: theme.light }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: 1.2,
      fill: { color: theme.accent }
    });
    slide.addText(t.name, {
      x: x + 0.2, y: y + 0.15, w: 3.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(t.desc, {
      x: x + 0.2, y: y + 0.6, w: 3.5, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
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
  pres.writeFile({ fileName: "slide-68-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
