// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,
  },
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      title: 'Louis SKRZYPCZAK - Développeur Fullstack',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Louis SKRZYPCZAK' },
        {
          name: 'description',
          content:
            "Ingénieur logiciel et développeur web fullstack basé à Lille, dans le nord de la France. Création et déploiement d'applications web modernes et performantes avec VueJS, Node et Typescript. Expertise en développement d'API REST et d'applications web progressives.",
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap',
        },
        { rel: 'preconnect', href: 'https://storage.googleapis.com' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint', '@nuxt/image'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
