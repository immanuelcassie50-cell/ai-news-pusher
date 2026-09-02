// slide-036.js - 核心任务：先求全
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 02  ·  全景扫描", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("核心任务：先求全，再求精", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("这一部分只有一件事：建立一张不遗漏的全景视图", {
    x: 0.5, y: 1.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 中央：先求全 巨型字符
  slide.addShape("ellipse", {
    x: 1.0, y: 2.0, w: 2.8, h: 2.8,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("先", {
    x: 1.0, y: 2.3, w: 2.8, h: 1.0,
    fontSize: 80, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("求 全", {
    x: 1.0, y: 3.4, w: 2.8, h: 0.7,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("COMPLETENESS FIRST", {
    x: 1.0, y: 4.0, w: 2.8, h: 0.3,
    fontSize: 8, fontFace: FONT_EN,
    color: theme.light, align: "center", valign: "middle",
    charSpacing: 3
  });

  // 右侧说明
  slide.addText("这一步的原则", {
    x: 4.5, y: 2.0, w: 5, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 4.5, y: 2.4, w: 0.4, h: 0.03,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 要点
  const points = [
    { t: "不遗漏", d: "宁可多列，不要漏掉" },
    { t: "不分析", d: "每格只写名字或标签，不做分析" },
    { t: "不筛选", d: "所有人都进清单，下一步再筛" },
    { t: "不评价", d: "此刻不评判重要性，先穷举" }
  ];
  points.forEach(function (p, i) {
    const y = 2.55 + i * 0.6;
    // 圆点
    slide.addShape("ellipse", {
      x: 4.5, y: y + 0.1, w: 0.18, h: 0.18,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(p.t, {
      x: 4.8, y: y, w: 1.5, h: 0.35,
      fontSize: 13, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "middle"
    });
    slide.addText(p.d, {
      x: 6.3, y: y, w: 3.2, h: 0.35,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.9, w: 9, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("穷举的质量，决定了后续所有分析的上限", {
    x: 0.5, y: 4.9, w: 9, h: 0.4,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });

  // 底部品牌
  slide.addShape("line", {
    x: 0.4, y: 5.35, w: 9.2, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("利益相关方深度实战 · 授课PPT", {
    x: 0.4, y: 5.4, w: 6, h: 0.2,
    fontSize: 8, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle"
  });
  slide.addText(String(pageNum).padStart(2, '0') + " / " + String(totalPages).padStart(3, '0'), {
    x: 8.0, y: 5.4, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN,
    color: theme.mid, align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
