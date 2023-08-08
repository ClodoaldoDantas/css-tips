import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CSS Tips',
  description: 'Dicas e exemplos práticos para aprimorar seu design web.',
  head: [['link', { rel: 'icon', href: './favicon.ico' }]],
  themeConfig: {
    nav: [],
    sidebar: [],

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
  },
})
