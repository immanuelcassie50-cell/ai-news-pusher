// slide-041.js - 维度一：直接相关方
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
  slide.addText("PART 02  ·  全景扫描  ·  维度一", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  // 维度编号 + 标题
  slide.addText("01", {
    x: 0.5, y: 0.5, w: 1.3, h: 1.0,
    fontSize: 56, fontFace: FONT_EN,
    color: theme.light, bold: true, align: "left", valign: "middle"
  });
  slide.addText("直接相关方", {
    x: 1.8, y: 0.55, w: 7, h: 0.5,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("参与项目执行、实施或推进过程的人", {
    x: 1.8, y: 1.0, w: 7, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 1.8, y: 1.35, w: 0.5, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 定义卡片
  slide.addShape("rect", {
    x: 0.5, y: 1.65, w: 9, h: 1.6,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.65, w: 0.1, h: 1.6,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("「参与」包括", {
    x: 0.75, y: 1.75, w: 8.5, h: 0.3,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  const parts = [
    { t: "提供数据", d: "项目的输入来源" },
    { t: "参与决策会议", d: "对方向有发言权" },
    { t: "执行流程改变", d: "工作方式要变" },
    { t: "操作新工具", d: "新系统/新方法的实际使用者" },
    { t: "配合测试", d: "验证与反馈" }
  ];
  parts.forEach(function (p, i) {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.85 + col * 2.85;
    const y = 2.15 + row * 0.5;
    slide.addShape("ellipse", {
      x: x, y: y + 0.08, w: 0.12, h: 0.12,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(p.t, {
      x: x + 0.2, y: y, w: 2.5, h: 0.25,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "top"
    });
    slide.addText(p.d, {
      x: x + 0.2, y: y + 0.22, w: 2.5, h: 0.25,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top"
    });
  });

  // 易漏提示
  slide.addShape("rect", {
    x: 0.5, y: 3.45, w: 9, h: 0.9,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.45, w: 0.08, h: 0.9,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("⚡ 易漏提示", {
    x: 0.75, y: 3.5, w: 4, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("最容易漏掉的是「外圈执行者」——不在你团队里、但项目的落地需要他们真实改变工作方式的人。", {
    x: 0.75, y: 3.8, w: 8.7, h: 0.5,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "top",
    lineSpacing: 16
  });

  // 关键认知
  slide.addText("不局限于你团队内部——只要他们的工作流真实被项目改变，就是直接相关方。", {
    x: 0.5, y: 4.55, w: 9, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
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
