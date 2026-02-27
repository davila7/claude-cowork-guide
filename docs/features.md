---
id: features
title: "Features and Capabilities"
description: "The 5 pillars of Cowork and technical capabilities"
sidebar_position: 2
---

# Features and capabilities

## The 5 Pillars of Cowork

Cowork is not a single feature — it's five, ranked here by how much they impact the way you work.

| # | Pillar | In 10 words |
|---|--------|-------------|
| 1 | File System Access | Claude reads and writes files in a folder on your computer |
| 2 | AskUserQuestion | Cowork asks YOU instead of guessing and getting it wrong |
| 3 | Plugins | Specialist packs that make Claude an instant expert |
| 4 | Instructions | Permanent memory that loads at the start of every session |
| 5 | Connectors | Live integrations with Slack, Drive, Notion, and 50+ tools |

## Architecture

Cowork is built on the same foundations as Claude Code, using the Claude Agent SDK. The key difference is that Cowork is designed for general knowledge work, not just programming.

Claude runs inside a lightweight Linux virtual machine (VM) (Ubuntu 22) on your computer. This provides an isolated, secure environment separate from your main operating system.

---

## Pillar 1: File System Access

Every other AI tool works with uploads. You export a file, drag it to the chat, wait, get an output, download it, put it back where it came from. Cowork eliminates that entire loop.

You select a folder. Claude reads everything inside it. When it creates something — a document, a spreadsheet, a summary — it saves it directly to that folder.

This sounds like a minor thing. It's not. It's the difference between AI as a tool you go to and AI as a collaborator that works in your environment. Cowork can read your old reports to match your format, pull data from last month's spreadsheet to build this month's, or reference your brand guidelines mid-task without you mentioning them.

**Supported operations:** create files, edit content, rename, move between folders, organize directory structure.

### The context files strategy

Create a "Claude Context" folder with three files:

- **`about-me.md`** — who you are, what you do, your role, what success means to you
- **`brand-voice.md`** — how you communicate, your phrases, what sounds wrong, your tone
- **`working-style.md`** — how you want Claude to behave, preferred formats, level of detail

The more quality context you give Claude in these files, the less prompting you need. Output quality goes from "generic AI" to "this sounds like something I'd write."

## Pillar 2: AskUserQuestion

This is what every other AI does when you give it an ambiguous task: it guesses. Confidently. It picks an interpretation, executes it, and gives you a polished output that answers the wrong question.

Cowork does something different. When it needs more information, it stops and generates structured questions: multiple choice, specific options, a form that helps you think about what you actually want.

### How to activate it

Add this line to the end of any prompt:

```
Do NOT start working yet. First, ask me clarifying questions
so we can define the approach together. Only start when we're
aligned.
```

Or use this as your default opener for almost any task:

```
I want [YOUR TASK] so that [WHAT SUCCESS LOOKS LIKE].
First, read all uploaded files completely before responding.
Do NOT start executing yet. Ask me clarifying questions
(use AskUserQuestion) to refine the approach. Only start working
when we're aligned.
```

Try it once. You won't go back to writing long, carefully crafted prompts from scratch.

## Pillar 3: Plugins

Without a plugin, Claude Cowork is a brilliant generalist. It can write, research, analyze, organize, and build. But it doesn't know your industry's terminology, your team's workflow, or the specific outputs your role requires.

Plugins change that. They are packages of skills, slash commands, and sub-agents designed for specific work functions. See the [full plugin guide](plugins-and-connectors.md).

## Pillar 4: Instructions (Global and Per-Folder)

Cowork has no memory between sessions. Every time you open a new conversation, Claude starts completely blank. No knowledge of who you are. No memory of what you discussed yesterday. Nothing.

This is the feature that frustrates people the most — until they discover Instructions.

**Global Instructions:** configured once in Settings > Cowork. They load automatically in every session. Claude starts knowing your name, your role, your communication preferences, your output defaults, and your working style.

**Folder Instructions:** project-specific context. When you select a folder, Claude loads the associated instructions. Perfect for client work: each folder can have its own brief.

## Pillar 5: Connectors

The typical AI workflow involves a lot of copy-paste. You capture your Slack thread. Copy the doc. Paste it in the chat. Add context manually.

Connectors eliminate all of that. Connect your tools once, and Claude can reference live data from them during the conversation. No copy-paste. No screenshots. No downloads.

Ask Cowork to summarize key decisions from #project-alpha over the past two weeks and it reads your Slack. Ask it for Q1 numbers from the revenue doc in Drive and it opens your Google Doc. Ask it to find everything tagged as a blocker in Notion and it searches your workspace.

This is free on all plans. It's the most underused feature in Cowork.

---

## Additional technical capabilities

### Multi-step agentic execution

Claude doesn't wait for step-by-step instructions. It takes a complex task, breaks it down into sub-tasks, executes them autonomously, and delivers complete results.

### Parallel sub-agents

For complex tasks, Claude launches multiple sub-agents that work simultaneously on different parts of the problem.

### Professional document creation

Claude has specialized "skills" for each document type:

- **Excel (.xlsx):** functional formulas, conditional formatting, charts, data analysis
- **PowerPoint (.pptx):** design, diagrams, speaker notes
- **Word (.docx):** professional formatting, tables of contents, headers
- **PDF:** creation, extraction, merge, split, forms
- **HTML/React:** interactive web applications and visualizations
- **Markdown:** reports, guides, and documentation

### Task queue

You can send multiple tasks at once. Claude processes them without requiring sequential interaction.

### Scheduled tasks

Using `/schedule`, you configure tasks that run automatically on a recurring basis. Requirement: the computer must be on and the app must be open.

### Web browsing

Claude searches for information with WebSearch and WebFetch. With Claude in Chrome installed, it can interact directly with web pages.

### Excel + PowerPoint integration

In research preview, Claude can pass context between Excel and PowerPoint. Available for Mac on Max, Team, or Enterprise plans.

### No image generation

For photos, illustrations, or visual art, Cowork is not your tool. Use specialized image generation tools for that and Cowork for documents, spreadsheets, presentations, and research. Different tools for different jobs.

## File types with special rendering

These formats have built-in visualization in the interface: Markdown (.md), HTML (.html), React (.jsx), Mermaid (.mermaid), SVG (.svg), PDF (.pdf).

## Security and permissions

**Isolation:** the VM is separate from the main operating system.

**Access control:** you choose which folders and connectors Claude can see.

**Deletion protection:** Claude requires explicit permission before deleting files.

**Granular permissions:** for each connector you can configure tools as Allow (automatic), Ask (confirms before), or Block (never executes).

**Research preview:** Anthropic is explicit about this — agent security for Cowork is still under development. It's solid for a preview, but treat it accordingly. Don't run it on files you can't afford to have modified without confirmation.

---

