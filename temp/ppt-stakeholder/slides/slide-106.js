// slide-106.js - B阶：中立的三个层次
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.mid }, line: { color: theme.mid, width: 0 }
  });
  slide.addText("PART 04 · 三阶九梯定位", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 标题
  slide.addText("B 阶：中立的三个层次", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("同样是「不反对」，但原因和后续处理方式完全不同", {
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
      code: "B1", name: "无感", level: "不反对，因为不在乎",
      desc: "既不支持也不反对",
      detail: "不出现在项目相关的讨论中；你找他他会配合但不会主动跟进；问意见时说「都行」「你决定」",
      color: theme.mid
    },
    {
      code: "B2", name: "犹豫", level: "观望中 —— 转化性价比最高",
      desc: "了解项目，尚未做判断",
      detail: "会主动了解项目进展；非正式场合问「到底有没有在推」；措辞模糊「方向对但还要看看」；等有影响力的人先表态",
      color: theme.accent
    },
    {
      code: "B3", name: "冷漠", level: "有意识地保持距离",
      desc: "意识到了，选择不参与",
      detail: "回复慢或不回；项目讨论中保持沉默；说「我看看吧」「这事不好说」；若即若离，难以判断真实立场",
      color: theme.dark
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
  slide.addText("B2 犹豫 = 转化性价比最高的群体", {
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
