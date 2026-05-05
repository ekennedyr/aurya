import re
import os

def fix_casing():
    # Fix rerouter.js
    rerouter_path = 'js/rerouter.js'
    if os.path.exists(rerouter_path):
        with open(rerouter_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Lowercase only the destination paths in the mapping
        def lower_mapping(match):
            return match.group(1) + match.group(2).lower() + match.group(3)
        
        new_content = re.sub(r'(\"https?://[^\"]+\":\s*\")([^\"]+)(\")', lower_mapping, content)
        
        with open(rerouter_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Fixed rerouter.js")

    # Fix HTML files
    html_files = ['index.html', 'quem-somos.html', 'infraestrutura.html', 'contact-us.html']
    for filename in html_files:
        if os.path.exists(filename):
            with open(filename, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Lowercase src/href/srcset that point to js/ or images/
            def lower_paths(match):
                attr = match.group(1)
                prefix = match.group(2)
                path = match.group(3)
                return f'{attr}="{prefix}{path.lower()}"'
            
            # This regex looks for src="js/..." or href="images/..." etc
            new_content = re.sub(r'(src|href|poster|srcset|data-framer-search-index|data-framer-search-index-fallback)=\"(js/|images/)([^\"]+)\"', lower_paths, content)
            
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed {filename}")

if __name__ == "__main__":
    fix_casing()
