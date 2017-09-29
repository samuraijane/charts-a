'use strict';

const angular = require('angular');  //c027
const route = require('angular-route');

const app = angular.module('app', [route, 'd3', 'britecharts']);

require('./app.config.js')(app);
require('./services')(app);
require('./home')(app);
