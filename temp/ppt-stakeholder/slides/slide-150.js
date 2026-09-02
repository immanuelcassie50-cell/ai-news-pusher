// slide-150.js - 开场：杠杆点不同
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
  slide.addText("精力有限，杠杆点不同", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("时间和精力是有限的，你需要知道先动哪里、怎么动", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 左：分析做充分
  slide.addShape("rect", {
    x: 0.5, y: 2.1, w: 4.4, h: 2.9,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.1, w: 4.4, h: 0.45,
    fill: { color: theme.mid },
    line: { color: theme.mid, width: 0 }
  });
  slide.addText("叶云已经完成的事", {
    x: 0.5, y: 2.1, w: 4.4, h: 0.45,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  const doneItems = [
    "六张核心人物的深度画像",
    "三阶九梯定位（每个人现在的位置）",
    "需求-能给对照表（每个人需要什么、能给什么）"
  ];
  doneItems.forEach(function (it, i) {
    const y = 2.75 + i * 0.55;
    slide.addShape("rect", {
      x: 0.7, y: y + 0.15, w: 0.1, h: 0.1,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(it, {
      x: 0.95, y: y, w: 3.8, h: 0.4,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top",
      lineSpacing: 16
    });
  });
  slide.addText("分析做得很充分", {
    x: 0.5, y: 4.55, w: 4.4, h: 0.4,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: true, align: "center", valign: "middle"
  });

  // 右：现实问题
  slide.addShape("rect", {
    x: 5.1, y: 2.1, w: 4.4, h: 2.9,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.1, w: 4.4, h: 0.45,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("但现实问题是", {
    x: 5.1, y: 2.1, w: 4.4, h: 0.45,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("她不可能同时推进六个人、做六件事。", {
    x: 5.3, y: 2.75, w: 4.0, h: 0.6,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "top",
    lineSpacing: 22
  });
  slide.addText("她需要知道：", {
    x: 5.3, y: 3.45, w: 4.0, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.light, align: "left", valign: "middle"
  });
  const questions = [
    "先动哪里？",
    "怎么动？",
    "谁是最值得投入的杠杆点？"
  ];
  questions.forEach(function (q, i) {
    const y = 3.85 + i * 0.32;
    slide.addText("·  " + q, {
      x: 5.5, y: y, w: 3.8, h: 0.3,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.white, align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("这一部分的任务：从分析成果里找到 2~4 个真正的杠杆点，并为每个点制定可执行的第一步。", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.accent, bold: true, italic: true, align: "center", valign: "middle"
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
