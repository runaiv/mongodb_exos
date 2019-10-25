// Retrouver les 5 premières piscines par ordre alphabétique ( et dont le champ zipCode existe)
db.piscines.find().sort(
    {name: 1}
).limit(5).pretty()
// Ajoutez 2 piscines -en une requete - avec un champ nom au lieu de name

db.piscines.insert([
    {
      
        nom: "arun",
        adresse: "78 Av rep",
    },
    {
      
      nom: "ravi",
      adresse: "Parc de",
     
    }
  ])
  
// Si je compte mes piscines, j'en ai donc 33
db.piscines.find().count()
// Compter uniquement les piscines dont le champ name est présent
db.piscines.find( {
    name: {
        $exists: true
    }
}
).count()  

// équivalent à
31

// Renvoie toutes les piscines ayant effectivement le champ name
db.piscines.find( {
    name: {
        $exists: true
    }
}
).pretty()
// Limite à 5 résultats
db.piscines.find( {
    name: {
        $exists: true
    }
}
).pretty().limit(5)
// En les triant par ordre alphabétique (case sensitive)
db.piscines.find( {
    name: {
        $exists: true
    }
}
).pretty().limit(5).sort(
    {name: 1}
)
// En plus en limitant les champs retournés au nom
db.piscines.find( {
    nom: {
        $exists: true
    }
}
).pretty().limit(5).sort(
    {nom: 1}
)

