var webpack = require("webpack");
var path = require("path");
var TerserPlugin = require("terser-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname, "src/app");

module.exports = {
  mode: "production",
  entry: {
    index: __dirname + "/lib/antdesign.js"
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].[contenthash:8].bundle.js",
    sourceMapFilename: "[name].[hash].bundle.map",
    publicPath: "/",
    library: "antdesign",
    libraryTarget: "var"
  },
  optimization: {
    nodeEnv: "production",
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "-",
      automaticNameMaxLength: 15,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    removeEmptyChunks: true,
    noEmitOnErrors: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: false,
        extractComments: true,
        terserOptions: {
          sourceMap: true,
          compress: {
            drop_console: false
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "@svgr/webpack",
            options: {
              babel: true,
              icon: false
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "css-loader" },
          { loader: "less-loader", options: { javascriptEnabled: true } }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /public/],
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    
  ],
  externals: {
    UniversalDashboard: "UniversalDashboard",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: { theme: __dirname + "/lib/theme" }
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    port: 10000,
    // hot: true,
    compress: true,
    publicPath: "/",
    stats: "minimal"
  }
};
