// slide-115.js - 原则一：看行为不看表态
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 04 · 原则 1 / 3", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 大编号
  slide.addText("01", {
    x: 0.5, y: 0.55, w: 1.4, h: 1.0,
    fontSize: 60, fontFace: FONT_EN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  // 标题
  slide.addText("看行为，不看表态", {
    x: 2.0, y: 0.6, w: 7.5, h: 0.6,
    fontSize: 30, fontFace: FONT_CN, color: theme.dark,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("说「支持」未必是真支持 —— 唯一可信的依据是「做了什么」", {
    x: 2.0, y: 1.2, w: 7.5, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 对比表：表态 vs 行为
  const colX = [0.5, 3.0, 5.5];
  const colW = [2.4, 2.4, 4.0];
  // 表头
  slide.addShape("rect", {
    x: colX[0], y: 1.9, w: colW[0], h: 0.4,
    fill: { color: theme.mid }, line: { color: theme.mid, width: 0 }
  });
  slide.addText("他的表态", {
    x: colX[0], y: 1.9, w: colW[0], h: 0.4,
    fontSize: 12, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
  });
  slide.addShape("rect", {
    x: colX[1], y: 1.9, w: colW[1], h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("实际行为", {
    x: colX[1], y: 1.9, w: colW[1], h: 0.4,
    fontSize: 12, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
  });
  slide.addShape("rect", {
    x: colX[2], y: 1.9, w: colW[2], h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("真实定位", {
    x: colX[2], y: 1.9, w: colW[2], h: 0.4,
    fontSize: 12, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
  });

  const rows = [
    { words: "「支持，没问题」", act: "执行极慢、用「很忙」规避", real: "A3 顺从" },
    { words: "「方向是对的」", act: "主动了解进展、跟进细节", real: "B2 犹豫（可能转 A2）" },
    { words: "「数据准确性怎么保证？」", act: "要求看依据、提具体问题", real: "C1 怀疑（可被转化）" },
    { words: "「原则上支持」", act: "私下向别人说消极的话", real: "C2 抗拒" }
  ];

  rows.forEach(function (r, i) {
    const y = 2.3 + i * 0.55;
    for (let c = 0; c < 3; c++) {
      slide.addShape("rect", {
        x: colX[c], y: y, w: colW[c], h: 0.55,
        fill: { color: i % 2 === 0 ? theme.white : theme.highlight },
        line: { color: theme.border, width: 0.5 }
      });
    }
    const texts = [r.words, r.act, r.real];
    for (let c = 0; c < 3; c++) {
      slide.addText(texts[c], {
        x: colX[c] + 0.15, y: y, w: colW[c] - 0.3, h: 0.55,
        fontSize: 11, fontFace: FONT_CN,
        color: c === 2 ? theme.accent : theme.dark,
        bold: c === 2, align: "left", valign: "middle"
      });
    }
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 9, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("开会举手是 A2 还是 A3？看他后续有没有主动跟进", {
    x: 0.5, y: 4.7, w: 9, h: 0.45,
    fontSize: 12, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
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
