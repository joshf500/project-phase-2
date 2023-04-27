const { faker } = require('@faker-js/faker');
let fs = require('fs');
const airlines = require('./airlines.json');

function change(data){
    let idCounter = 1

    let newAirlineData = data.airlines.map(airline => {
        const reviews = []
        for(let i = 0; i < (Math.random() * 20); i++){
            const randomNum = Math.random() * 20
            const date = faker.date.between("2018-01-01", "2023-04-28").toISOString().split("T")[0];
            reviews.push({
                id: i + 1,
                "depAirport": "DOH",
                "arrAirport": "JFK",
                airline: airline.name,
                date,
                title: faker.lorem.sentence(),
                text: faker.lorem.lines(randomNum),
            })
        }

        airline.reviews = reviews

        let appId = airline.id
        airline.appId = appId
        delete airline["id"]

        airline.id = idCounter
        idCounter++

        return airline
    })

    fs.writeFile ("db.json", JSON.stringify({ "airlines": newAirlineData }), function(err) {
        if (err) throw err;
        console.log('complete');
        })
}

change(airlines)
