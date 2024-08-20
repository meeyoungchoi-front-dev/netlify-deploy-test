const path = require('path');

module.exports = {
  entry: './src/index.js', // 엔트리 파일 경로
  output: {
    path: path.resolve(__dirname, 'dist'), // 빌드 결과물이 생성될 경로
    filename: 'bundle.js', // 생성될 번들 파일 이름
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js 및 .jsx 파일 처리
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // babel-loader 사용
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel 프리셋 설정
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 파일 확장자 설정
  },
  mode: 'production', // 프로덕션 모드 설정
};
