// slide-164.js - 动态管理：分析一次管理持续
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
  slide.addText("PART 06  /  破局策略", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  // 标题
  slide.addText("动态管理：分析一次，管理持续", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("分析不是一次就永久有效的 —— 人的立场会变化", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 中心金句
  slide.addShape("rect", {
    x: 0.5, y: 2.1, w: 9, h: 0.85,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("分析是一次完成的；管理是持续进行的。", {
    x: 0.5, y: 2.1, w: 9, h: 0.85,
    fontSize: 22, fontFace: FONT_CN,
    color: theme.white, bold: true, italic: true, align: "center", valign: "middle",
    charSpacing: 4
  });

  // 变化案例
  slide.addText("人的立场会随项目进展、外部事件和利益变化而改变：", {
    x: 0.5, y: 3.1, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });

  const cases = [
    { from: "六个月前 A2", to: "今天 B2", reason: "可能因为一件你不知道的事" },
    { from: "六个月前 B2", to: "今天 A1", reason: "可能因为你成功的一次沟通" }
  ];
  cases.forEach(function (c, i) {
    const x = 0.5 + i * 4.55;
    slide.addShape("rect", {
      x: x, y: 3.5, w: 4.35, h: 0.95,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(c.from + "  →  " + c.to, {
      x: x + 0.2, y: 3.6, w: 4.0, h: 0.4,
      fontSize: 14, fontFace: FONT_CN,
      color: theme.accent, bold: true, align: "left", valign: "middle"
    });
    slide.addText(c.reason, {
      x: x + 0.2, y: 4.0, w: 4.0, h: 0.4,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.secondary, italic: true, align: "left", valign: "top",
      lineSpacing: 14
    });
  });

  // 持续习惯
  slide.addShape("rect", {
    x: 0.5, y: 4.6, w: 9, h: 0.65,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addText("真正会用这套工具的人，会把利益相关方分析变成持续习惯 ——", {
    x: 0.5, y: 4.6, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });
  slide.addText("每月一次 / 关键节点前，重新评估每个人的状态，调整策略，识别新相关方。", {
    x: 0.5, y: 4.9, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, align: "center", valign: "middle"
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
