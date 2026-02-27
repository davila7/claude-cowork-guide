# Tested prompts for common tasks

Ready-to-copy, paste, and adapt prompts.

---

## File organization

### Organize by type
```
Organize all files in this folder into subfolders by type:
- Images (jpg, png, gif, svg, webp)
- Documents (pdf, docx, txt, md)
- Spreadsheets (xlsx, csv)
- Presentations (pptx)
- Other (everything else)
Don't delete anything. Show a summary of how many files you moved to each folder.
```

### Find duplicates
```
Analyze this folder and find duplicate files (same content or very similar names).
Generate a markdown report listing the duplicates found with their paths.
Do NOT delete anything — just report. I'll decide which ones to remove.
```

## Document creation

### Executive report
```
Create a Word document with an executive report based on [data source].
Structure:
1. Executive summary (half page maximum)
2. Main findings (3-5 points with supporting data)
3. Detailed analysis by [category/region/topic]
4. Recommendations (actionable and prioritized)
5. Next steps with owners and suggested dates
Tone: Professional, directed at [audience]. Maximum [X] pages.
```

### Presentation from existing content
```
Transform the content from the file [name.md] into a PowerPoint presentation.
Guidelines:
- Maximum [N] slides
- Minimal text per slide (short bullets, not paragraphs)
- Include title slide, agenda, content, and closing
- Clean design with [specify] colors
- Add speaker notes with talking points
```

## Data analysis

### Initial exploration
```
Analyze the file [data.csv/xlsx] and generate an exploratory report:
1. Dataset dimensions (rows, columns)
2. Data types per column
3. Null or missing values (count and percentage)
4. Descriptive statistics (mean, median, min, max, standard deviation)
5. Distribution of categorical variables
6. Possible outliers
7. Correlations between numerical variables
Export the report as HTML with embedded charts.
```

### Metrics dashboard
```
With the data from [file], create an interactive HTML page that shows:
- Main KPIs in large cards at the top
- Time trend charts (lines)
- Comparison between [categories] (bars)
- Detailed filterable data table
Use professional colors. Make it responsive.
```

## Research

### Multi-source synthesis
```
Research [topic] using web search. I need:
- At least 5 recent and reliable sources
- Synthesis of the main points (not verbatim copies)
- Contrasting perspectives if they exist
- Quantitative data when available
Format: Markdown with clear sections and sources cited at the end.
```

## Email and communication

### Draft professional email
```
Draft a professional email with these parameters:
- From: [your name]
- To: [recipient and their role]
- Purpose: [what you want to achieve]
- Context: [relevant background]
- Tone: [formal/semi-formal/casual]
- Length: [short/medium]
- Call to action: [what you want the recipient to do]
```

## Scheduled tasks

### Weekly summary
```
/schedule every Friday at 5pm:
Review all files created or modified this week in this folder.
Generate a markdown summary with:
- New files created (name and brief description)
- Modified files (what changed)
- Statistics: total files, space used
Save in /weekly-summaries/YYYY-MM-DD-summary.md
```

---

[Back to index](../README.md)
