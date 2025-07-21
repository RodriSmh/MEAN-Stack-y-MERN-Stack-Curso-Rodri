document.addEventListener("DOMContentLoaded", function() {
    var tiempo = document.querySelector("#tiempo");
    var segundos = 0;

    var intervalo = setInterval(function() {
        segundos++;
        tiempo.innerHTML = segundos;
    }, 1000);

    setTimeout(function(){
       clearInterval(intervalo)
    },5000)
});