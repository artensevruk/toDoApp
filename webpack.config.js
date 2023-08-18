import path from "path";
import { fileURLToPath } from "url";

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const file = fileURLToPath(import.meta.url);
const rootDir = path.dirname(file);

export default (env, argv) => ({
  mode: argv.mode,
  devtool: argv.mode === 'development'
    ? 'source-map'
    : false,
  plugins:  [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ title: 'ToDoList' })
  ],
  entry: './src/index.js',
  output: {
    path: path.resolve(`${rootDir}/dist`),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          argv.mode !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true }
          }, {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      }
    ]
  }
});
