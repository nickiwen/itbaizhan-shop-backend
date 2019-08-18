module.exports = {
    devServer: {
        proxy: {
            '/product_api': {
                // target: 'http://121.42.14.194:9011',
                target: 'http://192.168.1.102:8080',
                pathRewrite: {
                    '^/product_api': ''
                },
                changeOrigin: true
            },
            '/content_api': {
                target: 'http://192.168.1.102:8080',
                // target: 'http://121.42.14.194:9021',
                pathRewrite: {
                    '^/content_api': ''
                },
                changeOrigin: true
            },
            "/api":{
                target: 'http://localhost:3000',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            }
        }
    }
}