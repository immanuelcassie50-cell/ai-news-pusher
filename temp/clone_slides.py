#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Preprocessor: take template.pptx + PLAN, generate an expanded template where
each PLAN entry (1..N) is a unique cloned slide.

In the expanded template, slide numbers 1..N correspond directly to PLAN pages.
This way, edits.json can use slide numbers 1..N (one per page), and duplicate
selections become unique cloned slides.

USAGE
    python3 clone_slides.py <template.pptx> <plan_json> <out_template.pptx>

plan_json: {"plan": [(slide, role, key), ...]}  -- slide is source slide number
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


def main():
    template_path = Path(sys.argv[1])
    plan_path = Path(sys.argv[2])
    out_template_path = Path(sys.argv[3])

    plan = json.loads(plan_path.read_text(encoding="utf-8"))["plan"]
    N = len(plan)
    print(f"PLAN size: {N}")

    # Read source template
    with zipfile.ZipFile(template_path, "r") as zin:
        source_files = {n: zin.read(n) for n in zin.namelist()}

    # Find the highest slide number
    slide_files = [n for n in source_files
                   if re.match(r"^ppt/slides/slide\d+\.xml$", n)]
    max_slide = max(int(re.search(r"slide(\d+)", f).group(1)) for f in slide_files)
    print(f"Max source slide number: {max_slide}")

    # Read presentation.xml
    pres_xml = parse_xml(source_files["ppt/presentation.xml"])
    sldIdLst = pres_xml.find(f"{P_NS}sldIdLst")
    source_sld_ids = sldIdLst.findall(f"{P_NS}sldId")
    # Source slide order in sldIdLst: index 0 = slide 1
    src_rid_list = [sid.get(f"{R_NS}id") for sid in source_sld_ids]
    src_sldId_list = [sid.get("id") for sid in source_sld_ids]
    max_sld_id = max(int(v) for v in src_sldId_list)

    # Build mapping: sldIdLst index (1..N) -> slide file path
    # Read presentation.xml.rels to get rId -> Target
    pres_rels_xml = parse_xml(source_files["ppt/_rels/presentation.xml.rels"])
    rel_ns_tag = f"{{{NS['rels']}}}Relationship"
    rels_list = pres_rels_xml.findall(rel_ns_tag)
    rId_to_target = {r.get("Id"): r.get("Target") for r in rels_list}
    max_rid_num = max(int(rid[3:]) for rid in rId_to_target if rid.startswith("rId"))
    print(f"Max rId: rId{max_rid_num}, Max sldId: {max_sld_id}")

    # Map sldIdLst index (1..N) to slide file path
    src_to_file = {}  # sldIdLst index 1..N -> "ppt/slides/slideN.xml"
    for i, rid in enumerate(src_rid_list):
        idx = i + 1
        target = rId_to_target.get(rid)
        if target and target.startswith("slides/"):
            src_to_file[idx] = "ppt/" + target
    print(f"Source slide files: {len(src_to_file)} entries")
    if not src_to_file:
        raise SystemExit("No source slides found in presentation.xml.rels")

    # Read [Content_Types].xml
    ct_xml = parse_xml(source_files["[Content_Types].xml"])

    # Process each PLAN page
    files_to_write = {}
    new_sldIdLst_entries = []  # (id, rid)
    new_rels_entries = []      # (Id, Type, Target)
    new_overrides = []         # (PartName, ContentType)

    next_slide_num = max_slide + 1
    next_rid_num = max_rid_num + 1
    next_sld_id = max_sld_id + 1

    for p in range(1, N + 1):
        src = plan[p - 1][0]
        new_slide_num = next_slide_num
        new_rid = f"rId{next_rid_num}"

        # Map sldIdLst index to actual file
        src_slide_path = src_to_file.get(src)
        if not src_slide_path:
            raise SystemExit(f"Page {p} (src {src}) - no source file mapping")
        # Derive rels file path: ppt/slides/slideN.xml.rels
        src_rels_path = src_slide_path.replace("slides/", "slides/_rels/") + ".rels"
        new_slide_path = f"ppt/slides/slide{new_slide_num}.xml"
        new_rels_path = f"ppt/slides/_rels/slide{new_slide_num}.xml.rels"

        files_to_write[new_slide_path] = source_files[src_slide_path]

        # Build cloned rels (drop notesSlide to avoid dangling references)
        rels_ns_tag = f"{{{NS['rels']}}}Relationships"
        new_rels = etree.Element(rels_ns_tag)
        if src_rels_path in source_files:
            src_rels_xml = parse_xml(source_files[src_rels_path])
            for r in src_rels_xml.findall(rel_ns_tag):
                if r.get("Type").endswith("/notesSlide"):
                    continue
                nr = etree.SubElement(new_rels, rel_ns_tag)
                nr.set("Id", r.get("Id"))
                nr.set("Type", r.get("Type"))
                nr.set("Target", r.get("Target"))
        files_to_write[new_rels_path] = serialize_xml(new_rels)

        new_rels_entries.append((
            new_rid,
            "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide",
            f"slides/slide{new_slide_num}.xml"
        ))
        new_sldIdLst_entries.append((next_sld_id, new_rid))
        new_overrides.append((
            f"/ppt/slides/slide{new_slide_num}.xml",
            "application/vnd.openxmlformats-officedocument.presentationml.slide+xml"
        ))

        next_slide_num += 1
        next_rid_num += 1
        next_sld_id += 1

    # Update sldIdLst
    for sid in list(sldIdLst):
        sldIdLst.remove(sid)
    for sid_id, sid_rid in new_sldIdLst_entries:
        new_sid = etree.SubElement(sldIdLst, f"{P_NS}sldId")
        new_sid.set("id", str(sid_id))
        new_sid.set(f"{R_NS}id", sid_rid)

    # Update presentation.xml.rels
    for rid, rtype, target in new_rels_entries:
        nr = etree.SubElement(pres_rels_xml, rel_ns_tag)
        nr.set("Id", rid)
        nr.set("Type", rtype)
        nr.set("Target", target)

    # Update Content_Types
    for part_name, ct in new_overrides:
        ov = etree.SubElement(ct_xml, f"{CT_NS}Override")
        ov.set("PartName", part_name)
        ov.set("ContentType", ct)

    # Write output zip
    with zipfile.ZipFile(out_template_path, "w", zipfile.ZIP_DEFLATED) as zout:
        skip = set(files_to_write.keys())
        for name, data in source_files.items():
            if name in skip:
                continue
            if name == "ppt/presentation.xml":
                data = serialize_xml(pres_xml)
            elif name == "ppt/_rels/presentation.xml.rels":
                data = serialize_xml(pres_rels_xml)
            elif name == "[Content_Types].xml":
                data = serialize_xml(ct_xml)
            zout.writestr(name, data)
        for name, data in files_to_write.items():
            zout.writestr(name, data)

    print(f"Wrote expanded template: {out_template_path}")
    print(f"  Source slides: {max_slide}, Cloned slides: {N}, Total: {max_slide + N}")


if __name__ == "__main__":
    main()
