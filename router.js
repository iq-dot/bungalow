/*jslint node:true */
'use strict';

var router = require('express').Router(),
    userCt = require('./controllers/user-controller');

// default homepage route
router.get('/', function (req, res) {
    res.sendfile('/views/index.html', {root: __dirname});
});

// User control actions
router.get('/user', userCt.getUser);
router.put('/user', userCt.updateUser);
router.post('/user', userCt.createUser);
router.delete('/user', userCt.deleteUser);

exports.router = router;