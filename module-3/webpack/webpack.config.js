const path = require('path');

module.exports = {

    entry: {
        bundle: path.resolve(__dirname, 'app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },

};
