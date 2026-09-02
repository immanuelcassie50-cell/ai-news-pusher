// slide-37.js - 信任账户模型
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("工具二：个人信任账户", {
    x: 0.5, y: 0.3, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
  });

  slide.addText("每个人心里都有一个账户，存的不是钱，是信任余额", {
    x: 0.5, y: 0.8, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
  });

  // 存款列
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.4, w: 4.3, h: 3.0,
    fill: { color: theme.secondary },
  });

  slide.addText("存款 +", {
    x: 0.5, y: 1.5, w: 4.3, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center",
  });

  const creditItems = [
    "讲清事实和利益关系",
    "不确定时敢说我不知道",
    "承诺之前克制，承诺之后兑现",
    "出错后先承认影响再解释背景",
    "用长期稳定的行为证明价值观",
  ];

  creditItems.forEach(function(item, i) {
    slide.addText("+ " + item, {
      x: 0.7, y: 2.1 + i * 0.45, w: 3.9, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
    });
  });

  // 取款列
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.4, w: 4.3, h: 3.0,
    fill: { color: theme.accent },
  });

  slide.addText("取款 -", {
    x: 5.2, y: 1.5, w: 4.3, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center",
  });

  const debitItems = [
    "过度承诺，反复消费情怀",
    "利用稀缺焦虑逼人决策",
    "只解释动机，不回应后果",
    "用过去功劳要求原谅现在问题",
  ];

  debitItems.forEach(function(item, i) {
    slide.addText("- " + item, {
      x: 5.4, y: 2.1 + i * 0.5, w: 3.9, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
    });
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.6, w: 9, h: 0.8,
    fill: { color: theme.primary },
  });

  slide.addText("公众给你的好感，是他们随时可以收回的授权，不，是你永久拥有的免检资格", {
    x: 0.5, y: 4.6, w: 9, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", valign: "middle",
  });

  return slide;
}

module.exports = { createSlide };
