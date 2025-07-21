var object={
    nombre:"Juan",
    edad:"28",

    descripcion:function(){
        console.log(`Hola, mi nombre es ${this.nombre} tengo ${this.edad} años`)
    }
}

object.descripcion();

var d=new Date();

console.log("fecha ",d)

var y=d.getFullYear();

console.log("año ",y)