//Fazer a chamada usando fetch para pegar uma imagem
//Colocar a imagem criando uma tag img no body
//lidando com erros


//No caso da promise do fetch a resposta será um objeto com as informações da request.
fetch('rainbow.jpg').then(response => {
    console.log(response)
//Uma maneira de manipular e armazenar de maneira mais leve uma source (imagem ou vídeo).Aqui funciona como o JSON. 
    //A resposta nos traz um objeto e desse objeto pegamos o blob que é a imagem.
    return response.blob()
}).then(blob => {
    console.log(blob)
//Cria o caminho, a url do caminho da imagem nesse caso.
    document.getElementById('rainbow').src = URL.createObjectURL(blob)
}).catch(error => {
    console.log(error)
})

//MESMA RESOLUÇÃO USANDO ASYNC AWAIT:
    async function pegaArco(){
        const response = await fetch('rainbow.jpg')
        const blob = await response.blob()
        console.log(response)
        console.log(blob)
        document.getElementById('rainbow').src = URL.createObjectURL(blob)
    }

    pegaArco()