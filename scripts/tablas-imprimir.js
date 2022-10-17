const printTable1 = (minP,maxP,maxC,id) => {
    document.querySelector(`#${id}`).innerHTML =
    `
    <tr class="table-light d-flex justify-content-center">
        <td scope="row" class="d-flex justify-content-center align-items-center text-center col-3">${minP.name}</th>
        <td scope="row" class="d-flex justify-content-center align-items-center text-center col-3">${maxP.name}</th>
        <td scope="row" class="d-flex justify-content-center align-items-center text-center col-3">${maxC.name}</th>
    </tr>
    <tr class="table-light d-flex justify-content-center">
        <td scope="row" class="d-flex justify-content-center align-items-center text-center col-3">${minP.percent}%</th>
        <td scope="row" class="d-flex justify-content-center align-items-center text-center col-3">${maxP.percent}%</th>
        <td scope="row" class="d-flex justify-content-center align-items-center text-center col-3">${maxC.capacity}</th>
    </tr>
    `
}

const printTable2 = (array,id) => {
    array.forEach(element => {
        document.querySelector(`#${id}`).innerHTML +=
        `
        <tr class="table-light d-flex justify-content-center">
            <td scope="row" class="col-3 d-flex justify-content-center align-items-center text-center">${element.category}</td>
            <td scope="row" class="col-3 d-flex justify-content-center align-items-center text-center">$${element.gain}</td>
            <td scope="row" class="col-3 d-flex justify-content-center align-items-center text-center">${element.prom}%</td>     
        </tr>
        `
    })
}