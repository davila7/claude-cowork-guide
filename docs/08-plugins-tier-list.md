# Plugins tier list

> Some of these plugins are genuinely transformative, and some are barely useful out of the box. This is the tier list nobody else is publishing.

## Why a tier list matters

Anthropic shipped 21 plugins for Claude Cowork. The original 11 launched January 30, 2026. Ten more dropped February 24. Not all plugins deliver equally. Some work immediately. Some need significant customization. Some aren't ready yet.

This ranking is based on four weeks of daily use across real deliverables — client proposals, financial models, content calendars, contract reviews, dataset explorations. Not demos. Not test prompts. Actual paid work.

> The difference between a generic Cowork prompt and a plugin-powered prompt is the difference between asking a smart generalist and asking someone who's done your specific job for five years.

## What plugins actually are

Most people think plugins are just better prompts. They're not. A plugin is a folder containing four things:

| Component | What it does |
|-----------|-------------|
| **Skills** | Domain expertise Claude draws on automatically |
| **Slash commands** | Structured workflows you trigger explicitly |
| **Connectors** | Live integrations with external tools via MCP |
| **Sub-agents** | Parallel workers Claude can spin up for complex tasks |

When you install the Sales plugin, you're not just getting a "write me a sales email" prompt. You're loading an entire sales methodology into Claude's working memory. It knows what a good call prep looks like. It knows how to structure a competitive battlecard. It knows to ask about deal stage before drafting outreach.

## The tier list

### S-Tier: install these immediately

These plugins changed how I work within the first session.

#### 1. Data Analysis

The single most impressive plugin in the entire library.

Drop a CSV into your Cowork folder. Type `/data:explore`. Claude reads the full dataset, summarizes every column, flags anomalies, detects data quality issues, and suggests three analyses worth running — all before you've told it what you're looking for.

```
/data:explore I have a CSV in this folder. Give me a summary of what it contains,
flag anomalies, and suggest three analyses worth running.
```

Then type `/data:write-query` and describe what you want in plain English. It writes the SQL, validates the query, and explains what it's doing and why. If you connect it to Snowflake, Databricks, or BigQuery through the connectors, it runs queries against live data.

**Real result:** A client's quarterly revenue data — 45,000 rows across three product lines. Within eight minutes, Claude identified a pricing anomaly in their mid-tier plan costing roughly $14,000 per month in undercharged renewals. The client's data team had missed it for two quarters.

**Connectors:** Snowflake, Databricks, BigQuery, Hex, Amplitude, Jira.

> For anyone who works with data but isn't a data engineer, this plugin alone justifies the $20/month Pro subscription.

#### 2. Productivity

The plugin everyone should install first, regardless of role.

It manages tasks, calendars, daily workflows, and personal context. Type `/productivity:start` and Claude reviews your day, organizes priorities, and sets up your task list.

```
/productivity:start Let's review what I need to do today and set up my task list.
```

What makes it S-tier isn't any single feature — it's that it compounds. After a week of use, the Productivity plugin paired with good context files and global instructions makes Claude feel like a chief of staff who actually knows your schedule, your priorities, and your working style.

**Connectors:** Slack, Notion, Asana, Linear, Jira, Monday, ClickUp, Microsoft 365.

#### 3. Sales

If you do any prospecting, account management, or outreach, this plugin is absurdly good.

`/sales:call-prep` pulls context from your CRM (via HubSpot, Close, or Clay connectors), researches the prospect's company, identifies recent news and triggers, and produces a structured briefing doc with talking points, potential objections, competitive positioning, and suggested next steps.

```
/sales:call-prep Research [prospect name] at [company]. Pull CRM context
and prepare a full briefing with talking points and objections.
```

The battlecard command (`/sales:battlecard`) is particularly strong. Feed it your product info and a competitor, and it builds a side-by-side comparison with specific rebuttal language — not generic "we're better because" talking points, but actual responses mapped to specific competitor claims.

**Real result:** Replaced what used to take 90 minutes of pre-call prep. Now done in under 10.

**Connectors:** Slack, HubSpot, Close, Clay, ZoomInfo, Notion, Jira, Fireflies, Microsoft 365.

---

### A-Tier: genuinely useful — worth installing for your role

These plugins deliver strong results but are more role-specific.

#### 4. Legal

The plugin that triggered $285 billion in market value losses. Thomson Reuters fell 18%, RELX dropped 14%, Wolters Kluwer fell 13%, LegalZoom plunged 20%.

It automates contract review, NDA triage, compliance workflows, legal briefings, and templated responses. It doesn't replace lawyers — but it does the 60% of legal work that used to get delegated to junior associates and paralegals.

A-tier (not S-tier) because it requires significant customization to match your organization's specific playbook and risk tolerances. Out of the box, it's powerful. Customized, it's devastating.

**Connectors:** Slack, Box, Egnyte, Jira, Microsoft 365, Harvey (added February 24).

#### 5. Product Management

`/product-management:write-spec` takes a vague product idea and turns it into a structured specification with user stories, acceptance criteria, and technical requirements. It asks clarifying questions first (using AskUserQuestion), so the output is grounded in your actual constraints.

The roadmap command synthesizes your backlog, stakeholder input, and competitive context into a prioritized roadmap. The competitive analysis feature produces a structured brief that would take a PM two to three hours to assemble manually.

**Connectors:** Slack, Linear, Asana, Monday, ClickUp, Jira, Notion, Figma, Amplitude, Pendo, Intercom, Fireflies.

#### 6. Marketing

Content drafting, campaign planning, brand voice enforcement, competitor briefings, and performance reporting. Covers the full content lifecycle.

`/marketing:draft-content` is the standout. Point it at your `brand-voice.md` file, specify audience and goal, and it produces content that actually sounds like your brand. Not "AI voice." Your voice.

**Connectors:** Slack, Canva, Figma, HubSpot, Amplitude, Notion, Ahrefs, SimilarWeb, Klaviyo.

#### 7. Finance

PwC partnered with Anthropic specifically around this plugin category.

Handles journal entries, account reconciliation, financial statement generation, variance analysis, close management, and audit support. The cross-app workflow between Excel and PowerPoint is where it shines — Claude analyzes data in Excel and passes context directly into a formatted, branded PowerPoint.

**Connectors:** Snowflake, Databricks, BigQuery, Slack, Microsoft 365, FactSet, MSCI.

---

### B-Tier: solid foundation — needs your customization to shine

These plugins work and produce useful output, but feel more like starting templates than finished products. Budget 30–60 minutes to customize them.

#### 8. Customer Support

Ticket triage, response drafting, escalation packaging, customer context research, and knowledge base article creation. The loop from "resolved ticket" to "published KB article" is smart — it identifies patterns in resolved issues and suggests documentation.

B-tier because default response templates are too generic. Feed it your company's tone, escalation criteria, and SLA structure to unlock its potential.

**Connectors:** Slack, Intercom, HubSpot, Guru, Jira, Notion, Microsoft 365.

#### 9. HR (new — February 24)

Offer letter drafting, onboarding plans, performance reviews, and compensation analyses. The performance review workflow structures feedback around specific, observable behaviors rather than vague personality assessments. The compensation analysis can flag equity gaps across teams once configured with your bands and market data.

**Connectors:** Requires company-specific configuration.

#### 10. Engineering (new — February 24)

Standup summaries, incident response coordination, deploy checklists, and postmortem drafting. The postmortem template prompts for timeline, root cause, contributing factors, customer impact, and action items with owners and deadlines — better than most internal templates.

Needs customization to match your team's incident severity levels and communication protocols.

#### 11. Operations (new — February 24)

Process documentation, vendor evaluations, change request tracking, and runbook creation. The vendor evaluation workflow structures comparisons across defined criteria and produces a decision matrix. The runbook command turns verbal descriptions into step-by-step documentation.

Operations workflows vary enormously between companies. The plugin gives you the scaffolding — you supply the specifics.

#### 12. Design (new — February 24)

Critique frameworks, UX copy drafting, accessibility audits, and user research plan structuring. Aimed at design teams, not graphic design — it won't generate images.

The accessibility audit flags WCAG compliance issues with specific remediation suggestions. UX copy drafting depends heavily on your `brand-voice.md` file being well-written.

#### 13. Financial Analysis (new — February 24)

Market research, competitive analysis, financial modeling, and PowerPoint creation and quality checking. The generalist finance plugin — useful across roles. The cross-app Excel-to-PowerPoint workflow is the standout. Needs company-specific templates and data sources.

#### 14. Investment Banking (new — February 24)

Transaction document review, comparable company analyses, and pitch material preparation. Strong framework for deal workflows. Needs your firm's formatting standards, precedent transactions database, and sector coverage.

#### 15. Equity Research (new — February 24)

Earnings transcript parsing, financial model updates with new guidance, and research note drafting. The transcript parsing extracts key metrics, management commentary, and guidance changes immediately. Research note drafting needs heavy customization to match publishing standards.

#### 16. Private Equity (new — February 24)

Deal sourcing support, large document set review, standardized financial data extraction, scenario modeling, and opportunity scoring against investment criteria. The document review capability is the most immediately valuable. Scoring frameworks need your fund's specific criteria.

#### 17. Brand Voice by Tribe AI (partner plugin)

Analyzes your existing documents, marketing materials, and conversations to distill your brand's voice into clear, enforceable guidelines. Give it 10–20 examples of your writing and it produces a brand voice guide that other plugins can reference. Useful for teams standardizing their voice across multiple writers.

---

### C-Tier: promising concept, limited out-of-box value

These plugins have clear potential but aren't delivering consistently yet. Install them only if your role demands it.

#### 18. Enterprise Search

The concept is powerful: one query across email, chat, docs, and wikis. In practice, search quality depends entirely on how many connectors you've set up and how well-structured your company's documentation is. If your Notion is a mess, Enterprise Search reflects that mess back — just faster.

**Connectors:** Slack, Notion, Guru, Jira, Asana, Microsoft 365.

#### 19. Bio Research

Connects to PubMed, BioRender, bioRxiv, ClinicalTrials.gov, ChEMBL, Synapse, Wiley, Owkin, Open Targets, and Benchling. Remarkable connector list. For life sciences researchers doing literature reviews, genomics analysis, or target prioritization, it has genuine potential. C-tier because the user base is narrow and the workflows are highly specialized.

#### 20. Wealth Management (new — February 24)

Portfolio analysis, drift and tax exposure identification, and rebalancing recommendations at scale. Conceptually strong, but heavily dependent on data connectors that most wealth advisors won't have configured on day one. Needs FactSet and MSCI connectors properly set up.

#### 21. Plugin Management

The meta-plugin: helps you create and customize other plugins. Essential for teams building custom plugins, irrelevant for individual users. If you're an admin setting up Cowork for your team, this moves to A-tier.

---

## Quick reference: complete tier list

| Tier | Plugin | Best for |
|------|--------|----------|
| **S** | Data Analysis | Analysts, anyone working with data |
| **S** | Productivity | Everyone |
| **S** | Sales | Sales teams, account managers |
| **A** | Legal | Legal teams, contract management |
| **A** | Product Management | Product managers |
| **A** | Marketing | Marketers, content teams |
| **A** | Finance | Finance teams, FP&A |
| **B** | Customer Support | Support teams |
| **B** | HR | Human resources |
| **B** | Engineering | Engineering managers |
| **B** | Operations | Operations teams |
| **B** | Design | Design teams |
| **B** | Financial Analysis | Finance generalists |
| **B** | Investment Banking | IB analysts and associates |
| **B** | Equity Research | Research analysts |
| **B** | Private Equity | PE teams |
| **B** | Brand Voice (Tribe AI) | Multi-writer teams |
| **C** | Enterprise Search | Everyone (when fully connected) |
| **C** | Bio Research | Life sciences researchers |
| **C** | Wealth Management | Wealth advisors |
| **C** | Plugin Management | Team admins |

## The pattern: Anthropic's platform strategy

The first wave (January 30) targeted horizontal functions: productivity, sales, marketing, data, legal, finance. Things every company needs. That's the wave that triggered $285 billion in market value losses.

The second wave (February 24) went vertical: investment banking, private equity, equity research, wealth management, HR, engineering, design, operations. Industry-specific. Role-specific. The kind of depth that signals Anthropic isn't just testing the waters — they're building a platform.

> These plugins are just markdown files. The open-source repo has 2,000+ stars on GitHub. The barrier to creating new ones is essentially zero for anyone who can write clear instructions.

The mechanism is clear: Anthropic provides the model, MCP provides the connections, plugins provide the domain expertise. Because plugins are just text files — no code, no infrastructure, no build steps — private plugin marketplaces are now available for enterprise teams. PwC is building industry-specific plugins for regulated sectors.

## What to do right now

1. **Install S-tier today:** Data Analysis, Productivity, and Sales work immediately
2. **Pick your role plugin:** Legal, Finance, Marketing, or Product Management — spend 30 minutes customizing its skills with your company's context
3. **Track one metric:** time from "I have a task" to "I have a finished deliverable." If that number isn't dropping every week, your setup needs work
4. **Watch for the next wave:** Anthropic is adding new connectors and plugins monthly — the library will look different by April

## Market impact

| Company | Stock impact | Reason |
|---------|-------------|--------|
| Thomson Reuters | -18% | 45% of EBIT from legal — directly threatened by Legal plugin |
| RELX (LexisNexis) | -14% | Steepest single-day decline since 1988 |
| Wolters Kluwer | -13% | Legal and compliance revenue at risk |
| LegalZoom | -20% | Consumer legal services disrupted |
| ServiceNow | -7% | Workflow automation overlap |
| Salesforce | -7% | CRM and productivity overlap |

> "The SaaSpocalypse wasn't panic. It was price discovery." — And it's just getting started.

## Sources

- [I Tested All 21 Claude Cowork Plugins. Here's the Tier List Nobody's Publishing — Nav Toor (@heynavtoor)](https://x.com/heynavtoor)
- [Open source plugin repository — GitHub](https://github.com/anthropics/knowledge-work-plugins)
- [Plugin directory — Claude](https://claude.com/plugins)
- [Cowork and plugins across enterprise — Claude Blog](https://claude.com/blog/cowork-plugins-across-enterprise)

---

[Back to index](../README.md) | [Previous: Code vs Cowork](07-code-vs-cowork.md)
