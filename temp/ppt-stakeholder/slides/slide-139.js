// slide-139.js - 示范一：孙伟核心价值
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
  slide.addText("示范一：孙伟 · 核心价值", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("我能给他什么 —— 找到他真正在担心的事，帮他解决", {
    x: 0.5, y: 1.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 孙伟的真正顾虑
  slide.addShape("rect", {
    x: 0.5, y: 2.05, w: 4.4, h: 1.3,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.05, w: 4.4, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("孙伟的真正顾虑", {
    x: 0.5, y: 2.05, w: 4.4, h: 0.4,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("历史数据「操作弹性」的暴露风险 ——", {
    x: 0.7, y: 2.5, w: 4.05, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("新系统上线后，门店历史数据会变得非常清晰；过去一些「模糊地带」会被审计盯上。", {
    x: 0.7, y: 2.85, w: 4.05, h: 0.45,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "top",
    lineSpacing: 14
  });

  // 叶云能给的核心价值
  slide.addShape("rect", {
    x: 5.1, y: 2.05, w: 4.4, h: 1.3,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.05, w: 4.4, h: 0.4,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("叶云能给的核心价值", {
    x: 5.1, y: 2.05, w: 4.4, h: 0.4,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("设计「历史数据过渡缓冲期」 ——", {
    x: 5.3, y: 2.5, w: 4.05, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("上线期间的历史数据异常被标注为「系统切换期的正常波动」，不触发审计。", {
    x: 5.3, y: 2.85, w: 4.05, h: 0.45,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "top",
    lineSpacing: 14
  });

  // 态度转变
  slide.addShape("rect", {
    x: 0.5, y: 3.55, w: 9, h: 1.55,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("态度转变", {
    x: 0.5, y: 3.55, w: 9, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.light, bold: true, align: "center", valign: "middle",
    charSpacing: 4
  });
  // 箭头
  slide.addText("「为什么要改」", {
    x: 0.7, y: 4.05, w: 3.5, h: 0.5,
    fontSize: 18, fontFace: FONT_CN,
    color: theme.white, italic: true, align: "center", valign: "middle"
  });
  slide.addText("C2 抗拒", {
    x: 0.7, y: 4.55, w: 3.5, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.light, align: "center", valign: "middle"
  });
  // 箭头符号
  slide.addText("→", {
    x: 4.3, y: 4.05, w: 1.4, h: 0.5,
    fontSize: 32, fontFace: FONT_EN,
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });
  slide.addText("「这样搞的话倒是可以配合」", {
    x: 5.7, y: 4.05, w: 3.7, h: 0.5,
    fontSize: 16, fontFace: FONT_CN,
    color: theme.white, bold: true, italic: true, align: "center", valign: "middle"
  });
  slide.addText("B2 犹豫（轻度正向）", {
    x: 5.7, y: 4.55, w: 3.7, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.light, align: "center", valign: "middle"
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
