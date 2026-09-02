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

        await page.goto('file:///D:/Downloads/xinjian/problem-clarifier.html')
        await page.wait_for_timeout(500)

        # Step 0: Welcome
        await page.screenshot(path='D:/CC/temp/clarifier-0-welcome.png')
        print('OK Step 0 (welcome)')

        # Click welcome's start button (use JS to avoid visibility issues with hidden siblings)
        await page.evaluate("goToStep(1)")
        await page.wait_for_timeout(400)

        # Step 1
        await page.fill('#originalProblem', '我作为新晋管理者，每次开团队例会大家都沉默，气氛很尴尬。我已经试过点名提问，但效果更糟。')
        await page.wait_for_timeout(200)
        await page.screenshot(path='D:/CC/temp/clarifier-1-original.png')
        print('OK Step 1 (original)')

        await page.evaluate("goToStep(2)")
        await page.wait_for_timeout(400)

        # Step 2
        await page.wait_for_timeout(300)
        await page.screenshot(path='D:/CC/temp/clarifier-2-diagnosis.png')
        print('OK Step 2 (diagnosis)')

        # Click vague
        await page.evaluate("selectType('vague', true)")
        await page.wait_for_timeout(200)

        # Next
        await page.evaluate("goToStep(3)")
        await page.wait_for_timeout(400)

        # Step 3 vague
        await page.fill('#vagueWhen', '每周一上午 10:00 的团队例会')
        await page.fill('#vagueWhere', '公司 6 楼小会议室')
        await page.fill('#vagueWho', '我的 6 名团队成员')
        await page.evaluate("selectRole('new_manager')")
        await page.wait_for_timeout(200)
        await page.screenshot(path='D:/CC/temp/clarifier-3-vague.png', full_page=True)
        print('OK Step 3 (vague)')

        # Next
        await page.evaluate("goToStep(4)")
        await page.wait_for_timeout(300)

        # Step 4
        await page.fill('#desiredOutcome', '在会议上，我提出问题时有人主动回应，团队成员愿意参与讨论')
        await page.fill('#currentActions', '在会前提前发议程\n一对一谈话\n读过《非暴力沟通》')
        await page.evaluate("selectRadio('effectiveness', 'slight')")
        await page.evaluate("selectRadio('openness', 'yes')")
        await page.wait_for_timeout(200)
        await page.screenshot(path='D:/CC/temp/clarifier-4-outcome.png', full_page=True)
        print('OK Step 4 (outcome)')

        # Next
        await page.evaluate("goToStep(5)")
        await page.wait_for_timeout(500)

        # Step 5
        await page.screenshot(path='D:/CC/temp/clarifier-5-statements.png', full_page=True)
        print('OK Step 5 (statements)')

        # Check that 3 statement cards are present
        cards = await page.locator('.statement-card').count()
        print(f'  Statement cards: {cards}')

        # Read the first statement text
        first_text = await page.locator('.statement-card .statement-text').first.text_content()
        print(f'  First statement: {first_text[:80]}...')

        # Select version C
        await page.evaluate("selectStatement('C')")
        await page.wait_for_timeout(200)

        # Next to completion
        await page.evaluate("goToStep(6)")
        await page.wait_for_timeout(500)

        # Step 6
        await page.screenshot(path='D:/CC/temp/clarifier-6-complete.png', full_page=True)
        print('OK Step 6 (complete)')

        # Mobile
        await page.set_viewport_size({'width': 390, 'height': 844})
        await page.evaluate('window.scrollTo(0, 0)')
        await page.wait_for_timeout(300)
        await page.screenshot(path='D:/CC/temp/clarifier-mobile.png', full_page=True)
        print('OK Mobile view')

        # Test print preview
        await page.set_viewport_size({'width': 1400, 'height': 1000})
        await page.emulate_media(media='print')
        await page.wait_for_timeout(300)
        await page.screenshot(path='D:/CC/temp/clarifier-print.png', full_page=True)
        print('OK Print view')

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
