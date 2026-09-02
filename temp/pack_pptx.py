#!/usr/bin/env python3
"""Repack the edited PPTX."""

import zipfile
import os

UNPACKED_DIR = "D:/CC/temp/unpacked"
OUTPUT_FILE = "D:/CC/temp/导师带教实战工作坊_完整版_扩充版.pptx"

def repack_pptx():
    with zipfile.ZipFile(OUTPUT_FILE, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(UNPACKED_DIR):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, UNPACKED_DIR)
                zipf.write(file_path, arcname)

    print(f"Created: {OUTPUT_FILE}")
    print(f"Size: {os.path.getsize(OUTPUT_FILE)} bytes")

    # Count slides
    slides_dir = os.path.join(UNPACKED_DIR, 'ppt', 'slides')
    slide_files = [f for f in os.listdir(slides_dir) if f.startswith('slide') and f.endswith('.xml')]
    print(f"Total slide files: {len(slide_files)}")

repack_pptx()