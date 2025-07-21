var p = {
    teclas: document.querySelectorAll("#Calculadora ul li"),
    accion: null

}

var m = {
    inicio: function () {
        for (let i = 0; i < p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimirTecla)
        }
    },
    oprimirTecla: function (e) {
        p.accion= e.target.getAttribute("class")
        m.calculadora(p.accion)
        
    },
    calculadora: function(accion){
        switch (accion) {
            case "numero":
                console.log("numero")
                break;
            case "signo":
                console.log("signo")
                break;
            case "igual":
                console.log("igual")
                break;
            case "borrar":
                console.log("borrar")
                break;
            case "decimal":
                console.log("decimal")
                break;
            default:
                console.log("accion no reconocida")
                break;
        }
    }
}
m.inicio();
