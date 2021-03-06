const webpack = require('webpack');

module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    config.plugins.push(
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jquery': 'jquery',
            'window.jQuery': 'jquery',
            'jQuery': 'jquery'
          })    
    );

    return config;
}