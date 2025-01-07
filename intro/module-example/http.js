// const request = require('./request')
// const response = require('./response')

// function makeRequest(url, data) {
//     request.send(url, data)
//     return response.read()
// }

// OR
const { send } = require('./request')
const {read} = require('./response')

function makeRequest(url, data) {
    send(url, data)
    return read()
}

const responseData = makeRequest('http://www.google.com', 'holla')
console.log(responseData)