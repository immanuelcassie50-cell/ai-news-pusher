// slide-141.js - 示范二：王建国核心价值
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
  slide.addText("示范二：王建国 · 核心价值", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("我能给他什么 —— 信息价值 + 利益价值，双管齐下", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 信息价值
  slide.addShape("rect", {
    x: 0.5, y: 2.05, w: 4.4, h: 1.55,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.05, w: 4.4, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("信息价值", {
    x: 0.65, y: 2.05, w: 1.6, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle"
  });
  slide.addText("INFORMATION", {
    x: 2.3, y: 2.05, w: 2.5, h: 0.4,
    fontSize: 9, fontFace: FONT_EN,
    color: theme.light, charSpacing: 3, align: "right", valign: "middle"
  });
  slide.addText("提供一份来自集团同类系统的历史误差率报告 ——", {
    x: 0.7, y: 2.55, w: 4.05, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("证明系统准确性在可接受范围内，回应他对数据准确性的质疑。", {
    x: 0.7, y: 2.9, w: 4.05, h: 0.65,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "top",
    lineSpacing: 16
  });

  // 利益价值
  slide.addShape("rect", {
    x: 5.1, y: 2.05, w: 4.4, h: 1.55,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.05, w: 4.4, h: 0.4,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("利益价值", {
    x: 5.25, y: 2.05, w: 1.6, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle"
  });
  slide.addText("BENEFIT", {
    x: 6.9, y: 2.05, w: 2.5, h: 0.4,
    fontSize: 9, fontFace: FONT_EN,
    color: theme.light, charSpacing: 3, align: "right", valign: "middle"
  });
  slide.addText("在系统设计中增加「财务校验层」 ——", {
    x: 5.3, y: 2.55, w: 4.05, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("让财务部在数据进入系统前做一次人工核对，掌控最终数据的准确性。", {
    x: 5.3, y: 2.9, w: 4.05, h: 0.65,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "top",
    lineSpacing: 16
  });

  // 关键转变
  slide.addShape("rect", {
    x: 0.5, y: 3.8, w: 9, h: 1.3,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("从「被动接受一个新系统」", {
    x: 0.7, y: 3.95, w: 4.0, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.light, italic: true, align: "center", valign: "middle"
  });
  slide.addText("→", {
    x: 4.5, y: 3.9, w: 1, h: 0.5,
    fontSize: 28, fontFace: FONT_EN,
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });
  slide.addText("「对数据质量有控制权」", {
    x: 5.5, y: 3.95, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, italic: true, align: "center", valign: "middle"
  });
  slide.addText("满足他对「掌控感」的需求 ——", {
    x: 0.5, y: 4.45, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, align: "center", valign: "middle"
  });
  slide.addText("结果：第二次沟通后，他从「频繁质疑」变成了「主动帮他想财务校验层该怎么设计」。", {
    x: 0.5, y: 4.75, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.light, bold: true, align: "center", valign: "middle"
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
