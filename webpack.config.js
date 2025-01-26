const webpack = require("webpack");

module.exports = {
  resolve: {
    fallback: {
      buffer: require.resolve("buffer/"),
    },
  },

  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ],

  devtool: "source-map", // Optional for debugging

  module: {
    rules: [
      // JavaScript files
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },

      // CSS and SCSS files
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      // Image files (Handle image files such as .jpg, .png, .svg, etc.)
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:8].[ext]", // Customize image naming
              outputPath: "assets/images/", // Output folder for images
            },
          },
        ],
      },

      // Other file types if needed (fonts, etc.)
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
};
