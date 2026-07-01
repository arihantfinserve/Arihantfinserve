import zipfile
import re

with zipfile.ZipFile(r'e:\SOFTWARES\Ashay Software\Website\CHIRAGBHAI\arihant-finserve\Arihant_Finserve_Services.docx') as z:
    with z.open('word/document.xml') as f:
        xml_content = f.read().decode('utf-8')
        text = re.sub(r'<[^>]+>', ' ', xml_content)
        print(text)
