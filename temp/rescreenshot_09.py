from playwright.sync_api import sync_playwright
import urllib.parse

html_path = r'D:\新课开发\自然科学\23.地球科学\PPT\slides\slide-09.html'
screenshot_path = r'D:\新课开发\自然科学\23.地球科学\PPT\slides\slide-09.png'
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