const path = require('path');
import pageRoutes from './config.routes';
import defaultSettings from '../src/defaultSettings';
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
                        },
                        antd:true,
                        dynamicImport:true,
                        chunks: ['vendors', 'umi']
                    }
                ]
            ],

    routes: pageRoutes,
    
    theme: {
        'primary-color': defaultSettings.primaryColor,
    },

    publicPath: '/resources/FrontPage/',
    
    chainWebpack: (config,{webpack})=>{
        config.output
                    .filename('bundle.min.js')
                    .path(path.resolve(__dirname, '../dist'));

        config.plugin().use(extcssplugin);

        /* Split js css files into chunks in production */
        config.optimization.splitChunks({
            chunks: 'all', 
            automaticNameDelimiter: '.', 
            name: true,
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 10,
            maxInitialRequests: 5,
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                    // test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|react-redux|redux-saga|dva|axios)[\\/]/,
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|react-redux|redux-saga|dva|axios)[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true
                },
                // antdesigns: {
                //     name: 'antdesigns',
                //     chunks: 'all',
                //     test: /[\\/]node_modules[\\/](@ant-design|antd)[\\/]/,
                //     priority: -11,
                // },
                // default: {
                //     minChunks: 1,
                //     priority: -20,
                //     reuseExistingChunk: true
                // }
            }
        });

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