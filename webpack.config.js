const path = require('path');

const conf = {
  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: 'dist/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg|mp3)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70,
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 9000,
    compress: true,
    open: true,
  },
};

module.exports = (env, options) => {
  const production = options.mode === 'production';
  conf.devtool = production
    ? false
    : 'inline-source-map';
  return conf;
};
