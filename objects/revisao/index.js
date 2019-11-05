//Essa é uma função construtora. Criamos um modelo com alguns parâmetros e depois criamos uma variável com uma nova Crianca no caso e adicionamos os valores que queremos.
    //A função construtora deve ter o nome dela começando com letra maiúscula     
function Crianca(nome, idade, altura) {
    this.nome = nome
    this.idade = idade
    this.altura = altura
    this.podeBrincar = () => {
        return (altura > 1)
    }
}

const c1 = new Crianca('Bete', 6, 1.1)
console.log(`${c1.nome} tem ${c1.altura} e ${c1.podeBrincar() ? 'podebrincar' : 'não pode brincar'}`)
const c2 = new Crianca('Carlos', 4, 0.8)
console.log(`${c2.nome} tem ${c2.altura} e ${c2.podeBrincar() ? 'podebrincar' : 'não pode brincar'}`)

//cria uma função construtora com nome, sobrenome, matéria
function Professor(nome, sobrenome, materia) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.materia = materia
}

Professor.prototype.dzMateria = function() {
    return `A matéria é ${this.materia}`
}

const novoProf = new Professor('Amélia', 'Fernandes', 'História')
console.log(novoProf.dzMateria())

const maisUmProf = new Professor('Lydia', 'Rodrigues', 'JS 4')
console.log(maisUmProf.dzMateria())

maisUmProf.dzMateria = function() {
    return `A professora ${this.nome} da aula de ${this.materia}`
}

console.log(maisUmProf.dzMateria())