// slide-169.js - 行动号召
// 行动步骤 1/2/3 列出
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

  // 顶部标识
  slide.addText("FINAL  /  总结收尾  ·  行动号召", {
    x: 0.4, y: 0.22, w: 6, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle", charSpacing: 4
  });
  slide.addText("ACT NOW", {
    x: 8.0, y: 0.22, w: 1.6, h: 0.32,
    fontSize: 10, fontFace: FONT_EN,
    color: theme.accent, bold: true, align: "right", valign: "middle", charSpacing: 2
  });

  // 大标题
  slide.addText("回去之后的三个动作", {
    x: 0.5, y: 0.55, w: 9, h: 0.5,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("不是\"以后再做\"  ·  是今天, 本周, 下周", {
    x: 0.5, y: 1.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle", charSpacing: 2
  });
  // 标题下装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 三个行动步骤（大色块卡片）
  const actions = [
    {
      num: "1",
      kicker: "今天",
      title: "锁定一个真实项目",
      desc: "在脑子里选一个你正在推进、或者即将启动的具体项目。整个分析框架, 都只对真实项目有效。",
      tip: "Tip: 写下来, 贴在看得到的地方。",
      color: theme.primary
    },
    {
      num: "2",
      kicker: "本周",
      title: "画出 6~8 个核心人物",
      desc: "用六维扫描, 列出所有相关方;再用权力-利益矩阵, 筛出 6~8 个核心。给每个写一张画像卡。",
      tip: "Tip: 画像卡先草稿, 越具体越好。",
      color: theme.accent
    },
    {
      num: "3",
      kicker: "下周",
      title: "完成一个破局动作",
      desc: "从四步判断里挑 1~2 个杠杆点, 完成第一个具体沟通——不是\"加强沟通\", 而是约一次具体的对话。",
      tip: "Tip: 第一步要小, 小到不会失败。",
      color: theme.primary
    }
  ];
  const startX = 0.5;
  const startY = 1.65;
  const cardW = 2.95;
  const cardH = 3.25;
  const gap = 0.13;
  actions.forEach(function (a, i) {
    const x = startX + i * (cardW + gap);
    // 主卡片
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
    });
    // 顶部色块
    slide.addShape("rect", {
      x: x, y: startY, w: cardW, h: 0.6,
      fill: { color: a.color }, line: { color: a.color, width: 0 }
    });
    // 大数字
    slide.addText(a.num, {
      x: x + 0.15, y: startY + 0.05, w: 0.6, h: 0.5,
      fontSize: 36, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "left", valign: "middle"
    });
    // kicker 时间
    slide.addText(a.kicker, {
      x: x + 0.85, y: startY + 0.15, w: cardW - 1.0, h: 0.3,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.light, bold: false, align: "left", valign: "middle", charSpacing: 3
    });
    // 标题
    slide.addText(a.title, {
      x: x + 0.2, y: startY + 0.75, w: cardW - 0.4, h: 0.5,
      fontSize: 16, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });
    // 装饰小条
    slide.addShape("rect", {
      x: x + 0.2, y: startY + 1.3, w: 0.4, h: 0.03,
      fill: { color: a.color }, line: { color: a.color, width: 0 }
    });
    // 描述
    slide.addText(a.desc, {
      x: x + 0.2, y: startY + 1.45, w: cardW - 0.4, h: 1.3,
      fontSize: 11, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "top", lineSpacing: 18
    });
    // 底部 tip
    slide.addShape("rect", {
      x: x, y: startY + cardH - 0.45, w: cardW, h: 0.45,
      fill: { color: theme.highlight }, line: { color: theme.highlight, width: 0 }
    });
    slide.addText(a.tip, {
      x: x + 0.2, y: startY + cardH - 0.45, w: cardW - 0.4, h: 0.45,
      fontSize: 9, fontFace: FONT_CN,
      color: theme.dark, italic: false, align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("分析是一次完成的, 管理是持续进行的。", {
    x: 0.5, y: 5.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle", charSpacing: 3
  });

  // 底部品牌条
  slide.addShape("line", {
    x: 0.4, y: 5.4, w: 9.2, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("利益相关方深度实战  ·  授课PPT", {
    x: 0.4, y: 5.43, w: 6, h: 0.2,
    fontSize: 8, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle"
  });
  slide.addText("169 / 170", {
    x: 8.0, y: 5.43, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN,
    color: theme.mid, align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
