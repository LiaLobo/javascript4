function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        if(segundos > 10) {
            reject('Muito tempo para esperar')
        }

        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000) 
    })
}

falarDepoisDe(3, 'Hm, esperei para falar').then(frase => console.log(frase)).catch(e => console.log(e))