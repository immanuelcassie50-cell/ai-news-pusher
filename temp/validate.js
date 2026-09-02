const fs = require('fs');
const html = fs.readFileSync('D:/Downloads/xinjian/GROW 引导器/action-tracker.html', 'utf8');

// 检查关键标记
const checks = [
  ['<!DOCTYPE html>', 1],
  ['</html>', 1],
  ['<script>', 1],
  ['</script>', 1],
  ['<style>', 1],
  ['</style>', 1],
  ['@media print', 1],
  ['localStorage', 4],
  ['buildGaugeSVG', 1],
  ['buildHeatmapSVG', 1],
  ['buildMoodChartSVG', 1],
  ['renderOnboarding', 1],
  ['renderCommitments', 1],
  ['renderReflections', 1],
  ['renderCharts', 1],
  ['renderExport', 1],
  ['window.print', 1],
  ['exportJSON', 1],
  ['importJSON', 1],
  ['clearAllData', 1],
  ['onboarding-stamp', 1],
  ['today-zone', 1],
  ['status-bar', 1],
  ['mood-picker', 1],
  ['gauge-svg', 1],
  ['heatmap-svg', 1],
  ['report-section', 1]
];

let allOk = true;
checks.forEach(([s, min]) => {
  const escaped = s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const n = (html.match(new RegExp(escaped, 'g')) || []).length;
  const ok = n >= min;
  if (!ok) allOk = false;
  console.log((ok ? 'OK   ' : 'MISS ') + s + '  -> ' + n + ' (need >= ' + min + ')');
});

// 提取 JS 检查语法
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
  const js = scriptMatch[1];
  try {
    new Function(js);
    console.log('\nJS syntax: OK');
  } catch(e) {
    console.log('\nJS syntax ERROR: ' + e.message);
    // 输出错误位置上下文
    const m = e.message.match(/at position (\d+)/);
    if (m) {
      const pos = parseInt(m[1]);
      console.log('Context: ...' + js.slice(Math.max(0,pos-80), pos+80) + '...');
    }
    allOk = false;
  }
}

console.log('\nFile size: ' + html.length + ' bytes');
console.log('Result: ' + (allOk ? 'PASS' : 'FAIL'));
