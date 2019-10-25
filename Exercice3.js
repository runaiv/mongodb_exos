// Dans la collection "piscines" de la base "paris", trouver en utilisant les opérateurs de requête

// les piscines qui sont dans le 13e arrondissement
db.piscines.find({zipCode: 75013}, {_id: 0}).pretty()
// les piscines qui ne sont pas le 13e arrondissement
db.piscines.find({zipCode: {$ne : 75013}},{_id: 0}).pretty()

// En affichant uniquement le nom
db.piscines.find({zipCode: {$ne : 75013},_id: 0}).pretty()

// les piscines qui sont dans le 13e et celles qui sont dans le 14e arrondissement


// Soit avec un $or
db.piscines.find({$or:[
    {zipCode: 75013}, 
    {zipCode: 75014}
]
}, 
{
    _id: 0
}).pretty()

// Soit avec un $in
db.piscines.find(
   {zipCode: 
    {$in: [
        75013,
        75014
    ]}
}
).pretty()
// les piscines qui ne sont pas dans le 15, 16, 17 et 18e arrondissement
db.piscines.find(
    {zipCode: 
     {$nin: [
         75015,
         75016,
         75017,
         75018
     ]}
 }
 ).pretty()

// En triant par code postal descendant:
db.piscines.find(
    {},
    {_id: 0},
    ).sort(
        {
            zipCode: -1
        }

    ).pretty()

// les piscines dont le code postal est supérieur ou égal à 75013 triés par code postal descendant
db.piscines.find(
    {
        zipCode: {
            $gte: 75013
        }
    }
).sort(
    {
        zipCode: -1
    }

).pretty()

// Les piscines situées à l'ouest de Notre Dame de Paris
db.piscines.find(
    {
        lon: {
            $lt: 2.3
        }
    }
).pretty()

// Et leur nombre


// Les piscines dont zipCode=75013 ET id=2929 avec l'opérateur $and et $eq

db.piscines.find(
    {
        $and:
            [
            { zipCode: {$eq : 75013}},
            {id: 2929}
            ]
}
).pretty()

// On peut simplifier - uniquement l'opérateur $and

// Version la plus courte

db.piscines.find(
    {
    zipCode: 75013,
    id: 2929
    }, 
    {
        _id: 0
    }
).pretty()







