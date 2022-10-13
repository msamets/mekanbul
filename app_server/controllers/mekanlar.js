var express = require('express');
var router = express.Router();
const anaSayfa = function (req, res) {
    res.render('anasayfa', { 'title': 'Ana Sayfa' });
}

const mekanBilgisi = function (req, res) {
    res.render('mekanBilgisi', { 'title': 'Mekan bilgisi' });
}

const yorumEkle = function (req, res) {
    res.render('yorumEkle', { 'title': 'Yorum Sayfası' });
}

module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}