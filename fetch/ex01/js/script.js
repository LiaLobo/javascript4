//Fazer o fetch para ver se carrega o array de cartas

const card = document.getElementById('cards-section')
const btn = document.getElementById('btn')
const errorSection = document.getElementById('error')
const loading = document.getElementById('spinner')

//Quando não carregar, vamos expor o seguinte:
const placeholderCard = {
    nome:'Carta não carregada',
    tipo: 'Arcano Maior',
    descricao: 'Sem descrição',
    imagem: 'http://via.placeholder.com/250X500',
    link: 'https://www.astrolink.com.br/'
} 

//Função para criar uma carta nova
    renderCard = carta => {
        card.innerHTML = new Card(carta).render()
    }

//Fazer função para tirar uma carta aleatória 
    //Esse parâmetro cartas funciona como uma representação do array tarot
    selectRandomCard = cartas => {
    return cartas[Math.floor(Math.random() * cartas.length)]
    }

//Pega botão e faz evento
    novaCarta = () => {
        tarotApi()
    }

    //Com async
        async function tarotApi() {
            errorSection.innerHTML = ''
            loading.style.display = 'block'
            try {
                const response = await fetch('tarot.json')
                const json = await response.json()
                renderCard(selectRandomCard(json))
                loading.style.display = 'none'
            } catch (error) {
                renderCard(placeholderCard)
                errorSection.innerHTML = `A requisição falhou: ${error}`
                loading.style.display = 'none'
            }
          }

        // fetch('tarot.json').then(response => {
        //     return response.json()
        // }).then(json => {
        //     console.log(json)
        //Aqui chamamos a função passando o parâmetro
            // renderCard(selectRandomCard(json))
        //A função renderCard precisa de um parâmetro que é uma função (selectRandomCard), só que essa função também precisa de um parâmetro.
        // })

        tarotApi()

