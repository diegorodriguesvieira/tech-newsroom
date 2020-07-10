const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const isDevEnv = argv.mode !== "production";

  return {
    entry: {
      index: path.resolve(__dirname, "src", "index.js"),
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js",
      chunkFilename: "[name].bundle.js",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(s[ac]ss|css)$/i,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                sourceMap: isDevEnv,
                modules: {
                  mode: "local",
                  localIdentName: "[name]__[local]--[hash:base64:5]",
                },
              },
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: isDevEnv,
                ident: "postcss",
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDevEnv,
              },
            },
            {
              loader: "sass-resources-loader",
              options: {
                resources: [
                  "./src/styles/_variables.scss",
                  "./src/styles/_mixins.scss",
                ],
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif|eot|ttf|woff)$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/media",
          },
        },
      ],
    },
    optimization: {
      usedExports: true,
      splitChunks: {
        chunks: "all",
      },
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      open: true,
      stats: "minimal",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        filename: "index.html",
        inject: "body",
      }),
      new CopyPlugin({
        patterns: [{ from: "public", to: "dist" }],
      }),
    ],
  };
};
