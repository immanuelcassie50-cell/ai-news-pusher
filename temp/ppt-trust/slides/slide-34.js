// slide-34.js - 四类机制总结
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("四类翻车机制总表", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  const tableData = [
    [
      { text: "类型", options: { fill: { color: theme.primary }, color: "FFFFFF", bold: true, align: "center" } },
      { text: "核心矛盾", options: { fill: { color: theme.primary }, color: "FFFFFF", bold: true, align: "center" } },
      { text: "代表案例", options: { fill: { color: theme.primary }, color: "FFFFFF", bold: true, align: "center" } },
      { text: "最容易说服自己的一句话", options: { fill: { color: theme.primary }, color: "FFFFFF", bold: true, align: "center" } },
    ],
    [
      { text: "位置错配", options: { fill: { color: theme.light }, align: "center" } },
      { text: "身份越高，表达越不能只按个人口吻理解", options: { fill: { color: "FFFFFF" } } },
      { text: "韩红、李佳琦", options: { fill: { color: "FFFFFF" } } },
      { text: "我又没有恶意", options: { fill: { color: "FFFFFF" } } },
    ],
    [
      { text: "真实错配", options: { fill: { color: theme.light }, align: "center" } },
      { text: "呈现的人设，跟受众感知到的现实对不上", options: { fill: { color: "FFFFFF" } } },
      { text: "雷军热干面、陈光标", options: { fill: { color: "FFFFFF" } } },
      { text: "我只是做内容", options: { fill: { color: "FFFFFF" } } },
    ],
    [
      { text: "信用外溢", options: { fill: { color: theme.light }, align: "center" } },
      { text: "用A领域的好感，掩盖B领域该承担的责任", options: { fill: { color: "FFFFFF" } } },
      { text: "鹅腿阿姨、薇娅", options: { fill: { color: "FFFFFF" } } },
      { text: "大家本来就信任我", options: { fill: { color: "FFFFFF" } } },
    ],
    [
      { text: "承诺错配", options: { fill: { color: theme.light }, align: "center" } },
      { text: "用一种叙事获得信任，却用另一种逻辑变现", options: { fill: { color: "FFFFFF" } } },
      { text: "谢娜、罗振宇/得到", options: { fill: { color: "FFFFFF" } } },
      { text: "商业化有什么错", options: { fill: { color: "FFFFFF" } } },
    ],
  ];

  slide.addTable(tableData, {
    x: 0.3, y: 1.1, w: 9.4,
    colW: [1.4, 3.0, 2.2, 2.8],
    rowH: 0.7,
    fontFace: "Microsoft YaHei",
    fontSize: 12,
    border: { pt: 0.5, color: theme.secondary },
    valign: "middle",
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.8, w: 9, h: 0.6,
    fill: { color: theme.accent, transparency: 20 },
  });

  slide.addText("遇到任何新翻车事件，先别急着站队骂人，先问它属于哪一类", {
    x: 0.5, y: 4.8, w: 9, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle",
  });

  return slide;
}

module.exports = { createSlide };
