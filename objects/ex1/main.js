class Botao {
    constructor(texto, cor, tamanho, icone){
        this.texto = texto
        this.cor = cor
        this.tamanho = tamanho
        this.icone = icone
    }
    desenhaBotao() {
        const newBtn = document.createElement('button')
        newBtn.setAttribute('class', `${this.cor} ${this.tamanho}`)
        if(this.icone){
            const tagIcone = document.createElement('i')
            tagIcone.setAttribute('class', `fas ${this.icone}`)
            newBtn.appendChild(tagIcone)
            const text = document.createTextNode(this.texto)
            newBtn.appendChild(text)
        } else {
            novoBotao.innerHTML = this.texto
        }
        document.getElementById('buttons-section').appendChild(newBtn)
    }
    desenhaBotaoString(){
        return `<button class='${this.cor} ${this.tamanho}'>
                    ${this.text}
                </button>
        `
    }
} 

const botaoVerde = new Botao('Enviar', 'verde', 'pequeno', 'fa-plus')
botaoVerde.desenhaBotao()

const botaoAzul = new Botao('Chegar', 'azul', 'medio', 'fa-air-freshener')
botaoAzul.desenhaBotao()

document.getElementById('buttons-section').insertAdjacentHTML('beforeend', botaoVerde.desenhaBotaoString())