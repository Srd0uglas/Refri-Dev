// Objetivo: Trocar a classe active
// Pegou todos os elementos que tem a classe item
let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let back = document.getElementById('back')

// contagem de quantos itens tem na minha lista

// length é a contagem de itens

let count = list.length  //3
// esse active 0 é a primeira posição
let active = 0

// quando eu clicar no botão next 
next.onclick = () => {
    console.log("Next") // Teste
    // tirtar a classe que está ativa e colocar em outro item:
    let ativo = document.querySelector('.active')
    ativo.classList.remove('active')
 

    // Trocar o valor do active (que vale zero)
    // count vale 3, estou no zero e faço a verificação.. passei para o lado e verifica se 1 é menor ou igual a 2? menor, então ele adiciona +1 no count
    active = active >= count -1 ? 0 : active + 1
    list[active].classList.add('active')


    // dessa forma tem um erro, quando eu chegar no 3+1=4 a tela vai ficar branca pq eu só tenho 3 intens - preciso dazer uma verificação
    // active = active + 1 
    // indo na minha lista pegando o primeiro item (acacate pq o morango é a posição zero) e adicionando a classe active
    // list[active].classList.add('active')
}
// quando eu clicar no botão back 
back.onclick = () => { 
    console.log("back") // Teste
     // tirtar a classe que está ativa e colocar em outro item:
     let ativo = document.querySelector('.active')
     ativo.classList.remove('active')



     active = active <=0 ? count -1 : active - 1
     list[active].classList.add('active')

}