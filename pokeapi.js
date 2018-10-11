const Promise = require('bluebird');
const axios = require('axios');

/*      Task 1.1      */
/*
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
    */

/*      Task 1.2      */

let poke_array = []
for (var i = 0; i < 2; ++i) {
  poke_array.push(
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${i}0`)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.log(error);
    })
  );
}
Promise.all(poke_array)
  .then((response) => {
    response.forEach((arr, counter) => {
        arr.forEach((pokemon, pok_number) => {
            console.log(`${counter + 1}.${pok_number + 1}: ${pokemon.name}`);
        });
    });
  })
  .catch((error) => {
      console.log(error);
});
