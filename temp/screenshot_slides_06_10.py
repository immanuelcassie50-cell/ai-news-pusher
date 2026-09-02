from playwright.sync_api import sync_playwright
import urllib.parse
import os

slides = [
    ('D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-06.html',
     'D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-06.png'),
    ('D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-07.html',
     'D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-07.png'),
    ('D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-08.html',
     'D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-08.png'),
    ('D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-09.html',
     'D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-09.png'),
    ('D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-10.html',
     'D:/新课开发/自然科学/23.地球科学/PPT/slides/slide-10.png'),
]

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe')
    for html_path, screenshot_path in slides:
        file_url = 'file:///' + urllib.parse.quote(html_path.replace('\\', '/'))
        print(f'Opening: {file_url}')
        page = browser.new_page()
        page.goto(file_url)
        page.wait_for_load_state('networkidle')
        page.screenshot(path=screenshot_path, full_page=False)
        page.close()
        print(f'Screenshot saved to: {screenshot_path}')
    browser.close()
print('All screenshots complete!')