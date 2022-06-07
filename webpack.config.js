const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            AbPath: path.resolve(__dirname, 'src'),
        },
    },
    entry: path.resolve(__dirname, 'src/index.tsx'),
    // output: {
    //     filename: 'bundle.js',
    //     path: path.join(__dirname, 'dist'),
    // },
    module: {
        rules: [
            {
                test: /\.(ts|tsx$)/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        open: true,
        // static: path.resolve(__dirname, 'dist'),

        // CORS 설정
        // proxy: {
        //     '/api': 'test.com'
        // },
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    /**
     * 브라우저에서 HMR 에러발생시 module name 표시를 하는 NamedModulesPlugin()이라는 플러그인이 있는데
     * webpack5로 넘어오면서 아래처럼 바뀜
     * https://webpack.js.org/migrate/5/
     * https://webpack.js.org/configuration/optimization/#optimizationmoduleids
     */
    optimization: {
        moduleIds: 'named',
    },
    plugins: [
        // index.html`에 번들링된 스크립트 파일과 스타일이 자동으로 연결
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        // 빌드되고 사용되지 않는 찌꺼기 파일들이나 캐시처럼 남아있는 파일들을 빌드 전에 삭제해주는 플러그인
        new CleanWebpackPlugin(),
    ],
};
