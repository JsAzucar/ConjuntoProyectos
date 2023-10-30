document.addEventListener("DOMContentLoaded", function() {
    var contenido = document.getElementById("contenidoJS");
    var textos = ["Bienvenido", "a", "mi", "página", "web"]; // Lista de textos para mostrar

    var currentIndex = 0;

    function cambiarContenido() {
        contenido.textContent = textos[currentIndex];
        currentIndex = (currentIndex + 1) % textos.length; // Repite infinitamente
    }

    cambiarContenido(); // Cambiar contenido al cargar la página

    setInterval(cambiarContenido, 1000); // Cambiar contenido cada 2 segundos (ajusta el tiempo según tus necesidades)
});
