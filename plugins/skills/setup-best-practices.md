# Skill: Setup Best Practices

## Description

This skill provides Claude with knowledge about how to properly set up and configure a Cowork workspace, including context files, global instructions, folder instructions, and plugin installation.

## Knowledge

### Context files strategy

Create three core context files in the `context/` folder:

- **about-me.md** — Who you are, your role, what success looks like
- **brand-voice.md** — How you communicate, your tone, phrases you use and avoid
- **working-style.md** — How you want Claude to behave, output preferences, guardrails

### Global instructions

Keep them concise. They load every session and consume context window:

```
I'm [Name], [Role] at [Company]. I work on [domain].
Communication: Direct, concise, no filler.
Process: Ask clarifying questions before starting complex tasks.
Safety: Never delete files without my explicit approval.
```

### Folder instructions

Use for project or client-specific context. Each folder can have its own brief that activates when selected in Cowork.

### Plugin installation

1. Browse plugins in Cowork's "Customise" menu
2. Start with Productivity + one role-specific plugin
3. Customise after installing to add company-specific context
