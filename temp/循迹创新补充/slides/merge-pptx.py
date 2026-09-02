# merge-pptx.py - Merge two PPTX files properly
import os
import sys
import zipfile
import shutil
from io import BytesIO

# Paths
original = r'D:\新课开发\行动学习2026\循迹创新：以用户为圆心的创新方法\完整课程包\授课PPT\slides\output\循迹创新_授课PPT.pptx'
new_slides = r'D:\CC\temp\循迹创新补充\slides\output\new-slides.pptx'
output = r'D:\CC\temp\循迹创新补充\slides\output\循迹创新_完整版.pptx'

print(f'Original: {original}')
print(f'New slides: {new_slides}')
print(f'Output: {output}')

# Get slide count from new slides
with zipfile.ZipFile(new_slides, 'r') as z:
    new_slide_files = sorted([f for f in z.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')])
    print(f'New slides count: {len(new_slide_files)}')

# Get slide count from original
with zipfile.ZipFile(original, 'r') as z:
    orig_slide_files = sorted([f for f in z.namelist() if f.startswith('ppt/slides/slide') and f.endswith('.xml')])
    print(f'Original slides count: {len(orig_slide_files)}')

# For a proper merge, we need to:
# 1. Copy the original PPTX
# 2. Add new slides to it
# 3. Update presentation.xml to reference the new slides
# 4. Update Content_Types.xml to include the new slide parts
# 5. Update ppt/_rels/presentation.xml.rels to add relationships to new slides

# Simple approach: just copy original and add slides
shutil.copy(original, output)

# Read original presentation.xml to understand the structure
with zipfile.ZipFile(original, 'r') as z:
    pres_xml = z.read('ppt/presentation.xml')
    pres_rels_xml = z.read('ppt/_rels/presentation.xml.rels')
    content_types_xml = z.read('[Content_Types].xml')

print('Read original XML files')

# Parse to find slide IDs and relationships
import re
from xml.etree import ElementTree as ET

# Find all slide IDs in presentation.xml
pres_root = ET.fromstring(pres_xml)
ns_pres = {'p': 'http://schemas.openxmlformats.org/presentationml/2006/main',
           'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'}

sld_id_list = pres_root.find('.//p:sldIdLst', ns_pres)
if sld_id_list is not None:
    existing_slides = sld_id_list.findall('p:sldId', ns_pres)
    print(f'Found {len(existing_slides)} slides in presentation.xml')

# Find all relationships
rels_root = ET.fromstring(pres_rels_xml)
ns_rels = {'r': 'http://schemas.openxmlformats.org/package/2006/relationships'}

existing_rels = rels_root.findall('r:Relationship', ns_rels)
max_rId = 0
for rel in existing_rels:
    rid = rel.get('Id')
    if rid and rid.startswith('rId'):
        try:
            num = int(rid[3:])
            max_rId = max(max_rId, num)
        except:
            pass

print(f'Max rId in original: {max_rId}')

# Now merge by creating a new PPTX
# Strategy: Just copy slides from both into a new structure

# Create a new zip with all content
output_temp = output + '.tmp'

with zipfile.ZipFile(original, 'r') as orig_z:
    with zipfile.ZipFile(new_slides, 'r') as new_z:
        with zipfile.ZipFile(output_temp, 'w', zipfile.ZIP_DEFLATED) as out_z:
            # Copy all files from original
            for item in orig_z.namelist():
                if item.startswith('ppt/slides/slide'):
                    continue  # We'll handle slides specially
                out_z.writestr(item, orig_z.read(item))

            # Copy original slides with original names
            for slide_file in orig_slide_files:
                out_z.writestr(slide_file, orig_z.read(slide_file))

            # Copy new slides with new names (after original slides)
            base_slide_num = len(orig_slide_files)
            for i, slide_file in enumerate(new_slide_files):
                new_name = f'ppt/slides/slide{base_slide_num + i + 1}.xml'
                out_z.writestr(new_name, new_z.read(slide_file))
                print(f'Added new slide: {new_name}')

            # Update presentation.xml with new slides
            # We need to add new sldId entries and new relationships

            # First, copy the original presentation.xml and modify it
            pres_xml_str = pres_xml.decode('utf-8')
            pres_rels_str = pres_rels_xml.decode('utf-8')
            ct_str = content_types_xml.decode('utf-8')

            # Add new slide entries to presentation.xml
            # Find the </p:sldIdLst> tag and add new entries before it
            new_sld_entries = ''
            new_rel_entries = ''

            for i in range(len(new_slide_files)):
                slide_num = base_slide_num + i + 1
                rId = max_rId + i + 1

                # sldId entry - use a unique id (higher than existing)
                sld_id_val = 256 + slide_num  # Base id + slide number

                new_sld_entries += f'<p:sldId id="{sld_id_val}" r:id="rId{rId}"/>'
                new_rel_entries += f'<Relationship Id="rId{rId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide{slide_num}.xml"/>'

            # Insert new sldId entries
            pres_xml_str = pres_xml_str.replace('</p:sldIdLst>', new_sld_entries + '</p:sldIdLst>')

            # Insert new relationships
            pres_rels_str = pres_rels_str.replace('</Relationships>', new_rel_entries + '</Relationships>')

            # Update Content_Types.xml to include new slides
            new_ct_entries = ''
            for i in range(len(new_slide_files)):
                slide_num = base_slide_num + i + 1
                new_ct_entries += f'<Override PartName="/ppt/slides/slide{slide_num}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>'

            ct_str = ct_str.replace('</Types>', new_ct_entries + '</Types>')

            # Write updated XML files
            out_z.writestr('ppt/presentation.xml', pres_xml_str.encode('utf-8'))
            out_z.writestr('ppt/_rels/presentation.xml.rels', pres_rels_str.encode('utf-8'))
            out_z.writestr('[Content_Types].xml', ct_str.encode('utf-8'))

            print(f'Updated presentation.xml, presentation.xml.rels, and Content_Types.xml')

print(f'Merged PPTX created: {output}')
print(f'Total slides: {len(orig_slide_files) + len(new_slide_files)}')

# Replace original with merged
shutil.move(output_temp, output)
print('Done!')