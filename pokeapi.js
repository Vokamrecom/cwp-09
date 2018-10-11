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
/*
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
*/

/*      Task 1.3      */
/*
Promise.any([
    axios.get(`https://pokeapi.co/api/v2/pokemon/1`),
    axios.get(`https://pokeapi.co/api/v2/pokemon/4`),
    axios.get(`https://pokeapi.co/api/v2/pokemon/7`)
  ])
  .then((response) => {
    console.log(`id-${response.data.id}: ${response.data.name}`);
  })
  .catch((error) => {
      console.log(error);
});
*/

/*      Task 1.4      */
/*
Promise.props({
  "pokemon": axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10`),
  "item": axios.get(`https://pokeapi.co/api/v2/item?limit=10`),
  "location": axios.get(`https://pokeapi.co/api/v2/location?limit=10`),
})
.then((response) => {
  Object.keys(response).forEach((key) => {
    response[key].data.results.forEach((obj, counter) => {
      console.log(`${key}_${counter + 1}: ${obj.name}`);
    });
  });
})
.catch((error) => {
    console.log(error);
});*/

/*      Task 1.5      */

let berries = [];
for(let i = 0; i < 4; i++){
    berries.push(axios.get(`https://pokeapi.co/api/v2/berry/${i + 1}`));
}
Promise.map(berries, (berry) => {
    return berry.data;
})
    .then((response) => {
        response.forEach((obj, counter) => {
            console.log(`Berry_${counter + 1}: ${obj.name}(${obj.size})`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
