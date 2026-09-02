// slide-04.js - 目标受众
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "content-three-types", index: 4, title: "目标受众" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("WHO IS THIS FOR", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("这门课适合谁", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("三类人，都有一个共同处境：手上有一份想推动落地的计划。", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 三列
  const types = [
    {
      icon: "L",
      role: "团队 Leader",
      sub: "Team Lead / 中层管理者",
      pains: [
        "团队定了计划执行不动",
        "每次复盘都说\"下次注意\"",
        "想推动但不知道从哪下手"
      ]
    },
    {
      icon: "P",
      role: "项目经理",
      sub: "PM / 项目负责人",
      pains: [
        "项目计划很完整但延期",
        "干系人承诺的事难落地",
        "流程设计没人遵守"
      ]
    },
    {
      icon: "H",
      role: "HR / BP",
      sub: "组织发展 / 培训",
      pains: [
        "想提升组织执行力",
        "培训内容难以转化",
        "需要一套可操作的方法"
      ]
    }
  ];

  types.forEach((t, i) => {
    const x = 0.5 + i * 3.1;
    // 卡片
    slide.addShape("rect", {
      x: x, y: 1.85, w: 2.9, h: 2.95,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
    });
    // 顶部色条
    slide.addShape("rect", {
      x: x, y: 1.85, w: 2.9, h: 0.5,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    // 角色图标
    slide.addText(t.icon, {
      x: x + 0.2, y: 1.93, w: 0.5, h: 0.35,
      fontSize: 22, fontFace: "Arial",
      color: "FFFFFF", bold: true
    });
    // 角色名
    slide.addText(t.role, {
      x: x + 0.8, y: 1.92, w: 1.9, h: 0.35,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true
    });
    // 副标
    slide.addText(t.sub, {
      x: x + 0.2, y: 2.5, w: 2.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkMute
    });
    // 痛点列表
    t.pains.forEach((p, j) => {
      // 圆点
      slide.addShape("ellipse", {
        x: x + 0.2, y: 2.95 + j * 0.55 + 0.13, w: 0.08, h: 0.08,
        fill: { color: theme.accent }, line: { color: theme.accent }
      });
      slide.addText(p, {
        x: x + 0.4, y: 2.95 + j * 0.55, w: 2.4, h: 0.45,
        fontSize: 11, fontFace: "Microsoft YaHei",
        color: theme.inkSoft, lineSpacing: 14
      });
    });
  });

  // 底部提示
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.32,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine, width: 0.5 }
  });
  slide.addText("提示：如果你属于其中一类，请把你的实际计划放在手边——这门课会直接用到。", {
    x: 0.6, y: 5.05, w: 8.8, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
