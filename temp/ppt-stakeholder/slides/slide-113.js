// slide-113.js - C3破坏：主动阻挠
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
  slide.addText("PART 04 · C 阶 · C3  高危", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle", charSpacing: 4
  });

  // 大编号 + 标题
  slide.addText("C3", {
    x: 0.5, y: 0.55, w: 1.6, h: 1.0,
    fontSize: 64, fontFace: FONT_EN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("破坏", {
    x: 2.1, y: 0.6, w: 7.4, h: 0.6,
    fontSize: 30, fontFace: FONT_CN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("主动阻挠项目推进 —— 涉及更深层的组织政治，普通沟通策略难以解决", {
    x: 2.1, y: 1.2, w: 7.4, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 顶部红色警示
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("✕ 高危信号：主动制造阻碍、动员他人消极情绪", {
    x: 0.5, y: 1.85, w: 9, h: 0.4,
    fontSize: 13, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
  });

  // 左右分栏
  // 左侧：行为特征
  slide.addShape("rect", {
    x: 0.5, y: 2.4, w: 4.3, h: 2.5,
    fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
  });
  slide.addText("行为特征", {
    x: 0.7, y: 2.5, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  const behaviors = [
    "主动向项目的上级反映「问题」",
    "在背后向关键人施压",
    "在项目推进节点处制造障碍",
    "故意「帮倒忙」 —— 看似配合实则破坏"
  ];
  behaviors.forEach(function (b, i) {
    const y = 2.85 + i * 0.45;
    slide.addShape("rect", {
      x: 0.7, y: y + 0.1, w: 0.2, h: 0.2,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(b, {
      x: 1.0, y: y, w: 3.7, h: 0.4,
      fontSize: 11, fontFace: FONT_CN, color: theme.dark,
      align: "left", valign: "middle"
    });
  });

  // 右侧：本质解读
  slide.addShape("rect", {
    x: 5.0, y: 2.4, w: 4.5, h: 2.5,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("本质解读", {
    x: 5.2, y: 2.5, w: 4.2, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.light,
    bold: true, align: "left", valign: "middle"
  });
  const insights = [
    "不是为了利益",
    "是组织政治 / 立场对立",
    "沟通策略已经失效",
    "需要更高层级介入或绕过"
  ];
  insights.forEach(function (s, i) {
    const y = 2.9 + i * 0.45;
    slide.addText("✕", {
      x: 5.2, y: y, w: 0.3, h: 0.35,
      fontSize: 14, fontFace: FONT_EN, color: theme.accent,
      bold: true, align: "left", valign: "middle"
    });
    slide.addText(s, {
      x: 5.55, y: y, w: 3.85, h: 0.35,
      fontSize: 12, fontFace: FONT_CN, color: theme.white,
      align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("C3 是组织问题，不是沟通问题", {
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
