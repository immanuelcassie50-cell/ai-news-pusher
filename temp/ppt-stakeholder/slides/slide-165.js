// slide-165.js - 全程知识框架总结
// 六个部分用层级图（树形/嵌套结构），用色块区分
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

  // 顶部部分标识
  slide.addText("FINAL  /  总结收尾  ·  知识地图", {
    x: 0.4, y: 0.22, w: 6, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle", charSpacing: 4
  });
  slide.addText("06 / 06", {
    x: 8.0, y: 0.22, w: 1.6, h: 0.32,
    fontSize: 10, fontFace: FONT_EN,
    color: theme.primary, bold: true, align: "right", valign: "middle"
  });

  // 大标题
  slide.addText("全程知识框架", {
    x: 0.5, y: 0.55, w: 9, h: 0.5,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("六部分  ·  一张从\"看见\"到\"破局\"的完整地图", {
    x: 0.5, y: 1.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle", charSpacing: 2
  });
  // 标题下装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 0.6, h: 0.04,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });

  // 树形结构主干：根节点
  slide.addShape("rect", {
    x: 0.5, y: 1.6, w: 9, h: 0.45,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("利益相关方深度分析完整框架   方案质量  ×  对人的格局理解", {
    x: 0.5, y: 1.6, w: 9, h: 0.45,
    fontSize: 13, fontFace: FONT_CN,
    color: theme.white, bold: true, align: "center", valign: "middle", charSpacing: 2
  });

  // 六个部分的色块位置
  // 两行三列布局
  const parts = [
    { num: "01", title: "认知激活", sub: "看见盲区", x: 0.5, y: 2.25, color: theme.primary },
    { num: "02", title: "全景扫描", sub: "六维穷举", x: 3.65, y: 2.25, color: theme.accent },
    { num: "03", title: "深度画像", sub: "五维分析", x: 6.8, y: 2.25, color: theme.primary },
    { num: "04", title: "三阶九梯", sub: "精准定位", x: 0.5, y: 3.7, color: theme.accent },
    { num: "05", title: "需求映射", sub: "价值交换", x: 3.65, y: 3.7, color: theme.primary },
    { num: "06", title: "破局策略", sub: "杠杆与执行", x: 6.8, y: 3.7, color: theme.accent }
  ];

  // 从主干向各部分画连接线
  // 第一行三个
  slide.addShape("line", { x: 1.65, y: 2.05, w: 0, h: 0.2, line: { color: theme.border, width: 0.5 } });
  slide.addShape("line", { x: 4.8, y: 2.05, w: 0, h: 0.2, line: { color: theme.border, width: 0.5 } });
  slide.addShape("line", { x: 7.95, y: 2.05, w: 0, h: 0.2, line: { color: theme.border, width: 0.5 } });
  // 第二行三个
  slide.addShape("line", { x: 1.65, y: 2.05, w: 0, h: 1.65, line: { color: theme.border, width: 0.5 } });
  slide.addShape("line", { x: 4.8, y: 2.05, w: 0, h: 1.65, line: { color: theme.border, width: 0.5 } });
  slide.addShape("line", { x: 7.95, y: 2.05, w: 0, h: 1.65, line: { color: theme.border, width: 0.5 } });

  // 横向连接线
  slide.addShape("line", { x: 1.65, y: 3.5, w: 6.3, h: 0, line: { color: theme.border, width: 0.5 } });

  // 渲染六个部分色块
  parts.forEach(function (p) {
    // 色块头（圆角用rect代替）
    slide.addShape("rect", {
      x: p.x, y: p.y, w: 2.7, h: 0.35,
      fill: { color: p.color }, line: { color: p.color, width: 0 }
    });
    slide.addText("PART " + p.num + "  ·  " + p.title, {
      x: p.x, y: p.y, w: 2.7, h: 0.35,
      fontSize: 12, fontFace: FONT_CN,
      color: theme.white, bold: true, align: "center", valign: "middle", charSpacing: 2
    });
    // 主体内容框
    slide.addShape("rect", {
      x: p.x, y: p.y + 0.35, w: 2.7, h: 1.1,
      fill: { color: theme.white }, line: { color: theme.border, width: 0.5 }
    });
    // 子标题
    slide.addText(p.sub, {
      x: p.x + 0.1, y: p.y + 0.4, w: 2.5, h: 0.25,
      fontSize: 11, fontFace: FONT_CN,
      color: p.color, bold: true, align: "left", valign: "middle"
    });
    // 分割线
    slide.addShape("rect", {
      x: p.x + 0.1, y: p.y + 0.7, w: 0.4, h: 0.02,
      fill: { color: theme.border }, line: { color: theme.border, width: 0 }
    });
    // 关键产出
    var deliver = "";
    if (p.num === "01") deliver = "乘法关系\n看不见的地图\n直觉盲区自测";
    else if (p.num === "02") deliver = "六维扫描\n权力-利益矩阵\n6~8人核心清单";
    else if (p.num === "03") deliver = "基本定位/岗位利益\n个人诉求/态度预判\n沟通协作要点";
    else if (p.num === "04") deliver = "A1-A2-A3 / B1-B2-B3\nC1-C2-C3\n看行为/交叉验证";
    else if (p.num === "05") deliver = "我需要什么\n我能给什么\n价值交换非说服";
    else if (p.num === "06") deliver = "三原则/四步法\n联盟路径\n动态管理持续";
    slide.addText(deliver, {
      x: p.x + 0.1, y: p.y + 0.75, w: 2.5, h: 0.65,
      fontSize: 8.5, fontFace: FONT_CN,
      color: theme.dark, align: "left", valign: "top", lineSpacing: 12
    });
  });

  // 底部收口金句
  slide.addShape("rect", {
    x: 0.5, y: 4.95, w: 9, h: 0.32,
    fill: { color: theme.highlight }, line: { color: theme.highlight, width: 0 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.95, w: 0.08, h: 0.32,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("看见，是找到破局口的第一步。  你现在手里有地图了。", {
    x: 0.7, y: 4.95, w: 8.7, h: 0.32,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, italic: false, align: "left", valign: "middle"
  });

  // 底部品牌条
  slide.addShape("line", {
    x: 0.4, y: 5.35, w: 9.2, h: 0,
    line: { color: theme.border, width: 0.5 }
  });
  slide.addText("利益相关方深度实战  ·  授课PPT", {
    x: 0.4, y: 5.4, w: 6, h: 0.2,
    fontSize: 8, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle"
  });
  slide.addText("165 / 170", {
    x: 8.0, y: 5.4, w: 1.6, h: 0.2,
    fontSize: 8, fontFace: FONT_EN,
    color: theme.mid, align: "right", valign: "middle"
  });
}

module.exports = { createSlide };
