// slide-65.js - 沙滩建房子：比喻页
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "metaphor", index: 65, title: "沙滩建房子" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("一个比喻：沙滩上的房子", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("把执行完全建立在高动机上，会发生什么？", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左侧 - 视觉化场景
  // 沙地（米色色块）
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 4.4, h: 2.6,
    fill: { color: "E8DDD0" }, line: { color: "E8DDD0" }
  });

  // 天空（浅色）
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 4.4, h: 1.5,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });

  // 太阳
  slide.addShape("ellipse", {
    x: 4.2, y: 1.6, w: 0.5, h: 0.5,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  // 太阳光线
  for (let i = 0; i < 8; i++) {
    const angle = i * Math.PI / 4;
    const cx = 4.45;
    const cy = 1.85;
    const r1 = 0.4;
    const r2 = 0.5;
    slide.addShape("line", {
      x: cx + r1 * Math.cos(angle) - 0.05,
      y: cy + r1 * Math.sin(angle) - 0.05,
      w: r2 * Math.cos(angle) - r1 * Math.cos(angle) + 0.05,
      h: r2 * Math.sin(angle) - r1 * Math.sin(angle) + 0.05,
      line: { color: theme.accent, width: 2 }
    });
  }

  // 房子（多个矩形组合）
  // 主体
  slide.addShape("rect", {
    x: 1.5, y: 2.7, w: 1.5, h: 1.2,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  // 屋顶
  slide.addShape("triangle", {
    x: 1.4, y: 2.3, w: 1.7, h: 0.5,
    fill: { color: theme.redDeep }, line: { color: theme.redDeep }
  });
  // 门
  slide.addShape("rect", {
    x: 2.05, y: 3.4, w: 0.4, h: 0.5,
    fill: { color: theme.ink }, line: { color: theme.ink }
  });
  // 窗
  slide.addShape("rect", {
    x: 1.7, y: 3.0, w: 0.3, h: 0.3,
    fill: { color: theme.goldAccent }, line: { color: theme.goldAccent }
  });
  slide.addShape("rect", {
    x: 2.5, y: 3.0, w: 0.3, h: 0.3,
    fill: { color: theme.goldAccent }, line: { color: theme.goldAccent }
  });

  // 沙地裂纹
  slide.addShape("line", {
    x: 0.5, y: 3.95, w: 1.0, h: 0.0,
    line: { color: theme.inkMute, width: 1 }
  });
  slide.addShape("line", {
    x: 2.8, y: 3.95, w: 0.8, h: 0.0,
    line: { color: theme.inkMute, width: 1 }
  });
  slide.addShape("line", {
    x: 4.0, y: 3.95, w: 0.5, h: 0.0,
    line: { color: theme.inkMute, width: 1 }
  });

  // 浪花
  slide.addShape("ellipse", {
    x: 3.5, y: 3.6, w: 0.8, h: 0.4,
    fill: { color: theme.light }, line: { color: theme.light }
  });

  // 左侧底部小字
  slide.addText("好天气时：稳固、美观、似乎完美", {
    x: 0.5, y: 4.15, w: 4.4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center", italic: true
  });
  slide.addText("风雨来时：结构不稳，潮水一冲就垮", {
    x: 0.5, y: 4.45, w: 4.4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center", italic: true
  });

  // 右侧 - 解读
  slide.addShape("rect", {
    x: 5.1, y: 1.4, w: 4.4, h: 3.6,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addText("这个比喻的对应", {
    x: 5.3, y: 1.55, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  const map = [
    { left: "沙滩", right: "波动的动机" },
    { left: "房子", right: "行动计划" },
    { left: "好天气", right: "高动机时刻" },
    { left: "风雨", right: "忙碌、压力、低谷" }
  ];

  map.forEach((m, i) => {
    const y = 2.1 + i * 0.55;
    slide.addText(m.left, {
      x: 5.3, y: y, w: 1.2, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
    slide.addText("=", {
      x: 6.4, y: y, w: 0.3, h: 0.4,
      fontSize: 16, fontFace: "Arial",
      color: theme.primary, bold: true, align: "center"
    });
    slide.addText(m.right, {
      x: 6.7, y: y, w: 2.7, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent
    });
  });

  slide.addShape("rect", {
    x: 5.3, y: 4.4, w: 0.3, h: 0.03,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("地基不稳，再漂亮的房子也站不住", {
    x: 5.3, y: 4.5, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 底部金句
  slide.addText("需要 A 和 P 来打地基 —— 让计划在低动机时也能站住", {
    x: 0.5, y: 5.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
