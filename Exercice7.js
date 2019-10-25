// Créer une base de données newyork et une collection restaurants
use newyork
// Importer le fichier restaurant.json

// sur PC : Se mettre dans le dossier où il y l'executable mongoimport

// Combien y a-t-il de restaurants ?
db.restaurants.find().count()
50718

// Identique à


// Trouver les restaurants qui sont dans la rue "Morris Park Ave"
db.restaurants.find(
    {
        "address.street": /Morris Park Ave/
    },
    {
        _id: 0
    }).pretty()
    
    72

// Pour aussi récupérer ceux qui ont pour rue "Morris Park Avenue"
db.restaurants.find(
    {
        "address.street": /Morris Park Avenue/
    },
    {
        _id: 0
    }).pretty()
     54

// L'utilisation d'une regex permet de récupérer les 2 orthographes (et éventuellement les orthographes alternatives en minuscules avec le flag i(nsensitive) )

// Combien y en-a-t-il ?
db.restaurants.find(
    {
        "address.street": /Morris Park Avenue/i
    },
    {
        _id: 0
    }).count()

    54
    (le même)

// Afficher uniquement (sans l'id) les champs quartier, type de cuisine et adresse
db.restaurants.find({}, {
    _id: 0,
    "address.zipcode": 1,
    cuisine : 1,
    address: 1
}).pretty()


// Trouver la liste des restaurants situés à Staten Island qui font des hamburgers OU de la boulangerie.
db.restaurants.find({$and : [
    {
    borough: /staten island/i
    },
    {$or:[
        {cuisine: /Hamburgers/i}, 
        {cuisine: /Bakery/i}
    ]
    }
]
}
).pretty()
// Avec un $or
// Avec le $and implicite

// Avec un $in


// La variable restaurants est un objet. Dans mongo, ils appellent cela un curseur...
var restaurants = db.restaurants.find({borough :"Staten Island"})

// Parcours d'un curseur avec un while


// Parcours d'un curseur avec un foreach

// Quel est le type de restaurant le plus présent ?
db.restaurants.aggregate(
    [
      {
        $group:
          {
            _id: "$cuisine",
            nbresto: { $sum: 1 }
          }
      },
      {
          $sort: {
              nbresto: -1
          }
      },
      {
          $limit: 5
      }
    ]
 )

// Soit vous le faites en pur json



// Autre méthode. Plus élégante ??
// C'est le pipeline d'aggregation

// Pour limiter aux restos de Staten Island

