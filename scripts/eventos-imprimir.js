let innerOptions = (category) => document.querySelector("#defaultList").innerHTML += `<option value="${category}">${category}</option>`

let addToFav = (id)=> {
    console.log(id)
    let storage = localStorage.getItem('eventos')               //busco la clave con los eventos en el storage
    let data = []                                               //defino el array que va a tener los eventos en la memoria
    /*
    if (storage.length===0) {                                   //si no hay eventos en el storage
        data.push(id)                                           //pusheo el primer evento
        localStorage.setItem('eventos',JSON.stringify(data))    //lo guardo en el storage
    } else {                                                    //en caso contrario (hay eventos en el storage)
        data = JSON.parse(storage)                              //cargo en la memoria, los datos del storage
        data.push(id)                                           //guardo el evento que corresponda en la memoria
        localStorage.setItem('eventos',JSON.stringify(data))    //y luego en el storage
    }
    */
    if (storage?.length>0) {                                     //refactorizado: si existen eventos
        data = JSON.parse(storage)                               //cargo la memoria con esos eventos
    }
    let selector = document.getElementById(id)
    if (data.includes(id)) {
        data = data.filter(each=>each!==id)
        selector.value = 'add'
        selector.className = 'btn-success p-1'
    } else {
        data.push(id)
        selector.value = 'remove'
        selector.className = 'btn-danger p-1'
    }
    //data = new Set(data)                                      //en caso de usar otro boton para sacar conviene usar el set para quitar los repetidos
    //data = [...data]
    localStorage.setItem('eventos',JSON.stringify(data))
}

let printEvents = (array) => {
    document.querySelector("#events").innerHTML = ""
    let data = JSON.parse(localStorage.getItem('eventos')) ?? []
    array.forEach(event =>{
        document.querySelector("#events").innerHTML +=
            `
            <span href="evento.html?id=${event.id}" class="d-flex m-2 imgWidth hoverEvent">
                <article class="d-flex flex-column justify-content-center align-items-center imgWidth">
                    <h3 class="d-flex justify-content-center align-items-center card-text mt-1 mb-1 imgWidth">${event.name}</h3>
                    <img src="${event.image}" class="imgWidth">
                    <span class="d-flex justify-content-center align-items-center card-text mt-1 mb-1 imgWidth">
                        <p class='me-2'>${event.category} - ${(new Date(event.date)).getDate()+1}/${(new Date(event.date)).getMonth()+1}/${(new Date(event.date)).getFullYear()}</p>
                        ${data.includes(event.id) ? (
                            //imprimir input para sacarlo (rojo)
                            `<input type='button' class='btn-danger p-1' value='remove' id="${event.id}" onclick='addToFav("${event.id}")'></input>`
                        ) : (
                            //imprimir input para agregarlo (verde)
                            `<input type='button' class='btn-success p-1' value='add' id="${event.id}" onclick='addToFav("${event.id}")'></input>`
                        )}
                    </span>
                </article>
            </span>
            `
    })
}

let filter = (array,obj) => {
    let filterArray = array
    for (let prop in obj) {
        if (prop==='name') {
            filterArray = filterArray.filter(e => e.name.toLowerCase().includes(obj[prop].toLowerCase()))
        }
        if (prop==='category') {
            filterArray = filterArray.filter(e => e.category===obj[prop])
        }
    }
    printEvents(filterArray)
}

let filterWithApi = async(obj,time) => {
    console.log(obj)
    let response = await fetch(`https://mh-h0bh.onrender.com/api/espectaculares?time=${time}&category=${obj.category||""}&name=${obj.name||""}`)
    let data = await response.json()
    //console.log(data)
    let events = data.response
    printEvents(events)
}