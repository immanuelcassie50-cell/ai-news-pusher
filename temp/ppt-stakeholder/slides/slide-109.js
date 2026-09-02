// slide-109.js - B3冷漠：行为特征
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.dark }, line: { color: theme.dark, width: 0 }
  });
  slide.addText("PART 04 · B 阶 · B3", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 大编号 + 标题
  slide.addText("B3", {
    x: 0.5, y: 0.55, w: 1.6, h: 1.0,
    fontSize: 64, fontFace: FONT_EN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("冷漠", {
    x: 2.1, y: 0.6, w: 7.4, h: 0.6,
    fontSize: 30, fontFace: FONT_CN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("有意识地保持距离 —— 不同 B1 的「没意识到」，B3 是「选择不参与」", {
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
    fill: { color: theme.dark }, line: { color: theme.dark, width: 0 }
  });
  slide.addText("核心判断", {
    x: 0.7, y: 2.0, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.light,
    bold: true, align: "left", valign: "middle", charSpacing: 4
  });
  slide.addText("意识到了，", {
    x: 0.7, y: 2.4, w: 4.0, h: 0.5,
    fontSize: 24, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("选择不参与", {
    x: 0.7, y: 2.9, w: 4.0, h: 0.5,
    fontSize: 24, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.7, y: 3.5, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("过去被类似项目辜负过", {
    x: 0.7, y: 3.6, w: 4.0, h: 0.3,
    fontSize: 11, fontFace: FONT_CN, color: theme.white,
    align: "left", valign: "middle"
  });
  slide.addText("不想被卷入的顾虑", {
    x: 0.7, y: 3.9, w: 4.0, h: 0.3,
    fontSize: 11, fontFace: FONT_CN, color: theme.white,
    align: "left", valign: "middle"
  });
  slide.addText("对项目的隐性不认同", {
    x: 0.7, y: 4.2, w: 4.0, h: 0.3,
    fontSize: 11, fontFace: FONT_CN, color: theme.white,
    align: "left", valign: "middle"
  });

  // 右侧：行为特征
  slide.addText("行为特征", {
    x: 5.1, y: 1.95, w: 4.4, h: 0.3,
    fontSize: 13, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  const behaviors = [
    "你联系他，回复很慢或不回",
    "项目讨论中保持沉默",
    "对关键人说「我看看吧」「这事不好说」",
    "若即若离，让你难以判断真实立场"
  ];
  behaviors.forEach(function (b, i) {
    const y = 2.4 + i * 0.55;
    slide.addShape("rect", {
      x: 5.1, y: y + 0.12, w: 0.14, h: 0.14,
      fill: { color: theme.dark }, line: { color: theme.dark, width: 0 }
    });
    slide.addText(b, {
      x: 5.35, y: y, w: 4.25, h: 0.4,
      fontSize: 12, fontFace: FONT_CN, color: theme.dark,
      align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("B3 难处理 —— 必须先识别背后的真实原因", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.dark,
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
