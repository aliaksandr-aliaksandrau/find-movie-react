const devConfig = require('./config/webpack.dev.js');
const prodConfig = require('./config/webpack.prod.js');

module.exports = (env) => {
    const mode = env.NODE_ENV;
    console.log('Mode: ', mode);
    return mode == 'production' ? prodConfig : devConfig;
}
