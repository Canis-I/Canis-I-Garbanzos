const BundleTracker = require("webpack-bundle-tracker");
const { defineConfig } = require("@vue/cli-service");

const pages = {
  main: {
    entry: "./src/main.js",
    chunks: ["chunk-vendors"],
  },
};

if (process.env.NODE_ENV === "production") {
  module.exports = {
    pages: pages,
    filenameHashing: false,
    productionSourceMap: false,
    publicPath: "",
    outputDir: "../../static/blog/",

    chainWebpack: (config) => {
      config.optimization.splitChunks({
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "chunk-vendors",
            chunks: "all",
            priority: 1,
          },
        },
      });

      Object.keys(pages).forEach((page) => {
        config.plugins.delete(`html-${page}`);
        config.plugins.delete(`preload-${page}`);
        config.plugins.delete(`prefetch-${page}`);
      });

      config
        .plugin("BundleTracker")
        .use(BundleTracker, [{ filename: "../blog.json" }]);

      config.resolve.alias.set("__STATIC__", "static");

      config.devServer
        .host("localhost")
        .port(8080)
        .https(false)
        .headers({ "Access-Control-Allow-Origin": ["*"] });
    },
  };
} else {
  module.exports = defineConfig({
    transpileDependencies: true,
  });
}
