// slide-126.js - The Judgment Operating System
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "1a1a2e",
  secondary: "8d99ae",
  accent: "e94560",
  light: "f2e9e4",
  bg: "fafafa"
};
const slideConfig = { type: `content`, index: 126, title: `判断力操作系统` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  // Title
  slide.addText(`判断力操作系统`, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 28, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  // Subtitle
  slide.addText(`这不仅仅是一门课，这是一套操作系统`, { x: 0.5, y: 0.85, w: 9, h: 0.4, fontSize: 16, fontFace: `Microsoft YaHei`, color: theme.accent, bold: true });
  // Three layers of OS - visual stack
  const layerY = [1.5, 2.8, 4.1];
  const layerH = 1.1;
  const layerLabels = [
    { title: `上层：实践系统`, items: [`场景卡`, `协作方案`, "30天行动计划"], color: theme.accent },
    { title: `中层：判断工具`, items: [`判断力坐标系`, `判断力地图`, "F1-F10表单"], color: theme.secondary },
    { title: `底层：认知框架`, items: [`AI能做什么`, `人必须做什么`, "四大边界"], color: theme.primary }
  ];
  layerLabels.forEach((layer, i) => {
    // Layer box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: layerY[i], w: 4.5, h: layerH, fill: { color: layer.color, transparency: 10 }, rectRadius: 0.08 });
    // Layer title
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: layerY[i] + 0.1, w: 2.2, h: 0.35, fill: { color: layer.color }, rectRadius: 0.1 });
    slide.addText(layer.title.split(`：`)[1], { x: 0.6, y: layerY[i] + 0.1, w: 2.2, h: 0.35, fontSize: 13, fontFace: `Microsoft YaHei`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
    // Items
    layer.items.forEach((item, j) => {
      slide.addShape(pres.shapes.OVAL, { x: 0.8 + j * 1.5, y: layerY[i] + 0.6, w: 0.08, h: 0.08, fill: { color: layer.color } });
      slide.addText(item, { x: 0.95 + j * 1.5, y: layerY[i] + 0.52, w: 1.3, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary });
    });
  });
  // Connection lines between layers
  slide.addShape(pres.shapes.LINE, { x: 2.75, y: layerY[0] + layerH, w: 0, h: 0.2, line: { color: theme.secondary, width: 1.5 } });
  slide.addShape(pres.shapes.LINE, { x: 2.75, y: layerY[1] + layerH, w: 0, h: 0.2, line: { color: theme.secondary, width: 1.5 } });
  // Right side - OS diagram illustration
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.5, y: 1.4, w: 4, h: 3.5, fill: { color: theme.light }, rectRadius: 0.12 });
  slide.addText(`操作系统架构`, { x: 5.5, y: 1.5, w: 4, h: 0.4, fontSize: 14, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true, align: `center` });
  // CPU icon (top)
  slide.addShape(pres.shapes.RECTANGLE, { x: 6.7, y: 2.0, w: 1.6, h: 0.6, fill: { color: theme.primary } });
  slide.addText(`CPU`, { x: 6.7, y: 2.0, w: 1.6, h: 0.6, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  // Arrow down
  slide.addText(`↓`, { x: 6.7, y: 2.6, w: 1.6, h: 0.3, fontSize: 16, fontFace: `Arial`, color: theme.accent, align: `center` });
  // Memory layer
  slide.addShape(pres.shapes.RECTANGLE, { x: 6.7, y: 2.9, w: 1.6, h: 0.5, fill: { color: theme.secondary } });
  slide.addText(`Memory`, { x: 6.7, y: 2.9, w: 1.6, h: 0.5, fontSize: 11, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  // Arrow down
  slide.addText(`↓`, { x: 6.7, y: 3.4, w: 1.6, h: 0.3, fontSize: 16, fontFace: `Arial`, color: theme.accent, align: `center` });
  // Apps layer
  slide.addShape(pres.shapes.RECTANGLE, { x: 6.7, y: 3.7, w: 1.6, h: 0.5, fill: { color: theme.accent } });
  slide.addText(`Apps`, { x: 6.7, y: 3.7, w: 1.6, h: 0.5, fontSize: 11, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  // Labels on right
  slide.addText(`认知框架`, { x: 8.5, y: 2.0, w: 1.0, h: 0.6, fontSize: 10, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `left`, valign: `middle` });
  slide.addText(`判断工具`, { x: 8.5, y: 2.9, w: 1.0, h: 0.5, fontSize: 10, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `left`, valign: `middle` });
  slide.addText(`实践系统`, { x: 8.5, y: 3.7, w: 1.0, h: 0.5, fontSize: 10, fontFace: `Microsoft YaHei`, color: theme.secondary, align: `left`, valign: `middle` });
  // Page number
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(`126`, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 12, fontFace: `Arial`, color: `FFFFFF`, bold: true, align: `center`, valign: `middle` });
  return slide;
}
module.exports = { createSlide, slideConfig };
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-126-preview.pptx` }).then(() => console.log(`Created slide-126-preview.pptx`));
}