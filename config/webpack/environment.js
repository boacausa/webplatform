const { environment } = require('@rails/webpacker');
const { merge } = require('webpack-merge');

const myCssLoaderOptions = {
    modules: true,
    sourceMap: true,
    localIdentName: '[name]__[local]__[hash:base64:5]',
};

const CSSLoader = environment.loaders.get('sass').use.find(el => el.loader === 'css-loader');

CSSLoader.options = merge(CSSLoader.options, myCssLoaderOptions);

environment.loaders.get('file').test = /\.(woff|woff2|eot|ttf|svg)$/
// Do not compile test files (this will cause prod compiler to crash because it does not recognize dev dependencies)
environment.loaders.get('babel').exclude = [/\.test\.js$/, environment.loaders.get('babel').exclude]


module.exports = environment;
