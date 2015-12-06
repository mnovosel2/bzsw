/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

    /***************************************************************************
     * Set the default database connection for models in the development       *
     * environment (see config/connections.js and config/models.js )           *
     ***************************************************************************/
    ldContext: {
        "ime": "https://schema.org/name",
        "bozanstvo": "https://schema.org/character",
        "slika": {
            "@id": "https://schema.org/image",
            "@type": "@id"
        },
        "zene": "https://schema.org/spouse",
        "djeca": "https://schema.org/children"
    },
    jsonContent: {
        "ime": "Zeus",
        "bozanstvo": "Bog",
        "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Jupiter_Smyrna_Louvre_Ma13.jpg/800px-Jupiter_Smyrna_Louvre_Ma13.jpg",
        "zene": [{
            "ime": "Hera",
            "bozanstvo": "Bog",
            "slika": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Hera_-_Meyers.jpg",
            "djeca": [{
                "ime": "Ares",
                "bozanstvo": "Bog",
                "slika": "http://greekgodsandgoddesses.net/wp/wp-content/uploads/2014/09/ares-512x1024.jpg"
            }, {
                "ime": "Hefest",
                "bozanstvo": "Bog",
                "slika": "http://www.znanje.org/i/i2014/2014iii09/2014iii0917/slike/hefest7.jpg"
            }, {
                "ime": "Ilitija",
                "bozanstvo": "Bog",
                "slika": "https://s-media-cache-ak0.pinimg.com/236x/f9/88/47/f988476bfa83510c95d47256e76de656.jpg"
            }, {
                "ime": "Heba",
                "bozanstvo": "Bog",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hebe.jpg"
            }]
        }, {
            "ime": "Ananka",
            "bozanstvo": "Smrtnik",
            "slika": "http://orig05.deviantart.net/5e5d/f/2012/323/d/8/princess_ananka_2_by_analogenvy-d5lj15k.jpg",
            "djeca": [{
                "ime": "Atropa",
                "bozanstvo": "Polubog",
                "slika": "https://thewhitethornwitch.files.wordpress.com/2014/03/w4xtv.jpg?w=704"
            }, {
                "ime": "Klota",
                "bozanstvo": "Polubog",
                "slika": "https://s-media-cache-ak0.pinimg.com/236x/47/b1/d3/47b1d32511562f311201b7fc0e664dcc.jpg"
            }, {
                "ime": "Laheza",
                "bozanstvo": "Polubog",
                "slika": "https://s-media-cache-ak0.pinimg.com/236x/61/0f/55/610f550f922468d9b311994bc7c52f6a.jpg"
            }]
        }, {
            "ime": "Demetra",
            "bozanstvo": "Bog",
            "slika": "http://3.bp.blogspot.com/-gar5BSEVDEI/Ug9lmg7cA3I/AAAAAAAAD6Y/PkJ--TdyqDY/s640/splashdem.jpg",
            "djeca": [{
                "ime": "Perzefona",
                "bozanstvo": "Bog",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Dante_Gabriel_Rossetti_-_Proserpine.JPG/150px-Dante_Gabriel_Rossetti_-_Proserpine.JPG"
            }]
        }, {
            "ime": "Diona",
            "bozanstvo": "Bog",
            "slika": "http://www.talesbeyondbelief.com/images/diana-4.jpg",
            "djeca": [{
                "ime": "Afrodita",
                "bozanstvo": "Bog",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bouguereau_venus_detail.jpg/320px-Bouguereau_venus_detail.jpg"
            }]
        }, {
            "ime": "Eja",
            "bozanstvo": "Bog",
            "slika": "https://upload.wikimedia.org/wikipedia/commons/f/fb/William-Adolphe_Bouguereau_%281825-1905%29_-_Dawn_%281881%29.jpg",
            "djeca": [{
                "ime": "Ersa",
                "bozanstvo": "Bog",
                "slika": "http://ugmparty.weebly.com/uploads/1/4/2/6/14262095/1005381.jpg"
            }]
        }, {
            "ime": "Leta",
            "bozanstvo": "Bog",
            "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Apollo_Tityos_Leto_Louvre_G375.jpg/800px-Apollo_Tityos_Leto_Louvre_G375.jpg",
            "djeca": [{
                "ime": "Apolon",
                "bozanstvo": "Bog",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Lycian_Apollo_Louvre_left.jpg/320px-Lycian_Apollo_Louvre_left.jpg"
            }, {
                "ime": "Artemida",
                "bozanstvo": "Bog",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/8/80/Diane_de_Versailles_Leochares.jpg"
            }]
        }, {
            "ime": "Maja",
            "bozanstvo": "Bog",
            "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Hermes_Maia_Staatliche_Antikensammlungen_2304.jpg/800px-Hermes_Maia_Staatliche_Antikensammlungen_2304.jpg",
            "djeca": [{
                "ime": "Hermes",
                "bozanstvo": "Bog",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Mercurybyhendrickgoltzius.jpeg/220px-Mercurybyhendrickgoltzius.jpeg"
            }]
        }, {
            "ime": "Metida",
            "bozanstvo": "Bog",
            "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Winged_goddess_Louvre_F32.jpg/800px-Winged_goddess_Louvre_F32.jpg",
            "djeca": [{
                "ime": "Atena",
                "bozanstvo": "Bog",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Athena_type_Velletri.jpg/220px-Athena_type_Velletri.jpg"
            }]
        }, {
            "ime": "Mnemozina",
            "bozanstvo": "Bog",
            "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Mnemosyne_Dante_Gabriel_Rossetti.jpg/220px-Mnemosyne_Dante_Gabriel_Rossetti.jpg",
            "djeca": [{
                "ime": "Klio",
                "bozanstvo": "Muza",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/0/01/Clio.jpg"
            }, {
                "ime": "Erato",
                "bozanstvo": "Muza",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Erato.jpg/220px-Erato.jpg"
            }, {
                "ime": "Euterpa",
                "bozanstvo": "Muza",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Euterpe.jpg/220px-Euterpe.jpg"
            }, {
                "ime": "Melpomena",
                "bozanstvo": "Muza",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Melpomene_Louvre.jpg/220px-Melpomene_Louvre.jpg"
            }, {
                "ime": "Polihimnija",
                "bozanstvo": "Muza",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Francesco_del_Cossa_001.jpg/220px-Francesco_del_Cossa_001.jpg"
            }, {
                "ime": "Terpsihora",
                "bozanstvo": "Muza",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Terpsichore.jpg/220px-Terpsichore.jpg"
            }, {
                "ime": "Talija",
                "bozanstvo": "Muza",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Thalia.jpg/220px-Thalia.jpg"
            }, {
                "ime": "Uranija",
                "bozanstvo": "Muza",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Urania_sarcophagus_Louvre_Ma475.jpg/150px-Urania_sarcophagus_Louvre_Ma475.jpg"
            }]
        }, {
            "ime": "Alkmena",
            "bozanstvo": "Smrtnik",
            "slika": "http://www.medeaslair.net/images/alc.jpg",
            "djeca": [{
                "ime": "Heraklo",
                "bozanstvo": "Polubog",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Hercules_Musei_Capitolini_MC1265.jpg/250px-Hercules_Musei_Capitolini_MC1265.jpg"
            }]
        }, {
            "ime": "Danaja",
            "bozanstvo": "Smrtnik",
            "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Danae_gold_shower_Louvre_CA925.jpg/220px-Danae_gold_shower_Louvre_CA925.jpg",
            "djeca": [{
                "ime": "Perzej",
                "bozanstvo": "Polubog",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Pompejanischer_Maler_des_1._Jahrhunderts_001.jpg/220px-Pompejanischer_Maler_des_1._Jahrhunderts_001.jpg"
            }]
        }, {
            "ime": "Elektra",
            "bozanstvo": "Bog",
            "slika": "https://encrypted-tbn2.gstatic.com/images?q=tbn%3AANd9GcT00Dng8Hd00K4IDPFmLPUKWyfnDaoNKZuq64nprCcPZ0pz2VdH",
            "djeca": [{
                "ime": "Jasion",
                "bozanstvo": "Smrtnik",
                "slika": "http://1.bp.blogspot.com/-uvFdsURbGFY/UmjhLjaseYI/AAAAAAAAAWU/yZzKlwtkzDc/s1600/Regnault+Origin+of+Painting+1785.jpg"
            }]
        }, {
            "ime": "Leda",
            "bozanstvo": "Smrtnik",
            "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Leda_and_Zeus_%28Swan%29.jpg/220px-Leda_and_Zeus_%28Swan%29.jpg",
            "djeca": [{
                "ime": "Poluks",
                "bozanstvo": "Polubog",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Colossal_Dioscure_Campidoglio.jpg/220px-Colossal_Dioscure_Campidoglio.jpg"
            }, {
                "ime": "Kastor",
                "bozanstvo": "Polubog",
                "slika": "https://upload.wikimedia.org/wikipedia/commons/3/31/Kastor_Niobid_horse_head.jpg"
            }]
        }]
    },
    ldContent: {
        "https://schema.org/name": "Zeus",
        "https://schema.org/character": "Bog",
        "https://schema.org/image": {
            "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Jupiter_Smyrna_Louvre_Ma13.jpg/800px-Jupiter_Smyrna_Louvre_Ma13.jpg"
        },
        "https://schema.org/spouse": [{
            "https://schema.org/name": "Hera",
            "https://schema.org/character": "Bog",
            "https://schema.org/image": {
                "@id": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Hera_-_Meyers.jpg"
            },
            "https://schema.org/children": [{
                "https://schema.org/name": "Ares",
                "https://schema.org/character": "Bog",
                "https://schema.org/image": {
                    "@id": "http://greekgodsandgoddesses.net/wp/wp-content/uploads/2014/09/ares-512x1024.jpg"
                }
            }, {
                "https://schema.org/name": "Hefest",
                "https://schema.org/character": "Bog",
                "https://schema.org/image": {
                    "@id": "http://www.znanje.org/i/i2014/2014iii09/2014iii0917/slike/hefest7.jpg"
                }
            }, {
                "https://schema.org/name": "Ilitija",
                "https://schema.org/character": "Bog",
                "https://schema.org/image": {
                    "@id": "https://s-media-cache-ak0.pinimg.com/236x/f9/88/47/f988476bfa83510c95d47256e76de656.jpg"
                }
            }, {
                "https://schema.org/name": "Heba",
                "https://schema.org/character": "Bog",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hebe.jpg"
                }
            }]
        }, {
            "https://schema.org/name": "Ananka",
            "https://schema.org/character": "Smrtnik",
            "https://schema.org/image": {
                "@id": "http://orig05.deviantart.net/5e5d/f/2012/323/d/8/princess_ananka_2_by_analogenvy-d5lj15k.jpg"
            },
            "https://schema.org/children": [{
                "https://schema.org/name": "Atropa",
                "https://schema.org/character": "Polubog",
                "https://schema.org/image": {
                    "@id": "https://thewhitethornwitch.files.wordpress.com/2014/03/w4xtv.jpg?w=704"
                }
            }, {
                "https://schema.org/name": "Klota",
                "https://schema.org/character": "Polubog",
                "https://schema.org/image": {
                    "@id": "https://s-media-cache-ak0.pinimg.com/236x/47/b1/d3/47b1d32511562f311201b7fc0e664dcc.jpg"
                }
            }, {
                "https://schema.org/name": "Laheza",
                "https://schema.org/character": "Polubog",
                "https://schema.org/image": {
                    "@id": "https://s-media-cache-ak0.pinimg.com/236x/61/0f/55/610f550f922468d9b311994bc7c52f6a.jpg"
                }
            }]
        }, {
            "https://schema.org/name": "Demetra",
            "https://schema.org/character": "Bog",
            "https://schema.org/image": {
                "@id": "http://3.bp.blogspot.com/-gar5BSEVDEI/Ug9lmg7cA3I/AAAAAAAAD6Y/PkJ--TdyqDY/s640/splashdem.jpg"
            },
            "https://schema.org/children": [{
                "https://schema.org/name": "Perzefona",
                "https://schema.org/character": "Bog",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Dante_Gabriel_Rossetti_-_Proserpine.JPG/150px-Dante_Gabriel_Rossetti_-_Proserpine.JPG"
                }
            }]
        }, {
            "https://schema.org/name": "Diona",
            "https://schema.org/character": "Bog",
            "https://schema.org/image": {
                "@id": "http://www.talesbeyondbelief.com/images/diana-4.jpg"
            },
            "https://schema.org/children": [{
                "https://schema.org/name": "Afrodita",
                "https://schema.org/character": "Bog",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bouguereau_venus_detail.jpg/320px-Bouguereau_venus_detail.jpg"
                }
            }]
        }, {
            "https://schema.org/name": "Eja",
            "https://schema.org/character": "Bog",
            "https://schema.org/image": {
                "@id": "https://upload.wikimedia.org/wikipedia/commons/f/fb/William-Adolphe_Bouguereau_%281825-1905%29_-_Dawn_%281881%29.jpg"
            },
            "https://schema.org/children": [{
                "https://schema.org/name": "Ersa",
                "https://schema.org/character": "Bog",
                "https://schema.org/image": {
                    "@id": "http://ugmparty.weebly.com/uploads/1/4/2/6/14262095/1005381.jpg"
                }
            }]
        }, {
            "https://schema.org/name": "Leta",
            "https://schema.org/character": "Bog",
            "https://schema.org/image": {
                "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Apollo_Tityos_Leto_Louvre_G375.jpg/800px-Apollo_Tityos_Leto_Louvre_G375.jpg"
            },
            "https://schema.org/children": [{
                "https://schema.org/name": "Apolon",
                "https://schema.org/character": "Bog",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Lycian_Apollo_Louvre_left.jpg/320px-Lycian_Apollo_Louvre_left.jpg"
                }
            }, {
                "https://schema.org/name": "Artemida",
                "https://schema.org/character": "Bog",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/8/80/Diane_de_Versailles_Leochares.jpg"
                }
            }]
        }, {
            "https://schema.org/name": "Maja",
            "https://schema.org/character": "Bog",
            "https://schema.org/image": {
                "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Hermes_Maia_Staatliche_Antikensammlungen_2304.jpg/800px-Hermes_Maia_Staatliche_Antikensammlungen_2304.jpg"
            },
            "https://schema.org/children": [{
                "https://schema.org/name": "Hermes",
                "https://schema.org/character": "Bog",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Mercurybyhendrickgoltzius.jpeg/220px-Mercurybyhendrickgoltzius.jpeg"
                }
            }]
        }, {
            "https://schema.org/name": "Metida",
            "https://schema.org/character": "Bog",
            "https://schema.org/image": {
                "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Winged_goddess_Louvre_F32.jpg/800px-Winged_goddess_Louvre_F32.jpg"
            },
            "https://schema.org/children": [{
                "https://schema.org/name": "Atena",
                "https://schema.org/character": "Bog",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Athena_type_Velletri.jpg/220px-Athena_type_Velletri.jpg"
                }
            }]
        }, {
            "https://schema.org/name": "Mnemozina",
            "https://schema.org/character": "Bog",
            "https://schema.org/image": {
                "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Mnemosyne_Dante_Gabriel_Rossetti.jpg/220px-Mnemosyne_Dante_Gabriel_Rossetti.jpg"
            },
            "https://schema.org/children": [{
                "https://schema.org/name": "Klio",
                "https://schema.org/character": "Muza",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/0/01/Clio.jpg"
                }
            }, {
                "https://schema.org/name": "Erato",
                "https://schema.org/character": "Muza",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Erato.jpg/220px-Erato.jpg"
                }
            }, {
                "https://schema.org/name": "Euterpa",
                "https://schema.org/character": "Muza",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Euterpe.jpg/220px-Euterpe.jpg"
                }
            }, {
                "https://schema.org/name": "Melpomena",
                "https://schema.org/character": "Muza",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Melpomene_Louvre.jpg/220px-Melpomene_Louvre.jpg"
                }
            }, {
                "https://schema.org/name": "Polihimnija",
                "https://schema.org/character": "Muza",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Francesco_del_Cossa_001.jpg/220px-Francesco_del_Cossa_001.jpg"
                }
            }, {
                "https://schema.org/name": "Terpsihora",
                "https://schema.org/character": "Muza",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Terpsichore.jpg/220px-Terpsichore.jpg"
                }
            }, {
                "https://schema.org/name": "Talija",
                "https://schema.org/character": "Muza",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Thalia.jpg/220px-Thalia.jpg"
                }
            }, {
                "https://schema.org/name": "Uranija",
                "https://schema.org/character": "Muza",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Urania_sarcophagus_Louvre_Ma475.jpg/150px-Urania_sarcophagus_Louvre_Ma475.jpg"
                }
            }]
        }, {
            "https://schema.org/name": "Alkmena",
            "https://schema.org/character": "Smrtnik",
            "https://schema.org/image": {
                "@id": "http://www.medeaslair.net/images/alc.jpg"
            },
            "https://schema.org/children": [{
                "https://schema.org/name": "Heraklo",
                "https://schema.org/character": "Polubog",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Hercules_Musei_Capitolini_MC1265.jpg/250px-Hercules_Musei_Capitolini_MC1265.jpg"
                }
            }]
        }, {
            "https://schema.org/name": "Danaja",
            "https://schema.org/character": "Smrtnik",
            "https://schema.org/image": {
                "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Danae_gold_shower_Louvre_CA925.jpg/220px-Danae_gold_shower_Louvre_CA925.jpg"
            },
            "https://schema.org/children": [{
                "https://schema.org/name": "Perzej",
                "https://schema.org/character": "Polubog",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Pompejanischer_Maler_des_1._Jahrhunderts_001.jpg/220px-Pompejanischer_Maler_des_1._Jahrhunderts_001.jpg"
                }
            }]
        }, {
            "https://schema.org/name": "Elektra",
            "https://schema.org/character": "Bog",
            "https://schema.org/image": {
                "@id": "https://encrypted-tbn2.gstatic.com/images?q=tbn%3AANd9GcT00Dng8Hd00K4IDPFmLPUKWyfnDaoNKZuq64nprCcPZ0pz2VdH"
            },
            "https://schema.org/children": [{
                "https://schema.org/name": "Jasion",
                "https://schema.org/character": "Smrtnik",
                "https://schema.org/image": {
                    "@id": "http://1.bp.blogspot.com/-uvFdsURbGFY/UmjhLjaseYI/AAAAAAAAAWU/yZzKlwtkzDc/s1600/Regnault+Origin+of+Painting+1785.jpg"
                }
            }]
        }, {
            "https://schema.org/name": "Leda",
            "https://schema.org/character": "Smrtnik",
            "https://schema.org/image": {
                "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Leda_and_Zeus_%28Swan%29.jpg/220px-Leda_and_Zeus_%28Swan%29.jpg"
            },
            "https://schema.org/children": [{
                "https://schema.org/name": "Poluks",
                "https://schema.org/character": "Polubog",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Colossal_Dioscure_Campidoglio.jpg/220px-Colossal_Dioscure_Campidoglio.jpg"
                }
            }, {
                "https://schema.org/name": "Kastor",
                "https://schema.org/character": "Polubog",
                "https://schema.org/image": {
                    "@id": "https://upload.wikimedia.org/wikipedia/commons/3/31/Kastor_Niobid_horse_head.jpg"
                }
            }]
        }]
    },
    jsonImages:['http://goo.gl/igLZag','http://goo.gl/QZFgFK','https://goo.gl/p0iGRH','http://goo.gl/Evg2VC','http://goo.gl/yTuSl6']
};
