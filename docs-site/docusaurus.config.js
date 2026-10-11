import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HyperChromia',
  tagline: 'A read-only, power-loss-safe appliance OS for HyperHDR',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://julzops.github.io',
  baseUrl: '/hyperchromia/',

  organizationName: 'julzops',
  projectName: 'hyperchromia',

  onBrokenLinks: 'throw',

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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'HyperChromia',
        logo: {
          alt: 'HyperChromia logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/julzops/hyperchromia',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/julzops/hyperchromia/releases',
            label: 'Releases',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'HyperChromia',
            items: [
              {label: 'GitHub', href: 'https://github.com/julzops/hyperchromia'},
              {label: 'Releases', href: 'https://github.com/julzops/hyperchromia/releases'},
            ],
          },
        ],
        copyright: `HyperChromia docs — built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        docsRouteBasePath: '/',
        indexBlog: false,
      }),
    ],
  ],
};

export default config;
