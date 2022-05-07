async function getEvents() { //defino una función asincrona (lee LINEA por LINEA)
    let response = await fetch("https://amazingeventsapi.herokuapp.com/api/eventos") //lo primero que tiene que hacer la funcion es ESPERAR la carga de un archivo (base de datos)
    let data = await response.json() // espero la transformacion del json
    let events = data.eventos // defino la variable que contiene los eventos
    let date = data.fechaActual // defino la variable que contiene la fecha actual
    return [events, date]
}

const getJson = await getEvents() // espero la ejecución la funcion para cargar los datos del json
var amazingEvents = getJson[0] // defino la variable que contiene un array con los eventos

function toPrintDetails (arrayOfEvents) { // defino la funcion que imprime en pantalla (cuyos parametros son: el array de eventos, el string past/future y cantidad de eventos a imprimir)
    //console.log(location) // veo la propiedad location
    var id = location.search.split("?id=").filter(Number) 
    var selectedId = Number(id[0]) // defino una variable con el id del nombre de la pagina
    var events = arrayOfEvents.find(e => {return e.id ==selectedId})    
    var toPrintDetails = 
        `
            <article class="d-flex flex-column justify-content-center align-items-center w-75 articleDetail" id="event${events.id}">
                <h3 class="d-flex justify-content-center align-items-center cardDetail mt-1 mb-1 w-100">${events.name}</h3>
                <img src="${events.image}" class="w-100">
                <p class="d-flex justify-content-center align-items-center cardDetail mt-1 mb-1 w-100">${events.category}</p>
                <p class="d-flex justify-content-center align-items-center cardDetail mt-1 mb-1 w-100">Lugar: ${events.place} - Fecha: ${events.date}</p>
                <p class="d-flex justify-content-center align-items-center cardDetail mt-1 mb-1 w-100">Capacidad: ${events.capacity} - Precio: ${events.price}</p>
            </article>
        `
        //console.log(toPrintDetails);
    document.querySelector("#events").innerHTML = toPrintDetails // imprimimos en html
}

toPrintDetails(amazingEvents) // imprimo en pantalla