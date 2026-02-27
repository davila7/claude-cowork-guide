# Example: File organization

## Scenario

You have a downloads folder with 200+ mixed files: PDFs, images, Word documents, spreadsheets, videos, and code files.

## Prompt used

```
Organize all files in this folder following these rules:

1. Create subfolders by type:
   - Images/ (jpg, png, gif, svg, webp, ico)
   - Documents/ (pdf, docx, txt, md, rtf)
   - Spreadsheets/ (xlsx, csv, tsv)
   - Presentations/ (pptx, ppt)
   - Videos/ (mp4, mov, avi, mkv)
   - Audio/ (mp3, wav, flac)
   - Code/ (py, js, html, css, json, yaml)
   - Other/ (everything else)

2. Rename each file with the format:
   YYYY-MM-DD_clean-original-name
   - Use the file's modification date
   - Replace spaces with underscores
   - Convert to lowercase
   - Remove special characters

3. Generate a markdown report (organization-report.md) with:
   - Total files processed
   - Count by category
   - List of renamed files (old name → new name)
   - Files that couldn't be processed (if any)

4. Do NOT delete any files.
```

## What Claude does

1. Scans the entire folder and catalogs all files
2. Creates the subfolder structure
3. Moves and renames each file according to the rules
4. Generates the summary report
5. Shows you the final result

## Expected result

```
Downloads/
|-- Images/
|   |-- 2025-11-15_team-photo.jpg
|   |-- 2025-12-01_project-logo.png
|-- Documents/
|   |-- 2025-10-20_service-contract.pdf
|   |-- 2025-11-30_meeting-notes.docx
|-- Spreadsheets/
|   |-- 2025-12-15_q1-budget.xlsx
|-- ...
|-- organization-report.md
```

## Tips

- Always back up before bulk file reorganization
- Start with a small folder to test the rules
- Be explicit about what it should NOT do (delete, modify content)
- Review the report afterward to confirm everything looks right

---

[Back to index](../README.md)
