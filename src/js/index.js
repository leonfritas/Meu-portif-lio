const menu = document.querySelectorAll(".item")
const sobre = document.getElementById("sobrebtn")
const skills = document.getElementById("skillsbtn")
const projetos = document.getElementById("projetosbtn")
const contato = document.getElementById("contatobtn")



sobre.addEventListener("click", () => {
    menu[0].classList.add("mostrar")
    menu[1].classList.remove("mostrar")
    menu[2].classList.remove("mostrar")
    menu[3].classList.remove("mostrar")
})

skills.addEventListener("click", () => {
    menu[0].classList.remove("mostrar")
    menu[1].classList.add("mostrar")
    menu[2].classList.remove("mostrar")
    menu[3].classList.remove("mostrar")
})


projetos.addEventListener("click", () => {
    menu[2].classList.add("mostrar")
    menu[0].classList.remove("mostrar")
    menu[1].classList.remove("mostrar")
    menu[3].classList.remove("mostrar")

})

contato.addEventListener("click", () => {
    menu[3].classList.add("mostrar")
    menu[0].classList.remove("mostrar")
    menu[1].classList.remove("mostrar")
    menu[2].classList.remove("mostrar")

})




