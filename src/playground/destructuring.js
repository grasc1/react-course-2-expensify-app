//
// Object destructuring
//

// const person = {
//     // name: 'Christophe',
//     age: 35,
//     location: {
//         city: 'Bienne',
//         // temp: 32
//     }
// };

// // const name = person.name;
// // const age = person.age;
// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature = 32 } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//

// const address = ['Rue des Pianos 31', 'Bienne', 'Bern', '2503'];
// const [, city, state, zip, country = 'Switzerland'] = address;
// console.log(`You are in ${city} ${state} in ${country}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
