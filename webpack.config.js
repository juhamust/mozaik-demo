var path = require('path');
var baseConfig = require('mozaik/webpack.config');

baseConfig.entry.demo = path.join(__dirname, 'src/App.jsx');

module.exports = baseConfig;
