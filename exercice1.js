
// Affiche la liste des bases de données
show databases; // version longue
show dbs; // version courte

// Sélectionne une base (même si elle n'existe pas)
use videoclub;

// Affiche la liste des collections
show collections;

// Affiche la base de données courante
db
// Note: database ne foncitonne pas (pas de vesion longue)

// Insérer un film
// Note: on peut créer la collection implicitement (ici on crée automatiquement une collection "films")
// explicitment : db.createCollection('films')
db.films.insert({
  titre: "Matrix",
  duree: 120
})

// Récupérer les enregistrements
db.films.find()

// Affiche les documents sélectionnés avec une mise en forme JavaScript
db.films.find().pretty()

// Récupérer un seul enregistrements
// Formatte automatiquement comme avec pretty, mais la méthode n'est pas disponible (db.films.findOne(...).pretty).
db.films.findOne()

// Insertion de document
db.films.insert({
  titre : "La vache et le prisonnier",
  duree : 119,
  realisateur:{
    nom: "Verneuil",
    prenom: "Henri"
  },
  acteurs: [
    {
      nom: "Fernandel"
    },
    {
      prenom: "René",
      nom : "Havard"
    }
  ],
  anneesortie : 1959
})

// > WriteResult({ "nInserted" : 1 })

// Dans la base videoclub
// Insérer des enregistrements de films

titre : La vache et le prisonnier
acteurs : Fernandel, René Havard
realisateur : Henri Verneuil
duree : 120

db.films.insert({
  titre : "Kung Fury",
  duree : 30,
  realisateur:{
    nom: "Sandberg",
    prenom: "David"
  },
  acteurs: [
    {
      nom: "Sandberg",
      prenom: "David"
    }
  ],
  synopsis: "Le flic king du KungFu qui doit se débarrasser d'Hitler"
})

titre: Kung Fury
acteur: David Sandberg
realisateur : David Sandberg
duree: 30
synopsis : "Le flic king du KungFu qui doit se débarrasser d'Hitler"

// Requête d'insertion


// On peut utiliser les fonctions javascript (comme Date())


// En passant par une variable


// Ajouter des clients en une seule requête
avec un nom, un prenom, un sous document 'naissance' qui contient la date de naissance (format date) la ville de naissance et le departement de naissance.
un champ 'date de création = created' qui sera un timestamp

Jean
Bon
naissance : (date) 15 juillet 1970
ville: Bayonne
created

Liliane
DioSoleil
naissance : (date) 10 septembre 1958
ville : Orange
departement : Vienne
created

db.clients.insert([
  {
    
      nom: "Jean",
      prenom: "Bon",
      naissance: Date("1970-04-12"),
      ville: "Bayonne",
      CreatedAt: new Timestamp
  },
  {
    
    nom: "Liliane",
    prenom: "DioSoleil",
    naissance:  new Date("1958-10-05"),
    ville: "orange",
    departement: "Vienne",
    CreatedAt: new Timestamp
  }
])
