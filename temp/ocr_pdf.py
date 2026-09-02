import subprocess
from PIL import Image
import fitz
import os

pdf_path = r'D:\得到\品控\得到品控手册.pdf'
tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
tessdata_dir = r'C:\Program Files\Tesseract-OCR\tessdata'
output_file = r'D:\CC\temp\dedao_quality_manual_full.txt'

doc = fitz.open(pdf_path)
all_text = []

for i in range(doc.page_count):
    page = doc[i]
    mat = fitz.Matrix(2, 2)
    pix = page.get_pixmap(matrix=mat)
    img_path = rf'D:\CC\temp\ocr_page_{i+1}.png'
    pix.save(img_path)

    result = subprocess.run(
        [tesseract_cmd, img_path, 'stdout',
         '--tessdata-dir', tessdata_dir,
         '-l', 'chi_sim'],
        capture_output=True, text=True,
        encoding='utf-8', errors='replace'
    )
    text = result.stdout
    all_text.append(f'=== 第 {i+1} 页 ===\n{text}')
    print(f'OCR completed page {i+1}')

    os.remove(img_path)

with open(output_file, 'w', encoding='utf-8') as f:
    f.write('\n\n'.join(all_text))
print(f'Done - saved to {output_file}')
