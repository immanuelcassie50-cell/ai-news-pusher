// slide-125.js - 定位之后你拥有什么
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
  slide.addText("PART 04 · 定位后", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 标题
  slide.addText("定位之后，你手里有了什么", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("一张有坐标系的「人的地图」", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 左侧：你拥有的三件事
  slide.addText("这张地图告诉你", {
    x: 0.5, y: 1.85, w: 5.0, h: 0.35,
    fontSize: 14, fontFace: FONT_CN, color: theme.accent,
    bold: true, align: "left", valign: "middle"
  });

  const items = [
    { code: "A", text: "你的 A 级阵营里，有多少真正能依靠的力量", color: theme.primary },
    { code: "B", text: "你的 B 级阵营里，有多少可以被转化的犹豫者", color: theme.mid },
    { code: "C", text: "你的 C 级阵营里，面对的是理性质疑、利益冲突、还是主动破坏", color: theme.accent }
  ];

  items.forEach(function (it, i) {
    const y = 2.35 + i * 0.6;
    // 圆形编号
    slide.addShape("ellipse", {
      x: 0.5, y: y, w: 0.5, h: 0.5,
      fill: { color: it.color }, line: { color: it.color, width: 0 }
    });
    slide.addText(it.code, {
      x: 0.5, y: y, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: FONT_EN, color: theme.white,
      bold: true, align: "center", valign: "middle"
    });
    slide.addText(it.text, {
      x: 1.15, y: y, w: 4.0, h: 0.5,
      fontSize: 12, fontFace: FONT_CN, color: theme.dark,
      align: "left", valign: "middle"
    });
  });

  // 右侧：下一步动作
  slide.addShape("rect", {
    x: 5.7, y: 1.85, w: 3.8, h: 2.9,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("下一步", {
    x: 5.9, y: 2.0, w: 3.6, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.light,
    bold: true, align: "left", valign: "middle", charSpacing: 4
  });
  slide.addText("根据地图，", {
    x: 5.9, y: 2.4, w: 3.6, h: 0.4,
    fontSize: 18, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("判断两件事", {
    x: 5.9, y: 2.8, w: 3.6, h: 0.4,
    fontSize: 18, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 5.9, y: 3.3, w: 0.5, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("我需要每个人", {
    x: 5.9, y: 3.4, w: 3.6, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.white,
    align: "left", valign: "middle"
  });
  slide.addText("达到什么状态", {
    x: 5.9, y: 3.7, w: 3.6, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.white,
    align: "left", valign: "middle"
  });
  slide.addText("我能为他们提供什么", {
    x: 5.9, y: 4.05, w: 3.6, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.white,
    align: "left", valign: "middle"
  });
  slide.addText("让他们向那个方向移动", {
    x: 5.9, y: 4.35, w: 3.6, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.white,
    align: "left", valign: "middle"
  });

  // 底部金句：预告下一部分
  slide.addText("这是第五部分要完成的任务：需求映射", {
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
