// slide-79.js - Leave Room for Challenge: 主动留被追问空间
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'content', index: 79, title: '主动留被追问空间' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.8,
    fill: { color: theme.primary }
  });
  slide.addText("主动留被追问空间", {
    x: 0.5, y: 0.15, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("不只讲结果好，把判断错的地方、犹豫过的地方、没考虑周全后来补救的地方一起讲", {
    x: 0.5, y: 0.9, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  const methods = [
    {
      num: "1",
      text: "讲判断错的地方：当时哪个地方看错了，后来怎么发现的"
    },
    {
      num: "2",
      text: "讲犹豫过的地方：当时在几个选项之间纠结的是什么，现在看哪个判断变了"
    },
    {
      num: "3",
      text: "讲没考虑周全的地方：后来补救的措施是什么，怎么补上的"
    },
    {
      num: "4",
      text: "甚至主动讲一些当时没做好的地方，主动留破绽"
    }
  ];

  methods.forEach((item, idx) => {
    const y = 1.4 + idx * 0.85;

    // Card background
    slide.addShape("roundRect", {
      x: 0.5, y: y, w: 9, h: 0.75,
      fill: { color: "FFFFFF" },
      rectRadius: 0.1,
      shadow: { type: `outer`, color: `000000`, blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Number circle
    slide.addShape("ellipse", {
      x: 0.7, y: y + 0.17, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(item.num, {
      x: 0.7, y: y + 0.17, w: 0.4, h: 0.4,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: `center`, valign: `middle`
    });

    // Text
    slide.addText(item.text, {
      x: 1.3, y: y, w: 8.0, h: 0.75,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });
  });

  // Invitation phrase box
  slide.addShape("roundRect", {
    x: 0.5, y: 4.85, w: 9, h: 0.6,
    fill: { color: theme.secondary },
    rectRadius: 0.08
  });
  slide.addText("\"您可以随便问，这个案例里但凡有说不通的地方，您尽管指出来\', {
    x: 0.5, y: 4.85, w: 9, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", italic: true,
    align: `center`, valign: `middle`
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("79", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-79-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
