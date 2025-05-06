const axios = require('axios');

axios.get('https://www.google.com').then((response) => {
    console.log(response.data);
}). catch((err) =>{
    console.log(err);
})