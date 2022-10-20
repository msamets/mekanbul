var express = require('express');
var router = express.Router();
const anaSayfa = function (req, res) {
    res.render('anasayfa', {
        'baslik': 'Ana Sayfa',
        "sayfaBaslik":
        {
            "siteAd": "Mekanbul",
            "slogan": "Civardaki Mekanları Keşfet!"
        },
        "mekanlar": [
            {
                "ad": "Holly Stone",
                "adres": "Barida otel",
                "puan": "4",
                "mesafe": "2km",
                "imkanlar": ["Kokteyl", "Alkol"]
            },
            {
                "ad": "Gloria jeans",
                "adres": "İyaş AVM",
                "puan": "2",
                "mesafe": "3km",
                "imkanlar": ["Kahve", "Tatlı"]
            }
        ]

    }


    );
}

const mekanBilgisi = function (req, res) {
    res.render('mekanBilgisi',
        {
            'baslik': 'Mekan bilgisi',
            "mekanBaslik": "Starbucks",
            "mekanDetay": {
                "ad": "Holly Stone",
                "adres": "Barida Otel",
                "puan": "4",
                "saatler": [
                    {
                        "gunler": "Pazartesi-Cuma",
                        "acilis": "10:00",
                        "kapanis": "05:00",
                        "kapali": "false"
                    },
                    {
                        "gunler": "Cumartesi-Pazar",
                        "acilis": "10:00",
                        "kapanis": "05:00",
                        "kapali": "false"
                    }
                ],
                "imkanlar": ["Kokteyl", "Alkollü içecek"],
                "koordinatlar": {
                    "enlem": "37.78",
                    "boylam": "30.54"
                },
                "yorumlar":[
                    {
                        "yorumYapan":"Samet",
                        "puan":"4",
                        "tarih":"20 Ekim 2022",
                        "yorumMetni":"Isparta'nın en iyisi."
                    }
                ]

            }

        });
}

const yorumEkle = function (req, res) {
    res.render('yorumEkle', { 'title': 'Yorum Sayfası' });
}

module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}