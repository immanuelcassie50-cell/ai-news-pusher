// slide-36.js - 人设支票
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("工具一：人设不是资产，是一张长期支票", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 9, h: 1.0,
    fill: { color: theme.accent, transparency: 20 },
  });

  slide.addText("你贴上一个标签的那一刻，不是拿到存款，是开出了一张欠条——公众会拿这张欠条反过来要求你兑现", {
    x: 0.7, y: 1.1, w: 8.6, h: 0.8,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", valign: "middle",
  });

  const tableData = [
    [
      { text: "你希望拥有的标签", options: { fill: { color: theme.primary }, color: "FFFFFF", bold: true } },
      { text: "公众默认你要兑现的承诺", options: { fill: { color: theme.primary }, color: "FFFFFF", bold: true } },
      { text: "一旦兑不了，最容易被说的话", options: { fill: { color: theme.primary }, color: "FFFFFF", bold: true } },
    ],
    [
      { text: "真诚", options: { fill: { color: theme.light } } },
      { text: "不玩文字游戏，利益关系透明", options: { fill: { color: "FFFFFF" } } },
      { text: "原来你一直在演", options: { fill: { color: "FFFFFF" } } },
    ],
    [
      { text: "专业", options: { fill: { color: theme.light } } },
      { text: "有依据、有边界、不乱跨界", options: { fill: { color: "FFFFFF" } } },
      { text: "只会讲，根本不懂", options: { fill: { color: "FFFFFF" } } },
    ],
    [
      { text: "接地气", options: { fill: { color: theme.light } } },
      { text: "理解普通人的处境和成本", options: { fill: { color: "FFFFFF" } } },
      { text: "何不食肉糜", options: { fill: { color: "FFFFFF" } } },
    ],
    [
      { text: "长期主义", options: { fill: { color: theme.light } } },
      { text: "不靠焦虑和稀缺感短期收割", options: { fill: { color: "FFFFFF" } } },
      { text: "又在割韭菜", options: { fill: { color: "FFFFFF" } } },
    ],
    [
      { text: "靠谱", options: { fill: { color: theme.light } } },
      { text: "说到做到，不临时变卦", options: { fill: { color: "FFFFFF" } } },
      { text: "说一套做一套", options: { fill: { color: "FFFFFF" } } },
    ],
  ];

  slide.addTable(tableData, {
    x: 0.3, y: 2.2, w: 9.4,
    colW: [2.0, 3.8, 3.6],
    rowH: 0.5,
    fontFace: "Microsoft YaHei",
    fontSize: 12,
    border: { pt: 0.5, color: theme.secondary },
    valign: "middle",
  });

  return slide;
}

module.exports = { createSlide };
