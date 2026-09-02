#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Split 完整版.pptx into multiple files by chapter range.
"""
import json
import re
import sys
import zipfile
from pathlib import Path
from lxml import etree


NS = {
    "p": "http://schemas.openxmlformats.org/presentationml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "rels": "http://schemas.openxmlformats.org/package/2006/relationships",
    "ct": "http://schemas.openxmlformats.org/package/2006/content-types",
}

P_NS = "{" + NS["p"] + "}"
R_NS = "{" + NS["r"] + "}"
RELS_NS = "{" + NS["rels"] + "}"
CT_NS = "{" + NS["ct"] + "}"


def parse_xml(blob: bytes):
    return etree.fromstring(blob)


def serialize_xml(elem) -> bytes:
    return b'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' + \
           etree.tostring(elem, xml_declaration=False, encoding="UTF-8")


CHAPTERS = [
    (1, 7,   "00_课程封面与导览"),
    (8, 22,  "01_第一章_你真的会用秘塔吗"),
    (23, 41, "02_第二章_第一轮就问对"),
    (42, 66, "03_第三章_追问策略"),
    (67, 83, "04_第四章_对话完整节奏"),
    (84, 99, "05_第五章_信息质量判断"),
    (100, 122, "06_第六章_实战案例"),
    (123, 136, "07_第七章_工具带走"),
    (137, 140, "08_收尾与行动召唤"),
]


def main():
    src_pptx = Path(sys.argv[1])
    out_dir = Path(sys.argv[2])
    out_dir.mkdir(parents=True, exist_ok=True)

    with zipfile.ZipFile(src_pptx, "r") as zin:
        source_files = {n: zin.read(n) for n in zin.namelist()}

    pres_xml = parse_xml(source_files["ppt/presentation.xml"])
    sldIdLst = pres_xml.find(f"{P_NS}sldIdLst")
    sids = sldIdLst.findall(f"{P_NS}sldId")
    # Map: page (1..N) -> rId
    page_to_rid = {i + 1: sid.get(f"{R_NS}id") for i, sid in enumerate(sids)}

    pres_rels_xml = parse_xml(source_files["ppt/_rels/presentation.xml.rels"])
    rel_ns_tag = f"{{{NS['rels']}}}Relationship"
    rels_list = pres_rels_xml.findall(rel_ns_tag)
    rId_to_target = {r.get("Id"): r.get("Target") for r in rels_list}
    rId_to_type = {r.get("Id"): r.get("Type") for r in rels_list}

    # For each chapter, write a new PPTX
    for start, end, name in CHAPTERS:
        chapter_pages = list(range(start, end + 1))
        chapter_rids = [page_to_rid[p] for p in chapter_pages]
        chapter_slide_files = {rId_to_target[r] for r in chapter_rids}

        print(f"  {name}: pages {start}-{end} ({len(chapter_pages)} pages)")

        # Build new sldIdLst
        new_sldIdLst = etree.Element(f"{P_NS}sldIdLst")
        for p in chapter_pages:
            old_sid = sids[p - 1]
            new_sid = etree.SubElement(new_sldIdLst, f"{P_NS}sldId")
            new_sid.set("id", old_sid.get("id"))
            new_sid.set(f"{R_NS}id", old_sid.get(f"{R_NS}id"))

        # Replace sldIdLst in pres_xml
        pres_xml.replace(sldIdLst, new_sldIdLst)

        # Build new pres_rels - keep all non-slide rels, add only needed slide rels
        # IMPORTANT: keep the original rIds (e.g., rId58) so slide rels still work
        new_pres_rels = etree.Element(f"{{{NS['rels']}}}Relationships")
        for r in rels_list:
            rtype = r.get("Type")
            if rtype.endswith("/slide"):
                if r.get("Id") in chapter_rids:
                    nr = etree.SubElement(new_pres_rels, rel_ns_tag)
                    nr.set("Id", r.get("Id"))
                    nr.set("Type", rtype)
                    nr.set("Target", r.get("Target"))
            else:
                # Keep non-slide rel with original rId
                nr = etree.SubElement(new_pres_rels, rel_ns_tag)
                nr.set("Id", r.get("Id"))
                nr.set("Type", rtype)
                nr.set("Target", r.get("Target"))

        # Write the chapter pptx
        chapter_path = out_dir / f"{name}.pptx"
        with zipfile.ZipFile(chapter_path, "w", zipfile.ZIP_DEFLATED) as zout:
            # Determine which slide files to keep
            slide_files_to_keep = set()
            for target in chapter_slide_files:
                # target is like "slides/slideN.xml"
                slide_files_to_keep.add(f"ppt/{target}")
                # rels file
                m = re.match(r"slides/slide(\d+)\.xml$", target)
                if m:
                    n = m.group(1)
                    slide_files_to_keep.add(f"ppt/slides/_rels/slide{n}.xml.rels")

            for f, data in source_files.items():
                if f.startswith("ppt/slides/"):
                    if f in slide_files_to_keep:
                        zout.writestr(f, data)
                    continue
                if f.startswith("ppt/notesSlides/") or f.startswith("ppt/notesMasters/"):
                    continue  # skip notes
                if f == "ppt/presentation.xml":
                    data = serialize_xml(pres_xml)
                elif f == "ppt/_rels/presentation.xml.rels":
                    data = serialize_xml(new_pres_rels)
                zout.writestr(f, data)

        # Restore pres_xml for next iteration
        pres_xml.replace(new_sldIdLst, sldIdLst)

    print("Done")


if __name__ == "__main__":
    main()
