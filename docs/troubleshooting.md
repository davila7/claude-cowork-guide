---
id: troubleshooting
title: "Troubleshooting"
description: "Honest limitations, workarounds, and common issues"
sidebar_position: 8
---

# Troubleshooting and honest limitations

## Where Cowork falls short

Cowork is the best AI tool for knowledge work that exists today. It's not perfect. These are the real limitations.

### No memory between sessions

Every new Cowork session starts completely blank. No knowledge of who you are. No memory of yesterday. Nothing.

**Workaround:** works well — keep your context in markdown files (about-me.md, brand-voice.md, working-style.md) and set up solid global instructions. But you'll feel this gap, especially on long projects. Document important decisions in files that Claude can read.

### Tasks stop if you close the app

Cowork runs as an active session within Claude Desktop. If you close the app, the task stops mid-execution.

**Workaround:** sleep mode is fine — the session survives. Just don't close the window while work is running.

### Quota usage is faster than chat

Complex Cowork tasks consume more quota than regular chat. Multi-step tasks with file reading, document creation, and parallel sub-tasks use significantly more compute.

**Workaround:** if you're on Pro ($20/mo) and do heavy daily use, monitor Settings > Usage. If you consistently hit the limit, Max ($100-200/mo) may be worth it.

### Desktop only, no mobile, no sync

Cowork exists only in the desktop app. No iPhone, no web version, no sync between your laptop and desktop.

**Workaround:** put your context files in a cloud-synced folder (iCloud, Dropbox, Google Drive) so at least your files are consistent.

### No image generation

For photos, illustrations, or visual art, Cowork is not your tool. Use specialized image generation tools (Midjourney, DALL-E, Gemini Imagen) and Cowork for documents, spreadsheets, presentations, and research. Different tools for different jobs.

### It's a research preview

Anthropic is explicit: agent security for Cowork is still under active development. It's solid for a preview, but treat it accordingly. Don't run it on files you can't afford to have modified without confirmation. Enable deletion protection in settings and review plans before executing on sensitive material.

---

## Common problems and solutions

### "Setting up Claude's workspace"

**What it is:** an expected message indicating that Cowork is updating to the latest version of the environment.

**Solution:** wait for it to finish. If it takes too long, close and reopen Claude Desktop.

### Task stopped unexpectedly

**Probable cause:** the app was closed, the computer went into deep sleep, or the internet connection was lost.

**Solution:** make sure the app stays open and your computer doesn't go into sleep during execution. Check your internet connection. Light sleep (briefly closing the laptop lid) is generally fine; deep sleep or shutdown is not.

### Can't find the output files

**Checks:**

- Confirm you granted access permissions to the correct folder
- Check the location Claude indicated when completing the task
- Look in the selected folder and its subfolders
- Claude sometimes creates new subfolders — check the structure

### Claude can't see my files

**Solution:** make sure you selected the correct folder when starting the session. Claude can only access folders you explicitly grant it. If you changed folders mid-session, you may need to restart.

### A connector isn't working

**Checks:**

- Confirm you have an active subscription to the service (Gmail, Calendar, etc.)
- Verify the OAuth authentication hasn't expired
- Check the connector permissions in Settings (Allow/Ask/Block)
- Try disconnecting and reconnecting the connector
- Some connectors require specific permissions on the service side

### Claude misinterpreted my instructions

**Prevention:**

- Be more specific in your prompts (see [best practices](best-practices.md))
- Use AskUserQuestion: add "Do NOT start yet, ask me questions first"
- Always review the plan before allowing execution
- Include explicit constraints ("don't delete anything", "don't modify the original files")
- Back up before bulk operations

### Scheduled tasks didn't run

**Cause:** scheduled tasks only run while the computer is on and the Claude Desktop app is open.

**Solution:** make sure both conditions are met at the scheduled time. Check the "Scheduled" section in the sidebar.

### Output is generic and doesn't sound like me

**Cause:** lack of context. Claude is working as a generalist.

**Solution:**

- Create your context files (about-me.md, brand-voice.md, working-style.md)
- Set up global instructions with your preferences
- Install the plugin for your work area
- Include examples of previous outputs you liked in the folder

### Claude can't push to GitHub / connect to services

**Cause:** you probably don't have the corresponding connector enabled.

**Solution:** go to Settings > Connectors and search for the service. If it exists as a connector, add it and authenticate. If it doesn't exist as an official connector, you can configure a custom MCP server.

## Giving feedback

If you find an issue or have a suggestion, use the feedback button available in the Cowork interface. Anthropic actively uses this feedback to improve the product during the research preview.

---

