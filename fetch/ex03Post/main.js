const titulo = document.getElementById('titulo')
const descricao = document.getElementById('descricao')
const btnSubmit = document.getElementById('btn-submit')

btnSubmit.addEventListener('click', function(event) {
    event.preventDefault()

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers:{
            "Content-type": "application/json"
        }, 
        body
    })
})