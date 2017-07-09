/**
 * Created by van on 7/8/17.
 */
var path = require('path');
module.exports ={
    entry: {
        entry: './src/index.js'
    },
    output: {
        filename: 'wf-utils.js',
        path: path.resolve(__dirname, 'lib'),
        library: "wfUtils",
        libraryTarget: "umd",
        auxiliaryComment: "Test Comment"
    }
};
