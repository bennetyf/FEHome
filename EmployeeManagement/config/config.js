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
                        }
                    }
                ]
            ],

    routes: pageRoutes,
    publicPath: '/resources/EMS/',
    chainWebpack: (config,{webpack})=>{
        config.output
                    .filename('bundle.min.js')
                    .path(path.resolve(__dirname, '../dist'));

        config.plugin().use(extcssplugin);
    }
}