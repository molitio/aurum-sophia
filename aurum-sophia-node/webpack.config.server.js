const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  name: "server",
  entry: {
    server: "./src/server/server.ts",
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  externals: [nodeExternals()],
  target: "node",
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ context: "src/server", from: "views", to: "views" }],
    }),
  ],
};
