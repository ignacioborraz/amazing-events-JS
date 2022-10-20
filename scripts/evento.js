//ACLARACIÓN: LA URL QUE YO USO ACÁ ESTÁ EN CASTELLANO: NO ES LA MISMA QUE TIENEN QUE USAR USTEDES

async function getEvent() {
    //defino una funcion asincrona para obtener los datos de la API y utilizarlos
    //primero necesito capturar el id del evento que se encuentra en la URL de front
    //console.log(location) //veo la propiedad location
    //console.log(location.search) //el id se encuentra en la propiedad search de la query de la URL del front
    //console.log(location.search.slice(4)) //corto la parte que no me interesa
    let id = location.search.slice(4)
    let response = await fetch(`https://mind-hub.up.railway.app/espectaculares/${id}`)
    //realizo la peticion de la forma que me lo pide la documentacion
    //pasando el id del evento como parámetro/params
    let data = await response.json()
    //transformo la respuesta de la peticion en datos con el metodo .json
    //console.log(data)
    let event = data.event
    //los datos del evento están en la propiedad event del objeto data
    //console.log(event)
    toPrintDetails(event,'events')
    //imprimo en pantalla
}
getEvent()

function toPrintDetails (e,id) {
    //e: array del evento
    //id: id de la etiqueta HTML donde tiene que renderizar
    document.querySelector(`#${id}`).innerHTML =
        `
            <article class="d-flex flex-column justify-content-center align-items-center w-75 articleDetail" id="event${e.id}">
                <h3 class="d-flex justify-content-center align-items-center cardDetail mt-1 mb-1 w-100">${e.name}</h3>
                <img src="${e.image}" class="w-100">
                <p class="d-flex justify-content-center align-items-center cardDetail mt-1 mb-1 w-100">${e.category}</p>
                <p class="d-flex justify-content-center align-items-center cardDetail mt-1 mb-1 w-100">Lugar: ${e.place} - Fecha: ${(new Date(e.date)).getDate()+1}/${(new Date(e.date)).getMonth()+1}/${(new Date(e.date)).getFullYear()}</p>
                <p class="d-flex justify-content-center align-items-center cardDetail mt-1 mb-1 w-100">Capacidad: ${e.capacity} - Precio: ${e.price}</p>
            </article>
        `
}