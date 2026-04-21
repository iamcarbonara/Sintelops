import os

base_path = "/Users/carbo/Desktop/Sintelops/Sito Sintelops/public_html"
html_files = []
for root, dirs, files in os.walk(base_path):
    for f in files:
        if f.endswith(".html"):
            html_files.append(os.path.join(root, f))

for file_path in html_files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Fix the messed up escaping
    content = content.replace("class=\\\"nav-link\\\"", "class=\"nav-link\"")
    content = content.replace("onclick=\\\"localStorage.setItem", "onclick=\"localStorage.setItem")
    content = content.replace("it')\\\"", "it')\"")
    content = content.replace("en')\\\"", "en')\"")

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Fixed backslash errors")
