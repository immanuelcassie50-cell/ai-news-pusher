// slide-044.js - 维度二：资源相关方
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
  slide.addText("PART 02  ·  全景扫描  ·  维度二", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("02", {
    x: 0.5, y: 0.5, w: 1.3, h: 1.0,
    fontSize: 56, fontFace: FONT_EN,
    color: theme.light, bold: true, align: "left", valign: "middle"
  });
  slide.addText("资源相关方", {
    x: 1.8, y: 0.55, w: 7, h: 0.5,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("掌握或控制项目推进所需关键资源的人", {
    x: 1.8, y: 1.0, w: 7, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 1.8, y: 1.35, w: 0.5, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 资源类型 - 6宫格
  const resources = [
    { t: "预算", i: "$" },
    { t: "人力编制", i: "P" },
    { t: "数据权限", i: "D" },
    { t: "渠道资源", i: "C" },
    { t: "审批签字权", i: "✓" },
    { t: "关键技术能力", i: "K" }
  ];
  const startX = 0.5;
  const startY = 1.7;
  const cardW = 1.45;
  const cardH = 1.4;
  const gapX = 0.1;
  resources.forEach(function (r, i) {
    const x = startX + i * (cardW + gapX);
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 顶部色条
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: 0.1,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    // 字母标识
    slide.addShape("ellipse", {
      x: x + (cardW - 0.6) / 2, y: startY + 0.25, w: 0.6, h: 0.6,
      fill: { color: theme.highlight },
      line: { color: theme.primary, width: 1 }
    });
    slide.addText(r.i, {
      x: x + (cardW - 0.6) / 2, y: startY + 0.25, w: 0.6, h: 0.6,
      fontSize: 20, fontFace: FONT_EN,
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });
    slide.addText(r.t, {
      x: x, y: startY + 0.95, w: cardW, h: 0.35,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "center", valign: "middle"
    });
  });

  // 隐形审批链提示
  slide.addShape("rect", {
    x: 0.5, y: 3.3, w: 9, h: 1.7,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.3, w: 0.1, h: 1.7,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("⚠️ 隐形审批链 —— 最容易被忽略的环节", {
    x: 0.75, y: 3.4, w: 8.5, h: 0.3,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("有些审批链条是隐形的：", {
    x: 0.75, y: 3.75, w: 8.5, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "middle"
  });
  const hidden = [
    "你的直接上级可以签，但他的签字需要另一个人先点头",
    "某个资源表面上属于 A，但实际上 B 有否决权",
    "财务签了还要业务部门会签，业务部门还有内部审议流程"
  ];
  hidden.forEach(function (h, i) {
    const y = 4.05 + i * 0.3;
    slide.addShape("ellipse", {
      x: 0.85, y: y + 0.08, w: 0.1, h: 0.1,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(h, {
      x: 1.05, y: y, w: 8.0, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("资源相关方未必是高管——一个数据接口人、一个排期决定人，足以卡住整个项目", {
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
