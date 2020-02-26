module.exports = {
    devServer: {
        proxy: 'http://127.0.0.1:8081/v1/'
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/sku-select/'
    : '/'
}