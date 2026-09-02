// slide-42.js - 出事后四步回应 - 问题
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 标题
  slide.addText("翻车后多数人第一反应犯四个错误", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  // 四个错误卡片
  const mistakes = [
    { num: "1", title: "抢着解释动机", content: "我本意是好的" },
    { num: "2", title: "质疑对方理解能力", content: "你们断章取义" },
    { num: "3", title: "诉诸旧功劳", content: "我以前做过那么多好事" },
    { num: "4", title: "找替罪羊", content: "是团队运营/剪辑的问题" },
  ];

  mistakes.forEach((item, i) => {
    const xPos = 0.5 + i * 2.35;

    // 卡片背景
    slide.addShape(pres.ShapeType.rect, {
      x: xPos, y: 1.1, w: 2.2, h: 2.4,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 },
    });

    // 错误编号
    slide.addShape(pres.ShapeType.ellipse, {
      x: xPos + 0.75, y: 1.3, w: 0.7, h: 0.7,
      fill: { color: theme.accent },
    });
    slide.addText(item.num, {
      x: xPos + 0.75, y: 1.3, w: 0.7, h: 0.7,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle",
    });

    // 错误标题
    slide.addText(item.title, {
      x: xPos + 0.1, y: 2.15, w: 2.0, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center",
    });

    // 错误内容
    slide.addText("\"" + item.content + "\"", {
      x: xPos + 0.1, y: 2.65, w: 2.0, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", italic: true,
    });
  });

  // 共同问题框
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.8, w: 9, h: 1.5,
    fill: { color: theme.primary },
  });

  // 共同问题标签
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.8, w: 1.8, h: 0.45,
    fill: { color: theme.accent },
  });
  slide.addText("共同问题", {
    x: 0.5, y: 3.8, w: 1.8, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });

  // 共同问题内容
  slide.addText("都在要求公众先理解你，却没有先承认公众受到了什么影响", {
    x: 0.5, y: 4.35, w: 9, h: 0.85,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle",
  });
}

module.exports = { createSlide };
