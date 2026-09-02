import fitz
import sys
import json
import os

book_name = sys.argv[1]
folder = sys.argv[2]

path = os.path.join(folder, book_name + '.pdf')
try:
    doc = fitz.open(path)
    all_text = []
    for i, page in enumerate(doc):
        t = page.get_text()
        if t and t.strip():
            all_text.append(f"=== 第{i+1}页 ===\n{t}")
    doc.close()
    result = {
        "name": book_name,
        "text": "\n".join(all_text),
        "total_chars": sum(len(t) for t in all_text)
    }
    print(json.dumps(result, ensure_ascii=False))
except Exception as e:
    print(json.dumps({"name": book_name, "error": str(e)}, ensure_ascii=False))
