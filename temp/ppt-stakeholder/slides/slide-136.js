// slide-136.js - 第三步：我能给他什么
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

  // 步骤标
  slide.addText("STEP  03", {
    x: 0.5, y: 0.65, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_EN,
    color: theme.accent, bold: true, align: "left", valign: "middle",
    charSpacing: 6
  });
  // 标题
  slide.addText("逐人分析：我能给他什么", {
    x: 0.5, y: 0.95, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("需求映射的第二张表 ——「我能给」，结合深度画像来看", {
    x: 0.5, y: 1.65, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.0, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 中间提示
  slide.addText("我有哪些东西，是他需要的？", {
    x: 0.5, y: 2.25, w: 9, h: 0.4,
    fontSize: 16, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: true, align: "center", valign: "middle"
  });
  slide.addText("结合第三部分五维画像，回到「他真正在乎什么」", {
    x: 0.5, y: 2.65, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, align: "center", valign: "middle"
  });

  // 四个价值类型预览
  const values = [
    { tag: "01", name: "信息价值", en: "INFORMATION" },
    { tag: "02", name: "利益价值", en: "BENEFIT" },
    { tag: "03", name: "情感价值", en: "EMOTION" },
    { tag: "04", name: "关系价值", en: "RELATION" }
  ];

  values.forEach(function (v, i) {
    const x = 0.5 + i * 2.3;
    slide.addShape("rect", {
      x: x, y: 3.1, w: 2.1, h: 1.7,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 顶部小色条
    slide.addShape("rect", {
      x: x, y: 3.1, w: 2.1, h: 0.4,
      fill: { color: i % 2 === 0 ? theme.primary : theme.accent },
      line: { color: i % 2 === 0 ? theme.primary : theme.accent, width: 0 }
    });
    slide.addText(v.tag, {
      x: x, y: 3.1, w: 2.1, h: 0.4,
      fontSize: 12, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    slide.addText(v.name, {
      x: x, y: 3.6, w: 2.1, h: 0.4,
      fontSize: 16, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });
    slide.addText(v.en, {
      x: x, y: 4.0, w: 2.1, h: 0.3,
      fontSize: 9, fontFace: FONT_EN,
      color: theme.mid, charSpacing: 3, align: "center", valign: "middle"
    });
    // 提示
    slide.addText("→ 下页展开", {
      x: x, y: 4.4, w: 2.1, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.accent, italic: true, align: "center", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("做有价值交换的人，先看到对方在意的，再看自己能给的。", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: true, align: "center", valign: "middle"
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
