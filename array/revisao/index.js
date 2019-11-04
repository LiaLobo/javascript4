const  comidas = ['lasanha', 'batata', 'brócolis']

console.log(comidas[2])

comidas.forEach((comida, posicao) => {
    console.log(`Na posição ${posicao} temos a comida: ${comida}`)
})

//concat faz uma cópia do array e adiciona o elemento que a gente passa como argumento

let outrasComidas = comidas.concat('chocolate')

console.log('comidas', comidas)
console.log('outras comidas', outrasComidas);

//join cria uma string do array e ele utiliza o argumento como separador

let stringDoArray = comidas.join(' ... ')

console.log(stringDoArray)
console.log(outrasComidas.join(' e '))

//tira o primeiro valor e retorna qual ele tirou, muda permanentemente o próprio array. NÃO FAZ CÓPIA
comidas.shift()

console.log(comidas)

//tira o último valor e muda permanentemente o próprio array. NÃO FAZ CÓPIA
comidas.pop()

console.log(comidas)

//adiciona um item na primeira posição do array, muda permanentemente. NÃO FAZ CÓPIA
comidas.unshift('pizza')
console.log(comidas)

//adiciona um item na última posição do array, muda permanentemente. NÃO FAZ CÓPIA
comidas.push('shimeji')
console.log(comidas)

//Inverte o array
comidas.reverse()
console.log(comidas)

//faz uma cópia simples delimitando o começo e o final da parte que eu quero
//slice(começo, final)
let cortarAlimentos = comidas.slice(1, 2)
console.log(cortarAlimentos)
console.log(comidas)

//splice pode remover e adicionar valores utilizando posição, índice de apagar, o valor
comidas.splice(2, 0, 'alface')
console.log(comidas)

//para ordenar a lista em ordem alfabética
comidas.sort()
console.log(comidas)

//indexOf() mostra o index do argumento dado. Caso tenham dois valores iguais ele mostra o primeiro que encontrar. E se não encontrar o argumento ele retorna -1
console.log(comidas.indexOf('batata'))

//mostra o index do argumento dado. Caso tenham dois iguais ele mostra o último que foi encontrado no array. E se não encontrar o argumento ele retorna -1
console.log(comidas.lastIndexOf('batata'))

//.map() Não altera, faz uma cópia. Ele percorre a lista e adiciona o que foi instruído.
let mapArray = comidas.map((comida) => `${comida} gostosa`)
console.log(mapArray)

let teste = comidas.forEach((comida) => `${comida} boa`)
console.log(teste)

const nums = [1, 2, 3, 4, 5]
console.log(nums)
let numDobrados = nums.map((nums) => nums*2)
console.log(numDobrados)

//vai filtrar o que colocamos na instrução
let arrayProcura = comidas.filter((comida) => comida === 'batata')
console.log(arrayProcura)

//aceita uma função ou uma lógica.
let juntaComida = comidas.reduce((esq, dir) => {
    return `${esq} e ${dir}`
})
console.log(juntaComida)


