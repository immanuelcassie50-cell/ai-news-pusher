// slide-38.js - 罗永浩真还传
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("正面案例：罗永浩 · 真还传", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 9, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, color: "000000", opacity: 10 },
  });

  const storyItems = [
    "锤子科技资金链断裂，背上亿级债务",
    "没有申请破产保护，没有玩消失",
    "公开承诺一定还",
    "花好几年直播带货，一笔笔往回填",
  ];

  storyItems.forEach(function(item, i) {
    slide.addText((i + 1) + ". " + item, {
      x: 0.8, y: 1.2 + i * 0.55, w: 8.4, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary,
    });
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 3.6, w: 9, h: 0.8,
    fill: { color: theme.accent, transparency: 20 },
  });

  slide.addText("真正值得学的：不是到底还了多少钱，是一开始选择的姿态——公开、可追踪、不装死", {
    x: 0.7, y: 3.7, w: 8.6, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle",
  });

  slide.addText("这个姿态本身就是往信任账户里存钱最直接的方式", {
    x: 0.5, y: 4.6, w: 9, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center",
  });

  return slide;
}

module.exports = { createSlide };
