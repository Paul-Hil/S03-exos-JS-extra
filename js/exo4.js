/* === Exo4 ===
 *
 * Copier/coller les fonctions des exercices 2 et 3 puis les combiner pour :
 * - demander à l'utilisateur le rayon d'un cercle
 * - calculer l'aire du cercle correspondante
 * - afficher le résultat en console, dans une pop-up et retourner la valeur (!)
 */

function program() {
    let radius = window.prompt('Indiquer le rayon d\'un cercle :')

    if(radius >= 1) {
        let airCircle = (radius * radius) * Math.PI;
        let arrondi = roundToTwo(airCircle);
        console.log('Et voici l\'aire : ' + arrondi + ' !');
        window.alert('Et voici l\'aire : ' + arrondi + ' !')
        return arrondi;    
    } else {
        return false;
    }


}

var roundToTwo = function(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

program();

