module.exports = {
    entry: {
        index: './src/logica/index.js',
        libros: './src/logica/libros-populares.js',
        lanzamientos: './src/logica/nuevos-lanzamientos.js'
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
  