// slide-104.js - A3顺从：行为特征
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
  slide.addText("PART 04 · A 阶 · A3", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 大编号 + 标题
  slide.addText("A3", {
    x: 0.5, y: 0.55, w: 1.6, h: 1.0,
    fontSize: 64, fontFace: FONT_EN, color: theme.mid,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("顺从", {
    x: 2.1, y: 0.6, w: 7.4, h: 0.6,
    fontSize: 30, fontFace: FONT_CN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("表面同意，但并非真心支持 —— 配合是外部压力，不是内心认同", {
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
  slide.addText("⚠ 警惕：A3 最容易被错当成 A2 甚至 A1", {
    x: 0.5, y: 1.85, w: 9, h: 0.4,
    fontSize: 13, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
  });

  // 左右分栏
  // 左侧：成因
  slide.addShape("rect", {
    x: 0.5, y: 2.4, w: 4.3, h: 2.5,
    fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
  });
  slide.addText("为什么是 A3", {
    x: 0.7, y: 2.5, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.accent,
    bold: true, align: "left", valign: "middle"
  });
  const reasons = [
    "上级要求、流程规定",
    "不配合的代价太高",
    "公开场合不举手会显得「不配合」",
    "新系统要改变操作习惯，无额外资源"
  ];
  reasons.forEach(function (r, i) {
    const y = 2.85 + i * 0.45;
    slide.addText("·", {
      x: 0.7, y: y, w: 0.3, h: 0.35,
      fontSize: 16, fontFace: FONT_EN, color: theme.accent,
      bold: true, align: "left", valign: "middle"
    });
    slide.addText(r, {
      x: 0.95, y: y, w: 3.8, h: 0.35,
      fontSize: 11, fontFace: FONT_CN, color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // 右侧：行为特征
  slide.addShape("rect", {
    x: 5.0, y: 2.4, w: 4.5, h: 2.5,
    fill: { color: theme.highlight }, line: { color: theme.border, width: 0.5 }
  });
  slide.addText("行为特征（非常关键）", {
    x: 5.2, y: 2.5, w: 4.2, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  const behaviors = [
    "公开场合表态「没问题」",
    "执行上总有各种延误",
    "用「很忙」「排期」规避额外投入",
    "不主动，不透明，不报问题"
  ];
  behaviors.forEach(function (b, i) {
    const y = 2.85 + i * 0.45;
    slide.addShape("ellipse", {
      x: 5.2, y: y + 0.05, w: 0.3, h: 0.3,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
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
  slide.addText("那张「支持的举手」可能是 A3，不是 A2", {
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
