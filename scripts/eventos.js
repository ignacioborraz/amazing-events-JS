async function getEvents(time) {
    try {
        let applied = {}
        let response = await fetch(`https://mh-h0bh.onrender.com/api/espectaculares?time=${time}`)
        let data = await response.json()
        //console.log(data)
        let events = data.response
        let categories = new Set(events.map(event => event.category))
        categories.forEach(innerOptions)
        printEvents(events)
        document.querySelector("#inputToSearch").addEventListener("keyup",(event) => {
            applied.name=event.target.value
            filterWithApi(applied,time)
        })
        document.querySelector("#defaultList").addEventListener("change",(event) => {
            applied.category=event.target.value
            filterWithApi(applied,time)
        })
    } catch(error) {
        console.log(error)
    }
}
