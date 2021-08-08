import  Modal from './modal.js'

const modal = Modal()

//Maper o texto para diferenciar a modal do 'Marcar como lida' e 'Excluir'
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


//Mapear todos os botões com classe check
const checkButtons = document.querySelectorAll('.actions a.check')
// funcionaria apenas com .check, mas é melhor especificar o melhor possível para evitar possíveis problemas no futuro.


checkButtons.forEach(button =>{
    button.addEventListener("click", handleClick)
})
//add o event listener em todos o checkbuttons para o evento click executar o modal.open no arquivo modal.js



// Mapear o botao excluir
const deleteButton = document.querySelectorAll(".actions a.delete")


deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})
//add o event listener o false é um bool para ser verificado pela function handleclick abaixo

function handleClick(event, check = true){
    event.preventDefault()
    // Para os links não redirecionarem quando clicados (cerquilha no barra de endereço)
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    
    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/:question/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    // Muda a cord do botão 'excluir' da modal

    modal.open()
}