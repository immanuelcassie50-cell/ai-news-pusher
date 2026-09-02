const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1400, height: 1000 } });
  const page = await context.newPage();

  // Capture console errors
  const errors = [];
  page.on('pageerror', err => errors.push('PAGE: ' + err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push('CONSOLE: ' + msg.text());
  });

  await page.goto('file:///D:/Downloads/xinjian/problem-clarifier.html');
  await page.waitForTimeout(500);

  // Step 0: Welcome
  await page.screenshot({ path: 'D:/CC/temp/clarifier-0-welcome.png' });
  console.log('✓ Step 0 (welcome)');

  // Click "开始"
  await page.click('button.btn-primary');
  await page.waitForTimeout(300);

  // Step 1: Original problem
  await page.fill('#originalProblem', '我作为新晋管理者，每次开团队例会大家都沉默，气氛很尴尬。我已经试过点名提问，但效果更糟。');
  await page.waitForTimeout(200);
  await page.screenshot({ path: 'D:/CC/temp/clarifier-1-original.png' });
  console.log('✓ Step 1 (original)');

  // Next
  await page.click('button.btn-primary');
  await page.waitForTimeout(300);

  // Step 2: Type diagnosis
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'D:/CC/temp/clarifier-2-diagnosis.png' });
  console.log('✓ Step 2 (diagnosis)');

  // Click "太模糊" (vague)
  await page.click('.type-card[data-type="vague"]');
  await page.waitForTimeout(200);
  await page.screenshot({ path: 'D:/CC/temp/clarifier-2b-vague-selected.png' });
  console.log('✓ Step 2 (vague selected)');

  // Next
  await page.click('button.btn-primary');
  await page.waitForTimeout(300);

  // Step 3: Vague variant
  await page.fill('#vagueWhen', '每周一上午 10:00 的团队例会');
  await page.fill('#vagueWhere', '公司 6 楼小会议室');
  await page.fill('#vagueWho', '我的 6 名团队成员');
  await page.click('.role-option[data-value="new_manager"]');
  await page.waitForTimeout(200);
  await page.screenshot({ path: 'D:/CC/temp/clarifier-3-vague.png', fullPage: true });
  console.log('✓ Step 3 (vague variant)');

  // Next
  await page.click('button.btn-primary');
  await page.waitForTimeout(300);

  // Step 4
  await page.fill('#desiredOutcome', '在会议上，我提出问题时有人主动回应，团队成员愿意参与讨论');
  await page.fill('#currentActions', '在会前提前发议程\n一对一谈话\n读过《非暴力沟通》');
  await page.click('.radio-option[data-value="slight"]');
  await page.click('.radio-option[data-value="yes"]');
  await page.waitForTimeout(200);
  await page.screenshot({ path: 'D:/CC/temp/clarifier-4-outcome.png', fullPage: true });
  console.log('✓ Step 4 (outcome)');

  // Next
  await page.click('button.btn-primary');
  await page.waitForTimeout(500);

  // Step 5
  await page.screenshot({ path: 'D:/CC/temp/clarifier-5-statements.png', fullPage: true });
  console.log('✓ Step 5 (statements)');

  // Select version C
  await page.click('.statement-card[data-version="C"]');
  await page.waitForTimeout(200);

  // Next to completion
  await page.click('button.btn-primary');
  await page.waitForTimeout(500);

  // Step 6
  await page.screenshot({ path: 'D:/CC/temp/clarifier-6-complete.png', fullPage: true });
  console.log('✓ Step 6 (complete)');

  // Mobile viewport test
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'D:/CC/temp/clarifier-mobile.png', fullPage: true });
  console.log('✓ Mobile view');

  if (errors.length > 0) {
    console.log('');
    console.log('⚠️ Errors detected:');
    errors.forEach(e => console.log('  ', e));
  } else {
    console.log('');
    console.log('✓ No console errors');
  }

  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
