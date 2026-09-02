// slide-151.js - 叶云的两个杠杆点
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
  slide.addText("叶云的两个杠杆点", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("真正的杠杆点只有两个 —— 其他人物以这两个点的突破为支点", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 两个杠杆点
  // 杠杆点 1
  slide.addShape("rect", {
    x: 0.5, y: 2.1, w: 4.4, h: 2.9,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.1, w: 4.4, h: 0.5,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("杠杆点 #1", {
    x: 0.5, y: 2.1, w: 2.5, h: 0.5,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.light, bold: true, align: "left", valign: "middle",
    charSpacing: 4
  });
  slide.addText("C2 → B2", {
    x: 3.0, y: 2.1, w: 1.9, h: 0.5,
    fontSize: 13, fontFace: FONT_EN,
    color: theme.white, bold: true, align: "right", valign: "middle"
  });
  slide.addText("孙伟", {
    x: 0.7, y: 2.75, w: 4.0, h: 0.5,
    fontSize: 24, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("一个人撬动 15 家门店的情绪走向", {
    x: 0.7, y: 3.25, w: 4.0, h: 0.35,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, italic: true, align: "left", valign: "middle"
  });
  slide.addText("孙伟的态度变化会带动整个门店群体的情绪走向 ——", {
    x: 0.7, y: 3.7, w: 4.0, h: 0.45,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "top",
    lineSpacing: 15
  });
  slide.addText("如果他从 C2 转为 B2，其他店长的消极信号来源就会消失 ——", {
    x: 0.7, y: 4.2, w: 4.0, h: 0.45,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "top",
    lineSpacing: 15
  });
  slide.addShape("rect", {
    x: 0.7, y: 4.7, w: 4.0, h: 0.28,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addText("★  这是一件以一当十的事", {
    x: 0.7, y: 4.7, w: 4.0, h: 0.28,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // 杠杆点 2
  slide.addShape("rect", {
    x: 5.1, y: 2.1, w: 4.4, h: 2.9,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.1, w: 4.4, h: 0.5,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("杠杆点 #2", {
    x: 5.1, y: 2.1, w: 2.5, h: 0.5,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.light, bold: true, align: "left", valign: "middle",
    charSpacing: 4
  });
  slide.addText("A3 → A2", {
    x: 7.6, y: 2.1, w: 1.9, h: 0.5,
    fontSize: 13, fontFace: FONT_EN,
    color: theme.white, bold: true, align: "right", valign: "middle"
  });
  slide.addText("赵磊", {
    x: 5.3, y: 2.75, w: 4.0, h: 0.5,
    fontSize: 24, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("大区总经理是所有人都在读的信号源", {
    x: 5.3, y: 3.25, w: 4.0, h: 0.35,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: true, align: "left", valign: "middle"
  });
  slide.addText("赵磊在关键时刻的模糊态度，是整个推进松散的信号来源 ——", {
    x: 5.3, y: 3.7, w: 4.0, h: 0.45,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "top",
    lineSpacing: 15
  });
  slide.addText("如果他从 A3 变成 A2，哪怕只是几次会议明确表态，整个华北区推进节奏会立刻改变。", {
    x: 5.3, y: 4.2, w: 4.0, h: 0.45,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "top",
    lineSpacing: 15
  });
  slide.addShape("rect", {
    x: 5.3, y: 4.7, w: 4.0, h: 0.28,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addText("★  信号源级的影响力", {
    x: 5.3, y: 4.7, w: 4.0, h: 0.28,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "center", valign: "middle"
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
