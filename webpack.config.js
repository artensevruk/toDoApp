import CopyPlugin from "copy-webpack-plugin";

const config = {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "index.html", to: ".", force: true },
        { from: "index.css", to: ".", force: true },
      ],
    }),
  ],

  devServer: {
    static: "./dist",
    hot: true,
    devMiddleware: {
      writeToDisk: (filePath) => {
        return !/hot-update/i.test(filePath);
      },
    },
  },
};

export default (env, argv) => {
  config.mode = argv.mode;
  return config;
};
