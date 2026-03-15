// assets/js/app.js
console.log("Estructura de archivos cargada correctamente.");

// Ejemplo de interactividad simple
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        console.log("Has hecho clic en el header semántico.");
    });
});
