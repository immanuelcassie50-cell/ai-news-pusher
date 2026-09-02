// slide-039.js - 六维扫描导论
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
  slide.addText("PART 02  ·  全景扫描", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("六维扫描：穷举所有潜在相关方", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("六个不同视角切入，覆盖所有可能与项目产生关联的人和群体", {
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

  // 6个维度卡片 (3x2 grid)
  const dims = [
    { n: "01", t: "直接相关方", d: "参与项目执行、实施、推进过程的人", c: theme.primary },
    { n: "02", t: "资源相关方", d: "掌握项目所需关键资源（预算/审批/技术）", c: theme.primary },
    { n: "03", t: "影响相关方", d: "不直接执行，但态度会影响他人判断", c: theme.accent },
    { n: "04", t: "受益相关方", d: "项目成功后能获益——潜在天然盟友", c: theme.accent },
    { n: "05", t: "受损相关方", d: "项目推进会失去现有利益的人——最大阻力来源", c: theme.dark },
    { n: "06", t: "外部相关方", d: "组织边界外但有实质影响的个人/机构", c: theme.dark }
  ];
  const startX = 0.5;
  const startY = 1.7;
  const cardW = 3.0;
  const cardH = 1.55;
  const gapX = 0.15;
  const gapY = 0.2;
  dims.forEach(function (d, i) {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);
    // 卡片
    slide.addShape("rect", {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 顶部色条
    slide.addShape("rect", {
      x: x, y: y, w: cardW, h: 0.08,
      fill: { color: d.c },
      line: { color: d.c, width: 0 }
    });
    // 编号
    slide.addText(d.n, {
      x: x + 0.15, y: y + 0.18, w: 0.6, h: 0.3,
      fontSize: 14, fontFace: FONT_EN,
      color: d.c, bold: true, align: "left", valign: "middle"
    });
    // 标题
    slide.addText(d.t, {
      x: x + 0.15, y: y + 0.5, w: cardW - 0.3, h: 0.4,
      fontSize: 15, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "middle"
    });
    // 描述
    slide.addText(d.d, {
      x: x + 0.15, y: y + 0.9, w: cardW - 0.3, h: 0.6,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top",
      lineSpacing: 14
    });
  });

  // 底部警示
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addText("⚠️ 原则：先求全，不求精 —— 每格只写名字或标签，分析是第三部分的任务", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
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
