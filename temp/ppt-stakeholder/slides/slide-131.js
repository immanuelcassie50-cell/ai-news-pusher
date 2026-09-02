// slide-131.js - 说服 vs 价值交换（对比表）
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
  slide.addText("说服 vs 价值交换", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("两种沟通模式，决定了对方在不在你的频道上", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 对比表
  const rows = [
    { left: "底层逻辑：把我的理由讲清楚", right: "底层逻辑：找到双方需求的交换接口" },
    { left: "关注点：方案的优势、数据的完整", right: "关注点：对方在乎什么、缺什么" },
    { left: "沟通语言：理性、论据、专业性", right: "沟通语言：你能给我什么、我能给你什么" },
    { left: "效果前提：对方已经用理性思考模式", right: "效果前提：人类的真实判断逻辑" },
    { left: "失败原因：讲得不够好 / 对方认知有误", right: "失败原因：没找到他真正在意的事" },
    { left: "沟通起点：我的方案是什么", right: "沟通起点：他的顾虑是什么" }
  ];

  // 表头
  slide.addShape("rect", {
    x: 0.5, y: 2.0, w: 4.4, h: 0.4,
    fill: { color: theme.mid },
    line: { color: theme.mid, width: 0 }
  });
  slide.addText("说服（错）", {
    x: 0.5, y: 2.0, w: 4.4, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.0, w: 4.4, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("价值交换（对）", {
    x: 5.1, y: 2.0, w: 4.4, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });

  // 数据行
  rows.forEach(function (r, i) {
    const y = 2.4 + i * 0.45;
    // 左
    slide.addShape("rect", {
      x: 0.5, y: y, w: 4.4, h: 0.45,
      fill: { color: i % 2 === 0 ? theme.white : theme.highlight },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(r.left, {
      x: 0.65, y: y, w: 4.1, h: 0.45,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.dark, align: "left", valign: "middle"
    });
    // 右
    slide.addShape("rect", {
      x: 5.1, y: y, w: 4.4, h: 0.45,
      fill: { color: i % 2 === 0 ? theme.white : theme.highlight },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(r.right, {
      x: 5.25, y: y, w: 4.1, h: 0.45,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });
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
