---
id: data-analysis
title: "Data Analysis"
description: "Example: data analysis with Cowork"
sidebar_position: 2
---

# Example: Data analysis

## Scenario

You have a sales dataset in CSV and need a complete analysis with visualizations and an executive Excel.

## Prompt used

```
Analyze the file sales_2025.csv and create two deliverables:

DELIVERABLE 1: Executive Excel (sales-analysis.xlsx)
- Tab "Summary": Main KPIs (total sales, average ticket, MoM growth)
- Tab "By Region": Pivot table with sales by region and month, with conditional formatting
- Tab "Top Products": Product ranking by revenue, with bar chart
- Tab "Trends": Line charts showing monthly trends
- Tab "Clean Data": Clean and standardized dataset

Required formulas: VLOOKUP where applicable, SUMIFS for aggregations, conditional formatting to highlight in green the months that exceeded the target and in red those that didn't.

DELIVERABLE 2: HTML Dashboard (sales-dashboard.html)
- Cards with main KPIs at the top
- Line chart: monthly sales with trend line
- Bar chart: comparison by region
- Pie chart: distribution by product category
- Interactive table with detailed data
- Responsive design, professional colors

Assumptions:
- Monthly target: $100,000
- Currency: USD
- If there's missing data, document it but don't make up values
```

## What Claude does

1. Reads and explores the dataset (dimensions, types, quality)
2. Cleans the data (null values, inconsistent formats)
3. Calculates metrics and KPIs
4. Creates the Excel with functional formulas and formatting
5. Generates the HTML dashboard with interactive charts
6. Documents any issues found in the data

## Tips

- Provide context about columns if the names aren't descriptive
- Specify the target or benchmark to compare against
- Ask it to document assumptions and cleaning decisions
- If the dataset is large (>10k rows), mention it should optimize performance
- Always ask it to verify calculations with a manual example

---

