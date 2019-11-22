module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'utils': '@/utils'
      }
    }
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8810
  }
}