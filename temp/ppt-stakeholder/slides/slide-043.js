// slide-043.js - 维度一：易漏外圈执行者
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
  slide.addText("PART 02  ·  全景扫描  ·  维度一深挖", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("外圈执行者：被低估的关键人", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("不在你团队里，但他们的工作流真实被项目改变", {
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

  // 左侧：定义 + 易漏原因
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 4.4, h: 3.25,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 4.4, h: 0.5,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("什么是外圈执行者", {
    x: 0.5, y: 1.7, w: 4.4, h: 0.5,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });

  const points = [
    { t: "不在你团队", d: "可能是其他部门、外包公司" },
    { t: "不是你直接管", d: "汇报关系不在你这里" },
    { t: "但必须改变工作方式", d: "新流程要他们配合才能跑通" },
    { t: "他们的配合质量", d: "直接决定项目成功" }
  ];
  points.forEach(function (p, i) {
    const y = 2.4 + i * 0.6;
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.05, w: 0.3, h: 0.3,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(String(i + 1), {
      x: 0.7, y: y + 0.05, w: 0.3, h: 0.3,
      fontSize: 11, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    slide.addText(p.t, {
      x: 1.1, y: y, w: 3.7, h: 0.25,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "top"
    });
    slide.addText(p.d, {
      x: 1.1, y: y + 0.23, w: 3.7, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top"
    });
  });

  // 右侧：常见类型
  slide.addShape("rect", {
    x: 5.1, y: 1.7, w: 4.4, h: 3.25,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.7, w: 4.4, h: 0.5,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("常见的几类外圈执行者", {
    x: 5.1, y: 1.7, w: 4.4, h: 0.5,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });

  const types = [
    { t: "基层操作人员", e: "门店收银员 / 客服 / 数据录入员" },
    { t: "下游使用者", e: "你的项目成果会流入他们的工作" },
    { t: "配合测试方", e: "UAT 测试、业务验证团队" },
    { t: "运维 / 维护者", e: "上线后真正长期使用系统的人" }
  ];
  types.forEach(function (tt, i) {
    const y = 2.4 + i * 0.6;
    slide.addShape("rect", {
      x: 5.3, y: y + 0.05, w: 0.3, h: 0.3,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(String(i + 1), {
      x: 5.3, y: y + 0.05, w: 0.3, h: 0.3,
      fontSize: 11, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    slide.addText(tt.t, {
      x: 5.7, y: y, w: 3.7, h: 0.25,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "top"
    });
    slide.addText(tt.e, {
      x: 5.7, y: y + 0.23, w: 3.7, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top"
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("判断标准：把项目图画出来——谁的工作流要变，谁就是直接相关方", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
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
