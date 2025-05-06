// const request = require('./request')
// const response = require('./response')

// function makeRequest(url, data) {
//     request.send(url, data)
//     return response.read()
// }

// OR a cleaner way
const { send } = require('./request') // CommonJS
// import {send} from "./request.js" ECMAscript 6
const {read} = require('./response')
// import { read } from './response.js'

function makeRequest(url, data) {
    send(url, data)
    return read()
}

const responseData = makeRequest('http://www.google.com', 'holla')
console.log(responseData)

// by default, node treats all JS files as CommonJS modules for compartability