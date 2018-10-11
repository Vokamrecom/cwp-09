const Promise = require('bluebird');
const axios = require('axios');

/*      Task 1.1      */

axios.get('http://pokeapi.co/api/v2/pokemon/42')
    .then((response) => {
        console.log(`    id: ${response.data.id}
    Name: ${response.data.name}
    Weight: ${response.data.weight}
    Height: ${response.data.height}`);
    })
    .catch((error) => {
        console.log(error);
    });
