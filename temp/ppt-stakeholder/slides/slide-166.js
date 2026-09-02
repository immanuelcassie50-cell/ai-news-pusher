// slide-166.js - 一个月后检验标准
// 引用源内容中的金句，可视化呈现
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

  // 顶部标识
  slide.addText("FINAL  /  总结收尾  ·  检验标准", {
    x: 0.4, y: 0.22, w: 6, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle", charSpacing: 4
  });
  slide.addText("30 DAYS", {
    x: 8.0, y: 0.22, w: 1.6, h: 0.32,
    fontSize: 10, fontFace: FONT_EN,
    color: theme.primary, bold: true, align: "right", valign: "middle", charSpacing: 2
  });

  // 大标题
  slide.addText("一个月后的检验标准", {
    x: 0.5, y: 0.55, w: 9, h: 0.5,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("真正能验证这套分析有没有用, 是一次\"我预见到了\"的时刻", {
    x: 0.5, y: 1.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle", charSpacing: 2
  });
  // 标题下装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 左侧：大引述
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 5.0, h: 2.4,
    fill: { color: theme.highlight }, line: { color: theme.highlight, width: 0 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 0.08, h: 2.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText('"', {
    x: 0.7, y: 1.7, w: 0.6, h: 0.7,
    fontSize: 56, fontFace: "Georgia",
    color: theme.light, bold: true, align: "left", valign: "top"
  });
  slide.addText("预见不等于能完全避免,\n但预见让你有准备, 而不是猝不及防。", {
    x: 0.95, y: 2.1, w: 4.4, h: 1.5,
    fontSize: 15, fontFace: FONT_CN,
    color: theme.dark, bold: false, align: "left", valign: "middle", lineSpacing: 24
  });
  slide.addText("—— 课程核心金句", {
    x: 0.95, y: 3.7, w: 4.4, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, italic: false, align: "left", valign: "middle"
  });

  // 右侧：三个检验等级
  const levels = [
    { num: "01", title: "已预见", desc: "阻力出现时, 你能清晰定位它在框架中的位置", color: theme.primary },
    { num: "02", title: "已准备", desc: "你已经有了应对方案, 不是临时抱佛脚", color: theme.accent },
    { num: "03", title: "已行动", desc: "按计划推进, 而不是被推着走", color: theme.primary }
  ];
  levels.forEach(function (lv, i) {
    const y = 1.7 + i * 0.83;
    // 编号圆
    slide.addShape("ellipse", {
      x: 5.8, y: y, w: 0.7, h: 0.7,
      fill: { color: lv.color }, line: { color: lv.color, width: 0 }
    });
    slide.addText(lv.num, {
      x: 5.8, y: y, w: 0.7, h: 0.7,
      fontSize: 14, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 标题
    slide.addText(lv.title, {
      x: 6.65, y: y + 0.02, w: 3.0, h: 0.3,
      fontSize: 15, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "left", valign: "top"
    });
    // 描述
    slide.addText(lv.desc, {
      x: 6.65, y: y + 0.35, w: 3.2, h: 0.45,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top"
    });
  });

  // 底部：判断标准
  slide.addShape("rect", {
    x: 0.5, y: 4.25, w: 9, h: 0.85,
    fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.25, w: 0.08, h: 0.85,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("判断信号", {
    x: 0.75, y: 4.32, w: 1.5, h: 0.25,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("当一个阻力出现, 你能在 10 秒内说出: 这是哪个相关方, 属于三阶九梯的哪一阶, 触发了画像中的哪条利益——", {
    x: 0.75, y: 4.55, w: 8.5, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, bold: true, align: "left", valign: "middle"
  });
  slide.addText("那么这套分析已经内化成了你的项目本能, 而不只是文档里的表格。", {
    x: 0.75, y: 4.82, w: 8.5, h: 0.25,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "middle"
  });

  // 底部品牌条
  slide.addShape("line", {
    x: 0.4, y: 5.35, w: 9.2, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("利益相关方深度实战  ·  授课PPT", {
    x: 0.4, y: 5.4, w: 6, h: 0.2,
    fontSize: 8, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle"
  });
  slide.addText("166 / 170", {
    x: 8.0, y: 5.4, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN,
    color: theme.mid, align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
