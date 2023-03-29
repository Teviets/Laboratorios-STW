const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: './src/logica/index.js',
        librosPop: './src/logica/libros-populares.js',
        nuevosLanz: './src/logica/nuevos-lanzamientos.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index']
        }),
        new htmlWebpackPlugin({
            filename: 'libros-populares.html',
            template: './src/libros-populares.html',
            chunks: ['librosPop']
        }),
        new htmlWebpackPlugin({
            filename: 'nuevos-lanzamientos.html',
            template: './src/nuevos-lanzamientos.html',
            chunks: ['nuevosLanz']
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/src/assets/img/',
                            publicPath: '../src/assets/img/'
                        }
                    }
                ]
            },
            {
                test: /\.(wav|mp3)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/src/assets/sonidos/',
                            publicPath: '../src/assets/sonidos/'
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
    

};
  