#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""MiniMax image-01 批量生成 5 张 chahua 风格插画。prompt 严格 < 1500 字符。"""
import json
import os
import sys
import time
import urllib.request
import urllib.error

API_KEY = os.environ.get("MINIMAX_API_KEY", "").strip() or \
    "sk-cp-zJ6mafAjzSDD5GzVDSqk2u2ohxKb7w35XWK4WGZVNNWB2DOshq28O6LVgVylEO0I0ObRHz1GnLqPNG1lZxboutZuxOpUIE6dJFqvhZFMYQFzJPBekeFJWzg"

OUT_DIR = r"D:\2026年课程\竞越\基层即学即用的问题解决工具箱\04_课程大纲HTML"
os.makedirs(OUT_DIR, exist_ok=True)

# ------------------------------------------------------------
# 通用规则（极简版）— 紧扣 chahua + 小橙 IP 不可妥协的约束
# ------------------------------------------------------------
RULES = (
    "New Yorker single-panel editorial illustration, minimalist thin black ink line drawing, "
    "pure white background, generous negative space. No shading, no gradients, no fills except "
    "小橙's chest dot. Hand-drawn, slightly wobbly lines."
)

CHAR = (
    "小橙 (the character): TINY minimalist line figure. Head = EMPTY circle (white inside, "
    "thin black outline only, NOT orange, NOT colored), two small black dot eyes inside, "
    "no mouth. Body = narrow rectangle, white inside, thin black outline only, NOT orange, "
    "NOT colored. Stick arms and legs. EXACTLY ONE tiny pea-sized solid orange dot #F97316 "
    "on the upper chest, like a punctuation period — SURROUNDED BY WHITE on all sides inside "
    "the body, NOT touching the body outline. STRICT NEGATIVE: the head must NOT be orange, "
    "the body must NOT be filled with orange, NO nearby object (toolbox, card, note, pen, "
    "stool, etc.) may be orange, NO other orange anywhere. The pea dot is the ONLY orange. "
    "小橙 is 3-5x smaller than the main scene object. 16:9 horizontal. Pure white background."
)

# ------------------------------------------------------------
# 5 张插画 prompt
# ------------------------------------------------------------
PROMPTS = {
    "01_封面_工具箱告别救火": f"""{RULES} {CHAR}
A horizontal ground line divides the frame. Left side: burnt aftermath — scattered ash clumps, a few crooked twisted iron rods, a tiny dying ember. Right side: orderly engineering site — a neat stack of small cubes, one gear on a stand, a short straight assembly line. 小橙 stands left of center, stepping forward across the dividing line toward the engineering side, carrying on its back a small four-cell toolbox (outlined grid, empty cells). The orange chest dot is the only color. 16:9 horizontal landscape, pure white background, witty restrained mood.""",

    "02_定准板_贴满便签的墙": f"""{RULES} {CHAR}
A huge wall fills 3/4 of the frame, densely covered with many small identical square sticky notes arranged in a 6x5 grid. Each note has 2-3 short black horizontal strokes (NOT real text). A few note corners curl up. 小橙 stands on a tiny single-step stool at bottom-center, on tiptoe, reaching up to peel the corner of ONE specific sticky note off the wall. 小橙 is about 1/6 the wall's height. Orange chest dot is the only color. 16:9, pure white background, generous negative space above.""",

    "03_析透板_洋葱剥层": f"""{RULES} {CHAR}
One huge onion dominates the right 2/3 of the frame, drawn as 5-6 concentric rounded contour lines (layers), tapering inward to a small tight center circle. No fill on any layer. Rests on a short ground line. 小橙 stands at lower-left, dwarfed by the onion (about 1/5 its height), holding a tiny outlined knife in both hands, carefully slicing the outermost layer. One loose slice of skin peels down to the ground. Orange chest dot is the only color. 16:9, pure white, generous negative space on the left.""",

    "04_策全板_云朵变方块": f"""{RULES} {CHAR}
On the left: three small irregular cloud-shaped outlines (vague ideas, varied sizes). On the right: a clean 4-cell rectangular grid (the action checklist), all four cells simple empty rectangles, the top-left cell has a tiny checkmark. 小橙 stands between, bent over, holding a small pen. The pen tip touches the bottom of the rightmost cloud, and a thin dotted line connects that cloud down to the top-left cell of the grid. 小橙 is roughly the same size as the clouds and cells. Orange chest dot is the only color. 16:9, pure white background.""",

    "05_控稳板_桥的备份路线": f"""{RULES} {CHAR}
A long thin straight bridge (two parallel lines with short perpendicular rail posts) crosses a deep chasm horizontally across the middle. The chasm below is suggested by 3-4 short diagonal and zigzag black strokes implying depth. Below the bridge, a thin DASHED line (short equal dashes) curves around the chasm edge as a backup path. 小橙 walks on the bridge right of center, one hand on the bridge rail, the other holding a small rectangular card with two short horizontal strokes inside (no real text). 小橙 is about 1/8 the bridge length. Orange chest dot is the only color. 16:9, pure white, generous negative space above.""",
}


def gen(prompt: str, out_path: str, retries: int = 4) -> bool:
    payload = {"model": "image-01", "prompt": prompt, "n": 1, "aspect_ratio": "16:9"}
    data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(
        "https://api.minimaxi.com/v1/image_generation",
        data=data,
        headers={"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"},
        method="POST",
    )
    for attempt in range(retries + 1):
        try:
            with urllib.request.urlopen(req, timeout=180) as r:
                result = json.loads(r.read().decode("utf-8"))
            if result.get("base_resp", {}).get("status_code") != 0:
                print(f"  [ERR] {result['base_resp']}", flush=True)
                time.sleep(5)
                continue
            urls = result["data"]["image_urls"]
            if not urls:
                time.sleep(3)
                continue
            with urllib.request.urlopen(urls[0], timeout=60) as r:
                img = r.read()
            with open(out_path, "wb") as f:
                f.write(img)
            print(f"  [OK] {out_path}  ({len(img)//1024} KB)", flush=True)
            return True
        except urllib.error.HTTPError as e:
            print(f"  [HTTP {e.code}] {e.read().decode('utf-8','ignore')[:200]}", flush=True)
            time.sleep(6)
        except Exception as e:
            wait = 5 + attempt * 5
            print(f"  [EXC {attempt+1}] {type(e).__name__}: {e}  -> wait {wait}s", flush=True)
            time.sleep(wait)
    return False


if __name__ == "__main__":
    keys = sys.argv[1:] or list(PROMPTS.keys())
    print(f"Prompts: {len(keys)}  | Max len: {max(len(PROMPTS[k]) for k in keys if k in PROMPTS)}")
    for k in keys:
        if k not in PROMPTS:
            print(f"  [SKIP] unknown: {k}")
            continue
        prompt = PROMPTS[k]
        print(f"\n=== {k}  (len={len(prompt)}) ===")
        out = os.path.join(OUT_DIR, f"chahua_{k}.png")
        if not gen(prompt, out):
            print(f"  [FAIL] {k}")
        time.sleep(3.0)
    print("\nDone.")
