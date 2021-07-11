//const MODE = "production";
const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
    mode : MODE,

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `${__dirname}/nopwop-posts-with-category.js`,
  
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/../../dist`,
      // 出力ファイル名
      filename: "nopwop-posts-with-category.bundle.js"
    },

    module : {
      rules: [
        // CSSファイルの読み込み
        {
          test: /\.css/,
          use: [
            "style-loader",// linkタグに出力する機能
            {
              loader: "css-loader",
              options: {
                url: false,
                sourceMap: enabledSourceMap
              }
            }
          ]
        },
        {
          test: /\.(jpg|png)$/,
          use :[{
            loader: 'url-loader',
          }]
        }
      ],
    }
  };