// slide-154.js - 原则三：替反对者解难题
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

  // 原则编号
  slide.addText("PRINCIPLE  03", {
    x: 0.5, y: 0.65, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_EN,
    color: theme.accent, bold: true, align: "left", valign: "middle",
    charSpacing: 6
  });
  // 标题
  slide.addText("替反对者解难题", {
    x: 0.5, y: 0.95, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("针对 C 级人群 —— 反对通常不是认知有误，而是有真实的担忧", {
    x: 0.5, y: 1.65, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.0, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 三个层级
  const tiers = [
    {
      level: "C1 怀疑",
      way: "用数据和逻辑回应",
      action: "正面应对，不要绕开他的质疑",
      detail: "C1 的质疑是有依据的 —— 你需要拿出同样有依据的回应。"
    },
    {
      level: "C2 抗拒",
      way: "找到利益顾虑，设计双赢",
      action: "让他觉得「对我也有好处，或至少不损害我」",
      detail: "C2 的反对根源不在逻辑层；叶云帮孙伟设计「缓冲期」是典型案例。"
    },
    {
      level: "C3 破坏",
      way: "借力打力，或重新评估",
      action: "需要更高层力量介入，或更深的组织政治分析",
      detail: "如果是真 C3，超出一般项目推进范围；先评估是否被错判为 C3。"
    }
  ];

  tiers.forEach(function (t, i) {
    const y = 2.25 + i * 0.95;
    // 等级色块
    slide.addShape("rect", {
      x: 0.5, y: y, w: 1.7, h: 0.85,
      fill: { color: theme.dark },
      line: { color: theme.dark, width: 0 }
    });
    slide.addText(t.level, {
      x: 0.5, y: y, w: 1.7, h: 0.85,
      fontSize: 18, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 内容
    slide.addShape("rect", {
      x: 2.3, y: y, w: 7.2, h: 0.85,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(t.way, {
      x: 2.5, y: y + 0.05, w: 6.8, h: 0.3,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });
    slide.addText(t.action, {
      x: 2.5, y: y + 0.35, w: 6.8, h: 0.25,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.accent, italic: true, align: "left", valign: "middle"
    });
    slide.addText(t.detail, {
      x: 2.5, y: y + 0.6, w: 6.8, h: 0.3,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top",
      lineSpacing: 13
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
