async function getEvents() {
    //console.log(location) // veo la propiedad location
    //console.log(location.search)
    //console.log(location.search.slice(4))
    let id = location.search.slice(4)
    let response = await fetch(`https://mh-amazing-events.up.railway.app/amazing/${id}`)
    let data = await response.json()
    //console.log(data)
    let event = data.event
    toPrintDetails(event)
}

getEvents()

function toPrintDetails (e) {
    document.querySelector("#events").innerHTML =
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