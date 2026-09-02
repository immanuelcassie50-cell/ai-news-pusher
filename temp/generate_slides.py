#!/usr/bin/env python3
"""
Generate presentation slide images for 货币的本质与信用创造 using MiniMax Image API.
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

# Color Palette
COLORS = {
    "primary": "264653",   # dark teal
    "secondary": "2a9d8f", # teal green
    "accent": "e9c46a",    # golden yellow
    "light": "f4a261",     # orange
    "bg": "fafafa"         # light gray
}

# Output directory
OUTPUT_DIR = pathlib.Path("D:/新课开发/经济学/15_货币的本质与信用创造/slides/imgs")
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
    print(f"Prompt: {prompt[:100]}...")

    try:
        response = requests.post(IMAGE_GEN_URL, headers=headers, json=payload, timeout=60)
        response.raise_for_status()
        result = response.json()

        if "data" in result:
            image_urls = result["data"].get("image_urls", [])
            if image_urls and len(image_urls) > 0:
                image_url = image_urls[0]
                # Download the image
                img_response = requests.get(image_url, timeout=120)
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
            "name": "slide_81.png",
            "prompt": """Professional educational illustration for economics presentation: Abstract financial regulation concept with central bank symbols and clean geometric shapes. Show a stylized central bank building icon in the center surrounded by floating abstract elements like coins, currency symbols, and geometric patterns. Use a color palette of deep teal #264653, teal green #2a9d8f, golden yellow #e9c46a, orange #f4a261 on a light gray #fafafa background. Clean flat design style, professional chart aesthetic, soft edges with 8-12px radius, Chinese educational context. No text, no gradients, modern minimalist infographic style."""
        },
        {
            "name": "slide_82.png",
            "prompt": """Professional educational illustration for economics presentation: Balance scale concept showing the tension between central bank control and market forces. A stylized scale with one side showing a central bank building icon and the other side showing market symbols like arrows and charts. Floating question marks around the center fulcrum. Color palette: deep teal #264653, teal green #2a9d8f, golden yellow #e9c46a, orange #f4a261 on light gray #fafafa background. Clean symbolic illustration, professional educational style, soft edges 8-12px, Chinese economics context. No text, flat design, subtle shadows."""
        },
        {
            "name": "slide_83.png",
            "prompt": """Professional educational illustration for economics presentation: Three clean card-style icons showing central bank roles. Card 1: currency issuer (banknote symbol with yuan sign). Card 2: banker's bank (interbank exchange arrows). Card 3: government's bank (treasury building icon). Arranged horizontally with equal spacing. Color palette: deep teal #264653 as primary, teal green #2a9d8f, golden yellow #e9c46a accents, orange #f4a261 highlights on light gray #fafafa background. Rounded corners 8-12px, soft shadows, clean professional look, Chinese educational style. No text labels, pure iconography."""
        },
        {
            "name": "slide_84.png",
            "prompt": """Professional educational illustration for economics presentation: Central bank balance sheet visual in accounting ledger style. Split composition showing assets on the left (bank reserves, gold bars, government bonds icons) and liabilities on the right (currency in circulation, bank deposits icons). Connected by an equals sign in the center. Clean accounting aesthetic with subtle grid lines. Color palette: deep teal #264653, teal green #2a9d8f, golden yellow #e9c46a for highlights, orange #f4a261 accents on light gray #fafafa background. Professional ledger style, soft 8-12px rounded corners, Chinese economics context. No text, clean icon-based design."""
        },
        {
            "name": "slide_85.png",
            "prompt": """Professional educational illustration for economics presentation: Deposit reserve ratio concept showing money multiplier effect. Geometric visualization with stacked bars or cascading blocks showing percentage growth (1x, 2x, 3x, 4x, 5x). Arrows pointing right indicating expansion. Percentage symbols and geometric shapes. Color palette: deep teal #264653, teal green #2a9d8f, golden yellow #e9c46a for percentage highlights, orange #f4a261 for emphasis on light gray #fafafa background. Clean educational chart style, soft corners 8-12px, professional look. No text, purely visual geometric representation of multiplier effect."""
        },
        {
            "name": "slide_100.png",
            "prompt": """Professional educational illustration: Digital RMB concept with Chinese characteristics. Show a stylized yuan symbol (¥) integrated with digital circuit patterns, smartphone icon, and subtle blockchain network nodes. Modern tech aesthetic with traditional Chinese element. Color palette: deep teal #264653 as primary, teal green #2a9d8f, golden yellow #e9c46a for the yuan symbol highlight, orange #f4a261 accents on light gray #fafafa background. Clean modern design, educational style, soft rounded corners 8-12px, Chinese financial context. No text, purely visual iconography."""
        },
        {
            "name": "slide_98.png",
            "prompt": """Professional educational illustration for economics presentation: Forward guidance concept with speech bubbles and announcement visual. Show three speech bubbles in a row representing different guidance types: open-ended, directional, and time-based. Each bubble contains subtle symbols (infinity sign, arrow, calendar/clock). A megaphone or announcement icon nearby. Color palette: deep teal #264653, teal green #2a9d8f, golden yellow #e9c46a for speech bubble accents, orange #f4a261 highlights on light gray #fafafa background. Clean communication metaphor, professional educational style, soft corners 8-12px, Chinese economics presentation context. No text, symbolic illustration only."""
        }
    ]

    # Generate each image
    for img in images:
        output_path = OUTPUT_DIR / img["name"]
        success = generate_image(img["prompt"], str(output_path))
        if success:
            print(f"  SUCCESS: {img['name']}")
        else:
            print(f"  FAILED: {img['name']}")
        time.sleep(2)  # Rate limiting

    print(f"\nAll images saved to: {OUTPUT_DIR}")

if __name__ == "__main__":
    main()
