// slide-112.js - C2抗拒：利益冲突
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
  slide.addText("PART 04 · C 阶 · C2", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 大编号 + 标题
  slide.addText("C2", {
    x: 0.5, y: 0.55, w: 1.6, h: 1.0,
    fontSize: 64, fontFace: FONT_EN, color: theme.accent,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("抗拒", {
    x: 2.1, y: 0.6, w: 7.4, h: 0.6,
    fontSize: 30, fontFace: FONT_CN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("明确的利益冲突或价值冲突 —— 反对的根源不在逻辑层，而在利益层", {
    x: 2.1, y: 1.2, w: 7.4, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 顶部警示条
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("⚠ 简单的逻辑说服对 C2 无效 —— 必须处理利益层", {
    x: 0.5, y: 1.85, w: 9, h: 0.4,
    fontSize: 13, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
  });

  // 左侧：核心判断
  slide.addShape("rect", {
    x: 0.5, y: 2.4, w: 4.3, h: 2.5,
    fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
  });
  slide.addText("核心判断", {
    x: 0.7, y: 2.5, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.accent,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("这件事对我不好", {
    x: 0.7, y: 2.9, w: 4.0, h: 0.5,
    fontSize: 20, fontFace: FONT_CN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  const reasons = [
    "有明确利益冲突",
    "价值层面不认同",
    "反对的不是方案本身",
    "根源在利益层"
  ];
  reasons.forEach(function (r, i) {
    const y = 3.55 + i * 0.32;
    slide.addText("·", {
      x: 0.7, y: y, w: 0.3, h: 0.3,
      fontSize: 14, fontFace: FONT_EN, color: theme.accent,
      bold: true, align: "left", valign: "middle"
    });
    slide.addText(r, {
      x: 0.95, y: y, w: 3.7, h: 0.3,
      fontSize: 11, fontFace: FONT_CN, color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // 右侧：行为特征
  slide.addShape("rect", {
    x: 5.0, y: 2.4, w: 4.5, h: 2.5,
    fill: { color: theme.highlight }, line: { color: theme.border, width: 0.5 }
  });
  slide.addText("行为特征", {
    x: 5.2, y: 2.5, w: 4.2, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  const behaviors = [
    "表面不公开反对（为维持关系）",
    "实际上不配合",
    "绕开你向别人传达消极信号",
    "「原则上支持，但具体细节需要再谈」"
  ];
  behaviors.forEach(function (b, i) {
    const y = 2.85 + i * 0.45;
    slide.addShape("ellipse", {
      x: 5.2, y: y + 0.05, w: 0.3, h: 0.3,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(String(i + 1), {
      x: 5.2, y: y + 0.05, w: 0.3, h: 0.3,
      fontSize: 10, fontFace: FONT_EN, color: theme.white,
      bold: true, align: "center", valign: "middle"
    });
    slide.addText(b, {
      x: 5.6, y: y, w: 3.7, h: 0.4,
      fontSize: 11, fontFace: FONT_CN, color: theme.dark,
      align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("C2 必须从「利益层」破局 —— 详见第五部分", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.accent,
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
