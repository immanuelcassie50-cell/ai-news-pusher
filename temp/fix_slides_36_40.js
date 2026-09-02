const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/';

// Slide 36: Skill 1 - 场景化
const slide36 = `// slide-36.js - Skill 1：场景化
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 36,
  title: 'Skill 1：场景化'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });

  // Section label
  slide.addText("Skill 1：场景化", {
    x: 0.5, y: 0.3, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // Main title
  slide.addText("把技术术语变成生活场景", {
    x: 0.5, y: 0.7, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Wrong example - Left column
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.4, w: 4.2, h: 2.3,
    fill: { color: "FFFFFF" },
    line: { color: "E0E0E0", width: 1 },
    shadow: { type: 'outer', blur: 6, offset: 2, color: 'rgba(0,0,0,0.06)' },
    rectRadius: 0.1
  });

  // Wrong badge
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.4, w: 0.8, h: 0.35,
    fill: { color: theme.secondary }
  });
  slide.addText("错误", {
    x: 0.5, y: 1.4, w: 0.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
  });

  // X icon
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

  // Arrow between columns
  slide.addText("→", {
    x: 4.7, y: 2.2, w: 0.6, h: 0.6,
    fontSize: 32, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  // Correct example - Right column
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.3, y: 1.4, w: 4.2, h: 2.3,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 },
    shadow: { type: 'outer', blur: 8, offset: 3, color: 'rgba(0,0,0,0.08)' },
    rectRadius: 0.1
  });

  // Correct badge
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.4, w: 0.8, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("正确", {
    x: 5.3, y: 1.4, w: 0.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
  });

  // Checkmark icon
  slide.addShape(pres.shapes.OVAL, {
    x: 6.8, y: 2.0, w: 0.8, h: 0.8,
    fill: { color: "E8F5E9" }
  });
  slide.addText("✓", {
    x: 6.8, y: 2.0, w: 0.8, h: 0.8,
    fontSize: 32, fontFace: "Arial",
    color: "#2E7D32", bold: true, align: "center", valign: "middle"
  });

  slide.addText("「24小时在线的\n虚拟管家」", {
    x: 5.5, y: 2.9, w: 3.8, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // Bottom insight box
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

  slide.addText("用业主熟悉的生活场景解释AI能力，让技术"隐身"，只呈现业主能直接感受到的价值。", {
    x: 0.7, y: 4.4, w: 8.5, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number
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
`;

fs.writeFileSync(path + 'slide-36.js', slide36);
try {
  new Function(slide36);
  console.log('slide-36: OK');
} catch(e) {
  console.log('slide-36: ' + e.message);
}

// Slide 37: Skill 2 - 个人化
const slide37 = `// slide-37.js - Skill 2：个人化
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

  // Wrong example
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

  slide.addText("「您好，您的工单号ABC123\n已经处理完毕」", {
    x: 0.7, y: 2.0, w: 3.8, h: 0.9,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle"
  });

  // Arrow
  slide.addText("→", {
    x: 4.7, y: 2.0, w: 0.6, h: 0.6,
    fontSize: 32, fontFace: "Arial",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  // Correct example
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

  slide.addText("「王阿姨，您的门禁卡\n已经办好了」", {
    x: 5.5, y: 2.0, w: 3.8, h: 0.9,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // Key points
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
`;

fs.writeFileSync(path + 'slide-37.js', slide37);
try {
  new Function(slide37);
  console.log('slide-37: OK');
} catch(e) {
  console.log('slide-37: ' + e.message);
}

// Slide 38: Skill 3 - 同理心
const slide38 = `// slide-38.js - Skill 3：同理心
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 38,
  title: 'Skill 3：同理心'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });

  slide.addText("Skill 3：同理心", {
    x: 0.5, y: 0.3, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("先认可情绪，再解决问题", {
    x: 0.5, y: 0.7, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Left: 欠佳
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.4, w: 4.2, h: 2.5,
    fill: { color: "FFFFFF" },
    line: { color: "E0E0E0", width: 1 },
    rectRadius: 0.1
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.4, w: 0.8, h: 0.35,
    fill: { color: theme.secondary }
  });
  slide.addText("欠佳", {
    x: 0.5, y: 1.4, w: 0.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
  });

  slide.addText([
    { text: "业主：「这个机器怎么这么麻烦！」", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "客服：「这是最新系统，很快就能上手」", options: {} }
  ], {
    x: 0.7, y: 1.95, w: 3.8, h: 1.8,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Right: 推荐
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.3, y: 1.4, w: 4.2, h: 2.5,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 },
    rectRadius: 0.1
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.3, y: 1.4, w: 0.8, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("推荐", {
    x: 5.3, y: 1.4, w: 0.8, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
  });

  slide.addText([
    { text: "业主：「这个机器怎么这么麻烦！」", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "客服：「我理解，换新东西确实要适应。", options: { breakLine: true } },
    { text: "您先坐下，我一步一步教您操作」", options: {} }
  ], {
    x: 5.5, y: 1.95, w: 3.8, h: 1.8,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Bottom formula
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.2, w: 9, h: 0.9,
    fill: { color: theme.primary, transparency: 95 },
    line: { color: theme.primary, width: 1 },
    rectRadius: 0.08
  });

  slide.addText("沟通公式", {
    x: 0.7, y: 4.3, w: 1.2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("认同情绪 → 表达理解 → 提供帮助 → 逐步引导", {
    x: 0.7, y: 4.6, w: 8.5, h: 0.4,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("38", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
`;

fs.writeFileSync(path + 'slide-38.js', slide38);
try {
  new Function(slide38);
  console.log('slide-38: OK');
} catch(e) {
  console.log('slide-38: ' + e.message);
}

// Slide 39: Skill 4 - 耐心
const slide39 = `// slide-39.js - Skill 4：耐心
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 39,
  title: 'Skill 4：耐心'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });

  slide.addText("Skill 4：耐心", {
    x: 0.5, y: 0.3, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("放慢语速，允许重复", {
    x: 0.5, y: 0.7, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const tips = [
    { title: "语速", desc: "比平时慢20%，给业主思考时间" },
    { title: "重复", desc: "重要信息重复2-3遍，不要显得不耐烦" },
    { title: "确认", desc: "「我说清楚了吗？」而非「您听明白了吗？」" }
  ];

  tips.forEach((t, i) => {
    const y = 1.5 + i * 1.2;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 1.0,
      fill: { color: "FFFFFF" },
      shadow: { type: 'outer', blur: 4, offset: 2, color: 'rgba(0,0,0,0.06)' },
      rectRadius: 0.1
    });

    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: y + 0.3, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.7, y: y + 0.3, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    slide.addText(t.title, {
      x: 1.3, y: y + 0.2, w: 1.5, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(t.desc, {
      x: 1.3, y: y + 0.55, w: 7.5, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("39", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
`;

fs.writeFileSync(path + 'slide-39.js', slide39);
try {
  new Function(slide39);
  console.log('slide-39: OK');
} catch(e) {
  console.log('slide-39: ' + e.message);
}

// Slide 40: 沟通技巧总结
const slide40 = `// slide-40.js - 沟通技巧总结
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 40,
  title: '沟通技巧总结'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.accent }
  });

  slide.addText("沟通技巧总结", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const skills = [
    { num: "1", title: "场景化", key: "把技术翻译成生活" },
    { num: "2", title: "个人化", key: "用名字称呼业主" },
    { num: "3", title: "同理心", key: "先认同情绪再解决" },
    { num: "4", title: "耐心", key: "慢速清晰允许重复" }
  ];

  skills.forEach((s, i) => {
    const x = 0.5 + (i % 2) * 4.6;
    const y = 1.1 + Math.floor(i / 2) * 2.0;

    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: y, w: 4.4, h: 1.8,
      fill: { color: "FFFFFF" },
      shadow: { type: 'outer', blur: 4, offset: 2, color: 'rgba(0,0,0,0.06)' },
      rectRadius: 0.1
    });

    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: y + 0.2, w: 0.6, h: 0.6,
      fill: { color: theme.accent }
    });
    slide.addText(s.num, {
      x: x + 0.2, y: y + 0.2, w: 0.6, h: 0.6,
      fontSize: 20, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });

    slide.addText(s.title, {
      x: x + 1.0, y: y + 0.25, w: 3.0, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    slide.addText(s.key, {
      x: x + 0.2, y: y + 1.0, w: 4.0, h: 0.6,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("40", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
`;

fs.writeFileSync(path + 'slide-40.js', slide40);
try {
  new Function(slide40);
  console.log('slide-40: OK');
} catch(e) {
  console.log('slide-40: ' + e.message);
}
