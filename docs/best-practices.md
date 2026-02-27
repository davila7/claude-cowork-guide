---
id: best-practices
title: "Best Practices"
description: "Context over prompts — philosophy and patterns"
sidebar_position: 3
---

# Best practices

## The core philosophy

> Stop thinking about better prompts. Start thinking about better context.

The people who get the most out of AI aren't the ones who write the cleverest prompts. They're the ones who built systems: files that store their context, instructions that persist between sessions, plugins that specialize their tool, a setup that improves every week.

## 1. Build your context file system

This is the number one practice. Before anything else.

Create a "Claude Context" folder with three files:

**`about-me.md`** — Who you are. What you do. Your role. An example of work you're proud of. What success means in your job.

**`brand-voice.md`** — How you communicate. Phrases you use. What sounds wrong to you. Writing examples that represent your style. Your tone.

**`working-style.md`** — How you want Claude to behave. Ask first? Short or long outputs? What formats do you prefer? What it should NOT do.

These files compound over time. Every week you refine them, Claude gets better at your specific work.

## 2. Use AskUserQuestion as your first step

Don't try to write the perfect prompt. Let Cowork figure out what it needs to know.

**The universal pattern:**

```
I want [YOUR TASK] so that [WHAT SUCCESS LOOKS LIKE].
First read all files. Do NOT start executing yet.
Ask me clarifying questions to refine the approach.
Only start when we're aligned.
```

If the first round of questions doesn't align you, say so. Claude will generate a new set and you'll keep iterating. This is especially powerful with the million-plus token context window — when Claude has read all relevant files and clarified the task, the output is consistently grounded in what's actually true.

## 3. Be specific in the instructions you give

When you DO write direct instructions, be specific. Vague requests produce vague results.

**Bad:**
> "Make me a report"

**Good:**
> "Create a Word report with Q4 2025 sales data from the sales.xlsx file. Include an executive summary, trend charts by region, and recommendations. Formal tone, directed at the leadership team. Maximum 6 pages."

Key elements: what you want (output format), where to get it (sources), how it should look (tone, style, structure), who it's for (audience), and what NOT to do (constraints).

## 4. Limit folder access

Don't give Claude access to your entire disk. Create specific project folders and grant access only to the ones needed. This reduces risk and helps Claude focus.

## 5. Back up before file operations

Before asking Claude to reorganize, rename, or massively modify files, make a backup. Claude can misinterpret instructions and some operations are hard to reverse.

## 6. Set up solid global instructions

This is the one-time investment that pays in every session forever. Ideas:

- "Always respond in English"
- "I'm a product manager at a fintech startup"
- "I prefer concise documents, no filler"
- "Naming convention: YYYY-MM-DD-descriptive-name"
- "If you're unsure about something, ask before acting"
- "Never use bullet points unless I specifically ask"

See [full template](templates/global-instructions.md) for more role-specific examples.

## 7. Use folder instructions for projects

Each client or project folder can have its own brief that Claude loads automatically. You never repeat context.

## 8. Review the plan before executing

Always. It's much easier to course-correct before execution than after.

## 9. Manage your quota wisely

Cowork uses significantly more quota than regular chat. Strategies:

- Use regular chat for questions that don't need file access
- Group related tasks into a single session
- Monitor Settings > Usage
- Reserve Cowork for tasks that truly benefit from agentic execution
- If you're on Pro and do heavy daily use, consider Max ($100-200/mo)

## 10. Leverage iteration

If the first result isn't exact, don't start from scratch. Ask for specific adjustments on what was already generated.

## 11. Install the right plugin

With an active plugin, the output is noticeably more structured and opinionated than a generic prompt. The plugin knows what good output looks like for your function. Don't work as a generalist if there's a plugin for your area.

## 12. Connect your tools

Connect at least one tool (Slack, Drive, Notion, Gmail). It's done only once. After that, Claude accesses live data from that tool in every session. It's the most underused feature in Cowork.

## 13. Explore a new feature every day

Dedicate 10 minutes a day to trying something new. A different task type, a connector you haven't used, a new output format. These experiments accumulate and expand your practical knowledge.

## 14. Sync your context files to the cloud

If you work on multiple computers, put your context files in a synced folder (iCloud, Dropbox, Google Drive). Cowork is desktop-only and doesn't sync between devices, but your files can be.

## Anti-patterns to avoid

**Ambiguous instructions:** "Improve this" without specifying what "better" means in your context.

**Overly broad folders:** Giving access to your entire ~/Documents when you only need a subfolder.

**Not reviewing the plan:** Letting Claude execute without verifying it understood correctly.

**Trivial tasks in Cowork:** Using Cowork for questions that regular chat can handle without burning extra quota.

**No backup:** Bulk operations on files without a backup.

**Excessively long prompts:** Instead of writing a 500-word prompt, put the context in files and use AskUserQuestion. Context in files compounds; long prompts get discarded.

**Not using plugins:** Working as a generalist when there's a plugin for your specific area.

**Closing the app during a task:** Sleep mode is fine — the session survives. But closing the window stops everything.

---

