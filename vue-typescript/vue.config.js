module.exports = {
    // 反向代理
    devServer: {
        host: 'localhost',
        port: 9527,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'https://vuets-api.herokuaooo.com/api/',// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
                pathRewrite: {
                    '^/api': '/api/' // 在请求的时候 凡是/api开头的地址都可以跨域
                }
            },
        }
    }
}