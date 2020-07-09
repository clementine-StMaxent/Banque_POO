/* l'instruction "let" permet de déclarer une variable, initialiser une valeur,
Ici on donne la valeur des titulaire (nom, prénom) afin de définir les titualire des différents compte en banque
*/

let titulaire1 = new Titulaire("Dupond", "Paul");
let titulaire2 = new Titulaire("Baudelaire", "Charles");


titulaire1.identite();

compte1 = new Compte(titulaire2, montant = 50);
console.log(compte1);

/**
 * Attention "crediter(50)" fait appel à une méthode, cette méthode est une fonction que l'on retrouve dans le fichier "Compte.js"
 *  
 * crediter(montant){
    this.solde += montant;
}
*
* idem pour la mtehode débiter
*
*/

compte1.crediter(50);

compte1.debiter(10);



let compteEpargne = new CompteEpargne(titulaire2, 2000);
console.log(compteEpargne);


/**
 * afficherSolde() est une méthode, une fonction que l'on retrouve au sein du fichier "Compte.js"
 * 
 * afficherSolde(){
    console.log(`Le compte présente un solde de ${this.solde} euros`)
}
 *
 */
compteEpargne.afficherSolde();