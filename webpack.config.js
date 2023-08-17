import path from "path";
import { fileURLToPath } from "url";

const file = fileURLToPath(import.meta.url);
const rootDir = path.dirname(file)
const config = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
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
  },
  devServer: {
    static: `${rootDir}/static`,
  },
};

export default (env, argv) => {
  config.mode = argv.mode;

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  return config;
};
