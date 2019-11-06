let resultados = [
    {
        titulo: "Ginger Champagne",
        ingredientes: "champagne, ginger, ice, vodka",
        imagem: "http://img.recipepuppy.com/1.jpg"
    },
    {
        titulo: "Potato and Cheese Frittata",
        ingredientes: "cheddar cheese, eggs, olive oil, onions, potato, salt",
        imagem: "http://img.recipepuppy.com/2.jpg"
    },
    {
        titulo: "Eggnog Thumbprints",
        ingredientes: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        imagem: "http://img.recipepuppy.com/3.jpg"
    },
    {
        titulo: "Succulent Pork Roast",
        ingredientes: "brown sugar, garlic, pork chops, water",
        imagem: "http://img.recipepuppy.com/4.jpg"
    },
    {
        titulo: "Irish Champ",
        ingredientes: "black pepper, butter, green onion, milk, potato, salt",
        imagem: "http://img.recipepuppy.com/5.jpg"
    }
];

class Cards {
    constructor(resultado) {
        this.resultado = resultado
    }
    render() {
        const card = `
        <div class='card'>
            <img src='${this.resultado.imagem}' class='imagem'/>
            <h2> ${this.resultado.titulo} </h2>
            <p class='ingredientes'> ${this.resultado.ingredientes} </p>
        </div>
    `
    document.querySelector('.cards').insertAdjacentHTML('beforeend', card)
    }
}

// const card1 = new Cards(resultados[0])

resultados.map((resultado) => {
    new Cards(resultado).render()
})