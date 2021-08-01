
module.exports = {
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/dist`,
    },

    module : {
      rules: [
        {
          resourceQuery: /base64/,
          type: 'asset/inline',
        },
        {
          test: /\.css/,
          resourceQuery: { not: [/base64/] },
          use: [
            "style-loader",// linkタグに出力する機能
            {
              loader: "css-loader",
              options: {
                url: false,
                sourceMap: true,
              }
            }
          ]
        },
        {
          test: /\.(jpg|png)$/,
          type: 'asset/inline',
        },
        {
          test: /\.svg$/,
          type: 'asset/inline',
        },
      ],
    }
  };
