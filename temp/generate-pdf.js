const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const htmlPath = 'D:/新课开发/变革管理/14-组织风险的提前预警话术：在合同签订前把话说清楚/完整课程包/02-课程学习地图/课程学习地图-组织风险提前预警话术.html';
  const pdfPath = 'D:/新课开发/变革管理/14-组织风险的提前预警话术：在合同签订前把话说清楚/完整课程包/02-课程学习地图/课程学习地图-组织风险提前预警话术.pdf';

  await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`);
  await page.waitForLoadState('networkidle');

  // Set viewport to A3 landscape
  await page.setViewportSize({ width: 1400, height: 991 });

  // Generate PDF
  await page.pdf({
    path: pdfPath,
    format: 'A3',
    landscape: true,
    printBackground: true,
    margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' }
  });

  console.log('PDF generated successfully:', pdfPath);
  await browser.close();
})();
