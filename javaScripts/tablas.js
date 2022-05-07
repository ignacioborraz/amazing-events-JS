async function getEvents() { //defino una función asincrona (lee LINEA por LINEA)
    let response = await fetch("https://amazingeventsapi.herokuapp.com/api/eventos") //lo primero que tiene que hacer la funcion es ESPERAR la carga de un archivo (base de datos)
    let data = await response.json() // espero la transformacion del json
    let date = data.fechaActual // defino la variable que contiene la fecha actual
    let events = data.eventos // defino la variable que contiene los eventos
    events.map (event => { //mapeo los eventos para agregar las propiedades que me faltan (ganancia y %)
        if (event.assistance > 0) {
            event.gain = Number(event.assistance * event.price)
            event.percentAssistance = Number((event.assistance*100/event.capacity).toFixed(2))
        } else { //si no existen las agrego igualo a cero
            event.assistance = 0
            event.gain = 0
            event.percentAssistance = 0
        }
    })
    return [events, date] // returno un array con los eventos y la fecha actual
}

const getJson = await getEvents() // espero la ejecución la funcion para cargar los datos del json
var amazingEvents = getJson[0] // defino la variable que contiene un array con los eventos
//console.log(amazingEvents) // verifico las nuevas propiedades

function toSort (property) { //defino una funcion que tiene que como parametro la propiedad por la cual se va a ordenar el array
    var sorted = amazingEvents
        .filter( e => (e.assistance > 0) ) // aplico un filtro
        .sort( function (element1,element2) { // ordeno los elementos de mayor a menor
            if (element1[property] < element2[property]) {
                return 1
            } else if (element1[property] > element2[property]) {
                return -1
            } else {
                return 0
            }
        })
    //console.log(sorted);
    var sortedArray = []
    sorted.map(e=> {
        sortedArray.push({id: e.id , name: e.name , category: e.category , [property]: e[property]})
    })
    return sortedArray
}

var capacity = [toSort("capacity")[0],toSort("capacity")[toSort("capacity").length-1]]
var assistance = [toSort("assistance")[0],toSort("assistance")[toSort("assistance").length-1]]
var percent = [toSort("percentAssistance")[0],toSort("percentAssistance")[toSort("percentAssistance").length-1]]
var gain = [toSort("gain")[0],toSort("gain")[toSort("gain").length-1]]
//console.log(toSort("gain"))
//console.log(gain);

document.querySelector("#minmaxTable").innerHTML = //imprimo la tabla
`
<tr class="table-light d-flex justify-content-center">
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${capacity[1].capacity}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${capacity[0].capacity}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${assistance[1].assistance}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${assistance[0].assistance}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${percent[1].percentAssistance}%</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${percent[0].percentAssistance}%</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">$${gain[1].gain}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">$${gain[0].gain}</th>                   
</tr>
<tr class="table-light d-flex justify-content-center">
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${capacity[1].category}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${capacity[0].category}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${assistance[1].category}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${assistance[0].category}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${percent[1].category}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${percent[0].category}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${gain[1].category}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${gain[0].category}</th>                   
</tr>
<tr class="table-light d-flex justify-content-center">
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${capacity[1].name}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${capacity[0].name}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${assistance[1].name}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${assistance[0].name}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${percent[1].name}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${percent[0].name}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${gain[1].name}</th>
    <td scope="row" class="d-flex justify-content-center align-items-center text-center col-1">${gain[0].name}</th>                   
</tr>
`

var categories = amazingEvents.map (category => category.category) // selecciono las categorias
categories = new Set (categories) // elimino las repetidas
//console.log(categories); // verifico la carga de datos
categories = [...categories] // transformo el objeto en un array
//console.log(categories); // verifico la carga de datos
var byCategory = [] // defino un array que va a contener las categorias de eventos, la ganancia y la asistencia y el porcentaje de asistencia
categories.forEach(categ => { // por cada categoria, genero un objeto que contenga los datos que necesito
    var counterGain = 0 // defino los contadores para acomular ganancia, asistencia y %
    var counterCapacity = 0
    var counterAssistance = 0
    byCategory.push ({
        category: categ, // defino la categoria
        name: (amazingEvents.filter(cat => (cat.category === categ))) // filtro por categoria el nombre
                            .map(e=>e.name), // realizo un mapeo de la propiedade que necesito
        gain1: (amazingEvents.filter (cat => (cat.category === categ))).forEach(e => counterGain += e.gain), // por cada elemento acumulo
        gain: counterGain, // asigno el contador
        capacity1: (amazingEvents.filter (cat => (cat.category === categ))).forEach(e => counterCapacity += e.capacity),
        capacity: counterCapacity,
        assistance1: (amazingEvents.filter (cat => (cat.category === categ))).forEach(e => counterAssistance += e.assistance),
        assistance: counterAssistance,
        percentAssistance: (counterAssistance*100/counterCapacity).toFixed(2)
    })
})
byCategory.map(event => delete event.assistance1 && delete event.capacity1 && delete event.gain1) // elimino las propiedades no deseadas de los eventos
console.log(byCategory) // verifico la carga de datos

var eventsByCategory = ""
byCategory.map(event => {
    if (event.assistance>0) {
        eventsByCategory +=
        `
        <tr class="table-light d-flex justify-content-center">
            <td scope="row" class="col-1 d-flex justify-content-center align-items-center text-center">${event.category}</td>
            <td scope="row" class="col-4 d-flex justify-content-center align-items-center text-center">${event.name.join(`<br>`)}</td>
            <td scope="row" class="col-1 d-flex justify-content-center align-items-center text-center tdHide">${event.capacity}</td>
            <td scope="row" class="col-1 d-flex justify-content-center align-items-center text-center tdHide">${event.percentAssistance}%</td>
            <td scope="row" class="col-1 d-flex justify-content-center align-items-center text-center">$${event.gain}</td>     
        </tr>
        `
    }
})
document.querySelector("#categoryTable").innerHTML = eventsByCategory //imprimo la tabla