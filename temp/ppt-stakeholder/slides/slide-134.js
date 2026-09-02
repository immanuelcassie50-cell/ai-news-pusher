// slide-134.js - 第二步：我需要什么
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 05  /  需求映射", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  // 步骤标
  slide.addText("STEP  02", {
    x: 0.5, y: 0.65, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_EN,
    color: theme.accent, bold: true, align: "left", valign: "middle",
    charSpacing: 6
  });
  // 标题
  slide.addText("逐人分析：我要他给什么", {
    x: 0.5, y: 0.95, w: 9, h: 0.7,
    fontSize: 30, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("需求映射的第一张表 ——「我需要」", {
    x: 0.5, y: 1.65, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.secondary, italic: true, align: "left", valign: "middle"
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.0, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 三个问题卡片
  const questions = [
    {
      num: "01",
      title: "资源",
      q: "我需要他提供什么资源？",
      tip: "预算、人力、技术能力、数据访问权限、渠道关系等",
      key: "要具体 —— 不是「支持」，而是「在 X 月前批准 Y 万元预算」"
    },
    {
      num: "02",
      title: "行为",
      q: "我需要他做出什么行为？",
      tip: "审批签字、关键会议发言背书、停止消极沟通、配合某流程、主动推进子任务等",
      key: "要具体 —— 不是「配合推进」，而是「第 X 周完成门店端数据接口配置」"
    },
    {
      num: "03",
      title: "层级",
      q: "我需要他达到什么支持层级？",
      tip: "对不同人有不同的「最低需求层级」，不必追求所有人都到 A1",
      key: "B1 变 A3 就够 / 必须 A1 / 维持现状 —— 分类处理"
    }
  ];

  questions.forEach(function (q, i) {
    const y = 2.25 + i * 0.95;
    // 数字圆形
    slide.addShape("ellipse", {
      x: 0.5, y: y, w: 0.7, h: 0.7,
      fill: { color: theme.primary },
      line: { color: theme.primary, width: 0 }
    });
    slide.addText(q.num, {
      x: 0.5, y: y, w: 0.7, h: 0.7,
      fontSize: 18, fontFace: FONT_EN,
      color: theme.white, bold: true, align: "center", valign: "middle"
    });
    // 标题
    slide.addText(q.title, {
      x: 1.4, y: y - 0.05, w: 1.5, h: 0.3,
      fontSize: 14, fontFace: FONT_CN,
      color: theme.accent, bold: true, align: "left", valign: "middle"
    });
    slide.addText(q.q, {
      x: 1.4, y: y + 0.22, w: 8, h: 0.3,
      fontSize: 13, fontFace: FONT_CN,
      color: theme.primary, bold: true, align: "left", valign: "middle"
    });
    // 说明
    slide.addText(q.tip, {
      x: 1.4, y: y + 0.5, w: 8, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.secondary, align: "left", valign: "middle"
    });
    // 关键提示
    slide.addShape("rect", {
      x: 1.4, y: y + 0.78, w: 8.1, h: 0.16,
      fill: { color: theme.highlight },
      line: { color: theme.highlight, width: 0 }
    });
    slide.addText("提示：" + q.key, {
      x: 1.5, y: y + 0.65, w: 8, h: 0.3,
      fontSize: 10, fontFace: FONT_CN,
      color: theme.dark, italic: true, align: "left", valign: "middle"
    });
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
