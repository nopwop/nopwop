//const MODE = "production";
const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

// output-filename
const outputFilename = (MODE === "development") ? 'nopwop-search-box.bundle.js' : 'nopwop-search-box.min.js'

module.exports = {
    mode : MODE,

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `${__dirname}/nopwop-search-box.js`,
  
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/../../dist`,
      // 出力ファイル名
      filename: outputFilename
    },

    module : {
      rules: [
        // CSSファイルの読み込み(base64 encoding)
        {
          test: /\.css/,
          use: [{
            loader: 'url-loader',
            options: {
              encoding: true,
              mimetype: 'text/css',
            },
          }]
        },  
        {
          test: /\.(jpg|png)$/,
          use :[{
            loader: 'url-loader',
          }]
        },
        {
          test: /\.svg$/,
          use :[{
            loader: 'url-loader',
            options: {
              encoding: false,
            },
          }]
        }
      ],
    }
  };