/*jslint node:true */
'use strict';

var express = require('express');

function start(port, router) {
    var app = express();
    app.set('view engine', 'jade');
    app.listen(port);
    app.use('/', router);
}

exports.start = start;