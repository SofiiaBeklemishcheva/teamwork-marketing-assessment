
import { defineNuxtConfig } from 'nuxt/config'
 

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    'nuxt-svgo', 
  ],
  svgo: {
    defaultImport: 'component', 
  },
  css: [
    '~/assets/styles/global.scss', 
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/mixins.scss"; @import "@/assets/styles/variables.scss";`,
        },
      },
    },
   
  },

  app: {
    head: {
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap' 
        }
      ],
    },
  },
 
});