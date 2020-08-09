module.exports = {
  // publicPath: "https://gabrielsancho.dev/sad_but_happy_geek/",
  // outputDir: "docs",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Sad but Happy Geek!";
      return args;
    });
  },
};
