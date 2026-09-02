// slide-75.js - Group Discussion Guidelines
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 75,
  title: '小组讨论指引'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("小组讨论：变革场景模拟", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addText("讨论时间：20分钟", {
    x: 0.5, y: 1.0, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left"
  });

  const sections = [
    { title: "场景设定", content: "某公司启动CRM系统替换项目，你是项目负责人。项目启动一个月后，销售部门员工对新系统抵触情绪严重，业绩出现下滑。" },
    { title: "讨论问题", content: "1. 员工抵触的根源是什么？\n2. 你将如何建立变革共识？\n3. 你将如何维护员工信任？\n4. 你的具体行动计划是什么？" },
    { title: "输出要求", content: "每个小组形成一份简短的变革管理计划，包含：问题诊断、解决策略、行动步骤" }
  ];

  sections.forEach((s, i) => {
    const y = 1.5 + i * 1.3;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 1.15,
      fill: { color: theme.light }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.08, h: 1.15,
      fill: { color: theme.accent }
    });
    slide.addText(s.title, {
      x: 0.7, y: y + 0.1, w: 2, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "left"
    });
    slide.addText(s.content, {
      x: 0.7, y: y + 0.45, w: 8.5, h: 0.6,
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
  pres.writeFile({ fileName: "slide-75-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
