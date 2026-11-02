 import { defineNuxtConfig } from 'nuxt/config'
 
 export default defineNuxtConfig({
   compatibilityDate: '2024-11-01',
   future: {
     compatibilityVersion: 4,
   },
   devtools: { enabled: true },
   css: ['~/assets/css/main.css'],
   postcss: {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   },
   runtimeConfig: {
     public: {
       apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost',
       useDummyData: process.env.USE_DUMMY_DATA !== 'false', // Default to true
     }
   },
   app: {
     head: {
       title: 'Developer Portfolio — My Journey',
       meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         {
           name: 'description',
           content: 'An interactive 3D scrollytelling developer portfolio showcasing software engineering, Laravel APIs, system architecture, and a Personal Management System.'
         },
         { name: 'theme-color', content: '#050A0F' },
         { property: 'og:title', content: 'Developer Portfolio — My Journey' },
         {
           property: 'og:description',
           content: 'A cinematic developer portfolio in motion featuring 3D scrollytelling, architecture insights, and an embedded PMS.'
         },
         { property: 'og:type', content: 'website' }
       ],
       link: [
         { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
         { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
         { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
         {
           rel: 'stylesheet',
           href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap'
         }
       ]
     }
   }
 })