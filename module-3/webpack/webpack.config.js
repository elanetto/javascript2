const path = require('path');
const { title } = require('process');

module.exports = {

    entry: {
        // the entry point for the bundle
        bundle: path.resolve(__dirname, 'app.js')
    },
    output: {
        // where the bundled file will be saved
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },
    plugins: [
        // plugins to use
        new HtmlWebpackPlugin({
            title: 'Webpack Example',
            filename: 'index.html',
            template: 'template.html',
        })
    ],
    module: {
        rules: [
            // rules to follow when bundling files
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

};
