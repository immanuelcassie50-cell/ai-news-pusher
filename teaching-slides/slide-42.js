const pptxgen = require('pptxgenjs');

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });

  slide.addText('团队诊断工具', {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: 'Microsoft YaHei',
    color: 'ffffff', bold: true, margin: 0
  });

  // Pentagon radar chart simulation (5 dimensions)
  const dimensions = [
    { label: '目标清晰度', icon: '◎', desc: '团队对目标的理解和认同程度' },
    { label: '角色分工', icon: '⚙', desc: '成员职责是否明确、互补' },
    { label: '流程效率', icon: '⚡', desc: '工作流程是否顺畅、高效' },
    { label: '关系质量', icon: '❤', desc: '团队成员间的信任与合作' },
    { label: '资源充足度', icon: '◆', desc: '人力、物力、财力是否足够' }
  ];

  const centerX = 5;
  const centerY = 3.3;
  const maxRadius = 2.0;

  // Draw pentagon background
  const points = [];
  dimensions.forEach((d, i) => {
    const angle = (i * 72 - 90) * Math.PI / 180;
    const x = centerX + maxRadius * Math.cos(angle);
    const y = centerY + maxRadius * Math.sin(angle);
    points.push({ x, y });
  });

  // Pentagon outline (outer)
  slide.addShape("pentagon", {
    x: centerX - maxRadius, y: centerY - maxRadius, w: maxRadius * 2, h: maxRadius * 2,
    fill: { color: theme.light },
    line: { color: theme.secondary, width: 1 }
  });

  // Inner pentagon (middle)
  slide.addShape("pentagon", {
    x: centerX - maxRadius * 0.6, y: centerY - maxRadius * 0.6, w: maxRadius * 1.2, h: maxRadius * 1.2,
    fill: { color: theme.bg },
    line: { color: theme.secondary, width: 0.5, dashType: 'dash' }
  });

  // Inner pentagon (center)
  slide.addShape("pentagon", {
    x: centerX - maxRadius * 0.3, y: centerY - maxRadius * 0.3, w: maxRadius * 0.6, h: maxRadius * 0.6,
    fill: { color: theme.bg },
    line: { color: theme.secondary, width: 0.5, dashType: 'dash' }
  });

  // Data polygon (sample data - moderate scores)
  const dataPoints = [];
  const sampleScores = [0.85, 0.6, 0.75, 0.65, 0.8];
  dimensions.forEach((d, i) => {
    const angle = (i * 72 - 90) * Math.PI / 180;
    const r = maxRadius * sampleScores[i];
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    dataPoints.push({ x, y });
  });

  // Draw data shape
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 7,
    fill: { color: theme.accent, transparency: 85 },
    line: { color: theme.accent, width: 2 }
  });

  // Draw dimension labels
  dimensions.forEach((d, i) => {
    const angle = (i * 72 - 90) * Math.PI / 180;
    const labelRadius = maxRadius + 0.55;
    const x = centerX + labelRadius * Math.cos(angle);
    const y = centerY + labelRadius * Math.sin(angle);

    // Icon circle
    slide.addShape("ellipse", {
      x: x - 0.25, y: y - 0.25, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(d.icon, {
      x: x - 0.25, y: y - 0.25, w: 0.5, h: 0.5,
      fontSize: 14,
      align: 'center', valign: 'middle'
    });

    // Label
    slide.addText(d.label, {
      x: x - 0.6, y: y + 0.3, w: 1.2, h: 0.3,
      fontSize: 11, fontFace: 'Microsoft YaHei',
      color: theme.primary, bold: true,
      align: 'center'
    });
  });

  // Legend cards on the right
  const legendX = 7.8;
  dimensions.forEach((d, i) => {
    const y = 1.2 + i * 0.85;

    slide.addShape("rect", {
      x: legendX, y: y, w: 2.0, h: 0.75,
      fill: { color: theme.light }
    });

    slide.addText(d.label, {
      x: legendX + 0.1, y: y + 0.08, w: 1.8, h: 0.3,
      fontSize: 11, fontFace: 'Microsoft YaHei',
      color: theme.primary, bold: true
    });

    slide.addText(d.desc, {
      x: legendX + 0.1, y: y + 0.38, w: 1.8, h: 0.3,
      fontSize: 8, fontFace: 'Microsoft YaHei',
      color: theme.secondary
    });
  });

  // Bottom bar
  slide.addShape("rect", {
    x: 0, y: 5.5, w: 10, h: 0.25,
    fill: { color: theme.accent }
  });

  return slide;
}

module.exports = { createSlide };
