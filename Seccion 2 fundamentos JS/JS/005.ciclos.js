let index
console.log("for")
for (index = 0; index < 5; index++) {
    console.log(index)
}
console.log("while")
index=0
while(index<5){
    console.log(index)
    index++
}

var cajas=document.querySelectorAll(".cajas")

for (let index = 0; index < cajas.length; index++) {
    cajas[index].style.width="50px"
    cajas[index].style.height="50px"
    cajas[index].style.background="blue"
    cajas[index].style.display="inline-block"
    cajas[index].style.marginRight="5px"
    cajas[index].style.marginTop="5px"
    
}