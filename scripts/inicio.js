async function getEvents() {
    try {
        let applied = {}
        let response = await fetch("https://mh-amazing-events.up.railway.app/amazing")
        let data = await response.json()
        let date = data.date
        let events = data.events
        events = events.filter(event => date < event.date)
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