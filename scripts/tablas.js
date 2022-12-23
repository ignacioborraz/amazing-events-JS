const getStats1 = async(id,time) => {
    let response = await fetch(`https://mh.up.railway.app/api/espectaculares?time=${time}`)
    let data = await response.json()
    //console.log(data)
    let events = data.response
    events = newProperties(events)
    events = events.sort((event1,event2)=> event1.percent - event2.percent)
    let minPercent = events[0]
    let maxPercent = events[events.length-1]
    events = events.sort((event1,event2)=> event1.capacity - event2.capacity)
    let maxCapacity = events[events.length-1]
    printTable1(minPercent,maxPercent,maxCapacity,id)
}

getStats1('table1','past')

const getStats2 = async(time,property,id) => {
    let response = await fetch(`https://mh.up.railway.app/api/espectaculares?time=${time}`)
    let data = await response.json()
    let events = data.response
    events = newProperties(events)
    let categories = [...new Set(events.map(event => event.category))]
    let stats = categories.map(cat => {
        let filter = events.filter(event => event.category===cat)
        return reduceStats(filter,property)
    })
    printTable2(stats,id)
}

getStats2('past','assistance','table2')
getStats2('upcoming','estimate','table3')

const newProperties = (array) => {
    array.map(event => {
        event.gain = (event.assistance || event.estimate) * event.price
        event.percent = Number((100 * (event.assistance || event.estimate) / event.capacity).toFixed(2))
    })
    return array
}

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
    stats.prom = Number((100 * stats[prop] / stats.capacity).toFixed(2))
    return stats
}