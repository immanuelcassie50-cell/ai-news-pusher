const { pptxgen } = require("pptxgenjs");

module.exports = {
  createSlide: (pres) => {
    const slide = pres.addSlide();
    const theme = {
      primary: "22223b",
      secondary: "c94134",
      accent: "c9ada7",
      light: "f5f5f5",
      bg: "fafafa"
    };

    slide.background = { color: theme.bg };

    // Page badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 9.3, y: 5.1, w: 0.5, h: 0.35,
      fill: { color: theme.secondary },
      rectRadius: 0.08
    });
    slide.addText("13", {
      x: 9.3, y: 5.1, w: 0.5, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle",
      margin: 0
    });

    // Header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0, y: 0, w: 10, h: 0.9,
      fill: { color: theme.primary }
    });

    slide.addText("三版话术对比", {
      x: 0.5, y: 0.2, w: 9, h: 0.5,
      fontSize: 26, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      margin: 0
    });

    // Table header
    const headers = ["", "Version A", "Version B", "Version C"];
    const colWidths = [2.0, 2.2, 2.2, 2.2];
    let xPos = 0.8;

    headers.forEach((header, i) => {
      if (i === 0) {
        slide.addText(header, {
          x: xPos, y: 1.15, w: colWidths[i], h: 0.5,
          fontSize: 14, fontFace: "Microsoft YaHei",
          color: theme.primary, bold: true,
          margin: 0
        });
      } else {
        slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
          x: xPos, y: 1.15, w: colWidths[i], h: 0.5,
          fill: { color: i === 3 ? theme.secondary : theme.light },
          rectRadius: 0.08
        });
        slide.addText(header, {
          x: xPos, y: 1.15, w: colWidths[i], h: 0.5,
          fontSize: 14, fontFace: "Arial",
          color: i === 3 ? "ffffff" : theme.primary, bold: true,
          align: "center", valign: "middle",
          margin: 0
        });
      }
      xPos += colWidths[i] + 0.15;
    });

    // Table rows
    const rows = [
      { criteria: "情绪接住", values: ["✗", "△", "✓"] },
      { criteria: "主动性", values: ["△", "△", "✓"] },
      { criteria: "让客户先说", values: ["✗", "✓", "✓"] }
    ];

    rows.forEach((row, ri) => {
      const y = 1.85 + ri * 0.9;
      let x = 0.8;

      // Criteria label
      slide.addText(row.criteria, {
        x: x, y: y, w: 2.0, h: 0.7,
        fontSize: 14, fontFace: "Microsoft YaHei",
        color: theme.primary, bold: true,
        valign: "middle",
        margin: 0
      });

      x += 2.0 + 0.15;

      row.values.forEach((val, vi) => {
        const cellColor = vi === 2 ? theme.secondary : "ffffff";
        const textColor = vi === 2 ? "ffffff" : theme.primary;

        slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
          x: x, y: y, w: 2.2, h: 0.7,
          fill: { color: cellColor, transparency: vi === 2 ? 0 : 92 },
          line: { color: theme.light, width: 1 },
          rectRadius: 0.08
        });

        slide.addText(val, {
          x: x, y: y, w: 2.2, h: 0.7,
          fontSize: 18, fontFace: "Arial",
          color: textColor, bold: true,
          align: "center", valign: "middle",
          margin: 0
        });

        x += 2.2 + 0.15;
      });
    });

    // Conclusion
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.8, y: 4.55, w: 8.4, h: 0.7,
      fill: { color: theme.secondary },
      rectRadius: 0.1
    });

    slide.addText("结论：版本C明显最好——三层信息同时到位", {
      x: 0.8, y: 4.55, w: 8.4, h: 0.7,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center", valign: "middle",
      margin: 0
    });
  },

  slideConfig: {
    title: "三版话术对比",
    layout: "LAYOUT_16x9",
    notes: ""
  }
};