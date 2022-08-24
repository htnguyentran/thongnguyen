module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          src: "./src",
          scenes: "./src/scenes",
          navigator: "./src/navigator",
          appRedux: "./src/appRedux/",
          configs: "./src/configs/",
          components: "./src/components/",
          assets: "./src/assets/",
          utils: "./src/utils/",
          hooks: "./src/hooks/",
          helpers: "./src/helpers/",
          constants: "./src/constants/",
          apis: "./src/apis/",
          translations: "./src/translations",
          services: "./src/services",
        },
      },
    ],
  ],
};
