// slide-48.js - 练习一 · 工具匹配
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "练习一 · 工具匹配",
  pageNumber: 48,
  theme: theme
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧装饰条
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // 练习标签
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 0.3, w: 2.5, h: 0.45,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });

  slide.addText("练习一 · 工具匹配", {
    x: 0.5, y: 0.3, w: 2.5, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 标题
  slide.addText("工具匹配练习", {
    x: 0.5, y: 0.9, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.5, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 题目说明
  slide.addText("以下任务，该用哪个工具？", {
    x: 0.5, y: 1.7, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // 题目列表
  const tasks = [
    { num: "1", task: "需要搜索最新的行业报告", hint: "提示：信息进来阶段" },
    { num: "2", task: "有一堆会议纪要需要整理分类", hint: "提示：整理消化阶段" },
    { num: "3", task: "需要对比三个方案的优劣", hint: "提示：分析思考阶段" },
    { num: "4", task: "要把数据做成PPT汇报材料", hint: "提示：形成输出阶段" }
  ];

  const taskY = 2.2;
  const taskHeight = 0.75;
  const taskGap = 0.1;

  tasks.forEach((task, i) => {
    const y = taskY + i * (taskHeight + taskGap);

    // 任务卡片
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.5, y: y, w: 9, h: taskHeight,
      fill: { color: theme.light },
      rectRadius: 0.08
    });

    // 编号圆
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.65, y: y + 0.15, w: 0.45, h: 0.45,
      fill: { color: theme.primary }
    });

    slide.addText(task.num, {
      x: 0.65, y: y + 0.15, w: 0.45, h: 0.45,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // 任务描述
    slide.addText(task.task, {
      x: 1.3, y: y + 0.1, w: 5.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // 提示
    slide.addText(task.hint, {
      x: 1.3, y: y + 0.45, w: 5.5, h: 0.25,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // 空白填写区
    slide.addShape(pres.ShapeType.roundRect, {
      x: 7.0, y: y + 0.15, w: 2.3, h: 0.45,
      fill: { color: "FFFFFF" },
      line: { color: theme.accent, width: 1 },
      rectRadius: 0.05
    });

    slide.addText("填写工具", {
      x: 7.0, y: y + 0.15, w: 2.3, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle"
    });
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-48-output.pptx" })
    .then(() => console.log("Created: slide-48-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };