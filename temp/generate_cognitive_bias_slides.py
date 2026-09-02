#!/usr/bin/env python3
"""
Generate educational slide images for cognitive bias course (slides 56-60) using MiniMax Image API.
"""

import os
import sys
import base64
import time
import requests
import pathlib

# API Configuration
API_KEY = "sk-cp-zJ6mafAjzSDD5GzVDSqk2u2ohxKb7w35XWK4WGZVNNWB2DOshq28O6LVgVylEO0I0ObRHz1GnLqPNG1lZxboutZuxOpUIE6dJFqvhZFMYQFzJPBekeFJWzg"
API_BASE = "https://api.minimaxi.com/v1"
IMAGE_GEN_URL = f"{API_BASE}/image_generation"

# Color Palette (Education & Chart style)
COLORS = {
    "deep_teal": "#264653",      # titles
    "teal_green": "#2a9d8f",     # emphasis
    "orange": "#f4a261",         # secondary emphasis
    "coral_red": "#e76f51",      # warning
    "light_yellow": "#e9c46a",   # chart
    "bg": "#f8f9fa"              # light background
}

# Output directory
OUTPUT_DIR = pathlib.Path("D:/新课开发/经济学/19_认知偏差与决策失误/PPT/slides/imgs")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

def generate_image(prompt: str, output_path: str, aspect_ratio: str = "16:9") -> bool:
    """Generate an image using MiniMax API."""
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "image-01",
        "prompt": prompt,
        "n": 1,
        "aspect_ratio": aspect_ratio,
        "response_format": "url"
    }

    print(f"Generating: {output_path}")
    print(f"Prompt: {prompt[:200]}...")

    try:
        response = requests.post(IMAGE_GEN_URL, headers=headers, json=payload, timeout=120)
        response.raise_for_status()
        result = response.json()

        if "data" in result:
            image_urls = result["data"].get("image_urls", [])
            if image_urls and len(image_urls) > 0:
                image_url = image_urls[0]
                # Download the image
                img_response = requests.get(image_url, timeout=180)
                img_response.raise_for_status()

                with open(output_path, "wb") as f:
                    f.write(img_response.content)

                print(f"  -> Saved to {output_path}")
                return True

        print(f"  -> Error: {result}")
        return False

    except Exception as e:
        print(f"  -> Exception: {e}")
        return False

def main():
    # Define all images to generate
    images = [
        {
            "name": "slide_56_reverse_evidence.png",
            "prompt": (
                'Professional educational illustration for psychology course on cognitive bias: Three-step process showing the Reverse Evidence Method - how to find and consider opposing evidence. '
                'Step 1: A magnifying glass icon searching through documents. '
                'Step 2: A scale balancing two opposing arguments. '
                'Step 3: A lightbulb representing insight and reconsidered conclusion. '
                'Connected by flowing arrows. Clean flat design with numbered circles (1, 2, 3). '
                'Deep teal #264653 titles, teal green #2a9d8f emphasis, orange #f4a261 secondary, coral red #e76f51 for contrast. '
                'Light background #f8f9fa. Educational infographic style, soft rounded corners, professional chart aesthetic. No text, purely visual step-by-step illustration. 16:9 aspect ratio.'
            )
        },
        {
            "name": "slide_57_confirmation_bias_quiz.png",
            "prompt": (
                'Professional educational illustration for psychology course: Practice exercises for confirmation bias - a quiz/test visual with multiple choice questions. '
                'Show a clean test paper or quiz card design with four answer options (A, B, C, D) using colorful option circles. A brain or thinking icon at top. '
                'Questions marks and lightbulb icons suggesting active thinking. '
                'Deep teal #264653 as primary, teal green #2a9d8f, orange #f4a261, coral red #e76f51 for wrong answers, light yellow #e9c46a for highlights. '
                'Light background #f8f9fa. Clean educational assessment style, soft corners, professional look. No actual question text, purely visual quiz format. 16:9 aspect ratio.'
            )
        },
        {
            "name": "slide_58_chapter6_summary.png",
            "prompt": (
                'Professional educational illustration for psychology course: Chapter 6 summary with key takeaways and icons. '
                'Show 4-5 key concept icons arranged in a grid or flowing layout: brain icon for cognitive bias, scales for decision making, target for anchoring, chain links for confirmation bias, lightbulb for debiasing strategies. '
                'Each icon in a subtle card or badge. Clean summary visual with decorative elements. '
                'Deep teal #264653 titles, teal green #2a9d8f icons, orange #f4a261 accents, light yellow #e9c46a highlights. '
                'Light background #f8f9fa. Professional educational summary style, soft corners 8-12px, icon-based design conveying chapter key takeaways. 16:9 aspect ratio.'
            )
        },
        {
            "name": "slide_59_availability_heuristic.png",
            "prompt": (
                'Professional educational illustration for psychology course: Chapter 7 section divider - Availability Heuristic dramatic visual. '
                'Large bold number "07" in deep teal #264653. A magnifying glass icon prominently featured, representing the heuristic concept - things that are more available in memory are judged as more common. '
                'Brain or memory icons with floating information bubbles. Media/newspaper headlines subtly visible in background. '
                'Dramatic composition with generous whitespace. Teal green #2a9d8f, orange #f4a261 accents. Light background #f8f9fa. '
                'Clean modern chapter divider style, bold typography, professional educational design. 16:9 aspect ratio.'
            )
        },
        {
            "name": "slide_60_shark_vs_bee.png",
            "prompt": (
                'Professional educational illustration for psychology course: Dramatic comparison visual of shark attack vs bee sting - demonstrating availability heuristic through media headlines. '
                'Left side: dramatic shark icon with aggressive posture, headline "SHARK ATTACK" in bold dramatic text style. '
                'Right side: small bee icon, headline "BEE STING" in smaller text. '
                'Visual showing media sensationalism - dramatic events (sharks) are more memorable than common ones (bee stings). Large icons, bold headlines, contrasting sizes. '
                'Deep teal #264653, teal green #2a9d8f, orange #f4a261 for shark, light yellow #e9c46a highlights. Light background #f8f9fa. '
                'Dramatic journalistic style, educational comparison, soft corners. 16:9 aspect ratio.'
            )
        }
    ]

    # Generate each image
    for i, img in enumerate(images):
        output_path = OUTPUT_DIR / img["name"]
        success = generate_image(img["prompt"], str(output_path))
        if success:
            print(f"  SUCCESS: {img['name']}")
        else:
            print(f"  FAILED: {img['name']}")
        if i < len(images) - 1:
            time.sleep(3)  # Rate limiting between calls

    print(f"\nAll images saved to: {OUTPUT_DIR}")

if __name__ == "__main__":
    main()