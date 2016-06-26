module.exports = {
  context: __dirname + "/app",
  entry: {javascript: "./app.tsx", html: "./index.html"},

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
    publicPath: "http://localhost:8080/assets"
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx']
  },

  module: {
    loaders: [
      //{
      //  test: /\.tsx?$/,
      //  exclude: /(node_modules|typings)/,
      //  loaders: ["react-hot", "ts-loader"]
      //},
      {
        test: /\.tsx$/,
        exclude: /(node_modules|bower_components|typings)/,
        loader: "ts-loader"
      },
      {
        test: /\.html$/,
        exclude: /(node_modules|bower_components|typings)/,
        loader: "file?name=[name].[ext]"
      }
    ]
  }
};


