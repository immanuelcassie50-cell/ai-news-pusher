// slide-034.js - 开场：聪明人为何漏人
const FONT_CN = "Microsoft YaHei";
const FONT_EN = "Arial";

function createSlide(pres, theme, pageNum, totalPages) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部色带 + 左侧部分标识
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.12,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("PART 02  ·  全景扫描", {
    x: 0.4, y: 0.22, w: 4, h: 0.32,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 4
  });

  // 大标题
  slide.addText("聪明人，为何漏掉关键人？", {
    x: 0.5, y: 0.5, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("方成复盘时反复提到的那个人——管理着华南区20家重点门店数据接口的中层员工", {
    x: 0.5, y: 1.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.mid, align: "left", valign: "middle",
    charSpacing: 2
  });
  // 标题下装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 0.6, h: 0.04,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // 引述块
  slide.addShape("rect", {
    x: 0.6, y: 1.7, w: 8.8, h: 1.3,
    fill: { color: theme.highlight },
    line: { color: theme.highlight, width: 0 }
  });
  slide.addShape("rect", {
    x: 0.6, y: 1.7, w: 0.08, h: 1.3,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText('"', {
    x: 0.8, y: 1.75, w: 0.6, h: 0.7,
    fontSize: 56, fontFace: "Georgia",
    color: theme.light, bold: true, align: "left", valign: "top"
  });
  slide.addText("那个人和我的项目有什么关系？我根本没有理由想到他。", {
    x: 1.3, y: 1.85, w: 7.9, h: 1.0,
    fontSize: 14, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "middle",
    lineSpacing: 22
  });
  slide.addText("—— 方成", {
    x: 1.3, y: 2.65, w: 7.9, h: 0.3,
    fontSize: 10, fontFace: FONT_CN,
    color: theme.mid, align: "right", valign: "middle"
  });

  // 核心洞察卡片
  slide.addShape("rect", {
    x: 0.6, y: 3.3, w: 4.3, h: 1.85,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.6, y: 3.3, w: 0.1, h: 1.85,
    fill: { color: theme.primary },
    line: { color: theme.primary, width: 0 }
  });
  slide.addText("最普遍的陷阱", {
    x: 0.85, y: 3.4, w: 4, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addText("我们只会想到「应该有关系的人」，却漏掉了「实际上有关系的人」。", {
    x: 0.85, y: 3.75, w: 3.95, h: 0.8,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "top",
    lineSpacing: 18
  });
  slide.addText("这两类人之间，有时候差距很大。", {
    x: 0.85, y: 4.6, w: 3.95, h: 0.5,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "top"
  });

  // 经验悖论卡片
  slide.addShape("rect", {
    x: 5.1, y: 3.3, w: 4.3, h: 1.85,
    fill: { color: theme.white },
    line: { color: theme.border, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 3.3, w: 0.1, h: 1.85,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("经验悖论", {
    x: 5.35, y: 3.4, w: 4, h: 0.3,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addText("越有项目经验的人，越容易犯这个错误——经验积累了一套「谁该算进来」的直觉模式。", {
    x: 5.35, y: 3.75, w: 3.95, h: 0.85,
    fontSize: 12, fontFace: FONT_CN,
    color: theme.dark, align: "left", valign: "top",
    lineSpacing: 18
  });
  slide.addText("这套模式会过滤掉非标准的、「不按常理出牌」的关键角色。", {
    x: 5.35, y: 4.65, w: 3.95, h: 0.5,
    fontSize: 11, fontFace: FONT_CN,
    color: theme.secondary, align: "left", valign: "top"
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
