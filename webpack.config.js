const path = require("path");

module.exports = {
  mode: "development",
  entry: "./frontend/js/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist/js/"),
    publicPath: "/js/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          },
          "sass-loader"
        ]
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devServer: {
    open: true,
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
  },
  target: ["web", "es5"],
};