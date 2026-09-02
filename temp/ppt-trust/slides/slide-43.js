// slide-43.js - 四步回应流程
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 标题
  slide.addText("四步回应流程", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  // 四步流程
  const steps = [
    {
      num: "01",
      title: "承认结果",
      content: "我这次的表达或行为确实造成了什么样的感受或后果",
    },
    {
      num: "02",
      title: "承担责任",
      content: "不管本意是什么，这个后果由我承担，不推给别人",
    },
    {
      num: "03",
      title: "说明边界",
      content: "可以澄清必要的事实，但不要把澄清写成辩解",
    },
    {
      num: "04",
      title: "给出动作",
      content: "接下来具体怎么调整，怎么让公众看得见、验证得了",
    },
  ];

  steps.forEach((item, i) => {
    const yPos = 0.95 + i * 1.05;

    // 卡片背景
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: yPos, w: 9, h: 0.95,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 },
    });

    // 步骤编号
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: yPos, w: 0.9, h: 0.95,
      fill: { color: theme.accent },
    });
    slide.addText(item.num, {
      x: 0.5, y: yPos, w: 0.9, h: 0.95,
      fontSize: 22, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle",
    });

    // 步骤标题
    slide.addText(item.title, {
      x: 1.6, y: yPos + 0.1, w: 2.0, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
    });

    // 步骤内容
    slide.addText(item.content, {
      x: 1.6, y: yPos + 0.5, w: 7.7, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
    });

    // 连接箭头（除了最后一个）
    if (i < 3) {
      slide.addText("▼", {
        x: 4.5, y: yPos + 0.85, w: 1, h: 0.3,
        fontSize: 14, fontFace: "Arial",
        color: theme.light, align: "center",
      });
    }
  });

  // 模板提示
  slide.addShape(pres.ShapeType.rect, {
    x: 6.5, y: 0.3, w: 3, h: 0.4,
    fill: { color: theme.secondary },
  });
  slide.addText("模板框", {
    x: 6.5, y: 0.3, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });
}

module.exports = { createSlide };
