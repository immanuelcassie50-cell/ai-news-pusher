from playwright.sync_api import sync_playwright
import urllib.parse
import os

slides_dir = r'D:\新课开发\自然科学\23.地球科学\PPT\slides'

for slide_num in [51, 52, 53, 54, 55]:
    html_path = os.path.join(slides_dir, f'slide-{slide_num}.html')
    screenshot_path = os.path.join(slides_dir, f'slide-{slide_num}-preview.png')

    file_url = 'file:///' + urllib.parse.quote(html_path.replace('\\', '/'))
    print(f'Opening: {file_url}')

    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe')
        page = browser.new_page()
        page.goto(file_url)
        page.wait_for_load_state('networkidle')
        page.screenshot(path=screenshot_path, full_page=False)
        browser.close()
        print(f'Screenshot saved to: {screenshot_path}')
