// slide-140.js - 示范二：王建国需求分析
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
  slide.addText("示范二：王建国 · 需求分析", {
    x: 0.5, y: 0.7, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("财务部经理王建国", {
    x: 0.5, y: 1.4, w: 3, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("当前定位 C1 怀疑  ·  目标 B1 无感 → B2 犹豫", {
    x: 3.5, y: 1.4, w: 6, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.78, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 我需要他给什么
  slide.addShape("rect", {
    x: 0.5, y: 2.05, w: 4.4, h: 3.1,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.05, w: 4.4, h: 0.4,
    fill: { color: theme.mid },
    line: { color: theme.mid, width: 0 }
  });
  slide.addText("我需要他给什么", {
    x: 0.5, y: 2.05, w: 4.4, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  // 资源
  slide.addShape("ellipse", {
    x: 0.7, y: 2.6, w: 0.35, h: 0.35,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("资", {
    x: 0.7, y: 2.6, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("资源层面", {
    x: 1.15, y: 2.6, w: 3.6, h: 0.35,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("一小部分项目经费需要财务签字 —— 财务预算的配合确认。", {
    x: 0.7, y: 2.95, w: 4.05, h: 0.6,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "top",
    lineSpacing: 15
  });
  // 行为
  slide.addShape("ellipse", {
    x: 0.7, y: 3.65, w: 0.35, h: 0.35,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("行", {
    x: 0.7, y: 3.65, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("行为层面", {
    x: 1.15, y: 3.65, w: 3.6, h: 0.35,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("停止提出无法回应的技术质疑；对数据准确性方案给出「原则上可以接受」的表态。", {
    x: 0.7, y: 4.0, w: 4.05, h: 0.6,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "top",
    lineSpacing: 15
  });
  // 层级
  slide.addShape("ellipse", {
    x: 0.7, y: 4.55, w: 0.35, h: 0.35,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("层", {
    x: 0.7, y: 4.55, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("目标层级", {
    x: 1.15, y: 4.55, w: 3.6, h: 0.35,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("C1 → B1，再争取 B2（不必变支持者）", {
    x: 0.7, y: 4.85, w: 4.05, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.dark, italic: true, align: "left", valign: "top"
  });

  // 右侧：C1 特征识别
  slide.addShape("rect", {
    x: 5.1, y: 2.05, w: 4.4, h: 3.1,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("C1 的典型特征：理性质疑", {
    x: 5.1, y: 2.05, w: 4.4, h: 0.4,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addShape("rect", {
    x: 5.1, y: 2.45, w: 4.4, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("王建国的反对是「有逻辑依据的质疑」", {
    x: 5.25, y: 2.6, w: 4.1, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle"
  });
  slide.addText("不是非理性的抵触，是真实的、有数据支撑的担忧。", {
    x: 5.25, y: 2.95, w: 4.1, h: 0.5,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.light, align: "left", valign: "top",
    lineSpacing: 16
  });
  slide.addText("处理方式：", {
    x: 5.25, y: 3.5, w: 4.1, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "left", valign: "middle"
  });
  slide.addText("用同样有依据的信息和方案回应，不要绕开他的质疑。", {
    x: 5.25, y: 3.8, w: 4.1, h: 0.5,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.light, align: "left", valign: "top",
    lineSpacing: 16
  });
  slide.addText("数据、逻辑、方案 —— 这是 C1 唯一接受的沟通语言。", {
    x: 5.25, y: 4.4, w: 4.1, h: 0.6,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, italic: true, align: "left", valign: "top",
    lineSpacing: 16
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
