window.onload = function(){
    console.log("numero: ",numeroDecimal)
    console.log("String ",palabra)
    console.log("bool",true)
    console.log("arreglo ",array)
    console.log("objeto ",jugo)
    
    var numeroDecimal=7
    var palabra= "Hola"
    var bool=true
    var array=["blanco","amarillo",4,true]
    // objetos
    var jugo={"Ingrediente1":"f","ingrediente2":"coco"}
    
    var caja =document.querySelector("#caja");
    console.log("caja",caja);
    
    
    caja.style.width="200px"
    caja.style.height="200px"
    caja.style.background="red"
    
    var cajas =document.querySelectorAll(".cajas");
    console.log("cajas",cajas)
}
