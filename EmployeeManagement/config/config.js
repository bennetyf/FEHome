const path = require('path');
import pageRoutes from './config.routes';

// Extract the CSS File as an independent file and rename the file name using hashcode
const ExtCss = require('mini-css-extract-plugin');
const extcssplugin = new ExtCss({filename:'bundle.min.css'});

export default {
    plugins: [
                ['umi-plugin-react',
                    {
                        dva:{
                            immer:true,
                            hmr: true
                        },
                        antd: true,
                        dynamicImport: true,
                        chunks: ['vendors', 'umi']
                    }
                ]
            ],

    routes: pageRoutes,

    publicPath: '/resources/EMS/',

    chainWebpack: (config,{webpack})=>{
        config.output
                    .filename('bundle.min.js')
                    .path(path.resolve(__dirname, '../dist'));

        config.plugin()
                .use(extcssplugin);
        
        // config.optimization.splitChunks({
        //     chunks: 'all', 
        //     automaticNameDelimiter: '.', 
        //     name: true,
        //     minSize: 30000,
        //     maxSize: 0,
        //     minChunks: 1,
        //     maxAsyncRequests: 15,
        //     maxInitialRequests: 5,
        // });
        //#endregion

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
    }
}