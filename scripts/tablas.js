const getStats1 = async(id) => {
    let response = await fetch(`https://mh-amazing-events.up.railway.app/espectaculares?time=past`)
    let data = await response.json()
    let events = data.events
    events.map(event => {
        event.gain = event.assistance * event.price
        event.percent = (100 * event.assistance / event.capacity).toFixed(2)
    })
    events = events.sort((event1,event2)=> event1.percent - event2.percent)
    let minPercent = events[0]
    let maxPercent = events[events.length-1]
    events = events.sort((event1,event2)=> event1.capacity - event2.capacity)
    let maxCapacity = events[events.length-1]
    printTable1(minPercent,maxPercent,maxCapacity,id)
}

getStats1('table1')

const getStats2 = async(time,property,id) => {
    let response = await fetch(`https://mh-amazing-events.up.railway.app/espectaculares?time=${time}`)
    let data = await response.json()
    let events = data.events
    events.map(event => {
        event.gain = event[property] * event.price
        event.percent = (100 * event[property] / event.capacity).toFixed(2)
    })
    let categories = new Set(events.map(event => event.category))
    categories = [...categories]
    let stats = categories.map(cat => {
        let filter = events.filter(event => event.category===cat)
        return reduceStats(filter,property)
    })
    printTable2(stats,id)
}

getStats2('past','assistance','table2')
getStats2('upcoming','estimate','table3')

const reduceStats = (array,prop)=> {
    let initialStat = {
        category: "",
        gain: 0,
        capacity: 0,
        [prop]: 0
    }
    let stats = array.reduce((element1,element2) => {
        return {
            category: element2.category,
            gain: element1.gain + element2.gain,
            capacity: element1.capacity + element2.capacity,
            [prop]: element1[prop] + element2[prop]
        }
    }, initialStat)
    stats.prom = (100 * stats[prop] / stats.capacity).toFixed(2)
    return stats
}