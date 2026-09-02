// slide-110.js - C阶：反对的三个层次
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("PART 04 · 三阶九梯定位", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 标题
  slide.addText("C 阶：反对的三个层次", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("同样是「反对」，处理方式差距很大 —— 错误判断会导致完全无效的策略", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 三个层次
  const levels = [
    {
      code: "C1", name: "怀疑", level: "理性质疑",
      desc: "对可行性、必要性持怀疑",
      detail: "会议上提出有逻辑的质疑；要求看数据和依据；你能给出有说服力的回应，他可以被转化",
      color: theme.mid
    },
    {
      code: "C2", name: "抗拒", level: "利益 / 价值冲突",
      desc: "反对的不是方案，是「对我不好」",
      detail: "表面不公开反对；绕开你向别人传达消极信号；「原则上支持，但有些细节需要再谈」",
      color: theme.accent
    },
    {
      code: "C3", name: "破坏", level: "主动阻挠",
      desc: "制造阻碍、动员消极",
      detail: "向上级投诉「问题」；背后向关键人施压；在节点处制造障碍；故意「帮倒忙」",
      color: theme.primary
    }
  ];

  levels.forEach(function (lv, i) {
    const x = 0.5 + i * 3.05;
    slide.addShape("rect", {
      x: x, y: 1.85, w: 2.9, h: 0.6,
      fill: { color: lv.color }, line: { color: lv.color, width: 0 }
    });
    slide.addText(lv.code, {
      x: x + 0.15, y: 1.85, w: 0.8, h: 0.6,
      fontSize: 22, fontFace: FONT_EN, color: theme.white,
      bold: true, align: "left", valign: "middle"
    });
    slide.addText(lv.name, {
      x: x + 1.0, y: 1.85, w: 1.8, h: 0.6,
      fontSize: 18, fontFace: FONT_CN, color: theme.white,
      bold: true, align: "right", valign: "middle"
    });
    slide.addShape("rect", {
      x: x, y: 2.45, w: 2.9, h: 2.4,
      fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
    });
    slide.addText(lv.level, {
      x: x + 0.15, y: 2.55, w: 2.6, h: 0.3,
      fontSize: 11, fontFace: FONT_CN, color: lv.color,
      bold: true, align: "left", valign: "middle"
    });
    slide.addText(lv.desc, {
      x: x + 0.15, y: 2.85, w: 2.6, h: 0.4,
      fontSize: 13, fontFace: FONT_CN, color: theme.dark,
      bold: true, align: "left", valign: "middle"
    });
    slide.addShape("line", {
      x: x + 0.15, y: 3.3, w: 2.6, h: 0,
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText("行为特征", {
      x: x + 0.15, y: 3.35, w: 2.6, h: 0.25,
      fontSize: 9, fontFace: FONT_CN, color: theme.mid,
      bold: true, align: "left", valign: "middle", charSpacing: 2
    });
    slide.addText(lv.detail, {
      x: x + 0.15, y: 3.6, w: 2.6, h: 1.2,
      fontSize: 10, fontFace: FONT_CN, color: theme.secondary,
      align: "left", valign: "top", lineSpacing: 14
    });
  });

  // 底部金句
  slide.addText("C 阶的难度排序：C1 < C2 < C3 —— 判断错了，满盘皆输", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.accent,
    bold: true, italic: true, align: "center", valign: "middle"
  });

  // 底部品牌
  slide.addShape("line", {
    x: 0.4, y: 5.35, w: 9.2, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("利益相关方深度实战 · 授课PPT", {
    x: 0.4, y: 5.4, w: 6, h: 0.2,
    fontSize: 8, fontFace: FONT_CN, color: theme.mid, align: "left", valign: "middle"
  });
  slide.addText(String(pageNum).padStart(2, '0') + " / " + String(totalPages).padStart(3, '0'), {
    x: 8.0, y: 5.4, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN, color: theme.mid, align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
