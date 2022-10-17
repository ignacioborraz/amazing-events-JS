let newEvent = document.querySelector('#newEvent')

function handleSubmit(event) {
    event.preventDefault()
    let data = {}
    console.log(event)
    console.log(event.target)
    for (let input of event.target) {
        if (!input.id) {
            continue
        }
        if (input.type==='radio' && !input.checked) {
            continue
        }
        console.log(input.id)
        console.log(input.value)
        data[input.id] = input.value
    }
    console.log(data) //esta informacion se enviará a la base de datos luego
    handleModal('open')
}

newEvent.addEventListener(
    'submit',
    handleSubmit
)

function handleModal(type) {
    let modal = document.querySelector('#modal')
    modal.className = `modal on-${type}`
}

let close = document.querySelector('#close')
close.addEventListener(
    'click',
    () => handleModal('close')
)

let done = document.querySelector('#done')
done.addEventListener(
    'click',
    () => {
        console.log(location)
        console.log(object);
        location.href = location.host+'/inicio.html'
    }
)

