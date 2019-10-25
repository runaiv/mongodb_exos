mongoimport --db paris --collection piscines --file piscines_paris.json

db.collection.find(query, projection)

use paris

// Pour compter les éléments

// ou


// Pour les piscines du 11ème
db.piscines.find({zipCode:75011})

// Pour les piscines du 11ème, n'affichez que les champs nom et code postal
db.piscines.find({zipCode:75011}, {name: 1, zipCode:1}  )


// La projection sert à limiter les champs renvoyés par une requête


// Par défaut, le champ _id est présent. Il faut l'exclure explicitement
db.piscines.find({zipCode:75011}, {name: 1, zipCode:1, _id: 0}  )

// Pour limiter le nombre de résultats, on utilise limit()
db.piscines.find({zipCode:75011}, {name: 1, zipCode:1, _id: 0}  ).limit(1)

// Pour trier par nom, on utilise sort()
db.piscines.find({zipCode:75011}, {name: 1, zipCode:1, _id: 0}  ).sort({name: -1})









