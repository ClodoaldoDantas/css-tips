import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'pt-BR',
  title: 'CSS Tips',
  description: 'Dicas e exemplos práticos para aprimorar seu design web.',
  themeConfig: {
    siteTitle: '🔮 CSS Tips',
    nav: [
      { text: 'Introdução', link: '/introduction' },
      { text: 'Exemplos', link: '/examples/avatar' },
    ],
    sidebar: [
      {
        text: 'Introdução',
        items: [{ text: 'Qual o nosso objetivo ?', link: '/introduction' }],
      },
      {
        text: 'Aprenda a centralizar',
        items: [
          { text: 'Com CSS Position', link: '/centralize/position' },
          { text: 'Com CSS Flexbox', link: '/centralize/flex' },
          { text: 'Com CSS Grid', link: '/centralize/grid' },
        ],
      },
      {
        text: 'Pseudo Classes',
        items: [
          { text: ':has()', link: '/pseudo-classes/has' },
          { text: ':empty', link: '/pseudo-classes/empty' },
        ],
      },
      {
        text: 'Pseudo Elements',
        items: [
          { text: '::marker', link: '/pseudo-elements/marker' },
          { text: '::before', link: '/pseudo-elements/before' },
          { text: '::after', link: '/pseudo-elements/after' },
          { text: '::selection', link: '/pseudo-elements/selection' },
        ],
      },
      {
        text: 'Exemplos',
        items: [
          { text: 'Avatar', link: '/examples/avatar' },
          { text: 'Spinner', link: '/examples/spinner' },
          { text: 'Switch', link: '/examples/switch' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ClodoaldoDantas' },
      {
        icon: 'instagram',
        link: 'https://www.instagram.com/clodoaldodantas8/',
      },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/clodoaldodantas/',
      },
    ],
    footer: {
      message: 'Lançado sob a licença MIT.',
      copyright: 'Copyright © 2023 Clodoaldo Dantas',
    },
    search: {
      provider: 'local',
    },
    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página',
    },
    outline: {
      label: 'Nesta página',
    },
    returnToTopLabel: 'Retornar ao topo',
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://css-tips.netlify.app/',
      },
    ],
    [
      'meta',
      {
        property: 'og:title',
        content: '🔮 CSS Tips',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Dicas e exemplos práticos para aprimorar seu design web.',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://css-tips.netlify.app/images/css-tips.png',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:url',
        content: 'https://css-tips.netlify.app/',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:title',
        content: '🔮 CSS Tips',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:description',
        content: 'Dicas e exemplos práticos para aprimorar seu design web.',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'https://css-tips.netlify.app/images/css-tips.png',
      },
    ],
  ],
})
