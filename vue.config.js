module.exports = {
    css: {
        loaderOptions: {
           sass: {
                    data: `@import "assets/css/_variable.scss";`   
                    // sass v8版本使用这个  prependData
                }
           }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'common': '@/common',
                'components': '@/components',
                'views': '@/views',
                'network': '@/network',
                'assets': '@/assets'
            }
        }
    }
}