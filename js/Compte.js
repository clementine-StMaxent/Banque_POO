class Compte {
    constructor(titulaire, montant = 0) {
        this.titulaire = titulaire;
        this.solde = montant;
    }

/**
 * créditer le compte du titulaire
 * @param {number} montant
 */

crediter(montant){
    this.solde += montant;
}

debiter(montant){
    this.solde -= montant;
}

afficherSolde(){
    console.log(`Le compte présente un solde de ${this.solde} euros`)
}

}