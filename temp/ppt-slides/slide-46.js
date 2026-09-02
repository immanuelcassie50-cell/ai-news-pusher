// slide-46.js - 四个验证习惯
const PptxGenJS = require("pptxgenjs");

const theme = {
  primary: "c73e3e",
  secondary: "3c3c3c",
  accent: "e85050",
  light: "f5f0f0",
  bg: "faf8f8"
};

const slideConfig = {
  title: "四个验证习惯",
  pageNumber: 46,
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

  // 标题
  slide.addText("四个验证习惯", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.9, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 四个验证习惯
  const habits = [
    {
      num: "01",
      title: "来源核查",
      desc: "要求AI注明信息来源，然后自己去核实",
      example: "\"请告诉我这个数据从哪里来的\""
    },
    {
      num: "02",
      title: "逻辑检验",
      desc: "检查AI的推理过程是否合理，有无明显漏洞",
      example: "\"你的推理前提是什么？\""
    },
    {
      num: "03",
      title: "交叉验证",
      desc: "用另一个AI或搜索引擎核实同一信息",
      example: "同一个问题问两个AI，对比答案"
    },
    {
      num: "04",
      title: "专家确认",
      desc: "重要决策前，找有经验的同事确认",
      example: "\"这个方案你觉得合理吗？\""
    }
  ];

  const habitWidth = 4.25;
  const habitHeight = 1.5;
  const startX = 0.5;
  const startY = 1.2;
  const gapX = 0.35;
  const gapY = 0.3;

  habits.forEach((habit, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (habitWidth + gapX);
    const y = startY + row * (habitHeight + gapY);

    // 卡片背景
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: y, w: habitWidth, h: habitHeight,
      fill: { color: theme.light },
      rectRadius: 0.1
    });

    // 编号
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.15, y: y + 0.15, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });

    slide.addText(habit.num, {
      x: x + 0.15, y: y + 0.15, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // 标题
    slide.addText(habit.title, {
      x: x + 0.8, y: y + 0.2, w: 3.2, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // 描述
    slide.addText(habit.desc, {
      x: x + 0.15, y: y + 0.7, w: habitWidth - 0.3, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // 示例提示
    slide.addShape(pres.ShapeType.roundRect, {
      x: x + 0.15, y: y + 1.1, w: habitWidth - 0.3, h: 0.3,
      fill: { color: "FFFFFF" },
      rectRadius: 0.04
    });

    slide.addText(habit.example, {
      x: x + 0.25, y: y + 1.1, w: habitWidth - 0.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true,
      valign: "middle"
    });
  });

  // 底部总结
  slide.addText("养成验证习惯，让AI成为你的助手而不是风险源", {
    x: 0.5, y: 5.15, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center"
  });

  return slide;
}

// standalone preview
if (require.main === module) {
  const pres = new PptxGenJS();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ path: "D:/CC/temp/ppt-slides/slide-46-output.pptx" })
    .then(() => console.log("Created: slide-46-output.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };