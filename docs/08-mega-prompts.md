# 10 Mega Prompts for Complete Workflows

> Copy-paste prompts designed to hand Cowork a full job and walk away. No babysitting. No follow-up prompts. Just finished files waiting for you when you come back.

## How to use these prompts

**Before you start:** point Cowork at the right folder. Every prompt below assumes Cowork has access to a specific folder with relevant files. The more useful files you have in that folder (past documents, brand guidelines, data exports, notes), the better the output.

Then drop the prompt in and let it run.

---

## Marketing

### 1. Full 30-Day Content Pipeline

Give it your content folder and it builds your entire month: brand voice analysis, 30 ranked content ideas, 5 full drafts, and a publishing calendar in Excel.

```
You are my senior content strategist and production manager. In this folder you'll find: raw notes, past articles, brand guidelines, and audience research. Your job is to build a complete 30-day content calendar.

Step 1: Read every file in this folder and extract recurring themes, top-performing formats, and brand voice patterns. Create a document called BRAND-VOICE.md summarizing your findings in bullet form.

Step 2: Generate 30 content ideas ranked by estimated audience value. For each idea include: title, format (thread/article/video script), target emotion (curiosity/outrage/validation/empowerment), and a one-sentence hook.

Step 3: Write full drafts for the top 5 ideas. Each draft should follow the brand voice from BRAND-VOICE.md, include a scroll-stopping opening line, and end with a clear call to action.

Step 4: Create CALENDAR.xlsx with all 30 pieces mapped by date, platform, and content type. Include a column for repurposing each piece into a second format.

Deliver everything as finished files. Do not ask for clarification — make reasonable assumptions and note them at the top of each document.
```

**What you get:** BRAND-VOICE.md, 5 full drafts, CALENDAR.xlsx. A content team's week of work, done while you sleep.

---

### 2. Competitor Intelligence Brief

Tell it your niche, let it search the web, and come back to a professional competitor analysis document with gaps and opportunities already mapped out.

```
Act as my market research analyst. Search the web for the top 5 competitors to [my product/niche]. For each competitor, find and document: their pricing page, top-performing content from the last 90 days, customer reviews mentioning pain points, and any recent product announcements.

Compile everything into COMPETITOR-BRIEF.docx with a section for each competitor. Include a final section called GAPS AND OPPORTUNITIES that identifies 3 things competitors are missing that we could own.

Format the document professionally with headings, subheadings, and a summary table at the top. Save it to this folder.
```

**What you get:** A board-ready competitor brief. The kind consultants charge thousands for.

---

### 3. 7-Email Welcome Sequence

A full email sequence, structured for conversion, written in your brand voice, saved as individual files. Replace `[product/goal]` and you're done.

```
You are a direct response copywriter with 10 years of experience in high-conversion email marketing. In this folder you'll find my product description, audience research, and any past email campaigns.

Write a 7-email welcome sequence for new subscribers. Each email should: have a subject line with open rate in mind, open with a hook that prevents deletion, deliver one core value or lesson, and close with a soft call to action toward [product/goal].

Emails 1-3 should build trust and deliver free value. Emails 4-5 should introduce the problem in depth. Emails 6-7 should present the solution and close.

Save each email as a separate .txt file labeled EMAIL-1.txt through EMAIL-7.txt. Then create EMAIL-SEQUENCE-OVERVIEW.docx with subject lines, goals, and send timing for each email mapped out in a table.
```

**What you get:** 7 ready-to-load emails plus a sequencing overview. Drag into your ESP and go.

---

## Coding

### 4. Full Codebase Audit and Refactor Plan

Point this at any project folder. It reads everything, maps the architecture, identifies the top 10 issues, builds a 30-day fix plan, and actually resolves the safe ones immediately.

```
You are my senior software engineer. Audit this entire codebase and produce a structured report.

Step 1: Read every file and map the architecture. Create ARCHITECTURE.md with a plain-language explanation of how the system works, what each major component does, and how data flows through the app.

Step 2: Identify the top 10 issues in the codebase. For each issue note: location (file and line), severity (critical/high/medium/low), description of the problem, and recommended fix.

Step 3: Create REFACTOR-PLAN.md with a prioritized 30-day plan to address the top issues. Break it into weekly sprints with specific tasks.

Step 4: Fix any critical or high severity issues you can resolve safely without changing core functionality. Document every change you make in CHANGES-LOG.md.

Do not break existing functionality. If a fix is risky, flag it in the log instead of implementing it.
```

**What you get:** Full audit docs plus actual fixes applied. A senior dev's first week on a new project, automated.

---

### 5. Complete Documentation Generator

No docs? No problem. This turns any codebase into a full README, API docs, and an onboarding guide — written for humans, not robots.

```
You are a technical writer. In this folder is a codebase with little to no documentation.

Read every file. Then produce:

README.md - A complete project README with: project description, tech stack, installation instructions, environment variables needed, usage examples, and contribution guidelines.

API-DOCS.md - Full documentation for every function, endpoint, or class. For each one include: what it does, parameters with types, return value, and a usage example.

ONBOARDING.md - A step-by-step guide a new developer could follow to get this project running from scratch in under 30 minutes.

Write in plain English. No unnecessary jargon. Format everything with proper Markdown headings, code blocks, and tables where relevant.
```

**What you get:** Three production-ready docs. Onboarding new devs or open-sourcing a project just got 10x easier.

---

### 6. Bug Triage and Fix Session

Drop a BUGS.txt in your project folder with reported issues. This prompt reads them, finds the code, diagnoses root causes, applies fixes, writes tests, and logs everything.

```
Act as my debugging partner. In this folder you'll find a codebase and a file called BUGS.txt listing reported issues.

For each bug in BUGS.txt:

Locate the relevant code. Diagnose the root cause. Implement a fix. Write a brief test to verify the fix works. Log the fix in BUG-FIX-REPORT.md with: bug description, root cause, fix applied, and test result.

After addressing all bugs, run a final check and list any issues you found but could not safely fix. Flag those in UNRESOLVED-BUGS.md with your recommended next steps.
```

**What you get:** Resolved bugs, test coverage, and a full audit trail. Your QA backlog, tackled overnight.

---

## Finance

### 7. Financial Dashboard from Raw Exports

Drag in your bank statements, expense CSVs, or invoice files. This builds a standardized master spreadsheet, a live dashboard with formulas, and a plain-English financial brief — all from messy raw data.

```
You are my CFO and financial analyst. In this folder are financial documents: bank exports, expense receipts, invoices, or CSV transaction files.

Step 1: Read and parse every file. Standardize all data into a master spreadsheet called MASTER-FINANCIALS.xlsx with columns for: date, description, category, amount, and account.

Step 2: Create a second sheet called DASHBOARD with: total revenue, total expenses, net profit, top 5 expense categories by spend, and month-over-month trends for the last 6 months. Use formulas — not hardcoded numbers.

Step 3: Write FINANCIAL-BRIEF.docx summarizing the key findings in plain English. Include: what's performing well, where money is leaking, and 3 specific recommendations to improve margins.

Flag any transactions that look unusual or uncategorized. List them in a separate tab called REVIEW-NEEDED.
```

**What you get:** A CFO-quality financial package from raw data chaos. What used to take a bookkeeper a full day, done in one run.

---

### 8. Investment Research Brief

Replace `[company/asset/sector]` with whatever you're evaluating. Cowork searches the web, pulls relevant data, and structures a complete investment research memo.

```
Act as my institutional research analyst. Search the web and compile a full research brief on [company/asset/sector].

Structure the brief as follows:

Business overview - what it does, how it makes money, key metrics.
Recent developments - last 90 days of significant news, earnings, or announcements.
Competitive landscape - top 3 competitors and how this compares.
Financial snapshot - revenue, growth rate, key ratios if publicly available.
Risk factors - top 5 risks an investor should understand.
Bull vs. bear case - one paragraph each.
Watchlist signals - 3 specific things to monitor that would change the thesis.

Save as RESEARCH-BRIEF-[NAME].docx. Use clear headings and a summary table at the top. Cite your sources inline.
```

**What you get:** A sourced, structured investment memo. Better than most paid research reports.

---

## Management

### 9. Weekly Ops Brief (Set It and Forget It)

Set this as a recurring Monday morning Cowork task. Every week it reads your files, checks your task manager, and drops a fresh weekly brief and daily focus doc into your folder.

```
You are my chief of staff. Every Monday, do the following:

Step 1: Read all files modified in the last 7 days in this folder. Identify what was completed, what's still in progress, and what hasn't been touched.

Step 2: Pull my task list from [connected tool — Notion/Asana/Linear] and identify: overdue items, items due this week, and anything without a clear owner or deadline.

Step 3: Create WEEKLY-BRIEF.docx with: a summary of last week's output (3-5 bullets), this week's top 3 priorities, a full task list organized by urgency, and any flags or blockers I need to address.

Step 4: Create this week's FOCUS.md — a single page I can open every morning showing today's top 3 tasks, the weekly goal, and one thing to say no to this week.

Save both files to this folder. Do not send anything — just create the files and notify me they're ready.
```

**What you get:** WEEKLY-BRIEF.docx and FOCUS.md, waiting every Monday morning. No more Sunday evening anxiety spirals trying to plan your week.

---

### 10. Meeting-to-Action System

Drop your meeting recordings, transcripts, or notes into a folder. This extracts every decision, every action item, every open question — and writes the follow-up email for you.

```
You are my executive assistant and project manager. In this folder you'll find meeting recordings, transcripts, or notes.

For each meeting document:

Write a 5-bullet summary of what was discussed. Extract every decision made. Extract every action item with the person responsible and deadline mentioned (if any). Flag any open questions or unresolved tensions. Write a follow-up email draft ready to send to all attendees.

Compile everything into MEETING-ACTIONS.docx with a section per meeting. Then create a master ACTION-TRACKER.xlsx with all action items across all meetings in one table — columns for: action, owner, deadline, status (open/in progress/done), and meeting it came from.
```

**What you get:** Every commitment tracked, every follow-up drafted. Nothing falls through the cracks again.

---

## Quick reference

| # | Prompt | Category | Output files |
|---|--------|----------|-------------|
| 1 | 30-Day Content Pipeline | Marketing | BRAND-VOICE.md, 5 drafts, CALENDAR.xlsx |
| 2 | Competitor Intelligence Brief | Marketing | COMPETITOR-BRIEF.docx |
| 3 | 7-Email Welcome Sequence | Marketing | EMAIL-1.txt to EMAIL-7.txt, EMAIL-SEQUENCE-OVERVIEW.docx |
| 4 | Codebase Audit and Refactor | Coding | ARCHITECTURE.md, REFACTOR-PLAN.md, CHANGES-LOG.md |
| 5 | Documentation Generator | Coding | README.md, API-DOCS.md, ONBOARDING.md |
| 6 | Bug Triage and Fix | Coding | BUG-FIX-REPORT.md, UNRESOLVED-BUGS.md |
| 7 | Financial Dashboard | Finance | MASTER-FINANCIALS.xlsx, FINANCIAL-BRIEF.docx |
| 8 | Investment Research Brief | Finance | RESEARCH-BRIEF-[NAME].docx |
| 9 | Weekly Ops Brief | Management | WEEKLY-BRIEF.docx, FOCUS.md |
| 10 | Meeting-to-Action System | Management | MEETING-ACTIONS.docx, ACTION-TRACKER.xlsx |

---

[Back to index](../README.md) | [Previous: Code vs Cowork](07-code-vs-cowork.md)
