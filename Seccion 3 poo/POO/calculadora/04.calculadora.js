var p = {
    teclas: document.querySelectorAll("#Calculadora ul li"),
    accion: null,
    digito:null,
    operaciones: document.querySelector("#Operaciones"),
    cantidadSigno:0,
    cantidadDecimal:0,
    resultado:false
}

var m = {
    inicio: function () {
        for (let i = 0; i < p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimirTecla)
        }
    },

    teclado: function(){
        document.addEventListener("keydown",m.oprimir)
    },

    oprimir: function(tecla){
        console.log(tecla.keyCode)
        if(tecla.keyCode==48||tecla.keyCode==96)
        {
            p.accion="numero"
            p.digito=0
        }else if(tecla.keyCode==49||tecla.keyCode==97){
            p.accion="numero"
            p.digito=1
        }else if(tecla.keyCode==50||tecla.keyCode==98){
            p.accion="numero"
            p.digito=2
        }else if(tecla.keyCode==51||tecla.keyCode==99){
            p.accion="numero"
            p.digito=3
        }else if(tecla.keyCode==52||tecla.keyCode==100){
            p.accion="numero"
            p.digito=4
        }else if(tecla.keyCode==53||tecla.keyCode==101){
            p.accion="numero"
            p.digito=5
        }else if(tecla.keyCode==54||tecla.keyCode==102){
            p.accion="numero"
            p.digito=6
        }else if(tecla.keyCode==55||tecla.keyCode==103){
            p.accion="numero"
            p.digito=7
        }else if(tecla.keyCode==56||tecla.keyCode==104){
            p.accion="numero"
            p.digito=8
        }else if(tecla.keyCode==57||tecla.keyCode==105){
            p.accion="numero"
            p.digito=9
        }else if(tecla.keyCode==187||tecla.keyCode==107){
            p.accion="signo"
            p.digito="+"
        }else if(tecla.keyCode==189||tecla.keyCode==109){
            p.accion="signo"
            p.digito="-"
        }else if(tecla.keyCode==190){
            p.accion="decimal"
            p.digito="."
        }else if(tecla.keyCode==187||tecla.keyCode==107){
            p.accion="signo"
            p.digito="+"
        }else if(tecla.keyCode==13){
            p.accion="igual"
            p.digito="="
        }else if(tecla.keyCode==8){
            m.borrarCalculadora();
        }
        m.calculadora(p.accion,p.digito)
    },
    oprimirTecla: function (e) {
        p.accion= e.target.getAttribute("class")
        p.digito= e.target.innerHTML
        m.calculadora(p.accion,p.digito)
        
    },
    calculadora: function(accion,digito){
        switch (accion) {
            case "numero":
                p.cantidadSigno=0
                if(p.operaciones.innerHTML==0)
                    p.operaciones.innerHTML=digito
                else{
                    if(p.resultado){
                        p.resultado=false
                        p.operaciones.innerHTML=digito
                    }
                    else
                        p.operaciones.innerHTML+=digito
                }
                break;

            case "signo":
                p.cantidadSigno++
                if(p.cantidadSigno==1){
                    p.cantidadDecimal=0
                    if(p.operaciones.innerHTML==0)
                        p.operaciones.innerHTML=0
                    else{
                        p.operaciones.innerHTML+=digito
                        p.resultado=false
                    }
                }
                break;
            case "igual":
                p.operaciones.innerHTML=eval(p.operaciones.innerHTML)
                p.resultado=true
                break;
            case "borrar":
                
                break;
            case "decimal":
                p.cantidadDecimal++
                if(p.cantidadDecimal==1){
                    p.operaciones.innerHTML+=digito
                    p.resultado=false
                }
                break;
            default:
                console.log("accion no reconocida")
                break;
        }
    },
    borrarCalculadora: function(){
        p.operaciones.innerHTML=0
        p.cantidadDecimal=0
    }
}
m.inicio();
m.teclado();