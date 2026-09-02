// slide-58.js - Signals of national strategic shift (判断国家战略转向的信号)
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 58,
  title: '判断国家战略转向的信号'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("判断国家战略转向的信号", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText('从"海权论"到"重返亚太"：美国战略重心转移的五大征兆', {
    x: 0.5, y: 1.05, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Two columns: Historical case and Framework
  // Left: Historical case study
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 4.4, h: 3.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 4.4, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText('案例：美国"重返亚太" (2011-2012)', {
    x: 0.6, y: 1.6, w: 4.2, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  const historicalSignals = [
    { year: "2011", event: '奥巴马宣布"亚太再平衡"战略' },
    { year: "2012", event: "美军60%海军力量部署太平洋" },
    { year: "2012", event: "加强与日本、韩国、澳大利亚同盟" },
    { year: "2013", event: "推动TPP区域贸易协议" }
  ];

  historicalSignals.forEach((sig, idx) => {
    const y = 2.2 + idx * 0.65;

    slide.addShape("rect", {
      x: 0.7, y: y + 0.08, w: 0.6, h: 0.35,
      fill: { color: theme.accent }
    });
    slide.addText(sig.year, {
      x: 0.7, y: y + 0.08, w: 0.6, h: 0.35,
      fontSize: 10, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(sig.event, {
      x: 1.4, y: y, w: 3.3, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Right: General framework
  slide.addShape("rect", {
    x: 5.1, y: 1.55, w: 4.4, h: 3.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addShape("rect", {
    x: 5.1, y: 1.55, w: 4.4, h: 0.5,
    fill: { color: theme.secondary }
  });
  slide.addText("战略转向的五大信号", {
    x: 5.2, y: 1.6, w: 4.2, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  const signals = [
    { icon: "①", text: "军事部署调整：兵力重新配置到新区域" },
    { icon: "②", text: "外交资源倾斜：高层访问重点转向" },
    { icon: "③", text: "经济政策配合：贸易协定、制裁名单更新" },
    { icon: "④", text: "盟友体系联动：同盟国军事合作加强" },
    { icon: "⑤", text: "话语体系转变：官方文件、领导人讲话用词变化" }
  ];

  signals.forEach((sig, idx) => {
    const y = 2.2 + idx * 0.55;
    slide.addText(sig.icon, {
      x: 5.25, y: y, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "left", valign: "middle"
    });
    slide.addText(sig.text, {
      x: 5.65, y: y, w: 3.7, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: theme.light, transparency: 50 }
  });
  slide.addText("关键洞察：战略转向通常是渐进过程，信号分散在军事、外交、经济、话语多个层面", {
    x: 0.7, y: 5.05, w: 8.6, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge
  slide.addShape("roundRect", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("58", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/slides/slide-58-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
