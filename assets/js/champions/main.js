// Agregar evento submit al formulario
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("¡El envío del formulario ha sido exitoso!");

    // Limpiar el texto del formulario
    const email = document.getElementById("email");
    email.value = "";
});

function mostrarOpcionSeleccionada() {
    var select = document.getElementById("opciones");
    var opcionSeleccionada = select.options[select.selectedIndex].text;
    alert("Has seleccionado: " + opcionSeleccionada);
  }