// slide-060.js - 第四步：筛选6-8个核心
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
  slide.addText("PART 02  ·  全景扫描  ·  第四步", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("第四步：筛选 6 ~ 8 个核心人物", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 26, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("从高·高象限中筛选出你最需要深度分析的人", {
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

  // 筛选标准 - 4条
  slide.addText("筛选标准：满足以下任意一条，就纳入核心清单", {
    x: 0.5, y: 1.7, w: 9, h: 0.3,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });

  const criteria = [
    { t: "掌握关键资源", d: "预算、审批权、技术能力", i: "①" },
    { t: "意见领袖效应", d: "TA 的态度直接影响其他人的判断", i: "②" },
    { t: "反对足以阻断", d: "若反对，能显著延缓甚至阻断项目", i: "③" },
    { t: "支持能加速", d: "若主动支持，能显著加速项目落地", i: "④" }
  ];

  criteria.forEach(function (c, i) {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.55;
    const y = 2.15 + row * 1.1;
    slide.addShape("rect", {
      x: x, y: y, w: 4.4, h: 1.0,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 序号
    slide.addShape("ellipse", {
      x: x + 0.15, y: y + 0.2, w: 0.6, h: 0.6,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    slide.addText(c.i, {
      x: x + 0.15, y: y + 0.2, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    slide.addText(c.t, {
      x: x + 0.9, y: y + 0.15, w: 3.4, h: 0.4,
      fontSize: 14, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "middle"
    });
    slide.addText(c.d, {
      x: x + 0.9, y: y + 0.55, w: 3.4, h: 0.4,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top"
    });
  });

  // 数字标识
  slide.addShape("rect", {
    x: 0.5, y: 4.45, w: 9, h: 0.55,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("6 ~ 8 人", {
    x: 0.5, y: 4.45, w: 1.8, h: 0.55,
    fontSize: 18, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("经验值：少于 6 个会遗漏关键人；多于 8 个分析深度会被稀释", {
    x: 2.4, y: 4.45, w: 7, h: 0.55,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, align: "left", valign: "middle"
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
