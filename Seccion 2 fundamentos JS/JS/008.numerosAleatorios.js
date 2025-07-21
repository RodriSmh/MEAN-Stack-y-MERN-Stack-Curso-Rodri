
document.addEventListener("DOMContentLoaded", function() {
    var numeroAleatorio = document.querySelector("#numerosAleatorios")
    var numero=0
    var segundos = 0;

    var intervalo = setInterval(function() {
        // floor
        // round
        // ceil
        numero= Math.floor(Math.random()*100)
        numeroAleatorio.innerHTML=numero;
    }, 5000);


   
})