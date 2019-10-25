// Revenez sur la base "videoclub"
show dbs

// Trouver un film dont le nom contient 'vache' (en utilisant une expression régulière)
db.films.find({
    titre : {
        $regex: /vache/
    }
})

// équivalent
db.films.find({
    titre : /vache/
})

// Afficher uniquement le prenom des acteurs de ce film
db.films.find(
    {

    },
    {
        "acteurs.prenom" : 1,
         _id: 0
    }
).pretty()

// Trouver les films dont un acteur s'appelle René
db.films.find(
    {
        "acteurs.prenom": /René/
    },
    {
         _id: 0
    }
).pretty()

// Le flag i veut dire insensitive (majuscule miniscule)
db.films.find(
    {
        "acteurs.prenom": /rené/i
    },
    {
         _id: 0
    }
).pretty()