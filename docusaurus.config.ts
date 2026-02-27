import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Claude Cowork Brain',
  tagline: 'Your central brain to understand, master, and get the most out of Claude Cowork.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://davila7.github.io',
  baseUrl: '/claude-cowork-guide/',

  organizationName: 'davila7',
  projectName: 'claude-cowork-guide',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/davila7/claude-cowork-guide/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Claude Cowork Brain',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          href: 'https://github.com/davila7/claude-cowork-guide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Plugins Tier List',
              to: '/docs/plugins-tier-list',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Claude Cowork',
              href: 'https://claude.com/download',
            },
            {
              label: 'Plugin Directory',
              href: 'https://claude.com/plugins',
            },
            {
              label: 'Knowledge Work Plugins (GitHub)',
              href: 'https://github.com/anthropics/knowledge-work-plugins',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/davila7/claude-cowork-guide',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Claude Cowork Brain. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
