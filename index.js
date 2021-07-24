const select = document.getElementById('escolha')

let escolha = document.getElementById('escolha').value

function generate (){
    let robot = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (robot == 1){
        robot = 'pedra'
    }
    if (robot == 2){
        robot = 'papel'
    }
    if (robot == 3){
        robot = 'tesoura'
    }
    
    console.log('robo = ' + robot)
    return robot
}

function winner(){
    const robot = generate()
    console.log('escolhido = ' + escolha)
    if ( robot == 'pedra'){
        if (escolha == 'pedra'){
            return alert('Empate!')
        }
        if (escolha == 'papel'){
            return alert("Mais sorte na próxima.")
        }
        if (escolha == 'tesoura'){
            return alert("Você venceu!")
        }
    }
    if ( robot == 'papel'){
        if (escolha == 'pedra'){
            return alert("Você venceu!")
        }
        if (escolha == 'papel'){
            return alert("Empate.")
        }
        if (escolha == 'tesoura'){
            return alert("Mais sorte na próxima.")
        }
    }
    if ( robot == 'tesoura'){
        if (escolha == 'pedra'){
            return alert('Mais sorte na próxima.')
        }
        if (escolha == 'papel'){
            return alert("Você venceu!")
        }
        if (escolha == 'tesoura'){
            return alert("Empate.")
        }
    }
} 

select.addEventListener('click',function(){
    winner()

})







