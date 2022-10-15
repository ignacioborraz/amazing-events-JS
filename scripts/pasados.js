async function getEvents() { //defino una función asincrona (lee LINEA por LINEA)
    let response = await fetch("https://amazingeventsapi.herokuapp.com/api/eventos") //lo primero que tiene que hacer la funcion es ESPERAR la carga de un archivo (base de datos)
    let data = await response.json() // espero la transformacion del json
    let events = data.eventos // defino la variable que contiene los eventos
    let date = data.fechaActual // defino la variable que contiene la fecha actual
    return [events, date]
}

const getJson = await getEvents() // espero la ejecución la funcion para cargar los datos del json
var amazingEvents = getJson[0] // defino la variable que contiene un array con los eventos
var actualDate = getJson[1] // defino la variable que contiene la fecha en el JSON

var categories = amazingEvents.map (category => category.category) // selecciono las categorias
categories = new Set (categories) // elimino las repetidas
//console.log(categories); // verifico la carga de datos
categories = [...categories] // transformo el objeto en un array
//console.log(categories);
var innerCategories = ""
categories.map( events => {
    innerCategories +=
    `
    <option id="${events}">${events}</option>
    `}
)
document.querySelector("#defaultList").innerHTML += innerCategories

function timeFilter (events,dateEvent) { // defino la funcion que filtra
    events.map (e => { //realizo un mapeo para separar eventos del pasado y futuro
        if (dateEvent > e.date) { //condiciono las fechas para separar
            pastEvents.push(e) //pusheo los eventos correspondientes
        } else {
            futureEvents.push(e) //pusheo los eventos correspondientes
        }
    })
}
var futureEvents = [] // defino el array que va a contener los eventos del futuro
var pastEvents = [] // defino el array que va a contener los eventos del pasado
timeFilter(amazingEvents,actualDate) //aplico el filtro de tiempo

function toPrint (arrayOfEvents) { // defino la funcion que imprime en pantalla (cuyos parametros son: el array de eventos, el string past/future y cantidad de eventos a imprimir)
    var toPrintEvents = ""
    arrayOfEvents.map(events =>{ //realizo un mapeo para configurar la impresión de los eventos futuros/pasados
            toPrintEvents += // acumulo los eventos
            `
            <a href="evento.html?id=${events.id}" class="d-flex m-2 imgWidth hoverEvent">
            <article class="d-flex flex-column justify-content-center align-items-center imgWidth">
                <h3 class="d-flex justify-content-center align-items-center card-text mt-1 mb-1 imgWidth">${events.name}</h3>
                <img src="${events.image}" class="imgWidth">
                <p class="d-flex justify-content-center align-items-center card-text mt-1 mb-1 imgWidth">${events.category}:  ${events.date}</p>
            </article>
            </a>
            `
    })
    document.querySelector("#events").innerHTML = toPrintEvents // imprimimos en html
}

var parameter = "" // variable que va a contener el valor del select
var data = [] // array que va a contener los eventos a imprimir
var valueOfInput = "" // variable que va a contener el valor del input

function toSelect (event) { // funcion que captura el valor proveniente del select e imprime el array de los eventos correspondientes
    parameter = event.target.value // defino el valor del evento
    document.querySelector("#events").innerHTML = "" // limpio la impresion de HTML
    if (parameter == "" || parameter == "CATEGORIAS" || parameter == undefined) {
        if (valueOfInput == "" || valueOfInput == undefined) {
            data = pastEvents
        } else {
            data = pastEvents.filter(event =>
                event.category.toLowerCase().startsWith(valueOfInput.toLowerCase()) ||
                event.name.toLowerCase().startsWith(valueOfInput.toLowerCase())
            )
        }
    } else {
        if (valueOfInput == "" || valueOfInput == undefined) {
            data = pastEvents.filter(event => event.category == parameter)
        } else {
            data = pastEvents.filter(event =>
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
        data = pastEvents.filter(event =>
            event.category.toLowerCase().startsWith(valueOfInput.toLowerCase()) ||
            event.name.toLowerCase().startsWith(valueOfInput.toLowerCase())
        )
    } else {
        data = pastEvents.filter(event =>
            event.category.toLowerCase() === parameter.toLowerCase() &&
            (event.category.toLowerCase().startsWith(valueOfInput.toLowerCase()) ||
            event.name.toLowerCase().startsWith(valueOfInput.toLowerCase()))
        )
    }
    toPrint(data) // imprimimos en html
    return valueOfInput
}

document.querySelector("#inputToSearch").addEventListener("keyup",toSearch) // ejecuto la funcion con cada evento de teclado
document.querySelector("#defaultList").addEventListener("change",toSelect) // ejecuto la funcion con cada evento de cambio

toPrint(pastEvents) // imprimo en pantalla