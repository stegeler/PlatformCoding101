import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Agent Engineering Fundamentals',
  tagline: 'A practical system for keeping AI coding work aligned, bounded, testable, and reviewable.',
  favicon: 'img/favicon.svg',

  url: 'https://stegeler.github.io',
  baseUrl: '/PlatformCoding101/',
  organizationName: 'stegeler',
  projectName: 'PlatformCoding101',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
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
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          breadcrumbs: true,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          editUrl: 'https://github.com/stegeler/PlatformCoding101/tree/master/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI Fundamentals',
      logo: {
        alt: 'AI Agent Engineering Fundamentals mark',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'fundamentalsSidebar',
          position: 'left',
          label: 'Fundamentals',
        },
        {to: '/docs/reference/glossary', label: 'Glossary', position: 'left'},
        {to: '/docs/reference/operating-checklist', label: 'Checklist', position: 'left'},
        {href: 'https://youtu.be/-QFHIoCo-Ko?t=178', label: 'Source workshop', position: 'right'},
        {href: 'https://github.com/stegeler/PlatformCoding101', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Start here', to: '/docs/overview'},
            {label: 'End-to-end playbook', to: '/docs/workflow/end-to-end-playbook'},
            {label: 'Glossary', to: '/docs/reference/glossary'},
          ],
        },
        {
          title: 'Original material',
          items: [
            {label: 'Workshop video', href: 'https://youtu.be/-QFHIoCo-Ko?t=178'},
            {label: 'Matt Pocock skills', href: 'https://github.com/mattpocock/skills'},
            {label: 'Sandcastle', href: 'https://github.com/mattpocock/sandcastle'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'Repository', href: 'https://github.com/stegeler/PlatformCoding101'},
            {label: 'Attribution', to: '/docs/reference/source-and-attribution'},
          ],
        },
      ],
      copyright: `Independent study guide based on Matt Pocock's workshop. Built with Docusaurus ${new Date().getFullYear()}.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml'],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
  },
};

export default config;
