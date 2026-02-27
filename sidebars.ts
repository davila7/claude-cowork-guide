import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guideSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: ['features', 'best-practices'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Plugins & Integrations',
      items: ['plugins-and-connectors', 'plugins-tier-list'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Practical Usage',
      items: ['use-cases', 'code-vs-cowork'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Help',
      items: ['troubleshooting'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Templates',
      items: [
        'templates/global-instructions',
        'templates/folder-instructions',
        'templates/task-prompts',
        'templates/about-me',
        'templates/brand-voice',
        'templates/working-style',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        'examples/file-organization',
        'examples/data-analysis',
        'examples/research-synthesis',
      ],
      collapsed: true,
    },
  ],
};

export default sidebars;
