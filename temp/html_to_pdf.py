from playwright.sync_api import sync_playwright
import os

html_path = "D:/新课开发/HR/员工关系/8.管理者角色升级-从执行者到人性化管理者的能力重塑/12-可打印工具卡/工具卡合集.html"
pdf_path = "D:/新课开发/HR/员工关系/8.管理者角色升级-从执行者到人性化管理者的能力重塑/12-可打印工具卡/工具卡合集.pdf"

# Convert relative path to absolute file URL
html_path_abs = os.path.abspath(html_path)
html_url = f"file:///{html_path_abs.replace(chr(92), '/')}"

print(f"HTML path: {html_path}")
print(f"HTML URL: {html_url}")
print(f"PDF path: {pdf_path}")

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()

    print("Loading HTML...")
    page.goto(html_url)

    # Wait for content to load
    page.wait_for_load_state("networkidle")

    print("Generating PDF...")
    page.pdf(
        path=pdf_path,
        format="A4",
        print_background=True,
        margin={"top": "8mm", "right": "8mm", "bottom": "8mm", "left": "8mm"}
    )

    browser.close()

print(f"PDF created: {pdf_path}")

# Verify file size
if os.path.exists(pdf_path):
    size = os.path.getsize(pdf_path)
    print(f"PDF size: {size / 1024:.1f} KB")
else:
    print("PDF was not created")
