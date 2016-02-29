var path = require('path');
var baseConfig = require('mozaik/webpack.config');

delete baseConfig.entry.mozaik;
baseConfig.entry.demo = path.join(__dirname, 'src/App.jsx');

module.exports = baseConfig;
