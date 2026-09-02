// slide-047.js - 维度三：影响相关方
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
  slide.addText("PART 02  ·  全景扫描  ·  维度三", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("03", {
    x: 0.5, y: 0.5, w: 1.3, h: 1.0,
    fontSize: 56, fontFace: FONT_EN,
    color: theme.light, bold: true, align: "left", valign: "middle"
  });
  slide.addText("影响相关方", {
    x: 1.8, y: 0.55, w: 7, h: 0.5,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("不直接执行，但一句话可以改变很多执行者的态度", {
    x: 1.8, y: 1.0, w: 7, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 1.8, y: 1.35, w: 0.5, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 定义
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 9, h: 1.1,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 0.1, h: 1.1,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("「影响相关方」的定义", {
    x: 0.75, y: 1.8, w: 8.5, h: 0.3,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("不直接参与项目执行，但他们的态度会影响其他人判断的人。", {
    x: 0.75, y: 2.1, w: 8.5, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "middle"
  });
  slide.addText("当一个人还没有形成立场时，他会观察这类「意见领袖」的态度来「参考」。", {
    x: 0.75, y: 2.4, w: 8.5, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "middle"
  });

  // 三种最易漏类型
  slide.addText("最易漏的三类影响者", {
    x: 0.5, y: 2.95, w: 9, h: 0.3,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.25, w: 0.4, h: 0.03,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  const types = [
    { t: "非正式领袖", d: "资历深但职级未必高的老人", e: "老店长 / 老技术 / 老业务" },
    { t: "外部行业专家", d: "项目外部但行业内有话语权", e: "顾问 / 学者 / 前辈" },
    { t: "意见节点", d: "团队中话语权高但不显眼", e: "老好人 / 信息枢纽" }
  ];
  const cardW = 2.9;
  const cardH = 1.55;
  const gapX = 0.15;
  types.forEach(function (t, i) {
    const x = 0.5 + i * (cardW + gapX);
    slide.addShape("rect", {
      x: x, y: 3.4, w: cardW, h: cardH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addShape("rect", {
      x: x, y: 3.4, w: cardW, h: 0.08,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(t.t, {
      x: x + 0.15, y: 3.5, w: cardW - 0.3, h: 0.35,
      fontSize: 14, fontFace: FONT_CN,
      color: theme.accent, bold: true, align: "left", valign: "middle"
    });
    slide.addText(t.d, {
      x: x + 0.15, y: 3.85, w: cardW - 0.3, h: 0.4,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.dark, align: "left", valign: "top",
      lineSpacing: 14
    });
    slide.addText("例：" + t.e, {
      x: x + 0.15, y: 4.55, w: cardW - 0.3, h: 0.35,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.mid, italic: true, align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("组织架构图上看不到的影响力，往往是项目真正的舆论场", {
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
