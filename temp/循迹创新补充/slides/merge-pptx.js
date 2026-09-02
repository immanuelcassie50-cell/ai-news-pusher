// merge-pptx.js - Merge original PPT with new slides
const fs = require('fs');
const path = require('path');

// We need to use python-pptx to merge two PPTX files
const { execSync } = require('child_process');

// Original PPT path
const originalPath = r'D:\新课开发\行动学习2026\循迹创新：以用户为圆心的创新方法\完整课程包\授课PPT\slides\output\循迹创新_授课PPT.pptx';
const newSlidesPath = 'D:/CC/temp/循迹创新补充/slides/output/new-slides.pptx';
const outputPath = 'D:/CC/temp/循迹创新补充/slides/output/循迹创新_完整版.pptx';

console.log('Starting merge process...');
console.log('Original:', originalPath);
console.log('New slides:', newSlidesPath);
console.log('Output:', outputPath);

// Use Python to merge PPTX files
const mergeScript = `
import zipfile
import os
import shutil
from copy import deepcopy
from xml.etree import ElementTree as ET

original = r'${originalPath}'
new_slides = r'${newSlidesPath}'
output = r'${outputPath}'

# Namespaces
NS = {
    'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'p': 'http://schemas.openxmlformats.org/presentationml/2006/main'
}

def get_slides_info(pptx_path):
    with zipfile.ZipFile(pptx_path, 'r') as z:
        slides = sorted([f for f in z.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')])
        content_types = z.read('[Content_Types].xml')
        rels = z.read('ppt/_rels/presentation.xml.rels')
    return slides, content_types, rels

def merge_pptx():
    # Read original
    orig_slides, orig_ct, orig_rels = get_slides_info(original)
    new_slides_info, new_ct, new_rels = get_slides_info(new_slides)

    print(f'Original slides: {len(orig_slides)}')
    print(f'New slides: {len(new_slides_info)}')

    # Create output by copying original
    shutil.copy(original, output)

    # Add new slides to the output
    with zipfile.ZipFile(output, 'a') as z:
        for i, slide_path in enumerate(new_slides_info):
            # Read new slide content
            with zipfile.ZipFile(new_slides_path, 'r') as nz:
                slide_content = nz.read(slide_path)
                new_slide_name = f'ppt/slides/slide{len(orig_slides) + i + 1}.xml'
                z.writestr(new_slide_name, slide_content)
                print(f'Added: {new_slide_name}')

    print(f'Merged PPTX created: {output}')
    print(f'Total slides will be: {len(orig_slides) + len(new_slides_info)}')

merge_pptx()
`;

const result = execSync(`python -c "${mergeScript.replace(/"/g, '\\"').replace(/\n/g, ' ')}"`, {
  encoding: 'utf-8',
  maxBuffer: 50 * 1024 * 1024
});

console.log(result);