module.exports = {
    configureWebpack: {
        // 解决rɪˈzɒlv
      resolve: {
        //   扩展，导入文件可省略后缀名
          extensions:['.js','.vue','.json']
          ,
        //   ˈeɪliəs'别名
        alias: {
          'assets': '@/assets',
          'common': '@/common',
          'components': '@/components',
          'network': '@/network',
          'views': '@/views',
        }
      }
    }
  }