// Agregar evento submit al formulario
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("¡El envío del formulario ha sido exitoso!");

    // Limpiar el texto del formulario
    const email = document.getElementById("email");
    email.value = "";
});


//Suma de 0 a n

function sumar() {
    let numero = parseInt(document.getElementById("numero").value);
    let suma = 0;
    for (let i = 0; i <= numero; i++) {
        suma += i;
    }

    document.getElementById("resultado").textContent = `La suma de 0 hasta ${numero} es: ${suma}`;
}


// Se genera un While, ese indicará cuales años han habido copas del mundo

let contador = 1930;

while (contador <= 2022) {
    const elementoBloque = document.getElementById("copas-mundiales")
    elementoBloque.innerHTML += contador + " ";
    contador += 4;
}