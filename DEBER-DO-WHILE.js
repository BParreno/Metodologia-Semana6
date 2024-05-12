'use strict';

let password = Number ("3214");
let i
let attempts = 0;

do {
    if (attempts < 3) {
        attempts++;
        i = Number (prompt("Ingrese la clave"));
    } else {
        alert ("Bloqueo de tarjeta");
        break;
    }
} while (i !== password);

if (i === password) {
    alert ("Operaciones exitosas")
}