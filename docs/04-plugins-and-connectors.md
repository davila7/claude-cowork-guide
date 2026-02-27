# Plugins and connectors

## MCP: Model Context Protocol

MCP is Anthropic's open protocol for connecting AI with external tools. It's the standard that allows Claude to communicate with services like Gmail, Google Calendar, Slack, Linear, and others. Each connector authenticates securely via OAuth or API keys.

## Plugins: from generalist to specialist

Without a plugin, Claude Cowork is a brilliant generalist. It can write, research, analyze, organize, and build. But it doesn't know your industry's terminology, your team's workflow, or the specific outputs your role requires.

Plugins change that. They are packages of skills, slash commands, sub-agents, and MCP connectors designed for specific work functions.

### Official Anthropic plugins

Anthropic launched plugins for these areas in January 2026 and continues expanding the library:

| Plugin | For whom | What it does |
|--------|----------|-------------|
| **Productivity** | Anyone | Task management, calendars, daily workflows |
| **Marketing** | Marketers | Content drafts, campaign planning, brand voice |
| **Sales** | Salespeople | Account research, call prep, outreach, battlecards |
| **Finance** | Finance teams | Financial modeling, analysis, reports |
| **Data Analysis** | Analysts | SQL, dashboards, dataset exploration, anomaly detection |
| **Legal** | Lawyers | Contract review, legal research, drafting |
| **Product Management** | PMs | Specs, roadmaps, user stories |
| **Customer Support** | Support teams | Ticket handling, response drafts |
| **Enterprise Search** | Everyone | Search across connected tools |
| **Biology Research** | Researchers | Scientific literature and data |
| **HR** | Human resources | Personnel management, processes |
| **Design** | Designers | Design workflows |
| **Engineering** | Engineers | Technical documentation, processes |
| **Operations** | Operations teams | Operational management |

### How to install a plugin

1. Open Claude Cowork
2. Click the **"+"** button in the chat bar, then **"Plugins"** to browse the library
3. Or go to [claude.com/plugins](https://claude.com/plugins) to see everything available
4. Choose the plugin and click **Install**
5. Type **"/"** in any Cowork chat to see the slash commands it added

### First prompts by plugin

**After installing Productivity:**
```
/productivity:start Let's review what I need to do today and set up my task list.
```

**After installing Marketing:**
```
/marketing:draft-content Write a LinkedIn post about [topic]. Use the tone
from my brand-voice.md file. Audience: [audience]. Goal: [what I want
people to do].
```

**After installing Data Analysis:**
```
/data:explore I have a CSV in this folder. Give me a summary of what it contains,
flag anomalies, and suggest three analyses worth running.
```

**After installing Sales:**
```
/sales:account-research Research the company [name] for me. I need: size,
industry, competitors, recent news, and 3 talking points
for a discovery call.
```

The output with an active plugin is noticeably more structured and opinionated than a generic prompt. The plugin knows what good output looks like for your function.

### Plugin structure

```
my-plugin/
|-- plugin.json          # Plugin manifest
|-- .mcp.json            # MCP tool connections
|-- commands/            # Slash commands
|-- skills/              # Auto-activated skills
```

### Customizing plugins

You can adapt any plugin to your needs:

- **Change connectors:** edit `.mcp.json` to point to your tool stack
- **Add company context:** include your terminology, organizational structure, and processes in the skill files
- **Adjust workflows:** modify flows to match how your team actually works

---

## Connectors: live integrations

### How to connect tools

1. Go to **Settings > Connectors** in Claude Desktop
2. Browse the directory (50+ integrations)
3. Click a connector and press **"Add"**
4. Authenticate with the tool. Done.

It's done only once. After that, Claude accesses live data from that tool in every session.

### First prompts with connectors

**After connecting Slack:**
```
Search my Slack messages from the last 7 days and give me a summary of
everything I need to follow up on. Organize by urgency.
```

**After connecting Google Drive:**
```
Find the most recent document about [project name] in my Drive.
Read it and tell me the three most important things I need to know.
```

**After connecting Gmail:**
```
Review my unread emails from today. Classify them by priority and tell me
which ones require an immediate response.
```

**After connecting Google Calendar:**
```
Show me my schedule for tomorrow. Identify schedule conflicts and
suggest a priority order for my meetings.
```

### Connection types

**Web connectors:** work everywhere, including claude.ai. Can be built-in (by Anthropic) or custom (HTTP Streamable + OAuth).

**Desktop connectors:** local MCP servers packaged by Anthropic for one-click installation.

**Custom MCP servers:** manually configured by editing a JSON configuration file.

### Available connectors (February 2026)

**Productivity:** Google Workspace (Calendar, Drive, Gmail), Slack, Notion, Asana, Figma

**Sales and CRM:** Apollo, Clay, Outreach, Common Room

**Legal:** DocuSign, LegalZoom, Harvey

**Finance and data:** FactSet, MSCI, LSEG, S&P Global

**Marketing and content:** WordPress, Similarweb

**Development:** Linear, GitHub

All connectors are free. You just need a paid Claude plan and an active subscription to the service you want to connect.

### Permissions per connector

For each connector, configure individual tools with three levels:

- **Allow:** executes automatically without asking
- **Ask:** confirms with you before executing
- **Block:** never executes

Practical example: you can allow Claude to search your emails (Allow) but require confirmation to send (Ask) or block it from deleting emails (Block).

---

## Enterprise: Private marketplaces

Team and Enterprise administrators can:

- Create private plugin marketplaces for their organization
- Use private GitHub repositories as plugin sources (private beta)
- Provision plugins per user
- Configure auto-installation of plugins for the team
- Create department-specific plugins (HR, legal, finance, etc.)

Everything is managed from the **Customize** menu that unifies plugins, skills, and connectors.

## Resources

- [Open source plugin repository](https://github.com/anthropics/knowledge-work-plugins)
- [Blog: Cowork and plugins across enterprise](https://claude.com/blog/cowork-plugins-across-enterprise)
- [Plugin directory](https://claude.com/plugins)

---

[Back to index](../README.md) | [Previous: Best practices](03-best-practices.md) | [Next: Use cases](05-use-cases.md)
