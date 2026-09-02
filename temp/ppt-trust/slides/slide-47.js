// slide-47.js - 金句收尾
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 装饰线
  slide.addShape(pres.ShapeType.rect, {
    x: 4, y: 0.8, w: 2, h: 0.05,
    fill: { color: theme.accent },
  });

  // 金句
  slide.addText([
    "别人给你的信任，不是你的战利品，",
    "是他们随时可以收回的授权。",
    "你能不能一直被信任，取决于你是不是一直记得这一点。",
  ].join("\n"), {
    x: 0.5, y: 1.2, w: 9, h: 2.4,
    fontSize: 30, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle",
  });

  // 分隔线
  slide.addShape(pres.ShapeType.rect, {
    x: 3.5, y: 3.8, w: 3, h: 0.03,
    fill: { color: theme.light },
  });

  // 延伸说明
  slide.addText("对韩红、雷军、李佳琦成立，对我们每一个人也一样成立", {
    x: 0.5, y: 4.1, w: 9, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle",
  });

  // 装饰线
  slide.addShape(pres.ShapeType.rect, {
    x: 4, y: 4.9, w: 2, h: 0.05,
    fill: { color: theme.accent },
  });
}

module.exports = { createSlide };
