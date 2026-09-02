// slide-116.js - 原则二：当前状态非永久
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
  slide.addText("PART 04 · 原则 2 / 3", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 大编号
  slide.addText("02", {
    x: 0.5, y: 0.55, w: 1.4, h: 1.0,
    fontSize: 60, fontFace: FONT_EN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  // 标题
  slide.addText("定的是当前状态，不是永久标签", {
    x: 2.0, y: 0.6, w: 7.5, h: 0.6,
    fontSize: 26, fontFace: FONT_CN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("三阶九梯描述的是此刻这个人的位置，不是他固定不变的属性", {
    x: 2.0, y: 1.2, w: 7.5, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 中央示例：状态迁移
  // 标签 1
  slide.addShape("rect", {
    x: 0.5, y: 1.95, w: 4.0, h: 0.45,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("示例 1：B2 犹豫 → A2 接受", {
    x: 0.5, y: 1.95, w: 4.0, h: 0.45,
    fontSize: 13, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
  });
  // 描述
  slide.addShape("rect", {
    x: 0.5, y: 2.4, w: 4.0, h: 1.0,
    fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
  });
  slide.addText("关键支持者公开表态", {
    x: 0.7, y: 2.5, w: 3.6, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("B2 看到了价值 + 风险下降，立场倾向支持", {
    x: 0.7, y: 2.8, w: 3.6, h: 0.5,
    fontSize: 11, fontFace: FONT_CN, color: theme.secondary,
    align: "left", valign: "top", lineSpacing: 16
  });

  // 标签 2
  slide.addShape("rect", {
    x: 5.0, y: 1.95, w: 4.5, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("示例 2：A2 接受 → B2 犹豫", {
    x: 5.0, y: 1.95, w: 4.5, h: 0.45,
    fontSize: 13, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
  });
  slide.addShape("rect", {
    x: 5.0, y: 2.4, w: 4.5, h: 1.0,
    fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
  });
  slide.addText("项目遇到挫折", {
    x: 5.2, y: 2.5, w: 4.1, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("A2 开始观望，立场退回 B2 —— 状态会变", {
    x: 5.2, y: 2.8, w: 4.1, h: 0.5,
    fontSize: 11, fontFace: FONT_CN, color: theme.secondary,
    align: "left", valign: "top", lineSpacing: 16
  });

  // 关键判断
  slide.addShape("rect", {
    x: 0.5, y: 3.6, w: 9, h: 1.2,
    fill: { color: theme.highlight }, line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.6, w: 0.08, h: 1.2,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("三阶九梯不是贴标签", {
    x: 0.7, y: 3.7, w: 8.7, h: 0.3,
    fontSize: 13, fontFace: FONT_CN, color: theme.accent,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("是建立「有行为依据的、当前时刻的」坐标", {
    x: 0.7, y: 4.0, w: 8.7, h: 0.35,
    fontSize: 14, fontFace: FONT_CN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("你不是在判断这个人好不好", {
    x: 0.7, y: 4.35, w: 8.7, h: 0.25,
    fontSize: 11, fontFace: FONT_CN, color: theme.secondary,
    align: "left", valign: "middle"
  });
  slide.addText("你是在看这件事上，他现在站在哪里，以及他下一步可能往哪里走", {
    x: 0.7, y: 4.55, w: 8.7, h: 0.25,
    fontSize: 11, fontFace: FONT_CN, color: theme.secondary,
    align: "left", valign: "middle"
  });

  // 底部金句
  slide.addText("状态会变，策略要跟着变", {
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
