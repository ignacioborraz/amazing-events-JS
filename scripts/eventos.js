async function getEvents(time,url) {
    try {
        let applied = {}
        let response = await fetch(url)
        let data = await response.json()
        let date = data.date
        let events = data.events
        time==='upcoming' ? events = events.filter(event => date < event.date) : events = events.filter(event => date >= event.date)
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