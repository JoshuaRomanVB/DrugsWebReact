const path = require('path'); //path del proyecto principal
const HtmlWebpackPlugin = require('html-webpack-plugin'); //traemos el plugin
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
//de html


module.exports = {
   entry: './src/index.js', // punto de entrada
   output: { // lugar al que saldrán todos los archivos
       path: path.resolve(__dirname, 'dist'), //en nuestro path, crea la carpeta dist
       filename: 'bundle.js' ,// nombre del archivo js resultante
       publicPath:'/'
   },
   mode:'development',
   resolve: { // extensión de archivos a tomar en cuenta
       extensions: ['.js', '.jsx'],
       alias:{
            '@Components':path.resolve(__dirname, 'src/components'),
            '@Containers':path.resolve(__dirname, 'src/containers'),
            '@Pages':path.resolve(__dirname, 'src/pages'),
            '@styles':path.resolve(__dirname, 'src/styles'),
            '@assets':path.resolve(__dirname, 'src/assets')

       }
   },
   module: { // loaders para cada tipo de archivo
       rules: [ // reglas para usar
           {
               test: /\.(js|jsx)$/, // extensiones en las cuales actuará babel
               exclude: /node_modules/, // siempre excluir node modules
               use: { // indicamos el loader
                   loader: 'babel-loader', // babel
                   options: { presets: ['@babel/env','@babel/preset-react'] },
               }
           },
           {
               test: /\.html$/, // extensiones html
               use: [
                   {
                       loader: 'html-loader' // loader a usar
                   }
               ]
           },
           {
               test: /\.(css|scss)$/,
               use: [
                   "style-loader",
                   "css-loader",
                   "sass-loader",
               ],
           },
           {
                //Manejo de imagenes
                test: /\.(png|jpeg|jpg|gif|svg|ico)$/,
                type:   'asset'
           }
       ]
   },
   plugins: [ // plugins
       new HtmlWebpackPlugin({ // instanciamos el plugin para html
           template: './public/index.html', // archivo raíz a transformar
           filename: './index.html' // el archivo resultante
       }),
       new MiniCssExtractPlugin({filename:'[name].css'})
   ],
   devServer:{
    historyApiFallback:true,
   }
}