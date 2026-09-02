// slide-123.js - 分布图填写方法
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
  slide.addText("PART 04 · 分布图填写", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 标题
  slide.addText("分布图填写方法", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("正确填写才能产生洞察 —— 不是数字游戏，是视角校准", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 四步骤
  const steps = [
    {
      n: "01", title: "列出核心人物", desc: "从第二/三部分筛选出的 6-8 人，每个人物对应一个格子"
    },
    {
      n: "02", title: "对照定位结果", desc: "把三阶九梯定位结果直接落到对应格子，写姓名或简称"
    },
    {
      n: "03", title: "留白未定位的人", desc: "如果某个人你还没足够信息定位，先空着，标注「待观察」"
    },
    {
      n: "04", title: "看整体而非个体", desc: "不要被单个定位干扰，先看整张图呈现的整体格局"
    }
  ];

  steps.forEach(function (s, i) {
    const x = 0.5 + i * 2.3;
    slide.addShape("rect", {
      x: x, y: 1.85, w: 2.15, h: 2.7,
      fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
    });
    // 编号
    slide.addShape("rect", {
      x: x, y: 1.85, w: 2.15, h: 0.55,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(s.n, {
      x: x, y: 1.85, w: 2.15, h: 0.55,
      fontSize: 22, fontFace: FONT_EN, color: theme.white,
      bold: true, align: "center", valign: "middle"
    });
    slide.addText(s.title, {
      x: x + 0.15, y: 2.5, w: 1.85, h: 0.5,
      fontSize: 13, fontFace: FONT_CN, color: theme.dark,
      bold: true, align: "left", valign: "middle"
    });
    slide.addShape("line", {
      x: x + 0.15, y: 3.0, w: 1.85, h: 0,
      line: { color: theme.border, width: 0.5 }
    });
    slide.addText(s.desc, {
      x: x + 0.15, y: 3.1, w: 1.85, h: 1.4,
      fontSize: 10, fontFace: FONT_CN, color: theme.secondary,
      align: "left", valign: "top", lineSpacing: 14
    });
  });

  // 底部常见错误对比
  slide.addShape("rect", {
    x: 0.5, y: 4.7, w: 9, h: 0.45,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("避免：凭感觉填「A2」让自己好受 / 把所有人堆在 B 阶 / 用初始直觉代替行为证据", {
    x: 0.5, y: 4.7, w: 9, h: 0.45,
    fontSize: 11, fontFace: FONT_CN, color: theme.white,
    bold: true, align: "center", valign: "middle"
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
