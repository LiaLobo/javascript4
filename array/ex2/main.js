const nomesNoRole =['Adriana',
'Adrielly',
'Aline',
'Ana',
'Angelica',
'Ba',
'Babs',
'Carolzinha',
'Carolzona',
'Cecilia',
'Daiana',
'Emanuelle',
'Jackeline',
'Jennifer',
'Josiane',
'Lia',
'Marcela',
'Monique',
'Roiz',
'Priscilla',
'Raissa',
'Raquel',
'Romênia',
'Rosana',
'Simara',
'Simone',
'Talita',
'Telma',
'Thaís',
'Valdeniza']

// const input = document.getElementById('nome')
// const botao = document.querySelector('button')
// const form = document.getElementById('form-do-role')
// const divConvidado = document.querySelector('#status')

// const erro = document.createElement('span')
// const spanConvidado = document.createElement('p')

// botao.addEventListener('click', function(e){
//     e.preventDefault()

//     const inputValue = input.value
//     console.log(inputValue)

//     if(nomesNoRole.find((convidado) => convidado === inputValue)) {
//         erro.innerHTML = ''
        
//         spanConvidado.innerHTML = `${inputValue} está no rolê`
//         divConvidado.appendChild(spanConvidado)
//     } else if(inputValue.trim() === '') {
        
//         erro.innerHTML = 'Digite um nome para conferir se está na lista'
//         divConvidado.appendChild(erro)
//     } else {
//         erro.innerHTML = ''
//         alert('Nome não consta na lista')
//     }

//     form.reset()
// })

//OUTRA FORMA DE FAZER. MELHOR PARA FAZERMOS VALIDAÇÕES:

    const form = document.getElementById('form-do-role')

    const validacao = (nome) => {
        if(nome.trim() === '') throw 'O campo está vazio'
    }

    const checaPresenca = nome => {
        let estaNaLista = nomesNoRole.find((presente) => {
            return nome.toLowerCase() === presente.toLowerCase()
        })

        if(estaNaLista) {
            document.getElementById('nome').classList.add('is-valid')
            document.getElementById('status').innerHTML = `${nome} está no rolê`
            return
        }

        throw `${nome} não está no rolê`
    }

    document.getElementById('form-do-role').addEventListener('submit', function(e) {
        e.preventDefault()

        let valorCampo = document.getElementById('nome').value

        if(document.getElementById('nome').classList.contains('is-valid')){
            document.getElementById('nome').classList.remove('is-valid')
        }

        if(document.getElementById('nome').classList.contains('is-invalid')){
            document.getElementById('nome').classList.remove('is-invalid')
        }

        try {
            validacao(valorCampo)
            checaPresenca(valorCampo)
        } catch (erro) {
            console.error(erro)
            document.getElementById('status').innerHTML = erro
            document.getElementById('nome').classList.add('is-invalid')
        }

        form.reset()
    })
