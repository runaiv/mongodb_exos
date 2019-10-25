// Mise à jour -> update

// Dans la liste des restaurants

// Modifier les restaurants dont la cuisine est Hamburgers pour leur ajouter un champ healthy_food égal à 2
db.restaurants.update(
    {
        cuisine: /hamburgers/i
    },
    {

        $set: {
            healthy_food: 2
        }
    },
    false, 
    true,

)

// Pour les végétariens, leur mettre le champ healthy food à 9.
db.restaurants.update(
    {
        cuisine: /veget/i
    },
    {

        $set: {
            healthy_food: 9
        }
    },
    false, 
    true,

)

// Vérifier ques tous les restaurants ont un tableau grades
db.restaurants.find(
    { grades: { $exists: true } }
).count()

oui

// Supprimer le champ building des restaurants situés dans le Bronx et ajouter un booléen
db.restaurants.update(
    {
        borough: /Bronx/i
    },
    {
        $unset: {
            "address.building": true
        },
        $set:{ mybool :true }
    },
    {
        multi: true

    }
)


// équivalent avec Update

//Vérifier
db.restaurants.find({borough : /Bronx/i}).pretty()

// Ajouter un champ rating à 5 à tous les restaurants
db.restaurants.update(
    {},
    {
        $set: {
            champ: 5
        }
    },
    {
        multi: true
    }
)

// Multiplier le champ rating par 2 pour les restaurants situés dans le Queens
db.restaurants.update(
    {
        borough: /Queens/i
    },
    { 
        $mul: { 
            champ: 2 
        } 
    },
    {
        multi: true
    }
)
// Trouver les restaurants de Brooklyn
db.restaurants.find(
    {
        borough: /Brooklyn/i
    }
)

// Limiter les résultats à 100
db.restaurants.find(
    {
        borough: /Brooklyn/i
    }
).pretty().limit(100)
// Appliquer d'abord un count()
db.restaurants.find(
    {
        borough: /Brooklyn/i
    }
).count()
// Puis à la place appliquer un size()
db.restaurants.find(
    {
        borough: /Brooklyn/i
    }
).size()
// Quelle est la différence ?

pas de différence à ce niveau

// Ajouter une entrée au tableau grades pour le restaurant "Tu-Lu'S Gluten-Free Bakery"
db.restaurants.update(
    {
        name: "Tu-Lu'S Gluten-Free Bakery"
    },
    {
        $set: {
        "grades.entry": 
            { $push: 
                { 
                    grades: "soup"
                } 
        }
        }
    }
)

// Vérifier


db.restaurants.find(
    {
        name: "Tu-Lu'S Gluten-Free Bakery"
    }
).pretty()
// Modifier le champ rating pour tous les documents pour qu'il soit égal à la moyenne réelle des grades




// Créer un curseur et le manipuler avec un forEach




// Quel est le restaurant qui a la meilleure moyenne
