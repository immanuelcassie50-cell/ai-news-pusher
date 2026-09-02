// slide-102.js - A1投入：行为特征
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 04 · A 阶 · A1", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 大编号 + 标题
  slide.addText("A1", {
    x: 0.5, y: 0.55, w: 1.6, h: 1.0,
    fontSize: 64, fontFace: FONT_EN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("投入", {
    x: 2.1, y: 0.6, w: 7.4, h: 0.6,
    fontSize: 30, fontFace: FONT_CN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("真正意义上的盟友 —— 不是因为你请求了他，是他自己认定这件事值得做", {
    x: 2.1, y: 1.2, w: 7.4, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 左侧：核心判断
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 4.3, h: 3.0,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("核心判断", {
    x: 0.7, y: 2.0, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.light,
    bold: true, align: "left", valign: "middle", charSpacing: 4
  });
  slide.addText("不用你说，", {
    x: 0.7, y: 2.4, w: 4.0, h: 0.5,
    fontSize: 24, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("他就动了", {
    x: 0.7, y: 2.9, w: 4.0, h: 0.5,
    fontSize: 24, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.7, y: 3.5, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("主动付出时间、精力和资源", {
    x: 0.7, y: 3.6, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.white,
    align: "left", valign: "middle"
  });
  slide.addText("主动帮你推动其他人", {
    x: 0.7, y: 3.9, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.white,
    align: "left", valign: "middle"
  });
  slide.addText("主动在你没想到的地方解决问题", {
    x: 0.7, y: 4.2, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.white,
    align: "left", valign: "middle"
  });

  // 右侧：行为特征清单
  slide.addText("行为特征（你能观察到的）", {
    x: 5.1, y: 1.95, w: 4.4, h: 0.3,
    fontSize: 13, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  const behaviors = [
    "主动联系你同步进展",
    "在你没在场的会议里帮你说话",
    "主动把可用资源引荐给你",
    "遇到阻碍时不等你，自己先想办法"
  ];
  behaviors.forEach(function (b, i) {
    const y = 2.4 + i * 0.55;
    // 数字
    slide.addShape("ellipse", {
      x: 5.1, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(String(i + 1), {
      x: 5.1, y: y, w: 0.4, h: 0.4,
      fontSize: 13, fontFace: FONT_EN, color: theme.white,
      bold: true, align: "center", valign: "middle"
    });
    // 描述
    slide.addText(b, {
      x: 5.6, y: y + 0.05, w: 4.0, h: 0.3,
      fontSize: 12, fontFace: FONT_CN, color: theme.dark,
      align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("A1 让你拥有「不需要管理的同盟军」", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.primary,
    bold: true, italic: true, align: "center", valign: "middle"
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
