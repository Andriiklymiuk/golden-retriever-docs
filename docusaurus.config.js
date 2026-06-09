// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Golden Retriever docs 🦮',
  tagline: 'REST & GraphQL collections — in your editor, your terminal, CI, and AI agents.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://andriiklymiuk.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/golden-retriever-docs/',

  // GitHub pages deployment config.
  organizationName: 'Andriiklymiuk', // GitHub org/user name.
  projectName: 'golden-retriever-docs', // Repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/golden-social-card.png',
      navbar: {
        title: 'Golden Retriever',
        logo: {
          alt: 'Golden Retriever Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://marketplace.visualstudio.com/items?itemName=andriiklymiuk.golden-retriever',
            label: 'VS Code',
            position: 'right',
          },
          {
            href: 'https://github.com/Andriiklymiuk/golden-cli',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/intro',
              },
              {
                label: 'CLI commands',
                to: '/docs/category/cli',
              },
              {
                label: 'Collections & envs',
                to: '/docs/collections',
              },
            ],
          },
          {
            title: 'Products',
            items: [
              {
                label: 'VS Code extension',
                href: 'https://marketplace.visualstudio.com/items?itemName=andriiklymiuk.golden-retriever',
              },
              {
                label: 'golden CLI',
                href: 'https://github.com/Andriiklymiuk/golden-cli',
              },
              {
                label: 'Claude Code plugin',
                to: '/docs/claude-plugin',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'CLI repo',
                href: 'https://github.com/Andriiklymiuk/golden-cli',
              },
              {
                label: 'Docs repo',
                href: 'https://github.com/Andriiklymiuk/golden-retriever-docs',
              },
              {
                label: 'Marketplace',
                href: 'https://marketplace.visualstudio.com/items?itemName=andriiklymiuk.golden-retriever',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Golden Retriever, by Andrii Klymiuk. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'json', 'powershell', 'graphql', 'yaml', 'toml'],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
  themes: [
    [
      // @ts-ignore
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        indexBlog: false,
      }),
    ],
  ],
};

module.exports = config;
