const { chromium } = require('D:/soft/npm/node_modules/playwright');
const path = require('path');

(async () => {
  const htmlPath = 'D:/新课开发/拆书/与运气竞争_围读会/完整课程包/04-授课PPT/slides/slide-08.html';
  const outputPath = 'D:/新课开发/拆书/与运气竞争_围读会/完整课程包/04-授课PPT/slides/slide-08-screenshot.png';

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 960, height: 540 });

  const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;
  await page.goto(fileUrl, { waitUntil: 'networkidle' });

  await page.evaluate(() => {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  });

  await page.screenshot({ path: outputPath, type: 'png' });
  await browser.close();
  console.log('Screenshot saved to:', outputPath);
})();
