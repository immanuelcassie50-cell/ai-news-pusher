// slide-111.js - C1怀疑：理性质疑
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.mid }, line: { color: theme.mid, width: 0 }
  });
  slide.addText("PART 04 · C 阶 · C1", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 大编号 + 标题
  slide.addText("C1", {
    x: 0.5, y: 0.55, w: 1.6, h: 1.0,
    fontSize: 64, fontFace: FONT_EN, color: theme.mid,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("怀疑", {
    x: 2.1, y: 0.6, w: 7.4, h: 0.6,
    fontSize: 30, fontFace: FONT_CN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("理性质疑 —— 不是敌意，也不是利益冲突，是「我还没看到足够的理由」", {
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
    fill: { color: theme.mid }, line: { color: theme.mid, width: 0 }
  });
  slide.addText("核心判断", {
    x: 0.7, y: 2.0, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "left", valign: "middle", charSpacing: 4
  });
  slide.addText("我还没看到", {
    x: 0.7, y: 2.4, w: 4.0, h: 0.5,
    fontSize: 24, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("足够的理由", {
    x: 0.7, y: 2.9, w: 4.0, h: 0.5,
    fontSize: 24, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.7, y: 3.5, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("质疑的是可行性 / 必要性", {
    x: 0.7, y: 3.6, w: 4.0, h: 0.3,
    fontSize: 11, fontFace: FONT_CN, color: theme.white,
    align: "left", valign: "middle"
  });
  slide.addText("质疑的是方案质量", {
    x: 0.7, y: 3.9, w: 4.0, h: 0.3,
    fontSize: 11, fontFace: FONT_CN, color: theme.white,
    align: "left", valign: "middle"
  });
  slide.addText("可以转化 —— 拿出有说服力的回应", {
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
    "在会议上提出有逻辑的质疑（数据准确性、推进时间表）",
    "会要求看数据和依据",
    "不带情绪，针对事不针对人",
    "如果你能给出回应，他可以被转化"
  ];
  behaviors.forEach(function (b, i) {
    const y = 2.4 + i * 0.55;
    slide.addShape("ellipse", {
      x: 5.1, y: y, w: 0.4, h: 0.4,
      fill: { color: theme.mid }, line: { color: theme.mid, width: 0 }
    });
    slide.addText(String(i + 1), {
      x: 5.1, y: y, w: 0.4, h: 0.4,
      fontSize: 13, fontFace: FONT_EN, color: theme.white,
      bold: true, align: "center", valign: "middle"
    });
    slide.addText(b, {
      x: 5.6, y: y + 0.05, w: 4.0, h: 0.3,
      fontSize: 12, fontFace: FONT_CN, color: theme.dark,
      align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("C1 不是敌人 —— 是项目的免费质量审查员", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
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
