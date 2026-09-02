// slide-158.js - 四步法：联盟路径
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

  // 步骤标
  slide.addText("FOUR-STEP  04", {
    x: 0.5, y: 0.65, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_EN,
    color: theme.accent, bold: true, align: "left", valign: "middle",
    charSpacing: 6
  });
  // 标题
  slide.addText("识别联盟路径", {
    x: 0.5, y: 0.95, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("问：谁可以作为「桥梁」帮你影响其他人？", {
    x: 0.5, y: 1.65, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.0, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 中心问题
  slide.addShape("rect", {
    x: 0.5, y: 2.25, w: 9, h: 0.7,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("有没有人，你自己直接沟通效果有限，但可以借助他信任的某个人去传递影响力？", {
    x: 0.5, y: 2.25, w: 9, h: 0.7,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, italic: true, align: "center", valign: "middle"
  });

  // 联盟链：叶云 → A1 → 目标人物
  const nodes = [
    { label: "你", sub: "叶云", color: theme.primary, role: "源" },
    { label: "A1 支持者", sub: "老店长田中", color: theme.accent, role: "桥" },
    { label: "目标人物", sub: "孙伟", color: theme.dark, role: "的" }
  ];
  nodes.forEach(function (n, i) {
    const x = 0.5 + i * 3.1;
    slide.addShape("rect", {
      x: x, y: 3.1, w: 2.95, h: 1.0,
      fill: { color: theme.white },
      line: { color: n.color, width: 2 }
    });
    // 顶部色条
    slide.addShape("rect", {
      x: x, y: 3.1, w: 2.95, h: 0.3,
      fill: { color: n.color },
      line: { color: n.color, width: 0 }
    });
    slide.addText(n.role, {
      x: x, y: 3.1, w: 2.95, h: 0.3,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    slide.addText(n.label, {
      x: x, y: 3.45, w: 2.95, h: 0.35,
      fontSize: 16, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });
    slide.addText(n.sub, {
      x: x, y: 3.8, w: 2.95, h: 0.3,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.mid, italic: true, align: "center", valign: "middle"
    });
    // 箭头
    if (i < 2) {
      slide.addText("→", {
        x: x + 2.95, y: 3.1, w: 0.15, h: 1.0,
        fontSize: 22, fontFace: FONT_EN,
        color: theme.accent, bold: true, align: "center", valign: "middle"
      });
    }
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.25, w: 9, h: 0.95,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addText("联盟策略是最常被低估的破局路径。", {
    x: 0.5, y: 4.3, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });
  slide.addText("你影响 A1 → A1 影响目标人物 —— 整个链条的成本，远比直接沟通要低，而且效果好得多。", {
    x: 0.5, y: 4.6, w: 9, h: 0.5,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "center", valign: "top",
    lineSpacing: 16
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
