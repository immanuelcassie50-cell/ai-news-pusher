// slide-45.js - 案例式教学设计四步法
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 标题
  slide.addText("案例式教学设计四步法", {
    x: 0.5, y: 0.25, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  // 四个步骤
  const steps = [
    {
      num: "1",
      title: "选案例",
      content: "贴近听众真实处境的具体事件",
      sub: "标准：听众不需要花时间理解背景",
    },
    {
      num: "2",
      title: "拆机制",
      content: "不停在\"对不对\"，往下问\"这背后碰到了什么\"",
      sub: "停在对不对是吃瓜，往下问为什么才是在教方法",
    },
    {
      num: "3",
      title: "建工具",
      content: "把机制变成一张能带走的清单、公式或自检表",
      sub: "检验标准：听众下周还能不能用得上",
    },
    {
      num: "4",
      title: "促迁移",
      content: "留出时间让听众当场把工具套在自己的场景上",
      sub: "当场用过一次，信息才真正转移",
    },
  ];

  steps.forEach((item, i) => {
    const yPos = 0.95 + i * 1.1;

    // 卡片背景
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: yPos, w: 9, h: 1.0,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 },
    });

    // 编号圆圈
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.7, y: yPos + 0.2, w: 0.6, h: 0.6,
      fill: { color: theme.accent },
    });
    slide.addText(item.num, {
      x: 0.7, y: yPos + 0.2, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle",
    });

    // 标题
    slide.addText(item.title, {
      x: 1.5, y: yPos + 0.1, w: 1.5, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
    });

    // 内容
    slide.addText(item.content, {
      x: 1.5, y: yPos + 0.5, w: 4.5, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
    });

    // 检验标准/副标题
    slide.addShape(pres.ShapeType.rect, {
      x: 6.2, y: yPos + 0.2, w: 0.08, h: 0.6,
      fill: { color: theme.accent },
    });
    slide.addText(item.sub, {
      x: 6.4, y: yPos + 0.2, w: 2.9, h: 0.6,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, italic: true, valign: "middle",
    });
  });
}

module.exports = { createSlide };
