/**
 * * @2020-05-12
 * * @author skyinzhang
 * * @describe vue-cli 2.x配置文件
 */
const webpack = require('webpack');
const { pathResolve } = require('./build/utils.js'); // eslint-disable-line
const devConfig = require('./build/webpack.dev.conf.js'); // eslint-disable-line
const buildConfig = require('./build/webpack.prod.conf.js'); // eslint-disable-line
// 骨架屏渲染
// const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin'); // eslint-disable-line
// 图片压缩
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // eslint-disable-line
// 公共函数
const { versionSet } = require('./build/utils'); // eslint-disable-line
// 是否为生产环境
const isDevelopment = process.env.NODE_ENV == 'development';

const vueWebpackConfig = () => {
  let envConfig = {};
  if (isDevelopment) {
    // 开发
    envConfig = devConfig;
  } else {
    // 构建
    versionSet();
    envConfig = buildConfig;
  }

  const vueConfig = {
    // 环境配置
    ...envConfig,
    productionSourceMap: isDevelopment, // 是否在构建生产包时生成sourcdeMap
    // 拓展webpack配置
    chainWebpack: (config) => {
      //  ============ 配置别名 ============
      config.resolve.alias
        .set('@build', pathResolve('../build')) // 构建目录
        .set('@', pathResolve('../src'));

      // ============ svg处理 ============
      const svgRule = config.module.rule('svg');
      // 清除已有的所有 loader。
      // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
      svgRule.uses.clear();
      // 添加要替换的 loader
      svgRule
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]',
        });

      // ============ 压缩图片 ============
      config.module
        .rule('images')
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({ bypassOnDebug: true })
        .end();

      // ============ 打包分析工具 ============
      if (!isDevelopment) {
        if (process.env.npm_config_report) {
          config
            .plugin('webpack-bundle-analyzer')
            .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
            .end();
          config.plugins.delete('prefetch');
        }
      }

      // ============ CDN资源引入 ============
      config.externals({
        // axios: 'axios',
        // echarts: 'echarts',
        // tinymce: 'tinymce',
        // nprogress: 'NProgress',
      });
    },
    configureWebpack: (config) => {
      // config.entry.app = isPC ? './src/web-pc/main.ts' : './src/web-mobile/main.ts'; // 入口文件
      // // ============ 代码压缩 ============
      // config.plugins.push(
      //   new UglifyJsPlugin({
      //     uglifyOptions: {
      //       //生产环境自动删除console
      //       compress: {
      //         warnings: false, // 若打包错误，则注释这行
      //         drop_debugger: true,
      //         drop_console: true,
      //         pure_funcs: ['console.log'],
      //       },
      //     },
      //     sourceMap: false,
      //     parallel: true,
      //   }),
      // );
      // // ============ gzip压缩 ============
      // const productionGzipExtensions = ['html', 'js', 'css'];
      // config.plugins.push(
      //   new CompressionWebpackPlugin({
      //     filename: '[path].gz[query]',
      //     algorithm: 'gzip',
      //     test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
      //     threshold: 10240, // 只有大小大于该值的资源会被处理 10240
      //     minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
      //     deleteOriginalAssets: false, // 删除原文件
      //   }),
      // );
      // ============ 公共代码抽离 ============
      // config.optimization = {
      //   splitChunks: {
      //     cacheGroups: {
      //       vendor: {
      //         chunks: 'all',
      //         test: /node_modules/,
      //         name: 'vendor',
      //         minChunks: 1,
      //         maxInitialRequests: 5,
      //         minSize: 0,
      //         priority: 100,
      //       },
      //       common: {
      //         chunks: 'all',
      //         test: /[\\/]src[\\/]js[\\/]/,
      //         name: 'common',
      //         minChunks: 2,
      //         maxInitialRequests: 5,
      //         minSize: 0,
      //         priority: 60,
      //       },
      //       styles: {
      //         name: 'styles',
      //         test: /\.(sa|sc|c)ss$/,
      //         chunks: 'all',
      //         enforce: true,
      //       },
      //       runtimeChunk: {
      //         name: 'manifest',
      //       },
      //     },
      //   },
      // };
    },
  };

  return vueConfig;
};

module.exports = vueWebpackConfig();
