/* === Exo3 ===
 *
 * Implémenter la fonction diskArea(radius) qui calcule et retourne l'air
 * d'un cercle, en fonction de son rayon.
 * 
 * Si le rayon n'est pas un nombre strictement positif, retourner false.
 * 
 * Le résultat est arrondi à deux chiffres après la virgule. Une fonction
 * d'arrondi est déjà disponible, roundToTwo(number) :
 * 
 *   roundToTwo(3.141592) // => 3.14
 */

var roundToTwo = function(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

function diskArea(radius) {
    if(radius >= 1) {
        let airCircle = (radius * radius) * Math.PI;
        let arrondi = roundToTwo(airCircle);
        return arrondi;    
    } else {
        return false;
    }
}





// Stop ! Tests, on ne touche pas :P
check.exo3(diskArea);

/**
 * Les tests sont les suivants :
 * 
 * diskArea(-42.42) // => false
 * diskArea(0) // => false
 * diskArea('pas un nombre') // => false
 * diskArea(43.2673) // => 5881.25
 * diskArea(68) // => 14526.72
 */
