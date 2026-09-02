#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Create a remapped detail.json for the expanded template.

The original detail.json has 42 pages (one per source slide).
The expanded template has 140 pages (one per PLAN entry, each is a clone of a source).
We need a new detail.json with 140 pages, where each page's text_slots are inherited
from the corresponding source slide.

USAGE
    python3 remap_detail.py <src_detail.json> <plan.json> <out_detail.json>
"""
import json
import sys
from pathlib import Path


def main():
    src_detail_path = Path(sys.argv[1])
    plan_path = Path(sys.argv[2])
    out_detail_path = Path(sys.argv[3])

    src = json.loads(src_detail_path.read_text(encoding="utf-8"))
    plan = json.loads(plan_path.read_text(encoding="utf-8"))["plan"]

    # Build a map: source slide number -> page dict
    src_pages = {p["slide_number"]: p for p in src.get("pages", [])}

    new_pages = []
    for i, (src_slide, role, key) in enumerate(plan):
        page_num = i + 1
        src_page = src_pages.get(src_slide)
        if src_page is None:
            raise SystemExit(f"Page {page_num} uses source slide {src_slide} but no detail.json entry")
        # Copy the page, override slide_number
        new_page = dict(src_page)
        new_page["slide_number"] = page_num
        # Clear capacity info that is slide-specific
        # but keep the text_slots as-is
        new_pages.append(new_page)

    new_detail = dict(src)
    new_detail["pages"] = new_pages
    out_detail_path.write_text(
        json.dumps(new_detail, ensure_ascii=False, indent=2),
        encoding="utf-8"
    )
    print(f"Wrote remapped detail: {out_detail_path} ({len(new_pages)} pages)")


if __name__ == "__main__":
    main()
