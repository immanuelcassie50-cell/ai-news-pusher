// slide-149.js - 第六部分章节封面
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 背景大色块
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addShape("line", {
    x: 0, y: 0, w: 4, h: 1.5,
    line: { color: theme.accent, width: 1.5 }
  });
  slide.addShape("line", {
    x: 6, y: 4.1, w: 4, h: 1.5,
    line: { color: theme.accent, width: 1.5 }
  });
  slide.addShape("rect", {
    x: 0, y: 5.45, w: 10, h: 0.18,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  slide.addText("PART", {
    x: 0.7, y: 1.2, w: 2, h: 0.4,
    fontSize: 16, fontFace: FONT_EN,
    color: theme.light, bold: true, align: "left", valign: "middle",
    charSpacing: 10
  });
  slide.addText("06", {
    x: 0.7, y: 1.5, w: 4, h: 2.5,
    fontSize: 200, fontFace: FONT_EN,
    color: theme.white, bold: true, align: "left", valign: "top"
  });

  // 标题
  slide.addText("破局策略", {
    x: 4.5, y: 2.2, w: 5, h: 0.9,
    fontSize: 56, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle"
  });
  slide.addText("找到 2~4 个杠杆点，撬动整个推进格局", {
    x: 4.5, y: 3.2, w: 5, h: 0.5,
    fontSize: 18, fontFace: FONT_CN,
    color: theme.light, align: "left", valign: "middle"
  });
  slide.addText("Breakthrough Strategy", {
    x: 4.5, y: 3.7, w: 5, h: 0.4,
    fontSize: 13, fontFace: FONT_EN,
    color: theme.light, align: "left", valign: "middle",
    charSpacing: 3
  });

  slide.addText("六部分中的  /  6 / 6", {
    x: 0.7, y: 4.7, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.light, align: "left", valign: "middle",
    charSpacing: 3
  });
}

module.exports = { createSlide };
