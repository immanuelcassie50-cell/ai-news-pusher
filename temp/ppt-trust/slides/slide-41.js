// slide-41.js - 六问自查引导
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 标题
  slide.addText("六问自查引导", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  // 说明文字
  slide.addText("拿一个你近期真实要面对的公开表达场景，一条一条过一遍", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
  });

  // 场景举例标签
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.5, w: 1.5, h: 0.35,
    fill: { color: theme.accent },
  });
  slide.addText("场景举例", {
    x: 0.5, y: 1.5, w: 1.5, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });

  // 场景举例内容
  const scenarios = [
    "下周要讲的一堂课",
    "一次内部分享",
    "一个要发的朋友圈",
    "一次客户报价说明",
  ];
  scenarios.forEach((item, i) => {
    const xPos = 2.2 + i * 1.9;
    slide.addShape(pres.ShapeType.roundRect, {
      x: xPos, y: 1.5, w: 1.75, h: 0.35,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.05,
    });
    slide.addText(item, {
      x: xPos, y: 1.5, w: 1.75, h: 0.35,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", valign: "middle",
    });
  });

  // 六个问题回顾
  const questions = [
    { num: "01", q: "我现在是以谁的身份在说话？" },
    { num: "02", q: "这句话会让谁付出什么成本？" },
    { num: "03", q: "我在调动什么情绪？" },
    { num: "04", q: "我的真实利益关系说清楚了吗？" },
    { num: "05", q: "把镜头撤掉，这件事还成立吗？" },
    { num: "06", q: "三个月后被截出来，我还站得住吗？" },
  ];

  questions.forEach((item, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const xPos = 0.5 + col * 3.1;
    const yPos = 2.1 + row * 1.0;

    slide.addShape(pres.ShapeType.ellipse, {
      x: xPos, y: yPos + 0.1, w: 0.5, h: 0.5,
      fill: { color: theme.accent },
    });
    slide.addText(item.num, {
      x: xPos, y: yPos + 0.1, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle",
    });
    slide.addText(item.q, {
      x: xPos + 0.6, y: yPos + 0.05, w: 2.4, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle",
    });
  });

  // 底部提示框
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.3, w: 9, h: 1.0,
    fill: { color: theme.primary },
  });
  slide.addText([
    "六个问题里，有没有哪一问让你在写的时候笔停了一下？",
    "这个停顿，很重要——往往就是这次表达最该留意的点",
  ].join("\n"), {
    x: 0.5, y: 4.3, w: 9, h: 1.0,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });
}

module.exports = { createSlide };
