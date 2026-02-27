---
id: getting-started
title: "Getting Started"
description: "Your first 30 minutes with Claude Cowork"
sidebar_position: 1
---

# Getting started with Claude Cowork

## Prerequisites

**Operating system:** macOS or Windows (x64 only). Not available on web or mobile.

**Claude plan:** Pro ($20/mo), Max ($100-200/mo), Team, or Enterprise. Cowork is not available on the free plan.

**Internet connection:** Required throughout the entire session.

**App:** Download the latest version of Claude Desktop from [claude.com/download](https://claude.com/download).

## The most important mindset shift

> ChatGPT trained you to write better prompts. Cowork trains you to build better context. One is a skill that depreciates. The other compounds.

Cowork is not a chatbot. It's not a text box where you type and receive a response. It's an agent that lives on your desktop, reads and writes to folders on your computer, creates professionally formatted documents, and when it doesn't have enough information to do something well, it asks you — instead of guessing and giving you polished garbage.

## Your first 30 minutes (step-by-step guide)

Block 30 minutes on your calendar. That's all you need.

### Minutes 0-5: Install and open

1. Go to [claude.com/download](https://claude.com/download) and download the desktop app
2. Sign in or create an account with at least a Pro plan
3. Open the app and look for the **Cowork** tab at the top
4. Click to switch to Cowork mode

When you enter for the first time, you'll see a message saying "Setting up Claude's workspace" — this is normal and means Cowork is configuring the environment.

### Minutes 5-10: Create your context files

This is the most underrated strategy in all of Cowork. Stop thinking about better prompts and start thinking about better files.

Create a folder called **"Claude Context"** and inside it, three markdown files:

**`about-me.md`** — Who you are, what you do, your role, what success looks like in your work. Include an example of work you're proud of.

**`brand-voice.md`** — How you communicate. Your phrases. What sounds wrong to you. Writing examples that represent your style. Your tone.

**`working-style.md`** — How you want Claude to behave. Do you prefer it asks first? Short or long outputs? What file formats do you prefer?

These files compound over time. Every week you refine them, Claude gets better at your specific work. It's the most underrated investment in this entire guide.

> **Tip:** If you prefer talking over writing, use a voice-to-text tool to dictate these files. What matters is getting your context into text — how you do it doesn't matter.

### Minutes 10-15: Set up global instructions

Go to **Settings > Cowork** in the desktop app. Click "Edit" next to Global Instructions. Paste the essentials from your three files: who you are, how you communicate, and how you want Claude to work with you. Save.

This is the one-time investment that pays back value in every session forever. See [global instructions template](templates/global-instructions.md) for role-specific examples.

### Minutes 15-20: Your first real task

Select your "Claude Context" folder. Start a new session. Type:

```
Read all the files in this folder. Then help me with [YOUR REAL TASK].
Before starting — ask me clarifying questions to make sure you're
heading in the right direction.
```

Watch what happens. Answer the questions. Iterate. Have a conversation. The best first tasks are things you already know how to do well — because you can immediately tell if the result is right or not.

### Minutes 20-25: Install a plugin

Click the **"+"** button in the chat bar. Click **Plugins** and browse the library. Choose one that fits your role. After installing, type "/" to see the slash commands it adds. Try one.

See [plugin guide](plugins-and-connectors.md) for the full list.

### Minutes 25-30: Connect a tool

Go to **Settings > Connectors**. Connect the tool you use most: Slack, Google Drive, Gmail, Notion, or whichever one. Authenticate it.

Then ask Claude something about that tool. Watch how it pulls live data instead of asking you to copy and paste anything.

That's the moment it clicks.

## Folder instructions

For recurring projects, add specific instructions when selecting a folder. Each client folder can have its own brief that Claude loads automatically. Every session with that project starts with full context, every time.

See [folder instructions template](templates/folder-instructions.md) for examples.

## Your first verification prompt

After setting everything up, open a new session and ask:

```
Before we start any work, tell me what you know about me,
how I like to work, and what preferences you have loaded.
```

If the instructions loaded correctly, Claude will reflect them clearly. If something is missing or wrong, fix it now before doing real work.

## Important things to remember

**The app must stay open.** If you close Claude Desktop, the session stops. Sleep mode is fine — the session survives. But closing the window while work is running is not.

**Claude asks permission before deleting.** It will never permanently delete files without your explicit confirmation. Enable deletion protection in settings.

**No memory between sessions.** Every session starts from scratch. Context files and global instructions are your solution. Document important decisions in files that Claude can read.

**Uses more quota than chat.** Multi-step tasks with file reading, document creation, and parallel sub-tasks use significantly more compute. If you're on Pro and do heavy daily use, monitor Settings > Usage. If you consistently hit the limit, Max may be worth it.

**Desktop only.** No mobile version, no cross-device sync. If you work on multiple computers, put your context files in a cloud-synced folder (iCloud, Dropbox, Google Drive) so at least your files are consistent.

---

