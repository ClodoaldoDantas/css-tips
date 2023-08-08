import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CSS Tips',
  description: 'Dicas e exemplos práticos para aprimorar seu design web.',
  head: [['link', { rel: 'icon', href: './favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: 'Introdução', link: '/introduction' },
      { text: 'Exemplos', link: '/use-cases/avatar' },
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
        text: 'Casos de Uso',
        items: [
          { text: 'Avatar', link: '/use-cases/avatar' },
          { text: 'Spinner', link: '/use-cases/spinner' },
          { text: 'Status Indicator', link: '/use-cases/status-indicator' },
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
  },
})
