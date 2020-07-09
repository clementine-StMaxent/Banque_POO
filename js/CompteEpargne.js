// Héritage, c'est à dire que le compte Epargne hérite des paramètres du compte (titulaire et montant).

class CompteEpargne extends Compte {
    constructor(titulaire, montant = 50, taux = 0.005, rythme = 5000) {
        // la méthode "super" prend en compte les paramètres du compte (titulaire et montant).
        super(titulaire, montant);
        this.taux = taux;
        this.rythme = rythme;

        // ceci est un "timer" qui permet de voir le montant du compte epargne en fonction du taux d'intérêt.
        setInterval(() => {
            this.solde *= 1+ this.taux;
            console.log(this.solde)
        }, this.rythme);

    }
}