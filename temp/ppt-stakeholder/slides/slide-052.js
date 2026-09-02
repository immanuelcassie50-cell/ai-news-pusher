// slide-052.js - 维度五：受损相关方
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 02  ·  全景扫描  ·  维度五", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("05", {
    x: 0.5, y: 0.5, w: 1.3, h: 1.0,
    fontSize: 56, fontFace: FONT_EN,
    color: theme.light, bold: true, align: "left", valign: "middle"
  });
  slide.addText("受损相关方", {
    x: 1.8, y: 0.55, w: 7, h: 0.5,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("最容易被忽视，却往往是最大阻力来源", {
    x: 1.8, y: 1.0, w: 7, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 1.8, y: 1.35, w: 0.5, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 关键认知横条
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 9, h: 0.9,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("关键认知", {
    x: 0.75, y: 1.75, w: 3, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.light, bold: true, align: "left", valign: "middle"
  });
  slide.addText("「损失」不一定是坏事，但对那个人来说，「改变本身就是损失」。", {
    x: 0.75, y: 2.05, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, align: "left", valign: "middle"
  });
  slide.addText("受损方通常不会公开说「我反对」——他们的阻力是隐性的：拖延、不配合、「很忙」、「排期中」。", {
    x: 0.75, y: 2.3, w: 8.5, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.light, align: "left", valign: "middle"
  });

  // 损失的形式 - 6种
  const losses = [
    { t: "话语权被削弱", d: "曾经说了算的领域不再重要" },
    { t: "工作量增加但回报不变", d: "干更多活但绩效不变" },
    { t: "历史数据被暴露", d: "原本模糊的现在透明了" },
    { t: "固有流程被替代", d: "熟悉的工作方式被淘汰" },
    { t: "影响力被压缩", d: "曾经的核心圈子被边缘化" },
    { t: "过去的努力被「架空」", d: "他曾经主导的工作变得多余" }
  ];
  const cardW = 2.9;
  const cardH = 1.2;
  const gapX = 0.15;
  const gapY = 0.1;
  losses.forEach(function (l, i) {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * (cardW + gapX);
    const y = 2.75 + row * (cardH + gapY);
    slide.addShape("rect", {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addShape("rect", {
      x: x, y: y, w: 0.08, h: cardH,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(l.t, {
      x: x + 0.2, y: y + 0.1, w: cardW - 0.3, h: 0.3,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "middle"
    });
    slide.addText(l.d, {
      x: x + 0.2, y: y + 0.45, w: cardW - 0.3, h: 0.7,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top",
      lineSpacing: 14
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
