// webpack.config.js
module.exports = {
   // ...
   module: {
     rules: [
       {
         // ...
         use: [
           // ...
           {
             loader: 'postcss-loader',
             options: {
               postcssOptions: {
                 ident: 'postcss',
                 plugins: [
                   require('tailwindcss'),
                   require('autoprefixer'),
                 ],
               },
             }
           },
         ],
       }
     ],
   }
 }