const path = require('path');

module.exports = {
  components: 'src/components/**/*.js',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader' // Creates style nodes from JS strings
            },
            {
              loader: 'css-loader' // Translates CSS into CommonJS
            },
            {
              loader: 'sass-loader' // Compiles Sass to CSS
            }
          ]
        },
        {
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    }
  }
};
