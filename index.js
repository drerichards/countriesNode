const fs = require('fs')
let capFirstLetter = (word) => {//function that capitalizes the first letter of all input words
    let newWord = word.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => { return str.toUpperCase() })
    return newWord
}
let param = capFirstLetter(process.argv[2])//takes parameter from CL and capitalizes it in order to match capitalized keys
let onFileRead = (err, data) => {//reads the json file on country data
    if (err) throw err
    let countriesData = JSON.parse(data)
    let returnData = countriesData.find(indexKey => indexKey.name === param)//returns specific data object that matches the parameter
    for (data in returnData) { //for each key value pair do the following
        let titles = capFirstLetter(data)
        console.log(`${titles}: ${returnData[data]}`)
    }
}
fs.readFile('./countries.json', 'utf8', onFileRead)//read file and then use callback