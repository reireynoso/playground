const https = require('https')

const url = `https://api.darksky.net/forecast/f0daac9578589e2cd4ded22ceff26533/${40},${-75}?units=us`

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        // console.log(chunk)
    })

    response.on('end', () => {
        // console.log(data)
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log("error", error)
})
request.end()