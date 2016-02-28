// NOTE: For some reason require() does not work with babel-node
import Mozaik from 'mozaik';
import config from './config';

var mozaik = new Mozaik(config);

//mozaik.bus.registerApi('github',  require('mozaik-ext-github/client'));
//mozaik.bus.registerApi('travis',  require('mozaik-ext-travis/client'));
//mozaik.bus.registerApi('weather', require('mozaik-ext-weather/client'));

mozaik.startServer();
