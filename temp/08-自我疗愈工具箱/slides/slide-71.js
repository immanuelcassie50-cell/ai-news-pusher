/**
 * Slide 71 - 四步法详解与示例
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("四步法详解与示例", {
    x: 0.5, y: 0.3, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Left column - 4 steps detail
  const stepDetails = [
    {
      num: "1",
      title: "命名情绪",
      instruct: ["闭上眼睛，感受身体", "找到情绪的名称", "如：焦虑、失落、愤怒"],
      color: theme.primary
    },
    {
      num: "2",
      title: "深入探索",
      instruct: ["这个情绪从哪里来？", "发生了什么？", "我在担心什么？"],
      color: theme.accent
    },
    {
      num: "3",
      title: "自我慈悲",
      instruct: ["对自己说：", '"这真的很不容易"', '"我理解你的感受"'],
      color: theme.light
    },
    {
      num: "4",
      title: "转换视角",
      instruct: ["一周后这还重要吗？", "三年后会怎样？", "我能学到什么？"],
      color: theme.secondary
    }
  ];

  const colW = 4.4;
  const itemH = 0.95;
  const startY = 0.9;

  stepDetails.forEach((step, i) => {
    const yPos = startY + i * itemH;

    // Left accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: yPos, w: 0.06, h: itemH - 0.05,
      fill: { color: step.color }
    });

    // Number
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.65, y: yPos + 0.15, w: 0.4, h: 0.4,
      fill: { color: step.color }
    });
    slide.addText(step.num, {
      x: 0.65, y: yPos + 0.15, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", align: "center", valign: "middle", bold: true
    });

    // Title
    slide.addText(step.title, {
      x: 1.2, y: yPos + 0.1, w: 1.5, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });

    // Instructions
    slide.addText(step.instruct.join(" "), {
      x: 1.2, y: yPos + 0.45, w: 3.1, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false
    });
  });

  // Right column - Example
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 0.9, w: 4.4, h: 4.0,
    fill: { color: theme.accent, transparency: 12 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 0.9, w: 4.4, h: 0.45,
    fill: { color: theme.accent }
  });

  slide.addText("完整示例", {
    x: 5.3, y: 0.95, w: 4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("情境：收到负面评价后感到沮丧", {
    x: 5.3, y: 1.5, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const exampleSteps = [
    { step: "1", text: "命名：感到失落和自我怀疑" },
    { step: "2", text: "探索：担心自己不够好，怕被否定" },
    { step: "3", text: "慈悲：负面评价只是部分事实，我已经很努力了" },
    { step: "4", text: "视角：这是一次学习机会，让我看到改进空间" }
  ];

  let yEx = 1.9;
  exampleSteps.forEach((ex, i) => {
    slide.addShape(pres.ShapeType.ellipse, {
      x: 5.35, y: yEx + 0.05, w: 0.28, h: 0.28,
      fill: { color: theme.primary }
    });
    slide.addText(ex.step, {
      x: 5.35, y: yEx + 0.05, w: 0.28, h: 0.28,
      fontSize: 11, fontFace: "Arial",
      color: "FFFFFF", align: "center", valign: "middle", bold: true
    });
    slide.addText(ex.text, {
      x: 5.75, y: yEx, w: 3.6, h: 0.65,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      lineSpaceMult: 1.3
    });
    yEx += 0.7;
  });

  // Result
  slide.addShape(pres.ShapeType.rect, {
    x: 5.3, y: 4.55, w: 4, h: 0.3,
    fill: { color: theme.primary, transparency: 15 }
  });
  slide.addText("结果：情绪得到疏导，恢复了冷静", {
    x: 5.3, y: 4.55, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", bold: false
  });

  // Page number
  slide.addText("71", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 5",
  title: "四步法详解与示例",
  pageNumber: 71
};

module.exports = { createSlide, slideConfig };
