async function getEvents() { //defino una función asincrona (lee LINEA por LINEA)
    let response = await fetch("https://amazingeventsapi.herokuapp.com/api/eventos") //lo primero que tiene que hacer la funcion es ESPERAR la carga de un archivo (base de datos)
    let data = await response.json() // espero la transformacion del json
    let events = data.eventos // defino la variable que contiene los eventos
    let date = data.fechaActual // defino la variable que contiene la fecha actual
    return [events, date]
}

const getJson = await getEvents() // espero la ejecución la funcion para cargar los datos del json
var amazingEvents = getJson[0] // defino la variable que contiene un array con los eventos
var actualDate = getJson[1] // defino la variable que contiene la fecha

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
            <a href="detail.html?id=${events.id}" class="d-flex mt-2 imgWidth hoverEvent">
                <article class="d-flex flex-column justify-content-center align-items-center imgWidth">
                    <h3 class="d-flex justify-content-center align-items-center card-text mt-1 imgWidth">${events.name}</h3>
                    <img src="${events.image}" class="imgWidth">
                    <p class="d-flex justify-content-center align-items-center card-text imgWidth">${events.category}</p>
                    <p class="d-flex justify-content-center align-items-center card-text mb-1 imgWidth">${events.place} - ${events.date}</p>
                </article>
            </a>
            `
    })
    document.querySelector("#events").innerHTML = toPrintEvents // imprimimos en html
}

toPrint(futureEvents) // imprimo en pantalla