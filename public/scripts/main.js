import  Modal from './modal.js'

const modal = Modal()

//Pegar todos os botões com classe check
const checkButtons = document.querySelectorAll('.actions a.check')
// funcionaria apenas com .check, mas é melhor especificar o melhor possível para evitar possíveis problemas no futuro.

checkButtons.forEach(button =>{
    button.addEventListener("click", event => {
        modal.open();
    })
})
//add o event listener em todos o checkbuttons para o evento click executar o modal.open no arquivo modal.js