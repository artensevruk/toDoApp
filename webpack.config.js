import CopyPlugin from "copy-webpack-plugin";
import webpack from "webpack";
export default {
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "index.html", to: ".", force: true },
        { from: "index.css", to: ".", force: true },
      ],
    }),
  ],
  mode: "development",

  devServer: {
    static: "./dist",
    hot: true,
    devMiddleware: {
      writeToDisk: (filePath) => {
        return !/hot-update/i.test(filePath); // you can change it to whatever you need
      },
    },
  },
};
