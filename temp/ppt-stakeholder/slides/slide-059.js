// slide-059.js - 矩阵优先级逻辑
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
  slide.addText("PART 02  ·  全景扫描  ·  优先级逻辑", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("优先级逻辑：先看哪一格？", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("从矩阵到「先做什么」的判断路径", {
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

  // 流程图：四象限 → 行动优先级
  // 第一步：右上
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 2.0, h: 1.0,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("Step 1", {
    x: 0.5, y: 1.75, w: 2.0, h: 0.25,
    fontSize: 9, fontFace: FONT_EN,
    color: theme.light, align: "center", valign: "middle",
    charSpacing: 3
  });
  slide.addText("高·高", {
    x: 0.5, y: 2.0, w: 2.0, h: 0.35,
    fontSize: 16, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("重点管理", {
    x: 0.5, y: 2.35, w: 2.0, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, align: "center", valign: "middle"
  });

  // 箭头
  slide.addText("→", {
    x: 2.55, y: 1.95, w: 0.3, h: 0.5,
    fontSize: 24, fontFace: FONT_EN,
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // 第二步：左上
  slide.addShape("rect", {
    x: 2.9, y: 1.7, w: 2.0, h: 1.0,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("Step 2", {
    x: 2.9, y: 1.75, w: 2.0, h: 0.25,
    fontSize: 9, fontFace: FONT_EN,
    color: theme.light, align: "center", valign: "middle",
    charSpacing: 3
  });
  slide.addText("高·低", {
    x: 2.9, y: 2.0, w: 2.0, h: 0.35,
    fontSize: 16, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("定期知会", {
    x: 2.9, y: 2.35, w: 2.0, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, align: "center", valign: "middle"
  });

  slide.addText("→", {
    x: 4.95, y: 1.95, w: 0.3, h: 0.5,
    fontSize: 24, fontFace: FONT_EN,
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // 第三步：右下
  slide.addShape("rect", {
    x: 5.3, y: 1.7, w: 2.0, h: 1.0,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("Step 3", {
    x: 5.3, y: 1.75, w: 2.0, h: 0.25,
    fontSize: 9, fontFace: FONT_EN,
    color: theme.light, align: "center", valign: "middle",
    charSpacing: 3
  });
  slide.addText("低·高", {
    x: 5.3, y: 2.0, w: 2.0, h: 0.35,
    fontSize: 16, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("保持沟通", {
    x: 5.3, y: 2.35, w: 2.0, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, align: "center", valign: "middle"
  });

  slide.addText("→", {
    x: 7.35, y: 1.95, w: 0.3, h: 0.5,
    fontSize: 24, fontFace: FONT_EN,
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // 第四步：左下
  slide.addShape("rect", {
    x: 7.7, y: 1.7, w: 1.8, h: 1.0,
    fill: { color: theme.mid },
    line: { color: theme.mid, width: 0 }
  });
  slide.addText("Step 4", {
    x: 7.7, y: 1.75, w: 1.8, h: 0.25,
    fontSize: 9, fontFace: FONT_EN,
    color: theme.light, align: "center", valign: "middle",
    charSpacing: 3
  });
  slide.addText("低·低", {
    x: 7.7, y: 2.0, w: 1.8, h: 0.35,
    fontSize: 16, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("基本告知", {
    x: 7.7, y: 2.35, w: 1.8, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, align: "center", valign: "middle"
  });

  // 关键原则
  slide.addText("关键原则", {
    x: 0.5, y: 2.95, w: 9, h: 0.3,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.25, w: 0.4, h: 0.03,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  const principles = [
    { t: "先管理高·高", d: "他们影响结果的能力最强" },
    { t: "再知会高·低", d: "防止「不了解」带来的误判" },
    { t: "然后深耕低·高", d: "可能含被低估的种子用户" },
    { t: "最后基本告知低·低", d: "精力有限时再处理" }
  ];
  principles.forEach(function (p, i) {
    const y = 3.4 + i * 0.4;
    slide.addText(String(i + 1), {
      x: 0.5, y: y, w: 0.4, h: 0.35,
      fontSize: 14, fontFace: FONT_EN,
      color: theme.accent, bold: true, align: "left", valign: "middle"
    });
    slide.addText(p.t, {
      x: 0.95, y: y, w: 3, h: 0.35,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "middle"
    });
    slide.addText(p.d, {
      x: 4.0, y: y, w: 5.5, h: 0.35,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("矩阵的价值不是分类，而是排序——决定你接下来把时间花在哪里", {
    x: 0.5, y: 5.05, w: 9, h: 0.25,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "center", valign: "middle"
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
