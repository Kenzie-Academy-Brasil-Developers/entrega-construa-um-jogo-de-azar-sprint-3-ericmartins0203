const resultado = document.createElement('div')
const btn = document.createElement('button')
btn.innerHTML = 'Jogar Novamente!'
btn.onclick = resultado.classList.add('hidden')
let opcoes = document.querySelector('#opcoes')
let escolha = ''
let mensagem = document.createElement('p')
let adversario = document.createElement('p')

opcoes.addEventListener('click', function (e){
    resultado.classList.add('vitoria')
    resultado.classList.remove('hidden')
    resultado.classList.remove('empate')
    resultado.classList.remove('venceu')
    resultado.classList.remove('perdeu')

    resultado.innerHTML = ''
    adversario = ''
    escolha = e.target.classList.value
    winner()
    if (escolha == ''){
        location.reload()
    }
    resultado.append(mensagem)
    opcoes.append(resultado)
});

function generate (){
    let robot = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (robot == 1){robot = 'pedra'}
    if (robot == 2){robot = 'papel'}
    if (robot == 3){robot = 'tesoura'}
    console.log('Adversário = ' + robot )
    return robot
}

function winner(){
    let robot = ''
    robot = generate()
    console.log({robot})
    adversario = `Você escolheu ${escolha} e o adversário escolheu ${robot}.`
    resultado.append(adversario)
    resultado.appendChild(btn)

    console.log('escolhido = ' + escolha)
    if ( robot == 'pedra'){
        if (escolha == 'pedra'){
            resultado.classList.add('empate')
            mensagem = 'Deu empate. Tente novamente.'
            return console.log('empate')
        }
        if (escolha == 'papel'){
            resultado.classList.add('venceu')
            mensagem = 'Voce venceu. Meus parabéns!'
            return console.log("venceu!")
        }
        if (escolha == 'tesoura'){
            resultado.classList.add('perdeu')
            mensagem = 'Voce perdeu. Mais sorte na próxima.'
            return console.log('perdeu')
        }
    }
    if ( robot == 'papel'){
        if (escolha == 'pedra'){
            resultado.classList.add('perdeu')
            mensagem = 'Voce perdeu. Mais sorte na próxima.'
            return console.log('perdeu')
        }
        if (escolha == 'papel'){
            resultado.classList.add('empate')
            mensagem = 'Deu empate. Tente novamente.'
            return console.log('empate')
        }
        if (escolha == 'tesoura'){
            resultado.classList.add('venceu')
            mensagem= 'Voce venceu. Meus parabéns!'
            return console.log("venceu!") 
        }
    }
    if ( robot == 'tesoura'){
        if (escolha == 'pedra'){
            resultado.classList.add('venceu')
            mensagem= 'Voce venceu. Meus parabéns!'
            return console.log("venceu!")
            
        }
        if (escolha == 'papel'){
            resultado.classList.add('perdeu')
            mensagem = 'Voce perdeu. Mais sorte na próxima.'
            return console.log('perdeu')
        }
        if (escolha == 'tesoura'){
            resultado.classList.add('empate')
            mensagem= 'Deu empate. Tente novamente.'
            return console.log('empate')
        }
    }
} 
