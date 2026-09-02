// slide-49.js - 模式三：新增会议
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "pattern", index: 49, title: "模式三：新增会议" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("PATTERN 03", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 大数字
  slide.addText("03", {
    x: 8.0, y: 0.3, w: 1.5, h: 1.0,
    fontSize: 56, fontFace: "Arial",
    color: theme.redLight, bold: true, align: "right"
  });

  // 主标题
  slide.addText("模式三：新增会议型", {
    x: 0.5, y: 0.6, w: 7, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("在已经很满的日历上，加一个需要大家都参加的新会议", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 典型表述
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 0.9,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("典型表述", {
    x: 0.7, y: 1.93, w: 2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText('"开一个跨部门对齐会"   ·   "组织一次团队季度复盘"   ·   "召集大家讨论下"   ·   "建一个周会机制"', {
    x: 0.7, y: 2.2, w: 8.5, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 日历可视化
  slide.addText("为什么它会失败？", {
    x: 0.5, y: 2.95, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 日历格子 - 满的日历
  const calX = 0.5;
  const calY = 3.4;
  const cellW = 0.55;
  const cellH = 0.4;
  const cols = 12;
  const rows = 3;

  // 标题
  slide.addText("周一至周五 · 上午/下午/晚上", {
    x: calX, y: calY, w: cols * cellW, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center"
  });

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const isFull = (r === 0 && c !== 2) || (r === 1 && c !== 5) || (r === 2 && c < 4);
      slide.addShape("rect", {
        x: calX + c * cellW, y: calY + 0.3 + r * cellH, w: cellW - 0.05, h: cellH - 0.05,
        fill: { color: isFull ? theme.accent : theme.paperWarm }, line: { color: isFull ? theme.accent : theme.paperLine }
      });
    }
  }

  // 新会议标记
  slide.addShape("rect", {
    x: calX + 2 * cellW, y: calY + 0.3, w: cellW - 0.05, h: cellH - 0.05,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("?", {
    x: calX + 2 * cellW, y: calY + 0.3, w: cellW - 0.05, h: cellH - 0.05,
    fontSize: 14, fontFace: "Arial",
    color: theme.inkMute, bold: true, align: "center", valign: "middle"
  });

  slide.addShape("rect", {
    x: calX + 5 * cellW, y: calY + 0.3 + cellH, w: cellW - 0.05, h: cellH - 0.05,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("?", {
    x: calX + 5 * cellW, y: calY + 0.3 + cellH, w: cellW - 0.05, h: cellH - 0.05,
    fontSize: 14, fontFace: "Arial",
    color: theme.inkMute, bold: true, align: "center", valign: "middle"
  });

  // 图例
  slide.addShape("rect", {
    x: calX, y: calY + 0.3 + 3 * cellH + 0.15, w: 0.2, h: 0.15,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("已有会议", {
    x: calX + 0.25, y: calY + 0.3 + 3 * cellH + 0.12, w: 1.5, h: 0.2,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addShape("rect", {
    x: calX + 1.8, y: calY + 0.3 + 3 * cellH + 0.15, w: 0.2, h: 0.15,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine }
  });
  slide.addText("寻找空档", {
    x: calX + 2.05, y: calY + 0.3 + 3 * cellH + 0.12, w: 1.5, h: 0.2,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 右侧失败机制
  slide.addShape("rect", {
    x: 7.3, y: 3.4, w: 2.2, h: 1.5,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addText("失败机制", {
    x: 7.3, y: 3.5, w: 2.2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });
  slide.addText("协调失败一两次", {
    x: 7.3, y: 3.85, w: 2.2, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.ink, align: "center", bold: true
  });
  slide.addText("↓", {
    x: 7.3, y: 4.1, w: 2.2, h: 0.25,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, align: "center", bold: true
  });
  slide.addText("会议不再被期待", {
    x: 7.3, y: 4.35, w: 2.2, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.ink, align: "center", bold: true
  });
  slide.addText("↓", {
    x: 7.3, y: 4.6, w: 2.2, h: 0.25,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, align: "center", bold: true
  });
  slide.addText("自然消亡", {
    x: 7.3, y: 4.85, w: 2.2, h: 0.25,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", bold: true
  });

  // 底部金句
  slide.addText("每一个额外会议 = 额外协调成本", {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
