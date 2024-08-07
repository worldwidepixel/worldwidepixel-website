// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-lucide-icons", "@nuxt/content"],

  app: {
    head: {
      title: "WorldWidePixel",
      titleTemplate: "%s - worldwidepixel",
      meta: [
        {
          name: "description",
          content: "I make things. On the internet.",
        },
        { name: "theme-color", content: "#28cbd4" },
      ],
      link: [
        { rel: "shortcut icon", href: "./favicon.ico", type: "image/x-icon" },
      ],
    },
  },

  compatibilityDate: "2024-08-06",
});
