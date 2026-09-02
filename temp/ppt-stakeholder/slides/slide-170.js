// slide-170.js - 结束页
// 参考封面但简化，作为收尾
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 背景大色块（深红）— 简化使用
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });

  // 装饰斜线（左上）
  slide.addShape("line", {
    x: 0, y: 0, w: 4, h: 1.5,
    line: { color: theme.accent, width: 1.5 }
  });
  // 装饰斜线（右下）
  slide.addShape("line", {
    x: 6, y: 4.1, w: 4, h: 1.5,
    line: { color: theme.accent, width: 1.5 }
  });

  // 底部装饰条
  slide.addShape("rect", {
    x: 0, y: 5.45, w: 10, h: 0.18,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 顶部 kicker
  slide.addText("THANK YOU", {
    x: 0.7, y: 0.9, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: FONT_EN,
    color: theme.light, bold: true, align: "center", valign: "middle", charSpacing: 12
  });

  // 主金句（大字号 + 装饰）
  slide.addText("看清人  ·  找破局", {
    x: 0.7, y: 1.6, w: 8.6, h: 1.2,
    fontSize: 80, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle", charSpacing: 16
  });

  // 副金句
  slide.addText("看见, 是找到破局口的第一步", {
    x: 0.7, y: 3.0, w: 8.6, h: 0.4,
    fontSize: 18, fontFace: FONT_CN,
    color: theme.light, align: "center", valign: "middle", charSpacing: 4
  });

  // 装饰小条
  slide.addShape("rect", {
    x: 4.6, y: 3.55, w: 0.8, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 英文副标
  slide.addText("See clearly  ·  Find leverage", {
    x: 0.7, y: 3.7, w: 8.6, h: 0.35,
    fontSize: 13, fontFace: FONT_EN,
    color: theme.light, align: "center", valign: "middle", charSpacing: 4
  });

  // 底部信息
  slide.addText("利益相关方深度实战  ·  行动学习 2026", {
    x: 0.7, y: 4.65, w: 8.6, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, align: "center", valign: "middle", charSpacing: 3
  });
  slide.addText("170 / 170", {
    x: 0.7, y: 4.95, w: 8.6, h: 0.3,
    fontSize: 10, fontFace: FONT_EN,
    color: theme.light, align: "center", valign: "middle", charSpacing: 2
  });
}

module.exports = { createSlide };
