// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const vsDarkCodeTheme = require('prism-react-renderer/themes/vsDark');


/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
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
            'https://github.com/ethereum-attestation-service/eas-docs-site/blob/main/',
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
      metadata: [
        {name: "og:image", content: "https://easscan.org/eas-summary.png"}
      ],
      navbar: {
        title: 'Ethereum Attestation Service',
        logo: {
          alt: 'EAS Logo',
          src: 'img/eas-logo.png',
        },
        items: [
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
                to: '/docs/category/learn',
              },
              {
                label: 'Getting Started',
                to: '/docs/category/getting-started',
              },
              {
                label: 'Tutorials',
                to: '/docs/category/tutorials',
              },
              {
                label: 'Technical Docs',
                to: '/docs/category/technical-docs',
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
                label: 'GitHub',
                href: 'https://github.com/ethereum-attestation-service',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Mirror Articles',
                to: 'https://mirror.xyz/0xeee68aECeB4A9e9f328a46c39F50d83fA0239cDF',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ethereum Attestation Service. Built by the Ethereum Community.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: vsDarkCodeTheme,
      },
    }),
};

module.exports = config;
