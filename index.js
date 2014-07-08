/*jslint node:true */
'use strict';

var server = require('./server'),
    router = require('./router');

server.start(8000, router.router);