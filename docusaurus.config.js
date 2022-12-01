// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ethereum Attestation Service',
  tagline: 'Ethereum Attestation Service is the global base layer for on/offchain generic attestations.',
  url: 'https://attest.sh',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/eas-logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ethereum Attestation Service', // Usually your GitHub org/user name.
  projectName: 'EAS Website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ethereum-attestation-service/eas-docs-site',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'EAS',
        logo: {
          alt: 'EAS Logo',
          src: 'img/eas-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: 'Docs',
          },
          {to: '/docs/category/use-cases', label: 'Use Cases', position: 'left'},
          {
            href: 'https://easscan.com/',
            label: 'EAS Explorer',
            position: 'right',
          },
          {
            href: 'https://attest.sh/',
            label: 'EAS Website',
            position: 'right',
          },
          {
            href: 'https://github.com/ethereum-attestation-service',
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
                label: 'Welcome to EAS',
                to: '/docs/welcome',
              },
              {
                label: 'Learn',
                to: '/docs/intro',
              },
              {
                label: 'Services',
                to: '/docs/intro',
              },
              {
                label: 'Tutorials',
                to: '/docs/intro',
              },
              {
                label: 'Technical Docs',
                to: '/docs/intro',
              },
              {
                label: 'Innovation Hub',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/eas_eth',
              },
              {
                label: 'Telegram',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Github',
                href: 'https://github.com/ethereum-attestation-service',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ethereum Attestation Service. Built by the Ethereum Community.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
