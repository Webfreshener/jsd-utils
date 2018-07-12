/**
 * Created by van on 7/8/17.
 */
var path = require('path');
module.exports ={
    entry: {
        entry: './src/index.js'
    },
    output: {
        filename: 'ofs-utils.js',
        path: path.resolve(__dirname, 'dist'),
        library: "ofsUtils",
        libraryTarget: "umd",
    }
};
