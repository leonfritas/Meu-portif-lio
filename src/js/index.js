const menu = document.querySelectorAll(".item")
const sobre = document.getElementById("sobrebtn")
const skills = document.getElementById("skillsbtn")
const projetos = document.getElementById("projetosbtn")
const contato = document.getElementById("contatobtn")

console.log(menu)
console.log(sobre)
console.log(skills)

sobre.addEventListener("click", function(){
    menu[0].classList.add("mostrar")
    menu[1].classList.remove("mostrar")
    menu[2].classList.remove("mostrar")
    menu[3].classList.remove("mostrar")
})

skills.addEventListener("click", function () {
    menu[0].classList.remove("mostrar")
    menu[1].classList.add("mostrar")
    menu[2].classList.remove("mostrar")
    menu[3].classList.remove("mostrar")
})


projetos.addEventListener("click", function(){
    menu[2].classList.add("mostrar")
    menu[0].classList.remove("mostrar")
    menu[1].classList.remove("mostrar")
    menu[3].classList.remove("mostrar")

})

contato.addEventListener("click", function(){
    menu[3].classList.add("mostrar")
    menu[0].classList.remove("mostrar")
    menu[1].classList.remove("mostrar")
    menu[2].classList.remove("mostrar")

})




