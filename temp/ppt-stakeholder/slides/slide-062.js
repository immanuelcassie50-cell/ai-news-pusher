// slide-062.js - 穷举阶段四个错误
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
  slide.addText("PART 02  ·  全景扫描  ·  陷阱总览", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("穷举阶段最容易犯的四个错误", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("完成清单后快速检查——这四个陷阱决定清单质量", {
    x: 0.5, y: 1.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 2x2 错误卡片
  const traps = [
    {
      n: "01",
      t: "只列进「我认识的人」",
      d: "关键影响者可能是你不认识的人",
      sol: "主动问了解组织生态的人"
    },
    {
      n: "02",
      t: "把群体当成一个人",
      d: "「门店店长们」不是一个人，内部有分化",
      sol: "找到群体中的代表性个体单独分析"
    },
    {
      n: "03",
      t: "跳过维度五（受损方）",
      d: "本能聚焦「谁会帮我」，不聚焦「谁会受损」",
      sol: "受损方是沉默阻力，主动追问"
    },
    {
      n: "04",
      t: "用职级衡量影响力",
      d: "副总裁可能漠不关心，基层老员工可能是关键",
      sol: "按「对这个项目的实际影响力」定位"
    }
  ];

  const cardW = 4.4;
  const cardH = 1.6;
  const gapX = 0.15;
  const gapY = 0.15;
  traps.forEach(function (t, i) {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * (cardW + gapX);
    const y = 1.7 + row * (cardH + gapY);
    slide.addShape("rect", {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 编号
    slide.addShape("rect", {
      x: x, y: y, w: 0.8, h: cardH,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(t.n, {
      x: x, y: y, w: 0.8, h: cardH,
      fontSize: 28, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 标题
    slide.addText(t.t, {
      x: x + 0.95, y: y + 0.15, w: cardW - 1.1, h: 0.4,
      fontSize: 14, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "middle"
    });
    // 描述
    slide.addText(t.d, {
      x: x + 0.95, y: y + 0.6, w: cardW - 1.1, h: 0.45,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top",
      lineSpacing: 14
    });
    // 解决
    slide.addShape("rect", {
      x: x + 0.95, y: y + 1.15, w: cardW - 1.1, h: 0.32,
      fill: { color: theme.highlight },
      line: { color: theme.highlight, width: 0 }
    });
    slide.addText("解法：" + t.sol, {
      x: x + 1.05, y: y + 1.15, w: cardW - 1.3, h: 0.32,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("穷举的质量，决定了后续所有分析的上限", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
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
