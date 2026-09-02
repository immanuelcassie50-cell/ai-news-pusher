// slide-099.js - 老张的举手与拖延
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 04 · 三阶九梯定位", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 标题
  slide.addText("老张的举手与拖延", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 26, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("一个让叶云短暂困惑的案例", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 时间线：四个节点
  const events = [
    { time: "第一个月", title: "启动会举手", desc: "门店运营经理老张参会举手：「支持，没问题，我们配合」", color: theme.light },
    { time: "第二个月", title: "数据接口延迟", desc: "老张门店的数据接口迟迟没有完成配置，问时说「最近比较忙」", color: theme.accent },
    { time: "第十周", title: "仍未推进", desc: "进度还是没动，叶云开始认真分析老张的实际处境", color: theme.accent },
    { time: "复盘发现", title: "表面顺从、内心保留", desc: "举手因为大区总在场，保留因为要改习惯且无资源支持", color: theme.primary }
  ];

  events.forEach(function (ev, i) {
    const y = 1.8 + i * 0.78;
    // 时间标签
    slide.addShape("rect", {
      x: 0.5, y: y, w: 1.4, h: 0.65,
      fill: { color: ev.color }, line: { color: ev.color, width: 0 }
    });
    slide.addText(ev.time, {
      x: 0.5, y: y, w: 1.4, h: 0.65,
      fontSize: 11, fontFace: FONT_CN, color: theme.white,
      bold: true, align: "center", valign: "middle"
    });
    // 内容卡
    slide.addShape("rect", {
      x: 2.0, y: y, w: 7.5, h: 0.65,
      fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
    });
    slide.addText(ev.title, {
      x: 2.15, y: y + 0.05, w: 7.3, h: 0.28,
      fontSize: 13, fontFace: FONT_CN, color: theme.dark,
      bold: true, align: "left", valign: "middle"
    });
    slide.addText(ev.desc, {
      x: 2.15, y: y + 0.32, w: 7.3, h: 0.3,
      fontSize: 10, fontFace: FONT_CN, color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // 底部品牌
  slide.addShape("line", {
    x: 0.4, y: 5.35, w: 9.2, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("利益相关方深度实战 · 授课PPT", {
    x: 0.4, y: 5.4, w: 6, h: 0.2,
    fontSize: 8, fontFace: FONT_CN, color: theme.mid, align: "left", valign: "middle"
  });
  slide.addText(String(pageNum).padStart(2, '0') + " / " + String(totalPages).padStart(3, '0'), {
    x: 8.0, y: 5.4, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN, color: theme.mid, align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
