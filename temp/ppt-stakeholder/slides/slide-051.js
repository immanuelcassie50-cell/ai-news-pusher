// slide-051.js - 多维度重叠现象
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
  slide.addText("PART 02  ·  全景扫描  ·  维度交叉", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("多维度重叠：同一个人的多重身份", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 26, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("一个人可以同时出现在多个维度——这是常态，不是异常", {
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

  // 中央：人物
  const cx = 5.0;
  const cy = 3.3;
  slide.addShape("ellipse", {
    x: cx - 0.55, y: cy - 0.55, w: 1.1, h: 1.1,
    fill: { color: theme.primary },
    line: { color: theme.accent, width: 2 }
  });
  slide.addText("一个", {
    x: cx - 0.55, y: cy - 0.4, w: 1.1, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.light, align: "center", valign: "middle"
  });
  slide.addText("人", {
    x: cx - 0.55, y: cy - 0.05, w: 1.1, h: 0.5,
    fontSize: 22, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });

  // 6个维度围绕
  const dims = [
    { n: "01", t: "直接", angle: -90, ex: "陈静也要执行部署" },
    { n: "02", t: "资源", angle: -30, ex: "陈静控制 IT 排期" },
    { n: "04", t: "受益", angle: 30, ex: "陈静工作减 60%" },
    { n: "05", t: "受损", angle: 90, ex: "陈静失去手工统计价值" },
    { n: "03", t: "影响", angle: 150, ex: "陈静在 IT 圈说话有分量" },
    { n: "06", t: "外部", angle: 210, ex: "陈静对接外部供应商" }
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

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("重叠越多，意味着这个人的角色越关键——值得在第三部分做深度画像", {
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
