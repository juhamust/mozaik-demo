// require('babel/register')({
//     _only: /node_modules\/mozaik[^/]*\/src/
// });

console.log('moz', require('mozaik'));

import Mozaik from 'mozaik';


var mozaik = new Mozaik(require('./config'));

//mozaik.bus.registerApi('github',  require('mozaik-ext-github/client'));
//mozaik.bus.registerApi('travis',  require('mozaik-ext-travis/client'));
//mozaik.bus.registerApi('weather', require('mozaik-ext-weather/client'));

mozaik.startServer();
