const menu = document.querySelectorAll(".item");
const sobre = document.querySelectorAll(".sobrebtn");
const skills = document.querySelectorAll(".skillsbtn");
const projetos = document.querySelectorAll(".projetosbtn");
const contato = document.querySelectorAll(".contatobtn");
const buttonPT = document.getElementById("buttonPT");
const buttonEN = document.getElementById("buttonEN");
const pt =  document.querySelectorAll(".pt");
const en =  document.querySelectorAll(".en");


sobre.forEach(sobre  => {
    sobre.addEventListener("click", () => {
        menu[0].classList.add("mostrar")
        menu[1].classList.remove("mostrar")
        menu[2].classList.remove("mostrar")
        menu[3].classList.remove("mostrar")
    })
})

skills.forEach(skills => {
    skills.addEventListener("click", () => {
        menu[0].classList.remove("mostrar")
        menu[1].classList.add("mostrar")
        menu[2].classList.remove("mostrar")
        menu[3].classList.remove("mostrar")
    })
})


projetos.forEach( projetos => {
    projetos.addEventListener("click", () => {
        menu[2].classList.add("mostrar")
        menu[0].classList.remove("mostrar")
        menu[1].classList.remove("mostrar")
        menu[3].classList.remove("mostrar")    
    })
})

contato.forEach(contato => {
    contato.addEventListener("click", () => {
        menu[3].classList.add("mostrar")
        menu[0].classList.remove("mostrar")
        menu[1].classList.remove("mostrar")
        menu[2].classList.remove("mostrar")    
    })
})


buttonPT.addEventListener('click', () => {
    en.forEach(en => {
        en.classList.add('pt');
    });
    pt.forEach(pt => {
        pt.classList.remove('pt');
        pt.classList.add('setLanguage');
    })
})

buttonEN.addEventListener('click', () => {
    pt.forEach(pt => {
        pt.classList.add('pt');
    })
    en.forEach(en => {
        en.classList.remove('pt');
        en.classList.add('setLanguage');
    })

})



