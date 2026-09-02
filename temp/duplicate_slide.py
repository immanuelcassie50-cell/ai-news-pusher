#!/usr/bin/env python3
"""Duplicate a slide with proper relationships."""
import os
import shutil
import re
from defusedxml import minidom

UNPACKED_DIR = "D:/CC/temp/unpacked"

def get_max_rid(rels_path):
    """Find the maximum rId in a rels file."""
    with open(rels_path, 'r', encoding='utf-8') as f:
        content = f.read()
    rids = re.findall(r'Id="rId(\d+)"', content)
    return max(int(r) for r in rids) if rids else 0

def get_max_sld_id(pres_path):
    """Find the maximum slide id in presentation.xml."""
    with open(pres_path, 'r', encoding='utf-8') as f:
        content = f.read()
    sld_ids = re.findall(r'<p:sldId id="(\d+)"', content)
    return max(int(s) for s in sld_ids) if sld_ids else 255

def duplicate_slide(source_num, new_num):
    """Duplicate slide source_num to create slide new_num."""
    slides_dir = f"{UNPACKED_DIR}/ppt/slides"
    rels_dir = f"{UNPACKED_DIR}/ppt/slides/_rels"

    source_file = f"{slides_dir}/slide{source_num}.xml"
    new_file = f"{slides_dir}/slide{new_num}.xml"
    source_rels = f"{rels_dir}/slide{source_num}.xml.rels"
    new_rels = f"{rels_dir}/slide{new_num}.xml.rels"

    # Copy slide XML
    shutil.copy(source_file, new_file)

    # Copy and update relationships
    with open(source_rels, 'r', encoding='utf-8') as f:
        rels_content = f.read()

    # Get new rId for the new slide relationship
    pres_rels_path = f"{UNPACKED_DIR}/ppt/_rels/presentation.xml.rels"
    max_rid = get_max_rid(pres_rels_path)
    new_rid = max_rid + 1

    # Update the copied rels file for the new slide
    new_rels_content = rels_content.replace(f'Slide{source_num}', f'Slide{new_num}')

    with open(new_rels, 'w', encoding='utf-8') as f:
        f.write(new_rels_content)

    return new_rid

def add_slide_to_presentation(new_num, new_rid):
    """Add the new slide to presentation.xml and presentation.xml.rels."""
    pres_path = f"{UNPACKED_DIR}/ppt/presentation.xml"
    pres_rels_path = f"{UNPACKED_DIR}/ppt/_rels/presentation.xml.rels"
    content_types_path = f"{UNPACKED_DIR}/[Content_Types].xml"

    # Get max sldId
    max_sld_id = get_max_sld_id(pres_path)
    new_sld_id = max_sld_id + 1

    # Read and update presentation.xml
    with open(pres_path, 'r', encoding='utf-8') as f:
        pres_content = f.read()

    # Add slide reference before the last </p:sldIdLst>
    new_sld_entry = f'<p:sldId id="{new_sld_id}" r:id="rId{new_rid}"/>'
    pres_content = re.sub(
        r'(</p:sldIdLst>)',
        f'{new_sld_entry}\\1',
        pres_content
    )

    with open(pres_path, 'w', encoding='utf-8') as f:
        f.write(pres_content)

    # Update presentation.xml.rels
    with open(pres_rels_path, 'r', encoding='utf-8') as f:
        rels_content = f.read()

    new_rel = f'<Relationship Id="rId{new_rid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide{new_num}.xml"/>'
    rels_content = re.sub(
        r'(</Relationships>)',
        f'{new_rel}\\1',
        rels_content
    )

    with open(pres_rels_path, 'w', encoding='utf-8') as f:
        f.write(rels_content)

    # Update [Content_Types].xml
    with open(content_types_path, 'r', encoding='utf-8') as f:
        ct_content = f.read()

    new_override = f'<Override PartName="/ppt/slides/slide{new_num}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>'
    ct_content = re.sub(
        r'(</Types>)',
        f'{new_override}\\1',
        ct_content
    )

    with open(content_types_path, 'w', encoding='utf-8') as f:
        f.write(ct_content)

    print(f"Added slide{new_num}.xml with rId{new_rid}, sldId={new_sld_id}")
    return new_sld_id

if __name__ == "__main__":
    import sys
    if len(sys.argv) != 3:
        print("Usage: duplicate_slide.py <source_num> <new_num>")
        sys.exit(1)

    source = int(sys.argv[1])
    new = int(sys.argv[2])

    new_rid = duplicate_slide(source, new)
    add_slide_to_presentation(new, new_rid)
    print(f"Successfully created slide{new} based on slide{source}")