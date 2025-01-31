
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', 
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3001, 
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'chatApp',
      filename: 'remoteEntry.js', 
      exposes: {
        './ChatingApp': './src/ChatingApp', 
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
};
