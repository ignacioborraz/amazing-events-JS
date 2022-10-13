async function getEvents() {
    try {
        let applied = {}
        let response = await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
        let data = await response.json()
        let date = data.fechaActual
        let events = data.eventos
        events = events.filter(event => date > event.date)
        let categories = new Set(events.map(event => event.category))
        categories.forEach(innerOptions)
        printEvents(events)
        document.querySelector("#inputToSearch").addEventListener("keyup",(event) => {
            applied.text=event.target.value
            filter(events,applied)
        })
        document.querySelector("#defaultList").addEventListener("change",(event) => {
            applied.select=event.target.value
            filter(events,applied)
        })
    } catch(error) {
        console.log(error)
    }
}
getEvents()

let innerOptions = (category) => document.querySelector("#defaultList").innerHTML += `<option value="${category}">${category}</option>`

let printEvents = (array) => {
    document.querySelector("#events").innerHTML = ""
    array.forEach(event =>{ //realizo un mapeo para configurar la impresión de los eventos futuros/pasados
        document.querySelector("#events").innerHTML += // acumulo los eventos
            `
            <a href="evento.html?id=${event.id}" class="d-flex m-2 imgWidth hoverEvent">
            <article class="d-flex flex-column justify-content-center align-items-center imgWidth">
                <h3 class="d-flex justify-content-center align-items-center card-text mt-1 mb-1 imgWidth">${event.name}</h3>
                <img src="${event.image}" class="imgWidth">
                <p class="d-flex justify-content-center align-items-center card-text mt-1 mb-1 imgWidth">${event.category}:  ${event.date}</p>
            </article>
            </a>
            `
    })
}

let filter = (array,obj) => {
    let filterArray = array
    for (let prop in obj) {
        if (prop==='text') {
            filterArray = filterArray.filter(e => e.name.toLowerCase().includes(obj[prop].toLowerCase()))
        }
        if (prop==='select') {
            filterArray = filterArray.filter(e => e.category===obj[prop])
        }
    }
    printEvents(filterArray)
}


/* 



var parameter = "" // variable que va a contener el valor del select
var data = [] // array que va a contener los eventos a imprimir
var valueOfInput = "" // variable que va a contener el valor del input

function toSelect (event) { // funcion que captura el valor proveniente del select e imprime el array de los eventos correspondientes
    parameter = event.target.value // defino el valor del evento
    document.querySelector("#events").innerHTML = "" // limpio la impresion de HTML
    if (parameter == "" || parameter == "CATEGORIAS" || parameter == undefined) {
        if (valueOfInput == "" || valueOfInput == undefined) {
            data = futureEvents
        } else {
            data = futureEvents.filter(event =>
                event.category.toLowerCase().startsWith(valueOfInput.toLowerCase()) ||
                event.name.toLowerCase().startsWith(valueOfInput.toLowerCase())
            )
        }
    } else {
        if (valueOfInput == "" || valueOfInput == undefined) {
            data = futureEvents.filter(event => event.category == parameter)
        } else {
            data = futureEvents.filter(event =>
                event.category == parameter &&
                (event.category.toLowerCase().startsWith(valueOfInput.toLowerCase()) ||
                event.name.toLowerCase().startsWith(valueOfInput.toLowerCase()))
            )
        }
    }
    toPrint(data) // imprimimos en html
    return parameter
}

function toSearch (event) { // funcion que captura el valor proveniente del input e imprime el array de los eventos correspondientes
    valueOfInput = event.target.value // defino el valor del evento
    document.querySelector("#events").innerHTML = "" // limpio la impresion de HTML
    if (parameter == "" || parameter == undefined || parameter == "CATEGORIAS") {
        data = futureEvents.filter(event =>
            event.category.toLowerCase().startsWith(valueOfInput.toLowerCase()) ||
            event.name.toLowerCase().startsWith(valueOfInput.toLowerCase())
        )
    } else {
        data = futureEvents.filter(event =>
            event.category.toLowerCase() === parameter.toLowerCase() &&
            (event.category.toLowerCase().startsWith(valueOfInput.toLowerCase()) ||
            event.name.toLowerCase().startsWith(valueOfInput.toLowerCase()))
        )
    }
    toPrint(data) // imprimimos en html
    return valueOfInput
}


toPrint(futureEvents) // imprimo en pantalla */