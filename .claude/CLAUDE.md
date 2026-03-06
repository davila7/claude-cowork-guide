# Claude Cowork Guide — Project Instructions

## What this project is

This is a complete setup kit for Claude Cowork. When a user downloads this repository, they get a ready-to-use workspace structure with context files, templates, plugins configuration, and documentation.

## Project structure

```
.claude/                → Project configuration (this directory)
context/                → User context files (about-me, brand-voice, working-style)
plugins/                → Plugin manifests and custom commands
  └── .claude-plugin/   → Plugin registry
templates/              → Ready-to-use templates for instructions and prompts
docs/                   → Full documentation and guides
examples/               → Real-world usage examples
```

## Rules for Claude

- Always read context files before starting any task
- Never delete user files without explicit confirmation
- Save generated outputs in the appropriate subfolder
- Use markdown for all documentation
- Follow the file naming convention: YYYY-MM-DD-descriptive-name
- When creating documents, match the user's brand voice from context/brand-voice.md

## How users should set this up

1. Clone or download this repository
2. Copy `context/` files and fill in personal details
3. Set global instructions from `templates/global-instructions.md`
4. Install plugins from `plugins/`
5. Point Cowork to this folder as the working directory
