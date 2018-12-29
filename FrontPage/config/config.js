const path = require('path');
import pageRoutes from './config.routes';

// Extract the CSS File as an independent file and rename the file name using hashcode
const ExtCss = require('mini-css-extract-plugin');
const extcssplugin = new ExtCss({filename:'bundle.min.css'});

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const htmlwbplugin = new HtmlWebpackPlugin({
    // favicon: __dirname+'../resources/static/favicon.png'
// });

export default {
    plugins: [
                ['umi-plugin-react',
                    {
                        dva:{
                            immer:true,
                            hmr: true
                        }
                    }
                ]
            ],

    routes: pageRoutes,
    publicPath: '/resources/FrontPage/',
    chainWebpack: (config,{webpack})=>{
        config.output
                    .filename('bundle.min.js')
                    .path(path.resolve(__dirname, '../dist'));

        config.plugin().use(extcssplugin);
        // config.module
        //         .rule('pic')
        //             .test(/\.(png|jpg|jpeg|gif)$/)
        //             .use('url')
        //                 .loader('url-loader')
        //                 .options({  publicPath:'/static',
        //                             outputPath:path.resolve(__dirname, '../dist'),
        //                             useRelativePath:true,
        //                             limit: 1});

        // config.merge({
        //     module: {
        //         rules:{
        //             test:/\.(png|jpg|jpeg|gif)$/,
        //             use:[{
        //                     loader: 'url-loader',
        //                     options:{
        //                         publicPath:'/',
        //                         outputPath:'../dist',
        //                         limit: 10,
        //                         useRelativePath:true
        //                     }
        //                 }]
        //             }
        //         }
        // });
    }
}