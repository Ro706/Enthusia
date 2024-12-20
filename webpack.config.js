module.exports = {
    // Other Webpack configurations...
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: /node_modules/, // Add this line to exclude node_modules
        },
      ],
    },
  };