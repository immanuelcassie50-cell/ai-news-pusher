// slide-037.js - 第一步：锁定项目基础
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
  slide.addText("PART 02  ·  全景扫描", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("第一步：锁定项目基础", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("开始扫描前，先把项目的基本信息填清楚", {
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

  // 练习标识
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 1.5, h: 0.4,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("✋ 练习", {
    x: 0.5, y: 1.7, w: 1.5, h: 0.4,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("预计 3 ~ 5 分钟", {
    x: 2.1, y: 1.7, w: 3, h: 0.4,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "middle"
  });

  // 五个问题卡片
  const questions = [
    { n: "1", t: "项目名称", d: "把项目具体说清楚" },
    { n: "2", t: "我的角色", d: "我在这个项目中担任什么位置" },
    { n: "3", t: "核心目标", d: "用一句话说清楚成功是什么样的，越具体越好" },
    { n: "4", t: "可预见的变化", d: "成功后最可见的变化是什么，对谁产生什么影响" },
    { n: "5", t: "涉及职能域", d: "主要涉及哪些职能域或业务领域" }
  ];
  questions.forEach(function (q, i) {
    const y = 2.3 + i * 0.58;
    // 编号
    slide.addShape("ellipse", {
      x: 0.6, y: y, w: 0.45, h: 0.45,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    slide.addText(q.n, {
      x: 0.6, y: y, w: 0.45, h: 0.45,
      fontSize: 14, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 标题
    slide.addText(q.t, {
      x: 1.2, y: y - 0.02, w: 2.5, h: 0.25,
      fontSize: 13, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "top"
    });
    // 描述
    slide.addText(q.d, {
      x: 1.2, y: y + 0.22, w: 8.0, h: 0.25,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top"
    });
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
