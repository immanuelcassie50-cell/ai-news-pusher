// slide-049.js - 维度四：受益相关方
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
  slide.addText("PART 02  ·  全景扫描  ·  维度四", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("04", {
    x: 0.5, y: 0.5, w: 1.3, h: 1.0,
    fontSize: 56, fontFace: FONT_EN,
    color: theme.light, bold: true, align: "left", valign: "middle"
  });
  slide.addText("受益相关方", {
    x: 1.8, y: 0.55, w: 7, h: 0.5,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("项目成功后能从中获益的人或部门——潜在天然盟友", {
    x: 1.8, y: 1.0, w: 7, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 1.8, y: 1.35, w: 0.5, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 左侧：定义
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 4.4, h: 3.25,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 0.1, h: 3.25,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("为什么关键", {
    x: 0.75, y: 1.8, w: 4, h: 0.3,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("他们是你的天然盟友，但通常不主动出现——可能还不知道自己会受益。", {
    x: 0.75, y: 2.15, w: 4, h: 0.7,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "top",
    lineSpacing: 18
  });

  slide.addText("⚡ 最易漏的两类", {
    x: 0.75, y: 2.95, w: 4, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });

  // 下游使用者
  slide.addShape("rect", {
    x: 0.75, y: 3.3, w: 4, h: 0.7,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addText("下游使用者", {
    x: 0.85, y: 3.35, w: 3.8, h: 0.25,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "top"
  });
  slide.addText("你的项目成果会流入他们的工作流，工作将变轻松", {
    x: 0.85, y: 3.6, w: 3.8, h: 0.4,
    fontSize: 9, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "top"
  });

  // 未来维护者
  slide.addShape("rect", {
    x: 0.75, y: 4.1, w: 4, h: 0.7,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addText("未来维护者", {
    x: 0.85, y: 4.15, w: 3.8, h: 0.25,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "top"
  });
  slide.addText("日后接手项目成果的人，他们的生活因你的设计而改善或变差", {
    x: 0.85, y: 4.4, w: 3.8, h: 0.4,
    fontSize: 9, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "top"
  });

  // 右侧：思维提示
  slide.addShape("rect", {
    x: 5.1, y: 1.7, w: 4.4, h: 3.25,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.7, w: 0.1, h: 3.25,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("三个问题引导你", {
    x: 5.35, y: 1.8, w: 4, h: 0.3,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });

  const questions = [
    "项目成功后，谁的工作会因此变轻松？",
    "谁会从数据/流程的改善中直接获益？",
    "项目上线后，谁会成为「长期使用者」？"
  ];
  questions.forEach(function (q, i) {
    const y = 2.25 + i * 0.85;
    slide.addShape("ellipse", {
      x: 5.35, y: y, w: 0.35, h: 0.35,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText("?", {
      x: 5.35, y: y, w: 0.35, h: 0.35,
      fontSize: 14, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    slide.addText(q, {
      x: 5.8, y: y, w: 3.5, h: 0.7,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.dark, align: "left", valign: "top",
      lineSpacing: 18
    });
  });

  // 底部金句
  slide.addText("盟友是「找出来的」不是「等出来的」——主动告诉他们你带来的好处", {
    x: 0.5, y: 5.05, w: 9, h: 0.25,
    fontSize: 11, fontFace: FONT_CN,
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
