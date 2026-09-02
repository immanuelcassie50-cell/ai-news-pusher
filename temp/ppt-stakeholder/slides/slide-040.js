// slide-040.js - 六维关系图
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

  slide.addText("六维关系图", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("中心是你的项目——六个维度是观察它的六扇窗口", {
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

  // 中央圆 - 项目
  const cx = 5.0;
  const cy = 3.3;
  slide.addShape("ellipse", {
    x: cx - 0.6, y: cy - 0.6, w: 1.2, h: 1.2,
    fill: { color: theme.primary },
    line: { color: theme.accent, width: 2 }
  });
  slide.addText("你的", {
    x: cx - 0.6, y: cy - 0.4, w: 1.2, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.light, align: "center", valign: "middle"
  });
  slide.addText("项目", {
    x: cx - 0.6, y: cy - 0.1, w: 1.2, h: 0.4,
    fontSize: 16, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });

  // 六个维度围绕 - 六边形布局
  const dims = [
    { n: "01", t: "直接", angle: -90 },
    { n: "02", t: "资源", angle: -30 },
    { n: "03", t: "影响", angle: 30 },
    { n: "04", t: "受益", angle: 90 },
    { n: "05", t: "受损", angle: 150 },
    { n: "06", t: "外部", angle: 210 }
  ];
  const radius = 1.85;
  dims.forEach(function (d) {
    const rad = (d.angle * Math.PI) / 180;
    const dx = cx + radius * Math.cos(rad) - 0.5;
    const dy = cy + radius * Math.sin(rad) - 0.3;
    // 连接线
    slide.addShape("line", {
      x: cx, y: cy, w: dx + 0.5 - cx, h: dy + 0.3 - cy,
      line: { color: theme.border, width: 0.5, dashType: "dash" }
    });
    // 圆点
    slide.addShape("ellipse", {
      x: dx, y: dy, w: 1.0, h: 0.6,
      fill: { color: theme.accent },
      line: { color: theme.white, width: 1 }
    });
    slide.addText(d.n, {
      x: dx, y: dy, w: 1.0, h: 0.3,
      fontSize: 9, fontFace: FONT_EN,
      color: theme.light, align: "center", valign: "middle"
    });
    slide.addText(d.t, {
      x: dx, y: dy + 0.25, w: 1.0, h: 0.3,
      fontSize: 13, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
  });

  // 左侧：为什么是六个
  slide.addText("为什么是六个？", {
    x: 0.5, y: 1.7, w: 2.8, h: 0.3,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.0, w: 0.3, h: 0.03,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  const reasons = [
    "每个视角看到的人不同",
    "维度间会有重叠（正常）",
    "单独任何一个都不够",
    "六个合起来接近全貌"
  ];
  reasons.forEach(function (r, i) {
    const y = 2.15 + i * 0.4;
    slide.addShape("rect", {
      x: 0.5, y: y + 0.13, w: 0.1, h: 0.1,
      fill: { color: theme.accent },
      line: { color: theme.accent, width: 0 }
    });
    slide.addText(r, {
      x: 0.7, y: y, w: 2.7, h: 0.35,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.dark, align: "left", valign: "middle"
    });
  });

  // 右侧：使用顺序
  slide.addText("使用顺序", {
    x: 7.2, y: 1.7, w: 2.5, h: 0.3,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 7.2, y: 2.0, w: 0.3, h: 0.03,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  const order = [
    "01 → 06 顺序扫描",
    "每格只写名字",
    "不分析不评价",
    "汇总后下一步筛选"
  ];
  order.forEach(function (o, i) {
    const y = 2.15 + i * 0.4;
    slide.addText(String(i + 1), {
      x: 7.2, y: y, w: 0.3, h: 0.35,
      fontSize: 12, fontFace: FONT_EN,
      color: theme.accent, bold: true, align: "left", valign: "middle"
    });
    slide.addText(o, {
      x: 7.5, y: y, w: 2.2, h: 0.35,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.dark, align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("六维扫描不是分析框架，是穷举框架——目的是「不漏」，不是「分类」", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.mid, italic: true, align: "center", valign: "middle"
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
