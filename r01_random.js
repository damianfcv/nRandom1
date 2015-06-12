/* *************************************************************************** *
 * Script......: r1_random.js   -   11/jun/2015                                *
 * Descripción.: Generamos numero aleatorio y devolvemos un mensaje por consola*
 * Ejecución...:                                                               *
 * Autor.......: DFC                                                           *
 * *************************************************************************** *
*/

var numero = Math.random();
var str    = "MAYOR que 0.5";

if (numero <= 0.5) {
    str = " MENOR o igual que 0.5";
}

console.log("\n" + numero + str + "\n");

/* ************************** Fin de: r1_random.js ************************** */
