// slide-053.js - 受损方：叶云三个发现
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 02  ·  全景扫描  ·  维度五示范", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  slide.addText("叶云的三个发现", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("⚡ 这个维度是叶云花时间最多的地方，也是她和方成最大的分析差距", {
    x: 0.5, y: 1.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 2
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 三个发现 - 横向卡片
  const discoveries = [
    {
      n: "01",
      who: "老店长孙伟",
      surf: "表面说不配合",
      truth: "深层顾虑：门店历史数据有「操作弹性」，新系统统一校验会让数字「异常」，可能触发审计",
      insight: "真正阻力不是「抵制技术」，是数据暴露的恐惧"
    },
    {
      n: "02",
      who: "各区门店统计员群体",
      surf: "不主动配合",
      truth: "核心工作价值是每月整理和清洗门店数据；新系统自动化后，这部分工作价值归零，岗位感受到威胁",
      insight: "工作价值被系统替代，岗位存在感被削弱"
    },
    {
      n: "03",
      who: "历史数据格式制定老员工",
      surf: "情绪上有抵触",
      truth: "他花了两年设计的报表体系被新系统完全替代，过去的努力变得「多余」",
      insight: "历史努力被「架空」是更深层的失落"
    }
  ];

  const cardH = 1.1;
  const startY = 1.7;
  const gapY = 0.12;
  discoveries.forEach(function (d, i) {
    const y = startY + i * (cardH + gapY);
    // 卡片
    slide.addShape("rect", {
      x: 0.5, y: y, w: 9, h: cardH,
      fill: { color: theme.white },
      line: { color: theme.border, width: 0.5 }
    });
    // 编号区
    slide.addShape("rect", {
      x: 0.5, y: y, w: 0.8, h: cardH,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    slide.addText(d.n, {
      x: 0.5, y: y, w: 0.8, h: cardH,
      fontSize: 24, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 人物
    slide.addText(d.who, {
      x: 1.45, y: y + 0.08, w: 2.2, h: 0.3,
      fontSize: 13, fontFace: FONT_CN,
      color: theme.dark, bold: true, align: "left", valign: "top"
    });
    // 表面
    slide.addText("表面：" + d.surf, {
      x: 1.45, y: y + 0.4, w: 2.2, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.mid, align: "left", valign: "top"
    });
    // 洞察
    slide.addText("✦ " + d.insight, {
      x: 1.45, y: y + 0.7, w: 2.2, h: 0.35,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.accent, bold: true, align: "left", valign: "top"
    });
    // 真实
    slide.addText("真实顾虑", {
      x: 3.8, y: y + 0.08, w: 5.5, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.mid, align: "left", valign: "top"
    });
    slide.addText(d.truth, {
      x: 3.8, y: y + 0.38, w: 5.5, h: cardH - 0.4,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.dark, align: "left", valign: "top",
      lineSpacing: 14
    });
  });

  // 底部金句
  slide.addText("找到「为什么不配合」的真正原因，策略才有针对性", {
    x: 0.5, y: 5.05, w: 9, h: 0.25,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // 底部品牌
  slide.addShape("line", {
    x: 0.4, y: 5.35, w: 9.2, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("利益相关方深度实战 · 授课PPT", {
    x: 0.4, y: 5.4, w: 6, h: 0.2,
    fontSize: 8, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle"
  });
  slide.addText(String(pageNum).padStart(2, '0') + " / " + String(totalPages).padStart(3, '0'), {
    x: 8.0, y: 5.4, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN,
    color: theme.mid, align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
