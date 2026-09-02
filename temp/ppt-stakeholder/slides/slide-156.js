// slide-156.js - 四步法：成本收益比
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
  slide.addText("FOUR-STEP  02", {
    x: 0.5, y: 0.65, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_EN,
    color: theme.accent, bold: true, align: "left", valign: "middle",
    charSpacing: 6
  });
  // 标题
  slide.addText("评估转化成本与收益比", {
    x: 0.5, y: 0.95, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("问：谁从当前状态变到目标状态，成本最小、收益最大？", {
    x: 0.5, y: 1.65, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.0, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 成本低 vs 成本高
  const cols = [
    {
      head: "转化成本低",
      color: theme.primary,
      en: "LOW COST",
      items: [
        "对方目前是 B2（犹豫），只差一个切中要害的触发点",
        "你和对方已有基础信任，无需从零建立关系",
        "你能给的价值，恰好是对方最需要的（高匹配度）"
      ]
    },
    {
      head: "转化成本高",
      color: theme.mid,
      en: "HIGH COST",
      items: [
        "对方目前是 C3（主动破坏），涉及深层组织政治",
        "双方之前有过摩擦或不信任积累",
        "你能给的价值，和对方真正在意的事偏差大（低匹配度）"
      ]
    }
  ];

  cols.forEach(function (c, i) {
    const x = 0.5 + i * 4.55;
    slide.addShape("rect", {
      x: x, y: 2.25, w: 4.35, h: 2.5,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addShape("rect", {
      x: x, y: 2.25, w: 4.35, h: 0.5,
      fill: { color: c.color },
      line: { color: c.color, width: 0 }
    });
    slide.addText(c.head, {
      x: x, y: 2.25, w: 3.0, h: 0.5,
      fontSize: 14, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "left", valign: "middle",
      charSpacing: 2
    });
    slide.addText(c.en, {
      x: x, y: 2.25, w: 4.15, h: 0.5,
      fontSize: 9, fontFace: FONT_EN,
      color: theme.light, charSpacing: 3, align: "right", valign: "middle"
    });
    c.items.forEach(function (it, j) {
      const y = 2.95 + j * 0.55;
      slide.addShape("rect", {
        x: x + 0.2, y: y + 0.15, w: 0.1, h: 0.1,
        fill: { color: c.color },
        line: { color: c.color, width: 0 }
      });
      slide.addText(it, {
        x: x + 0.4, y: y, w: 3.85, h: 0.5,
        fontSize: 10, fontFace: FONT_CN,
        color: theme.secondary, align: "left", valign: "top",
        lineSpacing: 14
      });
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.85, w: 9, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("不是不做高成本的事 —— 而是在资源有限的情况下，先从成本最低、收益最高的地方开始。", {
    x: 0.5, y: 4.85, w: 9, h: 0.4,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, italic: true, align: "center", valign: "middle"
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
