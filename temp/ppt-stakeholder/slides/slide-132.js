// slide-132.js - 第一步：项目目标确认
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 05  /  需求映射", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  // 步骤标
  slide.addText("STEP  01", {
    x: 0.5, y: 0.65, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_EN,
    color: theme.accent, bold: true, align: "left", valign: "middle",
    charSpacing: 6
  });
  // 标题
  slide.addText("明确项目目标和成功标准", {
    x: 0.5, y: 0.95, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("在分析每个人之前，先把项目的终点再次确认清楚", {
    x: 0.5, y: 1.65, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.0, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 左侧：解释
  slide.addText("为什么要先确认目标？", {
    x: 0.5, y: 2.25, w: 4.4, h: 0.35,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("很多项目在推进过程中会发生「目标漂移」——", {
    x: 0.5, y: 2.6, w: 4.4, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "top"
  });
  slide.addText("原本是为了 A，沟通着沟通着变成了讲 B，资源争取着争取着变成了要 C。", {
    x: 0.5, y: 2.95, w: 4.4, h: 0.7,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "top",
    lineSpacing: 16
  });
  slide.addText("当你面对多个利益相关方、每个人需要不同的沟通策略时，目标的清晰度尤其重要 ——", {
    x: 0.5, y: 3.7, w: 4.4, h: 0.7,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "top",
    lineSpacing: 16
  });
  slide.addText("它告诉你：哪些支持是必须的，哪些是锦上添花的。", {
    x: 0.5, y: 4.45, w: 4.4, h: 0.5,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, italic: true, align: "left", valign: "top"
  });

  // 右侧：填写模板
  slide.addShape("rect", {
    x: 5.1, y: 2.25, w: 4.4, h: 2.85,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.25, w: 4.4, h: 0.35,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("请重新确认你的项目目标", {
    x: 5.1, y: 2.25, w: 4.4, h: 0.35,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  // 字段1
  slide.addText("项目的核心目标（一句话）", {
    x: 5.25, y: 2.7, w: 4.1, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 5.25, y: 3.0, w: 4.1, h: 0.4,
    fill: { color: theme.highlight },
    line: { color: theme.border, width: 0.5 }
  });
  // 字段2
  slide.addText("项目成功的标志（可验证的结果）", {
    x: 5.25, y: 3.5, w: 4.1, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 5.25, y: 3.8, w: 4.1, h: 0.4,
    fill: { color: theme.highlight },
    line: { color: theme.border, width: 0.5 }
  });
  // 字段3
  slide.addText("不可缺少的条件（必须达成）", {
    x: 5.25, y: 4.3, w: 4.1, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 5.25, y: 4.6, w: 4.1, h: 0.35,
    fill: { color: theme.highlight },
    line: { color: theme.border, width: 0.5 }
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
