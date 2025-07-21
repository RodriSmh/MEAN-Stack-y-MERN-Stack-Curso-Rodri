document.addEventListener("DOMContentLoaded", function() {
    var texto=document.querySelector("#clases")
    
    var number=new Number(12);
    var boolean =new Boolean(true)
    var array=new Array("rojo","amarillo","verde")
    var objeto=new Object({nombre:"algo",
                            apellido:"delorto",
                            edad:"de matusalen"
    })
    setInterval(function() {
        var string=new String("Esto es un String")
        texto.innerHTML=string
    }, 1000);
});


function Persona(){
    this.nombre
    this.edad
    this.direccion
}
var yo=new Persona()
yo.nombre="Rodri"
yo.edad=28
yo.direccion="alguna"


function Animales(Nombre,Especie){
    this.nombre=Nombre
    this.especie=Especie
}


var gary=new Animales("Gary","Gato Joto")
