const path = require("path");
module.exports = [{
    externals: [],
    entry: {
        entry: "./src/index.js"
    },
    output: {
        filename: "ofs-utils.js",
        path: path.resolve(__dirname, "dist"),
        library: "ofsUtils",
        libraryTarget: "umd",
    }
}, {
    externals: [],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "ofs-utils.window.js",
        libraryTarget: "window",
        library: "ofs-utils",
    },
    module: {},
}, {
    externals: [
        // webpackRxjsExternals(),
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "ofs-utils.node.js",
        libraryTarget: "commonjs",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    }
}];
