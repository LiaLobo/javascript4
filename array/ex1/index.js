let frutas = ["banana", "morango", "bacurí", "laranja"]

const input = document.querySelector('#input')
const btn = document.querySelector('#btnSubmit')

btn.addEventListener('click', function () {
    const valorInput = input.value

//filter necessariamente retorna um array. Nesse caso com o valor do input.
    let arrayFiltra = frutas.filter((comida) => comida === valorInput)
    
//fazemos essa comparação, pois se o filter retornar algum valor dentro da lista é porque o item digitado está na array frutas
    //se ela retornar vazia significa que o item digitado não existe na array frutas. Tudo isso porque o filter percorre toda essa array.
    if (arrayFiltra.length > 0) {
        alert('Acertouuu!')
        console.log(arrayFiltra)
    } else {
        alert('Valor não definido')
        console.log(arrayFiltra)
    }

//o find retorna o próprio valor procurado ou undefined caso não encontre nada.
    //OUTRAS FORMAS DE FAZER:
        //let arrayProcura = frutas.find((comida) => comida === valorInput)
        //if(arrayProcura) {
           //alert('Achouuu!')
        //} else {
            //alert('Não encontrado')
        //}

//indexOf retorna a posição e se não encontra retorna -1
    //if(frutas.indexOf(valorInput) > -1){
       //alert('Achouuu!')
    //} else {
        //alert('Não encontrado')
    //}
let frutas = ["banana", "morango", "bacurí", "laranja"];
let btn = document.getElementById('btn')
let input = document.getElementById('input')
let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase())


btn.addEventListener('click', function(){
    // let arrAchou = frutas.filter(fruta => fruta === input.value)
    // console.log(arrAchou)
    // if(arrAchou.length > 0){
    //     alert(`ACHOU O ${input.value}`)
    // }else{
    //     alert(`Não achou o ${input.value}`)
    // }

    // if(frutas.find(fruta => fruta === input.value)){
    //     alert(`ACHOU O ${input.value}`)
    // }else{
    //     alert(`Não achou o ${input.value}`)
    // }
    console.log(typeof input.value)
console.log(frutasMaiusculas)

    if( frutasMaiusculas.indexOf(input.value.toUpperCase()) > -1){
            alert(`ACHOU O ${input.value}`)
        }else{
            alert(`Não achou o ${input.value}`)
        }
})