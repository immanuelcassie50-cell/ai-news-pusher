// slide-124.js - 分布图后三个问题
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
  slide.addText("PART 04 · 填完图后", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 标题
  slide.addText("填完图后，回答三个问题", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("三个问题逼出你真正没看到的部分", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 三个问题
  const questions = [
    {
      n: "Q1", title: "整体格局对比",
      ask: "和你的预期相比，分布图有什么差异？",
      hint: "差异 = 认知盲区。哪里最让你意外？",
      color: theme.primary
    },
    {
      n: "Q2", title: "最意外的定位",
      ask: "最让你意外的定位结果是哪一个？为什么意外？",
      hint: "意外意味着你的初始假设错了。错的地方 = 真正的卡点。",
      color: theme.accent
    },
    {
      n: "Q3", title: "最担心的位置",
      ask: "看到这张图，你最担心的是哪个位置 / 哪个人？",
      hint: "担心 ≠ 立刻处理。先识别最危险的那一个。",
      color: theme.dark
    }
  ];

  questions.forEach(function (q, i) {
    const y = 1.85 + i * 1.05;
    // 编号色块
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.8, h: 0.95,
      fill: { color: q.color }, line: { color: q.color, width: 0 }
    });
    slide.addText(q.n, {
      x: 0.5, y: y, w: 0.8, h: 0.95,
      fontSize: 28, fontFace: FONT_EN, color: theme.white,
      bold: true, align: "center", valign: "middle"
    });
    // 内容
    slide.addShape("rect", {
      x: 1.3, y: y, w: 8.2, h: 0.95,
      fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
    });
    slide.addText(q.title, {
      x: 1.5, y: y + 0.05, w: 7.8, h: 0.3,
      fontSize: 13, fontFace: FONT_CN, color: q.color,
      bold: true, align: "left", valign: "middle"
    });
    slide.addText(q.ask, {
      x: 1.5, y: y + 0.35, w: 7.8, h: 0.3,
      fontSize: 12, fontFace: FONT_CN, color: theme.dark,
      align: "left", valign: "middle"
    });
    slide.addText(q.hint, {
      x: 1.5, y: y + 0.65, w: 7.8, h: 0.3,
      fontSize: 10, fontFace: FONT_CN, color: theme.mid,
      italic: true, align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("问题的答案 = 你下一步的优先动作", {
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
