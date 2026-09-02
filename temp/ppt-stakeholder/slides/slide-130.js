// slide-130.js - 核心思路：价值交换
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

  // 标题
  slide.addText("核心思路：价值交换", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("不是说服，是把双方的需求摆上桌，找到交换的接口", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 两种模式对比
  // 左侧：说服模式
  slide.addShape("rect", {
    x: 0.5, y: 2.1, w: 4.4, h: 1.5,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.1, w: 4.4, h: 0.4,
    fill: { color: theme.mid },
    line: { color: theme.mid, width: 0 }
  });
  slide.addText("说服模式（多数人本能）", {
    x: 0.5, y: 2.1, w: 4.4, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("「我把理由讲得足够清楚，对方自然就会支持我」", {
    x: 0.65, y: 2.6, w: 4.1, h: 0.45,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addText("前提：对方在用「理性判断是否正确」的模式", {
    x: 0.65, y: 3.1, w: 4.1, h: 0.4,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "middle"
  });

  // 右侧：价值交换
  slide.addShape("rect", {
    x: 5.1, y: 2.1, w: 4.4, h: 1.5,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.1, w: 4.4, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("价值交换（需求映射底层逻辑）", {
    x: 5.1, y: 2.1, w: 4.4, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("「这件事对我有没有好处」—— 对方真实的判断逻辑", {
    x: 5.25, y: 2.6, w: 4.1, h: 0.45,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, italic: true, bold: true, align: "left", valign: "middle"
  });
  slide.addText("前提：你有他要的价值，他有你需要的资源", {
    x: 5.25, y: 3.1, w: 4.1, h: 0.4,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "middle"
  });

  // 中间：核心金句
  slide.addShape("rect", {
    x: 0.5, y: 3.85, w: 9, h: 1.3,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("需求映射的底层是「价值交换」", {
    x: 0.5, y: 3.95, w: 9, h: 0.4,
    fontSize: 18, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("你有某些价值，他有某些需求；他有某些价值，你有某些需求。", {
    x: 0.5, y: 4.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.light, align: "center", valign: "middle"
  });
  slide.addText("你们的合作，本质上是一次价值交换 —— 他得到他需要的，你得到你需要的。", {
    x: 0.5, y: 4.75, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.light, align: "center", valign: "middle"
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
