//stringify CONVIERTE objeto de JS a texto plano (JSON)
let events = [
    {id: 1, name: 'Harry Potter', category: 'Cinema', price: 2},
    {id: 2, name: 'Sonic', category: 'Cinema', price: 2},
    {id: 3, name: 'Dua Lipa', category: 'Concert', price: 5},
    {id: 4, name: 'Babasonicos', category: 'Concert', price: 5}
]
let jsonEvents = JSON.stringify(events)
//console.log(jsonEvents)
//para fines practicos funciona sin necesidad de pasar el segundo y tercer parámetro
//por defecto son null y cero
//el segundo parámetro hace referencia a las propiedades del objeto que quiero "stringifear"
//el tercer parámetro hace referencia a los espacios de identación
let jsonEvents1 = JSON.stringify(events,null,1)
//console.log(jsonEvents5)
let jsonEvents5 = JSON.stringify(events,['name','category'],5)
//console.log(typeof jsonEvents)

//parse CONVIERTE texto plano (JSON) a objeto de JS
let jsEvents = JSON.parse(jsonEvents1)
//console.log(jsEvents)
//console.log(typeof jsEvents)

//OTRO EJEMPLO
let array = ['uno',2,true,{name: 'igna'}]
let jsonArray = JSON.stringify(array)
//console.log(array)
//console.log(typeof array) //para js el tipo de un array es un objeto
//console.log(jsonArray)
//console.log(typeof jsonArray)
let jsArray = JSON.parse(jsonArray)
//console.log(jsArray)
//console.log(typeof jsArray)




//fetch sirve para consultar los datos de una API y devuelve SIEMPRE una promesa
//console.log(fetch('https://mind-hub.up.railway.app/amazing'))
//las promesas son acciones/datos que se resolveran con exito/fracaso en un futuro

//por que en un futuro?
//por que JS tiene que esperar a que esa API me devuelva la respuesta de lo que le pedi

//como hago para esperar esa respuesta?
//con una funcion asincrona con try/catch para manejar errores

async function fetchApi(){ 
    try {
        let res = await fetch('https://mind-hub.up.railway.app/amazing')
        //res es la respuesta de la peticion fetch
        let data = await res.json()
        //transformo la respuesta de la peticion en datos con el metodo .json
        //console.log(data)
        let events = data.events
        //los datos de los eventos están en la propiedad events del objeto data
        //console.log(events);
        printEvents(events,'events')
        //imprimo en pantalla las cards de cada evento
        let categories = new Set(events.map(element => element.category))
        categories = [...categories]
        //obtengo las categorias
        //console.log(categories)
        printCategories(events,categories,'checks')
        //imprimo los checks de categorias (ya tienen asignadas el filtro)
        return events //RETURNA PROMESAS!!!
    } catch(err) {
        //el nombre del parámetro que necesita el catch puede tener cualquier nombre
        //por que?
        //porque es el nombre que asocia CUALQUIER ERROR que ocurra en el TRY
        console.error(err)
        console.log('hubo un error y capaz el console.error te ayude a resolverlo')
    }
}
fetchApi()

function printEvents(array,id) {
    //array: array con los eventos a renderizar
    //id: id de la etiqueta HTML donde tiene que renderizar
    document.querySelector(`#${id}`).innerHTML = ""
    array.forEach(event =>{
        document.querySelector(`#${id}`).innerHTML +=
            `
            <article class="d-flex flex-column justify-content-center align-items-center imgWidth">
                <h3 class="d-flex justify-content-center align-items-center card-text mt-1 mb-1 imgWidth">${event.name}</h3>
                <img src="${event.image}" class="imgWidth">
                <p class="d-flex justify-content-center align-items-center card-text mt-1 mb-1 imgWidth">${event.category} - ${(new Date(event.date)).getDate()+1}/${(new Date(event.date)).getMonth()+1}/${(new Date(event.date)).getFullYear()}</p>
            </article>
            `
    })
}

function printCategories (arrayEvents,arrayCat,id) {
    //arrayEvents: array con los eventos a filtrar
    //arrayCat: array con las categorias a renderizar
    //id: id de la etiqueta HTML donde tiene que renderizar
    document.querySelector(`#${id}`).innerHTML = ""
    arrayCat.forEach(cat =>{
        document.querySelector(`#${id}`).innerHTML +=
            `
            <label class="d-flex align-items-center p-1" for="${cat.toLowerCase()}">${cat.toUpperCase()}
                <input class="d-flex align-items-center m-1 checkbox" type="checkbox" id="${cat.toLowerCase()}" name="letter" value="${cat.toLowerCase()}">
            </label>
            `
    })
    //una vez renderizado
    //agrego el escuchador de eventos con el filtro
    let checks = document.querySelectorAll('.checkbox')
    checks.forEach(cadaCheck => {
        cadaCheck.addEventListener('click',() => search(arrayEvents))
    })
}

function search(array) {
    //selecciono TODAS las clases checkbox que estan en checked=true
    let checks = document.querySelectorAll('.checkbox:checked')
    //console.log(checks)
    //con un for of o foreach recorro la lista de checks para renderizar cada categoria seleccionada
    let filterArray = []
    checks.forEach(cadaCategoria => {
        let newArray = array.filter(cadaEvento => cadaEvento.category.toLowerCase() === cadaCategoria.value)
        //console.log(newArray);
        filterArray = filterArray.concat(newArray)
    })
    //console.log(filterArray)
    if (filterArray.length===0) { //si el filtro queda sin checks imprimo todo
        filterArray = array
    }
    printEvents(filterArray,'events')
}