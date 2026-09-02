// slide-121.js - 练习一：定位六到八人
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
  slide.addText("PART 04 · 练习 1 / 2", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 顶部标志
  slide.addShape("rect", {
    x: 8.5, y: 0.22, w: 1.1, h: 0.32,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("15-20 分钟", {
    x: 8.5, y: 0.22, w: 1.1, h: 0.32,
    fontSize: 9, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
  });

  // 标题
  slide.addText("练习一：定位你的 6-8 个核心人物", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 26, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("对照深度画像的分析结果，以及你实际观察到的行为", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 定位表 - 简化版
  const colX = [0.5, 1.1, 2.5, 3.9, 5.3];
  const colW = [0.6, 1.4, 1.4, 1.4, 4.2];
  const headers = ["#", "人物姓名/称呼", "初始直觉", "分析后定位", "定位依据（1-2 个具体行为）"];
  // 表头
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 0.4,
    fill: { color: theme.mid }, line: { color: theme.mid, width: 0 }
  });
  for (let h = 0; h < 5; h++) {
    slide.addText(headers[h], {
      x: colX[h] + 0.1, y: 1.85, w: colW[h] - 0.2, h: 0.4,
      fontSize: 11, fontFace: FONT_CN, color: theme.white,
      bold: true, align: h === 4 ? "left" : "center", valign: "middle"
    });
  }

  // 8 行
  for (let i = 0; i < 8; i++) {
    const y = 2.25 + i * 0.34;
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: 0.34,
      fill: { color: i % 2 === 0 ? theme.white : theme.highlight },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(String(i + 1), {
      x: colX[0], y: y, w: colW[0], h: 0.34,
      fontSize: 11, fontFace: FONT_EN, color: theme.mid,
      bold: true, align: "center", valign: "middle"
    });
  }

  // 底部重要提示
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("⚠ 行为信息不足时写「待确认」，记下「需要观察什么」—— 不要凭感觉填一个让自己心安理得的答案", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 10, fontFace: FONT_CN, color: theme.white,
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
