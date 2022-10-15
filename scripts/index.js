async function getEvents() {
    try {
        let applied = {}
        let response = await fetch("https://mh-amazing-events.up.railway.app/amazing")
        let data = await response.json()
        let date = data.date
        let events = data.events
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
    array.forEach(event =>{
        document.querySelector("#events").innerHTML +=
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