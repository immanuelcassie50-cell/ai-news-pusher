const theme = {
  primary: "8B2942",
  secondary: "4A4A4A",
  accent: "C75B5B",
  light: "E8D5D5",
  bg: "FAFAFA"
};

const slideConfig = {
  title: "你脑子里真正有的东西",
  pageNumber: "06"
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left decorative accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("你脑子里真正有的东西", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Case study quote box with light background
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 3.4,
    fill: { color: theme.light }
  });

  // Quote text - case study excerpt
  slide.addText("\"那天客户接电话，一上来语气就不对。我第一反应是想跟他解释今天大盘的情况，但我忍住了——因为我听到他中间有一句'你们当时说这个稳的'，这个措辞不是真的在问问题，他是在发泄。我就让他先说，等他说完大概一分半钟，语速慢下来了，我才开口...\"", {
    x: 0.8, y: 1.4, w: 8.4, h: 3,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top",
    lineSpaceMult: 1.5
  });

  // Bottom insight bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.8, w: 9, h: 0.6,
    fill: { color: theme.accent }
  });

  slide.addText("这段话里有判断逻辑、有具体行为、有取舍——这才是有价值的服务逻辑", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle",
    align: "center"
  });

  // Page number
  slide.addText("06", {
    x: 9.2, y: 5.1, w: 0.6, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, align: "right"
  });
}

module.exports = { createSlide, slideConfig };