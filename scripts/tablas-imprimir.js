const printTable1 = (minP,maxP,maxC,id) => {
    document.querySelector(`#${id}`).innerHTML =
    `
    <tr class="table-light d-flex justify-content-center">
        <td scope="row" class="d-flex justify-content-center align-items-center text-center col-3">${minP.name}</th>
        <td scope="row" class="d-flex justify-content-center align-items-center text-center col-3">${maxP.name}</th>
        <td scope="row" class="d-flex justify-content-center align-items-center text-center col-3">${maxC.name}</th>
    </tr>
    <tr class="table-light d-flex justify-content-center">
        <td scope="row" class="d-flex justify-content-center align-items-center text-center col-3">${minP.percent}%</th>
        <td scope="row" class="d-flex justify-content-center align-items-center text-center col-3">${maxP.percent}%</th>
        <td scope="row" class="d-flex justify-content-center align-items-center text-center col-3">${maxC.capacity}</th>
    </tr>
    `
}

const printTable2 = (array,id) => {
    array.forEach(element => {
        document.querySelector(`#${id}`).innerHTML +=
        `
        <tr class="table-light d-flex justify-content-center">
            <td scope="row" class="col-3 d-flex justify-content-center align-items-center text-center">${element.category}</td>
            <td scope="row" class="col-3 d-flex justify-content-center align-items-center text-center">$${element.gain}</td>
            <td scope="row" class="col-3 d-flex justify-content-center align-items-center text-center">${element.prom}%</td>     
        </tr>
        `
    })
}


/* 
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
document.querySelector("#categoryTable").innerHTML = eventsByCategory //imprimo la tabla */