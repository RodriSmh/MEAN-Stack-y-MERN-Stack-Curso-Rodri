document.addEventListener("DOMContentLoaded", function() {
    var cajas = document.querySelectorAll(".cajas");

    function cambiarColor() {    
        for (let index = 0; index < cajas.length; index++) {
            cajas[index].style.background = "red";
        }
    }

    var boton = document.querySelector("#boton");
    boton.addEventListener("click", regresarColor);

    function regresarColor() {
        for (let index = 0; index < cajas.length; index++) {
            cajas[index].style.background = "blue";
        }
    }
});