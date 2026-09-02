// slide-061.js - 核心人物清单模板
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 02  ·  全景扫描  ·  核心清单", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("核心人物清单模板", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("✋ 确定你的 6~8 个核心人物——填入上一页筛选标准中符合的那条", {
    x: 0.5, y: 1.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 练习标识
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 1.5, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("✋ 练习", {
    x: 0.5, y: 1.7, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("填入姓名 + 符合的筛选标准（①②③④）", {
    x: 2.1, y: 1.7, w: 5, h: 0.4,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "middle"
  });

  // 表格 - 8行
  const tableX = 0.5;
  const tableY = 2.3;
  const tableW = 9.0;

  // 表头
  slide.addShape("rect", {
    x: tableX, y: tableY, w: tableW, h: 0.35,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("#", {
    x: tableX + 0.1, y: tableY, w: 0.5, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle"
  });
  slide.addText("姓名/称呼", {
    x: tableX + 0.7, y: tableY, w: 3, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle"
  });
  slide.addText("符合的筛选标准", {
    x: tableX + 3.7, y: tableY, w: 5, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle"
  });

  // 8行
  for (let i = 0; i < 8; i++) {
    const y = tableY + 0.35 + i * 0.32;
    const bg = i % 2 === 0 ? theme.white : theme.highlight;
    slide.addShape("rect", {
      x: tableX, y: y, w: tableW, h: 0.32,
      fill: { color: bg },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(String(i + 1), {
      x: tableX + 0.1, y: y, w: 0.5, h: 0.32,
      fontSize: 10, fontFace: FONT_EN,
      color: theme.mid, align: "left", valign: "middle"
    });
  }

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addText("完成清单后，下一步进入第三部分——对这 6~8 人做深度画像", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "center", valign: "middle"
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
