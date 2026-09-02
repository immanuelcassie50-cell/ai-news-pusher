// slide-168.js - 课程核心金句
// 大字号 + 装饰元素（参考封面设计语言）
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧大色块（参考封面）
  slide.addShape("rect", {
    x: 0, y: 0, w: 4.2, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  // 左侧装饰线
  slide.addShape("line", {
    x: 0, y: 4.5, w: 4.2, h: 0,
    line: { color: theme.accent, width: 2 }
  });

  // 左侧英文 kicker
  slide.addText("CORE  ·  QUOTES", {
    x: 0.5, y: 0.5, w: 3.5, h: 0.3,
    fontSize: 11, fontFace: FONT_EN,
    color: theme.light, bold: true, align: "left", valign: "middle", charSpacing: 8
  });

  // 左侧大编号
  slide.addText("06", {
    x: 0.5, y: 0.9, w: 2, h: 1.6,
    fontSize: 140, fontFace: FONT_EN,
    color: theme.white, bold: true, align: "left", valign: "top"
  });

  // 左侧分隔
  slide.addShape("rect", {
    x: 0.5, y: 2.6, w: 0.5, h: 0.05,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  // 左侧副标
  slide.addText("Six Sentences", {
    x: 0.5, y: 2.75, w: 3.5, h: 0.3,
    fontSize: 11, fontFace: FONT_EN,
    color: theme.light, align: "left", valign: "middle", charSpacing: 3
  });

  // 左侧底部标识
  slide.addText("六句  ·  带你走完六年", {
    x: 0.5, y: 4.7, w: 3.5, h: 0.4,
    fontSize: 16, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle", charSpacing: 3
  });

  // 右侧标题
  slide.addText("课程核心金句", {
    x: 4.6, y: 0.6, w: 5.2, h: 0.5,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  // 副标
  slide.addText("Six sentences to remember", {
    x: 4.6, y: 1.05, w: 5.2, h: 0.3,
    fontSize: 12, fontFace: FONT_EN,
    color: theme.mid, align: "left", valign: "middle", charSpacing: 2
  });
  // 分隔细线
  slide.addShape("rect", {
    x: 4.6, y: 1.4, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 右侧六句金句
  const quotes = [
    { text: "项目失败, 大多不是方案问题, 是对「人的地图」的无知。", from: "第一部分" },
    { text: "你对利益相关方的「初步印象」, 几乎一定是不完整的。", from: "第一部分" },
    { text: "看清人, 不是为了评价人, 是为了找对杠杆。", from: "总论" },
    { text: "支持度是看行为, 不是听表态。", from: "第四部分" },
    { text: "价值交换, 不是说服。", from: "第五部分" },
    { text: "看见, 是找到破局口的第一步。", from: "第六部分" }
  ];
  const startY = 1.6;
  const itemH = 0.55;
  quotes.forEach(function (q, i) {
    const y = startY + i * itemH;
    // 序号点
    slide.addShape("ellipse", {
      x: 4.6, y: y + 0.07, w: 0.32, h: 0.32,
      fill: { color: i % 2 === 0 ? theme.primary : theme.accent },
      line: { color: i % 2 === 0 ? theme.primary : theme.accent, width: 0 }
    });
    slide.addText(String(i + 1), {
      x: 4.6, y: y + 0.07, w: 0.32, h: 0.32,
      fontSize: 10, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 金句
    slide.addText(q.text, {
      x: 5.05, y: y + 0.02, w: 4.6, h: 0.3,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "middle"
    });
    // 来源
    slide.addText("— " + q.from, {
      x: 5.05, y: y + 0.3, w: 4.6, h: 0.22,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.mid, italic: false, align: "left", valign: "middle"
    });
  });

  // 右侧底部细线
  slide.addShape("line", {
    x: 4.6, y: 5.05, w: 5, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("看清人  ·  找破局", {
    x: 4.6, y: 5.12, w: 3, h: 0.25,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle", charSpacing: 2
  });
  slide.addText("168 / 170", {
    x: 8.0, y: 5.12, w: 1.6, h: 0.25,
    fontSize: 8, fontFace: FONT_EN,
    color: theme.mid, align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
