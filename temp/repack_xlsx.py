import zipfile
import os

src = '/tmp/xlsx_work'
out = r'D:\新课开发\政治学\20_民主理论的脉络与危机-从雅典到当代民主衰退辩论\配套表单\配套表单_民主理论.xlsx'

files_to_pack = [
    '[Content_Types].xml',
    '_rels/.rels',
    'xl/workbook.xml',
    'xl/styles.xml',
    'xl/sharedStrings.xml',
    'xl/worksheets/sheet1.xml',
    'xl/worksheets/sheet2.xml',
    'xl/worksheets/sheet3.xml',
    'xl/worksheets/sheet4.xml',
    'xl/worksheets/sheet5.xml',
    'xl/worksheets/sheet6.xml',
    'xl/_rels/workbook.xml.rels',
]

os.makedirs(os.path.dirname(out), exist_ok=True)

with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as zf:
    for f in files_to_pack:
        full_path = os.path.join(src, f)
        if os.path.exists(full_path):
            zf.write(full_path, f)
            print(f'Packed: {f}')
        else:
            print(f'MISSING: {f}')

print(f'\nCreated: {out}')
print(f'Size: {os.path.getsize(out)} bytes')
