// slide-167.js - 你的完整策略报告
// 表格汇总六部分产出
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
  slide.addText("FINAL  /  总结收尾  ·  完整产出", {
    x: 0.4, y: 0.22, w: 6, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle", charSpacing: 4
  });
  slide.addText("YOUR DELIVERABLES", {
    x: 7.4, y: 0.22, w: 2.2, h: 0.32,
    fontSize: 10, fontFace: FONT_EN,
    color: theme.primary, bold: true, align: "right", valign: "middle", charSpacing: 2
  });

  // 大标题
  slide.addText("你的完整策略报告", {
    x: 0.5, y: 0.55, w: 9, h: 0.5,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("走完六个部分, 你手里有一套可以直接用在你真实项目上的分析底稿", {
    x: 0.5, y: 1.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle", charSpacing: 2
  });
  // 标题下装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 主表头
  slide.addShape("rect", {
    x: 0.5, y: 1.65, w: 9, h: 0.42,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  // 表头分割竖线
  slide.addShape("line", { x: 1.2, y: 1.65, w: 0, h: 0.42, line: { color: theme.white, width: 0.5 } });
  slide.addShape("line", { x: 3.8, y: 1.65, w: 0, h: 0.42, line: { color: theme.white, width: 0.5 } });
  slide.addShape("line", { x: 6.7, y: 1.65, w: 0, h: 0.42, line: { color: theme.white, width: 0.5 } });
  slide.addText("产出物", {
    x: 0.55, y: 1.65, w: 0.65, h: 0.42,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("来自部分", {
    x: 1.25, y: 1.65, w: 2.5, h: 0.42,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("作用", {
    x: 3.85, y: 1.65, w: 2.8, h: 0.42,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });
  slide.addText("状态", {
    x: 6.75, y: 1.65, w: 2.7, h: 0.42,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle"
  });

  // 表格数据
  const rows = [
    { item: "全景穷举清单", from: "第二部分", role: "确保没有遗漏任何重要角色", status: "完成" },
    { item: "权力-利益矩阵", from: "第二部分", role: "快速锁定最需要投入的人群", status: "完成" },
    { item: "6~8张深度画像", from: "第三部分", role: "把感性印象变成有依据的岗位分析", status: "完成" },
    { item: "支持度分布图", from: "第四部分", role: "精确知道每个人现在站在哪里", status: "完成" },
    { item: "需求-能给对照表", from: "第五部分", role: "清楚你需要什么、能给什么", status: "完成" },
    { item: "2~4份破局策略", from: "第六部分", role: "知道从哪里下手、第一步是什么", status: "完成" }
  ];
  const rowH = 0.42;
  const startY = 2.07;
  rows.forEach(function (r, i) {
    const y = startY + i * rowH;
    // 行背景
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: rowH,
      fill: { color: i % 2 === 0 ? theme.white : theme.highlight },
      line: { color: theme.border, width: 0.5 }
    });
    // 序号小条
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.05, h: rowH,
      fill: { color: i % 2 === 0 ? theme.primary : theme.accent },
      line: { color: i % 2 === 0 ? theme.primary : theme.accent, width: 0 }
    });
    slide.addText(r.item, {
      x: 0.6, y: y, w: 0.6, h: rowH,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "center", valign: "middle"
    });
    slide.addText(r.from, {
      x: 1.25, y: y, w: 2.5, h: rowH,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.primary, align: "center", valign: "middle"
    });
    slide.addText(r.role, {
      x: 3.85, y: y, w: 2.8, h: rowH,
      fontSize: 9.5, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "middle"
    });
    slide.addText(r.status, {
      x: 6.75, y: y, w: 2.7, h: rowH,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.accent, bold: true, align: "center", valign: "middle"
    });
  });

  // 底部强调
  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 9, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("这不是课堂练习, 是你真实项目的分析底稿  ·  拿回去可以直接使用", {
    x: 0.5, y: 4.7, w: 9, h: 0.45,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle", charSpacing: 2
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
  slide.addText("167 / 170", {
    x: 8.0, y: 5.4, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN,
    color: theme.mid, align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
