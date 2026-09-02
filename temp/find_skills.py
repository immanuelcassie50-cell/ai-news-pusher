import os, subprocess, sys
# Find short names for skill dirs
skill_base = r"C:\Users\Administrator\.claude\skills"
items = os.listdir(skill_base)
for i in items:
    full = os.path.join(skill_base, i)
    short = os.path.basename(full)
    # Try to use the short name
    try:
        # List contents to verify
        contents = os.listdir(full)
        print(f"NAME={i!r}  BASENAME={short!r}  EXISTS={os.path.exists(full)}")
        if 'templates' in contents:
            templates_path = os.path.join(full, 'templates')
            if os.path.exists(templates_path):
                t_contents = os.listdir(templates_path)
                print(f"  templates: {t_contents}")
                if 'minimal_xlsx' in t_contents:
                    mx = os.path.join(templates_path, 'minimal_xlsx')
                    print(f"  minimal_xlsx: {os.listdir(mx)}")
    except Exception as e:
        print(f"ERROR on {i}: {e}")
