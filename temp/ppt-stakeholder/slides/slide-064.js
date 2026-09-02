// slide-064.js - 陷阱二三四：群体与维度
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
  slide.addText("PART 02  ·  全景扫描  ·  陷阱二三四", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("陷阱二 / 三 / 四：群体与维度", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 26, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("三个经常同时犯的简化错误", {
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

  // 三个陷阱 - 垂直堆叠
  const traps = [
    {
      n: "02",
      t: "把群体当成一个人",
      d: "「门店店长们」不是一个人——老店长 vs 新店长、大店长 vs 小店长顾虑不同、利益不同",
      sol: "找到群体中的代表性个体，单独分析"
    },
    {
      n: "03",
      t: "跳过维度五（受损相关方）",
      d: "推项目时本能聚焦「谁会帮我」，不是「谁会受损」。受损方是沉默的阻力——不说反对，只是不行动、拖时间",
      sol: "主动追问：谁会因此失去现有利益？"
    },
    {
      n: "04",
      t: "用职级衡量影响力",
      d: "副总裁可能对你的项目毫不关心；基层老员工可能是关键意见领袖。权力-利益矩阵里的「权力」是对这个项目的实际影响力",
      sol: "按「对这个项目的实际影响力」定位，不是职级"
    }
  ];

  const cardH = 1.05;
  const startY = 1.7;
  const gapY = 0.1;
  traps.forEach(function (t, i) {
    const y = startY + i * (cardH + gapY);
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: cardH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 左侧编号
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.9, h: cardH,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText("陷阱", {
      x: 0.5, y: y + 0.1, w: 0.9, h: 0.25,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.light, align: "center", valign: "middle"
    });
    slide.addText(t.n, {
      x: 0.5, y: y + 0.35, w: 0.9, h: 0.5,
      fontSize: 26, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 标题
    slide.addText(t.t, {
      x: 1.55, y: y + 0.1, w: 7.85, h: 0.3,
      fontSize: 14, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "middle"
    });
    // 描述
    slide.addText(t.d, {
      x: 1.55, y: y + 0.4, w: 7.85, h: 0.35,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top",
      lineSpacing: 14
    });
    // 解决
    slide.addShape("rect", {
      x: 1.55, y: y + 0.74, w: 7.85, h: 0.27,
      fill: { color: theme.highlight },
      line: { color: theme.highlight, width: 0 }
    });
    slide.addText("✦ " + t.sol, {
      x: 1.65, y: y + 0.74, w: 7.65, h: 0.27,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("宁可多列几个人，也不要漏掉真正重要的——漏掉一个关键人，策略就可能建在沙上", {
    x: 0.5, y: 5.05, w: 9, h: 0.25,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "center", valign: "middle"
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
