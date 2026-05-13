// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  googleFonts: {
    families: {
      'Major Mono Display': true,
      'Rubik Glitch': true,
      'Rubik Pixels': true,
      'Montserrat': true,
      'Elms Sans': true,
    },
  },

  modules: ["@nuxtjs/google-fonts"],
});