// slide-157.js - 四步法：时间窗口
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

  // 步骤标
  slide.addText("FOUR-STEP  03", {
    x: 0.5, y: 0.65, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_EN,
    color: theme.accent, bold: true, align: "left", valign: "middle",
    charSpacing: 6
  });
  // 标题
  slide.addText("分析时间窗口", {
    x: 0.5, y: 0.95, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("问：未来一到两个月内，有没有关键时间节点？谁需要在那个节点之前被布局？", {
    x: 0.5, y: 1.65, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.0, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 中心问题
  slide.addShape("rect", {
    x: 0.5, y: 2.25, w: 9, h: 0.7,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("有没有人即将面临一个关键节点，那个节点之前如果你没有布局，机会窗口就关闭了？", {
    x: 0.5, y: 2.25, w: 9, h: 0.7,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, italic: true, align: "center", valign: "middle"
  });

  // 时间窗口四象限 / 类型
  const windows = [
    { type: "重要决策会议", detail: "即将召开的关键决策会" },
    { type: "年终考核", detail: "对「项目成果的可见度」特别敏感" },
    { type: "预算周期", detail: "新的预算周期开启" },
    { type: "人事变动", detail: "组织内即将发生的人事变动" }
  ];

  // 2x2 网格
  windows.forEach(function (w, i) {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.55;
    const y = 3.1 + row * 0.85;
    slide.addShape("rect", {
      x: x, y: y, w: 4.35, h: 0.75,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    slide.addShape("ellipse", {
      x: x + 0.15, y: y + 0.2, w: 0.35, h: 0.35,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(String(i + 1), {
      x: x + 0.15, y: y + 0.2, w: 0.35, h: 0.35,
      fontSize: 13, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    slide.addText(w.type, {
      x: x + 0.6, y: y + 0.05, w: 3.7, h: 0.35,
      fontSize: 14, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });
    slide.addText(w.detail, {
      x: x + 0.6, y: y + 0.4, w: 3.7, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.85, w: 9, h: 0.4,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("在正确的时间节点做正确的动作，效果可以是平时的五倍；做错时间，效果打折甚至适得其反。", {
    x: 0.5, y: 4.85, w: 9, h: 0.4,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, italic: true, align: "center", valign: "middle"
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
