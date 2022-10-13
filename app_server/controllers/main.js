var express = require('express');
var router = express.Router();
module.exports.index = function(req, res){
    res.render('index', {'title' : 'Express Product By Mustafa Samet Sönmez'});
}