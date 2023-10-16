import webpack from "webpack";

const projectDirectory = process.cwd();

const webpackConfig = {
    context: projectDirectory,
    mode: "development",
    entry: "./src/js/app.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: projectDirectory + "/dist/"
    }
}

export function javascript() {
    return new Promise(resolve => webpack(webpackConfig, (err, stats) => {
        resolve();
    }))
}