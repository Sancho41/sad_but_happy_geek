module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Sad but Happy Geek!";
      return args;
    });
  },
};
