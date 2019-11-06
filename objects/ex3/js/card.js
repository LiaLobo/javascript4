// class Cards {
//     constructor(resultado) {
//         this.resultado = resultado
//     }
//     render() {
//         const card = `
//         <div class='card'>
//             <img src='${this.resultado.imagem}' class='imagem'/>
//             <h2> ${this.resultado.titulo} </h2>
//             <p class='ingredientes'> ${this.resultado.ingredientes} </p>
//         </div>
//     `
//     document.querySelector('.cards').insertAdjacentHTML('beforeend', card)
//     }
// }

//OUTRA FORMA:
    // render(){
    //     const{
    //         imagem,
    //         titulo,
    //         ingredientes
    //     } = this.receita
    //     return `<div class="card">
    //     <img class="imagem" src="${imagem}"/>
    //     <h2>${titulo}</h2>
    //     <p class="ingredientes">${ingredientes}</p>
    //     </div>`
    // }

    // document.querySelector('.cards').innerHTML = resultados.map(receita => {
    //     return new Card(receita).render()
    // }).join("")

    // console.log(resultados.map(receita =>{
    //     return new Card(receita).render()
    // }).join(""))
  