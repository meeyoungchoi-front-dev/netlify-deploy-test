const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // 출력 디렉터리
    filename: 'bundle.js', // 출력 파일 이름
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js 및 .jsx 파일을 처리
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // babel-loader 사용
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // 필요한 프리셋
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // .js와 .jsx 파일을 지원
  },
  mode: 'production', // 프로덕션 모드
};
