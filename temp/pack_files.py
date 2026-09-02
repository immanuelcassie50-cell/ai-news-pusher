import os
import sys
import zipfile

skill_dir = "C:/Users/Administrator/.claude/skills/Excel表格处理"
output_base = "D:/新课开发/政治学/07_国家为何存在-社会契约与政治权威的哲学基础/配套表单"

# Directories to pack
names = ["表单使用指引", "学员档案管理表", "课堂互动记录表", "小组讨论记录表", "课程产出汇总表"]

for name in names:
    src_dir = f"/tmp/xlsx_work/{name}"
    dst_file = f"{output_base}/{name}.xlsx"

    print(f"Packing {name}...")

    # Create zip file
    with zipfile.ZipFile(dst_file, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(src_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arc_name = os.path.relpath(file_path, src_dir)
                zf.write(file_path, arc_name)

    print(f"  -> {dst_file}")

print("\nAll files packed successfully!")
