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
        items: [{ text: ':has()', link: '/pseudo-classes/has' }],
      },
      {
        text: 'Pseudo Elements',
        items: [{ text: '::marker', link: '/pseudo-elements/marker' }],
      },
      {
        text: 'Exemplos',
        items: [
          { text: 'Avatar', link: '/examples/avatar' },
          { text: 'Spinner', link: '/examples/spinner' },
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
})
