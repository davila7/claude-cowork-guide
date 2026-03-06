# Claude Cowork Brain

> Your central brain to understand, master, and get the most out of Claude Cowork.

## What is Claude Cowork?

Cowork is the agentic extension of Claude Desktop that brings Claude Code's capabilities to everyday knowledge work. Instead of answering prompts one by one, Claude can take complex multi-step tasks and execute them autonomously: organizing files, creating reports, generating presentations, analyzing data, and much more.

> ChatGPT trained you to write better prompts. Cowork trains you to build better context. One is a skill that depreciates. The other compounds.

**Current status:** Research Preview (launched January 12, 2026)

**Availability:** Paid plans (Pro $20/mo, Max $100-200/mo, Team, Enterprise) on macOS and Windows

**Origin:** Built on the same agentic architecture as Claude Code. Boris Cherny reportedly built Cowork in ~10 days using Claude Code itself.

## The 5 Pillars of Cowork

| # | Pillar | What it does |
|---|--------|-------------|
| 1 | **File System Access** | Reads and writes files in a folder on your computer |
| 2 | **AskUserQuestion** | Asks YOU instead of guessing and getting it wrong |
| 3 | **Plugins** | Specialist packs for your exact role |
| 4 | **Instructions** | Permanent memory that loads in every session |
| 5 | **Connectors** | Live integrations with Slack, Drive, Notion, and 50+ tools |

## Project structure (what you download)

This repository is organized as a real Cowork workspace. When you clone it, you get a ready-to-use project structure:

```
claude-cowork-guide/
│
├── .claude/                           # ⚙️ Claude project configuration
│   ├── CLAUDE.md                      #    Project instructions (Claude reads this first)
│   └── settings.json                  #    Project settings and folder mapping
│
├── CLAUDE.md                          # 📋 Root instructions file (auto-loaded by Cowork)
│
├── context/                           # 🧠 Your personal context (fill these in)
│   ├── about-me.md                    #    Who you are, your role, your goals
│   ├── brand-voice.md                 #    Your tone, phrases, writing style
│   └── working-style.md              #    How you want Claude to behave
│
├── plugins/                           # 🔌 Plugin configuration
│   ├── .claude-plugin/
│   │   └── plugin.json                #    Plugin manifest
│   ├── .mcp.json                      #    MCP tool connections
│   ├── commands/
│   │   └── setup-check.md             #    /setup-check command
│   └── skills/
│       └── setup-best-practices.md    #    Setup knowledge for Claude
│
├── templates/                         # 📝 Ready-to-use templates
│   ├── context-files/                 #    Original context file templates
│   │   ├── about-me.md
│   │   ├── brand-voice.md
│   │   └── working-style.md
│   ├── global-instructions.md         #    Global instruction templates by role
│   ├── folder-instructions.md         #    Per-folder instruction templates
│   └── task-prompts.md                #    Tested prompts for common tasks
│
├── docs/                              # 📚 Full documentation
│   ├── 00-definitive-setup-guide.md   #    Complete setup guide (by @witcheer)
│   ├── 01-getting-started.md          #    Your first 30 minutes
│   ├── 02-features.md                 #    The 5 pillars and capabilities
│   ├── 03-best-practices.md           #    Philosophy and best practices
│   ├── 04-plugins-and-connectors.md   #    Plugins, MCP, connectors
│   ├── 05-use-cases.md                #    Use cases with real prompts
│   ├── 06-troubleshooting.md          #    Limitations and solutions
│   ├── 07-code-vs-cowork.md           #    Claude Code vs Cowork
│   └── 08-plugins-tier-list.md        #    Tier list of all 21 plugins
│
├── examples/                          # 💡 Real-world examples
│   ├── file-organization.md           #    Organizing files
│   ├── research-synthesis.md          #    Research synthesis
│   └── data-analysis.md              #    Data analysis
│
└── README.md                          # This file
```

### How each folder works

| Folder | Purpose | When it loads |
|--------|---------|---------------|
| `.claude/` | Project config — tells Claude how to treat this workspace | Automatically at session start |
| `context/` | Your identity, voice, and preferences | When Claude reads the workspace |
| `plugins/` | Skills and slash commands for Cowork | When plugin is installed |
| `templates/` | Starting points you copy and customize | On demand |
| `docs/` | Reference guides and documentation | On demand |
| `examples/` | Concrete examples with prompts and results | On demand |

## Quick start (30 minutes)

1. **Minutes 0-5:** Clone this repo and download the app from [claude.com/download](https://claude.com/download)
2. **Minutes 5-10:** Fill in your [context files](context/) (`about-me.md`, `brand-voice.md`, `working-style.md`)
3. **Minutes 10-15:** Set up [global instructions](templates/global-instructions.md) in Settings > Cowork
4. **Minutes 15-20:** Point Cowork to this folder and run `/setup-check` to verify your config
5. **Minutes 20-25:** Install a [plugin](docs/04-plugins-and-connectors.md) for your role
6. **Minutes 25-30:** Connect a tool (Slack, Drive, Gmail) in Settings > Connectors

> Detailed step-by-step guide: [Getting started](docs/01-getting-started.md) | Complete reference: [The Definitive Setup Guide](docs/00-definitive-setup-guide.md)

## Main guides

| Guide | Description |
|-------|-------------|
| [The Definitive Setup Guide](docs/00-definitive-setup-guide.md) | Complete setup from zero: requirements, workspace, context files, plugins, connectors, safety |
| [Getting started](docs/01-getting-started.md) | Your first 30 minutes, context files, global instructions |
| [Features](docs/02-features.md) | The 5 pillars of Cowork and technical capabilities |
| [Best practices](docs/03-best-practices.md) | "Context > prompts" philosophy, patterns and anti-patterns |
| [Plugins and connectors](docs/04-plugins-and-connectors.md) | Plugins by role, slash commands, connectors, MCP |
| [Use cases](docs/05-use-cases.md) | Practical examples with ready-to-use prompts |
| [Troubleshooting](docs/06-troubleshooting.md) | Honest limitations, workarounds, and common issues |
| [Code vs Cowork](docs/07-code-vs-cowork.md) | When to use Claude Code, when to use Cowork, and when to use both |
| [Plugins tier list](docs/08-plugins-tier-list.md) | Honest ranking of all 21 plugins after four weeks of daily use |

## Context files (fill these in first)

| File | Purpose |
|------|---------|
| [about-me.md](context/about-me.md) | Who you are, your role, and what success looks like |
| [brand-voice.md](context/brand-voice.md) | Your tone, phrases, and communication style |
| [working-style.md](context/working-style.md) | How you want Claude to behave and output preferences |

## Templates

| Template | Purpose |
|----------|---------|
| [Global instructions](templates/global-instructions.md) | Preferences by role (PM, analyst, marketing) |
| [Folder instructions](templates/folder-instructions.md) | Per-project context |
| [Tested prompts](templates/task-prompts.md) | Ready-to-copy-and-use prompts |

## The prompt that changes everything

```
I want [YOUR TASK] so that [WHAT SUCCESS LOOKS LIKE].
First, read all files completely before responding.
Do NOT start executing yet. Ask me clarifying questions
to refine the approach. Only start working when we're aligned.
```

## Key concepts

**Agentic:** Claude doesn't just respond — it plans, executes sub-tasks in parallel, and delivers complete results.

**Isolated VM:** Cowork runs in a lightweight virtual machine on your computer, separate from your operating system.

**MCP (Model Context Protocol):** Anthropic's open protocol for connecting AI with external tools.

**Skills:** Specialized knowledge that Claude uses automatically to create high-quality documents.

**Plugins:** Packages that bundle skills, slash commands, MCP connectors, and sub-agents for specific domains.

**Context files:** Markdown files that store your identity, voice, and preferences. They compound over time.

## Sources

- [Get started with Cowork — Claude Help Center](https://support.claude.com/en/articles/13345190-get-started-with-cowork)
- [Introducing Cowork — Claude Blog](https://claude.com/blog/cowork-research-preview)
- [Cowork and plugins across enterprise — Claude Blog](https://claude.com/blog/cowork-plugins-across-enterprise)
- [Knowledge Work Plugins — GitHub](https://github.com/anthropics/knowledge-work-plugins)
- [Claude Cowork Complete Guide — God of Prompt](https://www.godofprompt.ai/blog/claude-cowork-complete-guide)
