from playwright.sync_api import sync_playwright
import os

output_dir = 'D:/新课开发/经营/系列/10_管理易筋经——计划、组织、领导、控制/slides'
slides = ['slide-83.html', 'slide-84.html']

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 1280, 'height': 720})

    for slide in slides:
        file_path = os.path.join(output_dir, slide)
        page.goto(f'file:///{file_path}')
        page.wait_for_timeout(500)
        screenshot_path = os.path.join(output_dir, slide.replace('.html', '.png'))
        page.screenshot(path=screenshot_path, full_page=False)
        print(f'Screenshot saved: {screenshot_path}')

    browser.close()
