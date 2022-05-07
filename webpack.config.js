const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = (env, argv) => {
    const {mode} = argv
    const isProduction = mode === 'production'

    return {
        output: {
            filename: isProduction 
                ? '[name].[contenthash].js' 
                : 'main.js',
            path: path.resolve(__dirname, 'build')
        },
        plugins: [
            new HtmlWebpackPlugin({ template: 'src/index.html' })
        ],
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic' //ya no es necesario importar React
                                }
                            ]
                        ]
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: "babel-loader"
                        },
                        {
                            loader: "react-svg-loader",
                            options: {
                                jsx: true
                            }
                        }
                    ]
                },
            ]
        },
    }
   
}