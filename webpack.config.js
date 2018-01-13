const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let DIST_DIR = path.resolve(__dirname, "dist");
let SRC_DIR = path.resolve(__dirname, "src");

let config;
config = {
  entry: SRC_DIR + "/app/index.jsx",
  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "create-react-class": "preact-compat/lib/create-react-class",
      "react": "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "env"]
        }
      },
      {
        test: /\.css?/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/fonts/",
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/img/",
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [new ExtractTextPlugin("styles.css")]
  // plugins: [new BundleAnalyzerPlugin()]
};

module.exports = config;
