const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const inputPath = 'D:\\新课开发\\经济学\\11_全球化与国际收支\\可打印工具卡\\03-汇率决定理论速查卡.html';
  const outputPath = 'D:\\新课开发\\经济学\\11_全球化与国际收支\\可打印工具卡\\03-汇率决定理论速查卡.pdf';

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport to A4
  await page.setViewportSize({ width: 794, height: 1123 }); // 210mm x 297mm at 96dpi

  // Load the HTML
  await page.goto('file:///' + inputPath.replace(/\\/g, '/'), { waitUntil: 'networkidle' });

  // Generate PDF with print settings
  await page.pdf({
    path: outputPath,
    width: '210mm',
    height: '297mm',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  await browser.close();
  console.log('PDF generated:', outputPath);
})();