const SvgStorePlugin = require('external-svg-sprite-loader');

const path = require('path');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MediaQueryPlugin = require('media-query-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');

let pages = glob.sync(__dirname + '/source/pages/*.pug');
const plugins = [
  new StyleLintPlugin(),
  new CleanWebpackPlugin(['dist']),
  new MiniCssExtractPlugin({
    filename: "./assets/styles/[name].css",
    chunkFilename: "./assets/styles/[name].css"
  }),
  new CopyWebpackPlugin([
    {
      from: './source/static',
      to: './',
      ignore: ['*.md']
    }
  ]),
  new SvgStorePlugin({
    sprite: {
        startX: 10,
        startY: 10,
        deltaX: 20,
        deltaY: 20,
        iconHeight: 20,
    },
    prefix: 'usage',
    suffix: ''
  }),
  new MediaQueryPlugin({
    include: [
        'autoload'
    ],
    queries: {
        '(min-width: 1280px)': 'desctop_lg',
        '(min-width: 1024px)': 'desctop_md',
        '(min-width: 1023px)': 'tablet',
        '(min-width: 768px) and (max-width: 1279px)': 'tablet',
        '(min-width: 768px)': 'tablet',
    }
  })
];
pages.map(function (file) {
  let base = path.basename(file, '.pug'); 
  plugins.push(new HtmlWebpackPlugin({
    filename: './' + base + '.html',
    template: './source/pages/' + base + '.pug',
    inject: false
  }));
});

module.exports = (env, argv) => {
  return {
    entry: {
      main: './source/autoload.js',
    },
    output: {
      filename: './assets/scripts/[name].bundle.js',
      chunkFilename: './assets/scripts/chunk/[id]-[hash].chunk.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: "/"
    },
    plugins,
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: './../../'
              }
            },
            "css-loader",
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('autoprefixer')({browsers: "last 5 versions"})
                  ];
                }
              }
            },
            {
              loader: "sass-loader",
              options: {
                  includePaths: [
                    path.resolve(__dirname,'source/base/styles')
                  ]
              }
            },
          ]
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: [
          "cache-loader",
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-syntax-dynamic-import']
            }
          }]
        },
        {
          loader: SvgStorePlugin.loader,
          test: /\.svg$/,
          exclude: [path.resolve(__dirname, 'source/assets/images')],
          options: {
            iconName: '[name]-usage',
            name: './assets/sprite.svg',
          },
        },
        {
          test: /\.(png|jpg|webp|svg?)(\?.+)?$/,
          exclude: [path.resolve(__dirname, 'source/assets/svg')],
          use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]',
            }
          }
          ]
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: [
          "cache-loader",
          {
            loader: "file-loader",
            options: {
              name: "assets/fonts/[name].[ext]",
            },
          }],
        },
        {
          enforce: 'pre',
          test: /\.pug$/,
          exclude: /node_modules/,
          loader: 'pug-lint-loader',
          options: require('./.pug-lintrc.js'),
        },
        {
          test: /\.pug$/,
          use: [
            "cache-loader",
            {
              loader: "pug-loader", 
              options: { pretty: true }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".json", ".sass", ".pug"],
      alias: {
        "TweenMax": 'gsap/src/uncompressed/TweenMax',
        "TimelineMax": 'gsap/src/uncompressed/TimelineMax',
        "TweenLite": 'gsap/src/uncompressed/TweenLite',
        "TimelineLite": 'gsap/src/uncompressed/TimelineLite',
        "ScrollMagic": 'scrollmagic/scrollmagic/uncompressed/ScrollMagic',
        "animation.gsap": 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap',
        "debug.addIndicators": 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators',
        app: path.resolve(__dirname,'./source'),
        static: path.resolve(__dirname,'./source/static'),
        assets: path.resolve(__dirname,'./source/assets'),
        vue$: 'vue/dist/vue.esm.js'
      },
    },
    // watch: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          }
        }
      },
      minimizer: [
        new UglifyJSPlugin({
          sourceMap: true,
          uglifyOptions: {
            compress: {
              inline: false
            }
          }
        }), new OptimizeCSSAssetsPlugin({}),], //git false,
    },
    devServer: {
      host: 'localhost',
      //contentBase: path.resolve(__dirname, './source/pages/'),
      watchContentBase: true,
      port: 9001,
      open: true,
      disableHostCheck: true,
      noInfo: true,
      compress: true,
      hot: false,
      stats: 'minimal',
      publicPath: "/"
    }
  };
};
