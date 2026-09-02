const { chromium } = require('D:/soft/npm/node_modules/playwright');
const path = require('path');

(async () => {
  const htmlPath = 'D:/新课开发/家庭教育/2、AI时代的亲子沟通重建指南/完整课程包/授课PPT/slides/slide-01.html';
  const outputPath = 'D:/新课开发/家庭教育/2、AI时代的亲子沟通重建指南/完整课程包/授课PPT/slides/slide-01-screenshot.png';

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 960, height: 540 });

  const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;
  await page.goto(fileUrl, { waitUntil: 'networkidle' });

  await page.evaluate(() => {
    return new Promise((resolve) => {
      const img = document.querySelector('.cover-bg');
      if (img && img.complete) {
        resolve();
      } else if (img) {
        img.onload = () => resolve();
        img.onerror = () => resolve();
      } else {
        resolve();
      }
      setTimeout(resolve, 3000);
    });
  });

  await page.screenshot({ path: outputPath, type: 'png' });
  await browser.close();
  console.log('Screenshot saved to:', outputPath);
})();