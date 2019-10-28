module.exports = {
  entry: "./src/main.js",
  mode: "development",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
};
