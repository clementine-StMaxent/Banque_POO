/**
 * 
 * Titulaires de comptes bancaires
 * @param {string} nom
 * @param {string} prenom
 * 
 */


class Titulaire {
    // le contructor permet de créer et initialiser un objet lorsqu'on utilise le mot clé "class"
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    }

    identite(){
        console.log(`le titulaire s'appelle ${this.nom} ${this.prenom}`)
    }
}