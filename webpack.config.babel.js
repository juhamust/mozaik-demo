import path from 'path';
import MozaikPlugin from 'mozaik-webpack-plugin';
import baseConfig from 'mozaik/webpack.config';

delete baseConfig.entry.mozaik;

baseConfig.output.path = path.join(__dirname, 'build');
baseConfig.entry.mozaik = path.join(__dirname, 'src/App.jsx');

baseConfig.plugins.push(new MozaikPlugin({
  pluginDir: path.join(__dirname, 'node_modules'),
  collectedStylus: path.join(__dirname, 'node_modules/mozaik/src/ext/collected.styl')
}));

module.exports = baseConfig;
