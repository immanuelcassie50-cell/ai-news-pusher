// fix-slides4.js - Fix remaining corrupted slide files
const fs = require('fs');

const slides = {
  'slide-106': `// slide-106.js - 常见问题Q1
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 106,
  title: '常见问题'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  slide.addText("常见问题", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 9, h: 1.2,
    fill: { color: theme.primary }
  });
  slide.addText("Q1", {
    x: 0.7, y: 1.35, w: 0.8, h: 0.5,
    fontSize: 24, fontFace: "Arial",
    color: "ffffff", bold: true
  });
  slide.addText("孩子不接受专属时间怎么办？", {
    x: 1.5, y: 1.35, w: 7.8, h: 0.9,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, valign: "middle"
  });

  slide.addShape("rect", {
    x: 0.5, y: 2.6, w: 9, h: 2.2,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 135, opacity: 0.06 }
  });

  slide.addText("A", {
    x: 0.7, y: 2.8, w: 0.8, h: 0.5,
    fontSize: 24, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  slide.addText("从短时间开始，让孩子选择活动", {
    x: 1.5, y: 2.8, w: 7.8, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "先从5分钟开始，逐步延长", options: { bullet: true, breakLine: true } },
    { text: "让孩子选择做什么（即使只是坐着）", options: { bullet: true, breakLine: true } },
    { text: "不批评，让孩子感觉这是「特权时间」", options: { bullet: true, breakLine: true } },
    { text: "坚持几次，孩子会开始期待", options: { bullet: true } }
  ], {
    x: 1.5, y: 3.4, w: 7.8, h: 1.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-106-preview.pptx" });
}`,

  'slide-110': `// slide-110.js - 情绪管理
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 110,
  title: '情绪管理'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  slide.addText("情绪管理", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 9, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("「", {
    x: 0.6, y: 1.1, w: 0.5, h: 0.6,
    fontSize: 48, fontFace: "Georgia",
    color: "ffffff", bold: true
  });
  slide.addText("父母情绪稳定，是给孩子最好的礼物", {
    x: 1.1, y: 1.3, w: 8.2, h: 0.7,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, valign: "middle"
  });

  slide.addShape("rect", {
    x: 0.5, y: 2.5, w: 4.4, h: 2.5,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.05 }
  });

  slide.addText("情绪上来了怎么办？", {
    x: 0.7, y: 2.7, w: 4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText([
    { text: "先深呼吸，暂停6秒", options: { bullet: true, breakLine: true } },
    { text: "离开现场，去另一个房间", options: { bullet: true, breakLine: true } },
    { text: "对自己说：我现在很生气", options: { bullet: true, breakLine: true } },
    { text: "等平静了再回来处理", options: { bullet: true } }
  ], {
    x: 0.7, y: 3.3, w: 4, h: 1.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addShape("rect", {
    x: 5.1, y: 2.5, w: 4.4, h: 2.5,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.05 }
  });

  slide.addText("这些行为会伤害孩子", {
    x: 5.3, y: 2.7, w: 4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText([
    { text: "大声吼叫、威胁", options: { bullet: true, breakLine: true } },
    { text: "翻旧账", options: { bullet: true, breakLine: true } },
    { text: "拿孩子比较", options: { bullet: true, breakLine: true } },
    { text: "冷暴力、不理睬", options: { bullet: true } }
  ], {
    x: 5.3, y: 3.3, w: 4, h: 1.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-110-preview.pptx" });
}`,

  'slide-112': `// slide-112.js - 家庭会议机制
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 112,
  title: '家庭会议机制'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  slide.addText("家庭会议机制", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("每周一次的民主协商会", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  const steps = [
    { title: "开场", desc: "轮流说一件感激的事", time: "2分钟" },
    { title: "议题讨论", desc: "讨论本周需要决定的事项", time: "10分钟" },
    { title: "问题解决", desc: "分享困扰，共同想办法", time: "10分钟" },
    { title: "下周计划", desc: "确认下周的安排和分工", time: "3分钟" }
  ];

  steps.forEach((step, i) => {
    const y = 1.6 + i * 0.95;

    slide.addShape("roundRect", {
      x: 0.5, y: y, w: 0.6, h: 0.7,
      fill: { color: theme.primary },
      rectRadius: 0.08
    });
    slide.addText((i + 1).toString(), {
      x: 0.5, y: y, w: 0.6, h: 0.7,
      fontSize: 20, fontFace: "Arial",
      color: "ffffff", bold: true, align: "center", valign: "middle"
    });

    slide.addShape("rect", {
      x: 1.3, y: y, w: 7.2, h: 0.7,
      fill: { color: "ffffff" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 135, opacity: 0.04 }
    });

    slide.addText(step.title, {
      x: 1.5, y: y, w: 1.5, h: 0.7,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });

    slide.addText(step.desc, {
      x: 3.0, y: y, w: 4.5, h: 0.7,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });

    slide.addShape("roundRect", {
      x: 7.8, y: y + 0.15, w: 0.8, h: 0.4,
      fill: { color: theme.bg },
      rectRadius: 0.05
    });
    slide.addText(step.time, {
      x: 7.8, y: y + 0.15, w: 0.8, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.light, align: "center", valign: "middle"
    });
  });

  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.accent, transparency: 15 }
  });
  slide.addText("小贴士：会议中每人都有投票权，少数服从多数，但学龄前儿童可以「否决但服从」", {
    x: 0.7, y: 5.0, w: 8.6, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-112-preview.pptx" });
}`,

  'slide-115': `// slide-115.js - 表扬与批评的艺术
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 115,
  title: '表扬与批评的艺术'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  slide.addText("表扬与批评的艺术", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 4.4, h: 4.0,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.05 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 4.4, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("表扬技巧", {
    x: 0.5, y: 1.15, w: 4.4, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  slide.addText([
    { text: "表扬努力而非天赋", options: { bullet: true, breakLine: true } },
    { text: "「你很努力」 > 「你真聪明」", options: { bullet: true, breakLine: true } },
    { text: "具体化：「你把玩具收拾得很整齐」", options: { bullet: true, breakLine: true } },
    { text: "及时表扬，但不过度", options: { bullet: true, breakLine: true } },
    { text: "私下表扬比公开表扬更有效", options: { bullet: true } }
  ], {
    x: 0.7, y: 1.95, w: 4, h: 3.0,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 4.4, h: 4.0,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.05 }
  });

  slide.addShape("rect", {
    x: 5.1, y: 1.15, w: 4.4, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("批评技巧", {
    x: 5.1, y: 1.15, w: 4.4, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  slide.addText([
    { text: "对事不对人", options: { bullet: true, breakLine: true } },
    { text: "「这个行为」 > 「你这个孩子」", options: { bullet: true, breakLine: true } },
    { text: "说明后果和原因", options: { bullet: true, breakLine: true } },
    { text: "提供改正的机会", options: { bullet: true, breakLine: true } },
    { text: "批评后及时修复关系", options: { bullet: true } }
  ], {
    x: 5.3, y: 1.95, w: 4, h: 3.0,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-115-preview.pptx" });
}`,

  'slide-117': `// slide-117.js - 日常生活场景应用
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 117,
  title: '日常生活场景应用'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  slide.addText("日常生活场景应用", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const scenarios = [
    { scene: "争抢玩具", solution: "引导轮流玩，每人10分钟，培养等待能力" },
    { scene: "抱怨不公平", solution: "先倾听，再解释，最后问「你觉得怎么办」" },
    { scene: "互相告状", solution: "不急着评判谁对谁错，引导他们自己解决" },
    { scene: "比较父母的爱", solution: "分别告诉每个孩子Ta的独特之处" }
  ];

  scenarios.forEach((s, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 0.5 + col * 4.7;
    const y = 1.2 + row * 2.0;

    slide.addShape("rect", {
      x: x, y: y, w: 4.4, h: 1.8,
      fill: { color: "ffffff" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 135, opacity: 0.05 }
    });

    slide.addShape("roundRect", {
      x: x + 0.2, y: y + 0.2, w: 1.4, h: 0.4,
      fill: { color: theme.accent },
      rectRadius: 0.05
    });
    slide.addText(s.scene, {
      x: x + 0.2, y: y + 0.2, w: 1.4, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true, align: "center", valign: "middle"
    });

    slide.addText(s.solution, {
      x: x + 0.2, y: y + 0.8, w: 4, h: 0.8,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-117-preview.pptx" });
}`,

  'slide-118': `// slide-118.js - 建立手足合作模式
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 118,
  title: '建立手足合作模式'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  slide.addText("建立手足合作模式", {
    x: 0.5, y: 0.35, w: 9, h: 0.65,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.15, w: 9, h: 4.0,
    fill: { color: "ffffff" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 135, opacity: 0.06 }
  });

  slide.addText("「兄弟姐妹是父母给孩子的最好礼物——一辈子的朋友和伙伴」", {
    x: 0.7, y: 1.35, w: 8.6, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  const strategies = [
    { title: "合作游戏", desc: "玩需要配合的游戏，如棋牌、团队任务" },
    { title: "互相帮助", desc: "分配需要协作的家务，如一起整理房间" },
    { title: "共同目标", desc: "设定兄弟姐妹共同的奖励，一起努力获得" },
    { title: "独特角色", desc: "给每个孩子分配不同角色，避免竞争" }
  ];

  strategies.forEach((s, i) => {
    const y = 2.15 + i * 0.75;

    slide.addShape("ellipse", {
      x: 0.9, y: y + 0.05, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText((i + 1).toString(), {
      x: 0.9, y: y + 0.05, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true, align: "center", valign: "middle"
    });

    slide.addText(s.title, {
      x: 1.6, y: y, w: 1.8, h: 0.6,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });

    slide.addText(s.desc, {
      x: 3.5, y: y, w: 5.8, h: 0.6,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-118-preview.pptx" });
}`
};

Object.entries(slides).forEach(([name, content]) => {
  fs.writeFileSync(name + '.js', content);
  console.log('Written', name + '.js');
});