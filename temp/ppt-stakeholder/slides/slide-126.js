// slide-126.js - 第四部分小结
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
  slide.addText("PART 04 · 小结", {
    x: 0.4, y: 0.22, w: 5, h: 0.32,
    fontSize: 10, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 4
  });

  // 大标题
  slide.addText("第四部分小结", {
    x: 0.5, y: 0.6, w: 9, h: 0.7,
    fontSize: 32, fontFace: FONT_CN, color: theme.primary,
    bold: true, align: "left", valign: "middle"
  });
  slide.addText("三阶九梯定位 —— 核心收获", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 13, fontFace: FONT_CN, color: theme.mid,
    align: "left", valign: "middle", charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.65, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 核心收获卡片
  const items = [
    {
      icon: "1", title: "定位是行为的判断，不是表态的判断",
      detail: "说「支持」未必支持，那张「支持的举手」可能是 A3 不是 A2。判断依据是他做了什么，不是什么"
    },
    {
      icon: "2", title: "三个原则是定位的护栏",
      detail: "看行为不看表态；定的是当前状态不是永久标签；用画像交叉验证而非凭直觉"
    },
    {
      icon: "3", title: "九梯对应九种不同的策略",
      detail: "A1 充分授权；A2 持续管理；A3 设计价值介入；B1 引起注意；B2 转化性价比最高；B3 找背后原因"
    },
    {
      icon: "4", title: "分布图 = 整体格局",
      detail: "看 A / B / C 阵营的厚度，看清关键节点和真正卡点，定位之后你拥有一张「人的地图」"
    }
  ];

  items.forEach(function (it, i) {
    const y = 1.9 + i * 0.65;
    // 数字
    slide.addShape("ellipse", {
      x: 0.5, y: y, w: 0.5, h: 0.5,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(it.icon, {
      x: 0.5, y: y, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: FONT_EN, color: theme.white,
      bold: true, align: "center", valign: "middle"
    });
    // 标题
    slide.addText(it.title, {
      x: 1.15, y: y, w: 8.3, h: 0.3,
      fontSize: 13, fontFace: FONT_CN, color: theme.dark,
      bold: true, align: "left", valign: "middle"
    });
    // 描述
    slide.addText(it.detail, {
      x: 1.15, y: y + 0.28, w: 8.3, h: 0.3,
      fontSize: 10, fontFace: FONT_CN, color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // 底部金句
  slide.addText("→ 翻到第五部分，开始需求映射", {
    x: 0.5, y: 4.95, w: 9, h: 0.4,
    fontSize: 14, fontFace: FONT_CN, color: theme.primary,
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
