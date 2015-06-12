/* *************************************************************************** *
 * Script......: r1_random.js   -   11/jun/2015                                *
 * Descripción.: Generamos numero aleatorio y devolvemos un mensaje por consola*
 * Ejecución...:                                                               *
 * Autor.......: DFC                                                           *
 * *************************************************************************** *
*/

var numero = Math.random();

if (numero <= 0.5) {
    console.log("\n" + numero + " MENOR o igual que 0.5 \n");
}
else {
    console.log("\n" + numero + " MENOR que 0.5 \n");
}

/* ************************** Fin de: r1_random.js ************************** */
