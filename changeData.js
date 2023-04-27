var fs = require('fs');
const airlines = require('./airlines.json');

function change(data){
    let idCounter = 1

    let newAirlineData = data.airlines.map(airline => {
        airline.reviews = []

        let appId = airline.id
        airline.appId = appId
        delete airline["id"]

        airline.id = idCounter
        idCounter++

        return airline
    })

    fs.writeFile ("db.json", JSON.stringify(newAirlineData), function(err) {
        if (err) throw err;
        console.log('complete');
        })
}
