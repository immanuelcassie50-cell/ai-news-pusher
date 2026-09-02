import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path='C:/Program Files/Google/Chrome/Application/chrome.exe')
        context = await browser.new_context(viewport={'width': 1400, 'height': 1000})
        page = await context.new_page()

        errors = []
        page.on('pageerror', lambda err: errors.append(f'PAGE: {err.message}'))
        page.on('console', lambda msg: errors.append(f'CONSOLE: {msg.text}') if msg.type == 'error' else None)

        # Clear localStorage first
        await page.goto('file:///D:/Downloads/xinjian/problem-clarifier.html')
        await page.evaluate('localStorage.clear()')
        await page.reload()
        await page.wait_for_timeout(500)

        # Test 1: Welcome
        await page.screenshot(path='D:/CC/temp/test-A-welcome.png')
        print('A Welcome OK')

        # Test 2: Click through full flow
        await page.evaluate("goToStep(1)")
        await page.wait_for_timeout(300)
        await page.fill('#originalProblem', '我作为新晋管理者，每次开团队例会大家都沉默')
        await page.wait_for_timeout(200)

        await page.evaluate("goToStep(2)")
        await page.wait_for_timeout(300)
        await page.screenshot(path='D:/CC/temp/test-B-diagnosis.png')
        print('B Diagnosis OK')

        # Test pseudoproblem branch (trigger system detection)
        await page.evaluate("selectType('pseudoproblem', true)")
        await page.wait_for_timeout(200)
        await page.screenshot(path='D:/CC/temp/test-C-pseudoproblem-selected.png')
        print('C Pseudoproblem OK')

        await page.evaluate("goToStep(3)")
        await page.wait_for_timeout(300)
        # Fill pseudoproblem fields
        await page.fill('#pseudoDid', '我开过两次会强调目标重要性')
        await page.fill('#pseudoExpect', '员工能主动汇报进度')
        await page.fill('#pseudoControl', '我能控制我的沟通方式')
        await page.screenshot(path='D:/CC/temp/test-D-pseudo-variant.png', full_page=True)
        print('D Pseudo variant OK')

        await page.evaluate("goToStep(4)")
        await page.wait_for_timeout(300)
        await page.fill('#desiredOutcome', '员工愿意主动与我沟通')
        await page.fill('#currentActions', '开会前发议程\n一对一谈话')
        await page.evaluate("selectRadio('effectiveness', 'moderate')")
        await page.evaluate("selectRadio('openness', 'very')")
        await page.screenshot(path='D:/CC/temp/test-E-outcome.png', full_page=True)
        print('E Outcome OK')

        await page.evaluate("goToStep(5)")
        await page.wait_for_timeout(500)
        await page.screenshot(path='D:/CC/temp/test-F-statements.png', full_page=True)
        print('F Statements OK')

        # Test 3: Test emotional variant
        await page.evaluate("goToStep(0)")
        await page.wait_for_timeout(200)
        await page.evaluate("goToStep(1)")
        await page.wait_for_timeout(200)
        await page.fill('#originalProblem', '领导太无理了！')
        await page.wait_for_timeout(200)
        await page.evaluate("goToStep(2)")
        await page.wait_for_timeout(400)
        await page.screenshot(path='D:/CC/temp/test-G-emotion-diagnosis.png')
        print('G Emotion diagnosis OK')

        await page.evaluate("selectType('emotional', true)")
        await page.wait_for_timeout(200)

        await page.evaluate("goToStep(3)")
        await page.wait_for_timeout(300)
        # emotional fields
        await page.evaluate("toggleEmotion('angry')")
        await page.evaluate("toggleEmotion('anxious')")
        # Set intensity
        await page.evaluate("updateEmotionIntensity(8)")
        await page.wait_for_timeout(200)
        await page.fill('#emotionFact', '我提出三个问题，没人回应，沉默了 2 分钟')
        await page.fill('#emotionFeeling', '我感到被忽视')
        await page.screenshot(path='D:/CC/temp/test-H-emotion-variant.png', full_page=True)
        print('H Emotion variant OK')

        # Test 4: Persistence — reload and check state
        await page.reload()
        await page.wait_for_timeout(800)
        # Check what step we land on
        current_step = await page.evaluate('state.currentStep')
        print(f'After reload, current step: {current_step}')
        saved_op = await page.evaluate('state.data.originalProblem')
        print(f'Original problem persisted: {saved_op[:30]}...' if saved_op else 'NOT PERSISTED!')

        # Check we're on emotional step 3
        await page.screenshot(path='D:/CC/temp/test-I-restored.png', full_page=True)
        print('I State restored OK')

        # Test 5: Continue to step 5 with emotional data
        await page.evaluate("goToStep(4)")
        await page.wait_for_timeout(300)
        await page.fill('#desiredOutcome', '我能与领导良性沟通')
        await page.evaluate("goToStep(5)")
        await page.wait_for_timeout(500)
        await page.screenshot(path='D:/CC/temp/test-J-emotional-statements.png', full_page=True)
        print('J Emotional statements OK')

        # Test 6: Custom statement
        await page.evaluate("selectStatement('custom')")
        await page.wait_for_timeout(200)
        await page.fill('#customStatement', '当领导批评我时，我感到被否定。\n我想探索：如何区分"对我工作的批评"和"对我这个人的否定"？')
        await page.wait_for_timeout(200)
        await page.screenshot(path='D:/CC/temp/test-K-custom-statement.png', full_page=True)
        print('K Custom statement OK')

        # Test 7: Step 6 + print view
        await page.evaluate("goToStep(6)")
        await page.wait_for_timeout(500)
        await page.screenshot(path='D:/CC/temp/test-L-complete.png', full_page=True)
        print('L Complete OK')

        # Print preview with content
        await page.emulate_media(media='print')
        await page.wait_for_timeout(500)
        await page.screenshot(path='D:/CC/temp/test-M-print.png', full_page=True)
        print('M Print OK')

        # Test 8: Test copy
        await page.emulate_media(media='screen')
        await page.wait_for_timeout(200)
        try:
            await page.click('.export-card:nth-child(2)')  # copy text
            await page.wait_for_timeout(500)
            print('N Copy clicked OK')
        except Exception as e:
            print(f'N Copy failed: {e}')

        if errors:
            print('')
            print('ERRORS:')
            for e in errors:
                print(' ', e)
        else:
            print('')
            print('No console errors')

        await browser.close()

asyncio.run(main())
