// slide-144.js - 匹配度评估标准
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
  slide.addText("PART 05  /  需求映射", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  // 标题
  slide.addText("匹配度评估标准", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("用「高 / 中 / 低」来评估每对「我需要」与「我能给」的契合度", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 三级匹配
  const matches = [
    {
      level: "高",
      color: theme.primary,
      en: "HIGH",
      desc: "我能给的东西，恰好是他需要的",
      detail: "这个交换有内在逻辑；这是你最值得优先推进的目标。",
      action: "全力推进"
    },
    {
      level: "中",
      color: theme.accent,
      en: "MEDIUM",
      desc: "我能给的东西，对他有一定价值，但不是最核心的需求",
      detail: "价值交换可以推进，但可能需要额外的诱因或多次沟通。",
      action: "适度投入"
    },
    {
      level: "低",
      color: theme.mid,
      en: "LOW",
      desc: "我能给的东西，他不太在乎；或我需要的，找不到对应的价值可以给他",
      detail: "需要重新审视、或降低目标层级、或借助第三方。",
      action: "重新评估"
    }
  ];

  matches.forEach(function (m, i) {
    const y = 2.1 + i * 1.0;
    // 等级色块
    slide.addShape("rect", {
      x: 0.5, y: y, w: 1.0, h: 0.9,
      fill: { color: m.color },
      line: { color: m.color, width: 0 }
    });
    slide.addText(m.level, {
      x: 0.5, y: y, w: 1.0, h: 0.5,
      fontSize: 28, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    slide.addText(m.en, {
      x: 0.5, y: y + 0.5, w: 1.0, h: 0.4,
      fontSize: 10, fontFace: FONT_EN,
      color: theme.white, charSpacing: 3, align: "center", valign: "middle"
    });
    // 描述卡片
    slide.addShape("rect", {
      x: 1.6, y: y, w: 6.7, h: 0.9,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(m.desc, {
      x: 1.75, y: y + 0.05, w: 6.4, h: 0.3,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });
    slide.addText(m.detail, {
      x: 1.75, y: y + 0.4, w: 6.4, h: 0.45,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top",
      lineSpacing: 14
    });
    // 行动标签
    slide.addShape("rect", {
      x: 8.4, y: y, w: 1.1, h: 0.9,
      fill: { color: theme.highlight },
      line: { color: theme.highlight, width: 0 }
    });
    slide.addText(m.action, {
      x: 8.4, y: y, w: 1.1, h: 0.9,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "center", valign: "middle"
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
