// slide-108.js - B2犹豫：转化性价比最高
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("PART 04 · B 阶 · B2  重点", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.accent,
    bold: true, align: "left", valign: "middle", charSpacing: 4
  });

  // 大编号 + 标题
  slide.addText("B2", {
    x: 0.5, y: 0.55, w: 1.6, h: 1.0,
    fontSize: 64, fontFace: FONT_EN, color: theme.accent,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("犹豫", {
    x: 2.1, y: 0.6, w: 4.5, h: 0.6,
    fontSize: 30, fontFace: FONT_CN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  // 右侧高亮
  slide.addShape("rect", {
    x: 6.7, y: 0.65, w: 2.8, h: 0.5,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("转化性价比最高", {
    x: 6.7, y: 0.65, w: 2.8, h: 0.5,
    fontSize: 14, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
  });
  slide.addText("了解项目，但在观望 —— 有顾虑，也有一定的兴趣", {
    x: 2.1, y: 1.2, w: 7.4, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 核心公式
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 0.7,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("转化条件 = 让他看到「这件事对我的价值 > 我的顾虑」", {
    x: 0.5, y: 1.85, w: 9, h: 0.7,
    fontSize: 14, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
  });

  // 左右分栏：行为 vs 转化策略
  // 左侧：行为特征
  slide.addShape("rect", {
    x: 0.5, y: 2.7, w: 4.3, h: 2.2,
    fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
  });
  slide.addText("行为特征", {
    x: 0.7, y: 2.8, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.accent,
    bold: true, align: "left", valign: "middle"
  });
  const behaviors = [
    "主动了解项目进展",
    "非正式场合问「到底有没有在推」",
    "措辞模糊：方向对但还要看看",
    "等有影响力的人表态后再跟进"
  ];
  behaviors.forEach(function (b, i) {
    const y = 3.2 + i * 0.4;
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.05, w: 0.25, h: 0.25,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(String(i + 1), {
      x: 0.7, y: y + 0.05, w: 0.25, h: 0.25,
      fontSize: 9, fontFace: FONT_EN, color: theme.white,
      bold: true, align: "center", valign: "middle"
    });
    slide.addText(b, {
      x: 1.05, y: y, w: 3.65, h: 0.35,
      fontSize: 11, fontFace: FONT_CN, color: theme.dark,
      align: "left", valign: "middle"
    });
  });

  // 右侧：为什么性价比最高
  slide.addShape("rect", {
    x: 5.0, y: 2.7, w: 4.5, h: 2.2,
    fill: { color: theme.highlight }, line: { color: theme.border, width: 0.5 }
  });
  slide.addText("为什么性价比最高", {
    x: 5.2, y: 2.8, w: 4.2, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  const reasons = [
    "立场已经在动摇 —— 已有兴趣",
    "不需要根本改变立场",
    "只需要补足最后一块价值证明",
    "转化为 A2 后，能成为同盟军"
  ];
  reasons.forEach(function (r, i) {
    const y = 3.2 + i * 0.4;
    slide.addText("✓", {
      x: 5.2, y: y, w: 0.3, h: 0.35,
      fontSize: 14, fontFace: FONT_EN, color: theme.accent,
      bold: true, align: "left", valign: "middle"
    });
    slide.addText(r, {
      x: 5.55, y: y, w: 3.85, h: 0.35,
      fontSize: 11, fontFace: FONT_CN, color: theme.dark,
      align: "left", valign: "middle"
    });
  });

  // 底部品牌
  slide.addShape("line", {
    x: 0.4, y: 5.35, w: 9.2, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("利益相关方深度实战 · 授课PPT", {
    x: 0.4, y: 5.4, w: 6, h: 0.2,
    fontSize: 8, fontFace: FONT_CN, color: theme.mid, align: "left", valign: "middle"
  });
  slide.addText(String(pageNum).padStart(2, '0') + " / " + String(totalPages).padStart(3, '0'), {
    x: 8.0, y: 5.4, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN, color: theme.mid, align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
