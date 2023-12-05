let newEvent = document.querySelector('#newEvent')

function handleSubmit(event) {
    event.preventDefault()
    let data = {}
    //console.log(event)
    //console.log(event.target)
    for (let input of event.target) {
        if (!input.id) {
            continue
        }
        if (input.type==='radio' && !input.checked) {
            continue
        }
        //console.log(input.id)
        //console.log(input.value)
        data[input.id] = input.value
    }
    console.log(data) //esta informacion se enviará a la base de datos luego
    fetch('https://mh-h0bh.onrender.com/api/espectaculares', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => location.href = './inicio.html')
}

newEvent.addEventListener(
    'submit',
    handleSubmit
)
