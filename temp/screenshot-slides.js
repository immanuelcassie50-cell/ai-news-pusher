const { chromium } = require('playwright');

async function takeScreenshot(filePath, outputPath) {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 960, height: 540 });

  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: outputPath, width: 960, height: 540 });

  await browser.close();
  console.log(`Screenshot saved: ${outputPath}`);
}

const slides = [
  { file: 'D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-36.html', output: 'D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-36.png' },
  { file: 'D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-37.html', output: 'D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-37.png' },
  { file: 'D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-38.html', output: 'D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-38.png' },
  { file: 'D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-39.html', output: 'D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-39.png' },
  { file: 'D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-40.html', output: 'D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-40.png' },
];

(async () => {
  for (const slide of slides) {
    await takeScreenshot(slide.file, slide.output);
  }
  console.log('All screenshots taken!');
})();
