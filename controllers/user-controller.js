/*jslint node:true */
'use strict';


var userModel = require('../model/user');

// Passwords is expected to be sent as hash for security and PCI
function createUser(req, res) {
    var username = req.query['username'],
        email    = req.query['email'],
        password = req.query['password'];
    
    userModel.createUser(username, email, password);
    res.send('creating');
    
}

function updateUser(req, res) {
    res.send('update');
}

function getUser(req, res) {
    var user = req.query['username'];
    userModel.getUser(user);
    res.send('get user with' + user);
}

function deleteUser(req, res) {
    res.send('deleting');
}

exports.getUser = getUser;
exports.updateUser = updateUser;
exports.createUser = createUser;
exports.deleteUser = deleteUser;