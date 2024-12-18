// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GKZR',
  tagline: 'homepage.tagline',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gkzr.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GKZR', // Usually your GitHub org/user name.
  projectName: 'glukozavr', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'GKZR',
        logo: {
          alt: 'GKZR logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'aboutSidebar',
            position: 'left',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Writing',
            items: [
              {
                label: 'Not Public Opinion',
                href: 'https://notpublicopinion.com/',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@glukozavr',
              }
            ],
          },
          {
            title: 'Socails',
            items: [
              {
                label: 'BlueSky',
                href: 'https://bsky.app/profile/gkzr.me',
              },
              {
                label: 'Mastodon',
                href: 'https://mastodon.gamedev.place/@glukozavr',
              },
              {
                label: 'Threads',
                href: 'https://www.threads.net/@glukozavr',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/viktor-kurochkin-gkzr/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Glukozavr',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} | GKZR.me | Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
