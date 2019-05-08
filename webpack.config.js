const path = require("path")
const BrowserSyncPlugin = require("browser-sync-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  output: {
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[path][name].[ext]',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      proxy: "http://localhost:3100"
    }, {
      reload: false
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
  ],
  devServer: {
    port: 3100
  },
}