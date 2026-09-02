import os

path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/'

# Slide 36
slide36 = '''// slide-36.js - Skill 1：场景化
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 36,
  title: 'Skill 1：场景化'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });

  slide.addText("Skill 1：场景化", {
    x: 0.5, y: 0.3, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("把技术术语变成生活场景", {
    x: 0.5, y: 0.7, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.4, w: 4.2, h: 2.3,
    fill: { color: "FFFFFF" },
    line: { color: "E0E0E0", width: 1 },
    shadow: { type: 'outer', blur: 6, offset: 2, color: 'rgba(0,0,0,0.06)' },
    rectRadius: 0.1
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.4, w: 0.8, h: 0.35,
    fill: { color: theme.secondary }
  });
  slide.addText("错误", {
    x: 0.5, y: 1.4, w: 0.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 2.0, y: 2.0, w: 0.8, h: 0.8,
    fill: { color: "FFE5E5" }
  });
  slide.addText("X", {
    x: 2.0, y: 2.0, w: 0.8, h: 0.8,
    fontSize: 32, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  slide.addText("「基于大语言模型的\n智能客服系统」", {
    x: 0.7, y: 2.9, w: 3.8, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle"
  });

  slide.addText("→", {
    x: 4.7, y: 2.2, w: 0.6, h: 0.6,
    fontSize: 32, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.3, y: 1.4, w: 4.2, h: 2.3,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 },
    shadow: { type: 'outer', blur: 8, offset: 3, color: 'rgba(0,0,0,0.08)' },
    rectRadius: 0.1
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.4, w: 0.8, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("正确", {
    x: 5.3, y: 1.4, w: 0.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 6.8, y: 2.0, w: 0.8, h: 0.8,
    fill: { color: "E8F5E9" }
  });
  slide.addText("OK", {
    x: 6.8, y: 2.0, w: 0.8, h: 0.8,
    fontSize: 24, fontFace: "Arial",
    color: "#2E7D32", bold: true, align: "center", valign: "middle"
  });

  slide.addText("「24小时在线的\n虚拟管家」", {
    x: 5.5, y: 2.9, w: 3.8, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.0, w: 9, h: 0.8,
    fill: { color: theme.accent, transparency: 92 },
    line: { color: theme.accent, width: 1 },
    rectRadius: 0.08
  });

  slide.addText("核心心法", {
    x: 0.7, y: 4.1, w: 1, h: 0.25,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("用业主熟悉的生活场景解释AI能力，让技术隐身，只呈现业主能直接感受到的价值。", {
    x: 0.7, y: 4.4, w: 8.5, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("36", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

with open(path + 'slide-36.js', 'w', encoding='utf-8') as f:
    f.write(slide36)
print('slide-36 written OK')

# Slide 37
slide37 = '''// slide-37.js - Skill 2：个人化
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 37,
  title: 'Skill 2：个人化'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });

  slide.addText("Skill 2：个人化", {
    x: 0.5, y: 0.3, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("用名字而非编号称呼业主", {
    x: 0.5, y: 0.7, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.4, w: 4.2, h: 1.8,
    fill: { color: "FFFFFF" },
    line: { color: "E0E0E0", width: 1 },
    rectRadius: 0.1
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.4, w: 0.8, h: 0.35,
    fill: { color: theme.secondary }
  });
  slide.addText("错误", {
    x: 0.5, y: 1.4, w: 0.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
  });

  slide.addText("「您好，您的工单号ABC123\\n已经处理完毕」", {
    x: 0.7, y: 2.0, w: 3.8, h: 0.9,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle"
  });

  slide.addText("→", {
    x: 4.7, y: 2.0, w: 0.6, h: 0.6,
    fontSize: 32, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.3, y: 1.4, w: 4.2, h: 1.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 },
    rectRadius: 0.1
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.4, w: 0.8, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("正确", {
    x: 5.3, y: 1.4, w: 0.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
  });

  slide.addText("「王阿姨，您的门禁卡\\n已经办好了」", {
    x: 5.5, y: 2.0, w: 3.8, h: 0.9,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  const points = [
    { title: "记住姓名", desc: "系统提前录入业主姓名，沟通过程中自然使用" },
    { title: "了解背景", desc: "「您上次说家里水管有问题，现在修好了吗？」" },
    { title: "表达关心", desc: "「下雨天出门小心路滑，我帮您叫好出租车了」" }
  ];

  points.forEach((p, i) => {
    const y = 3.5 + i * 0.65;
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y + 0.05, w: 0.35, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.5, y: y + 0.05, w: 0.35, h: 0.35,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(p.title, {
      x: 1.0, y: y, w: 1.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(p.desc, {
      x: 2.5, y: y, w: 7, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("37", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
'''

with open(path + 'slide-37.js', 'w', encoding='utf-8') as f:
    f.write(slide37)
print('slide-37 written OK')