// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1,viewport-fit=cover",
        },
        { hid: "description", name: "description", content: "" },
      ],
    },
  },
  css: ["@/assets/css/main.scss"],
});
