//
// Object destructuring 
//
// const person = {
//     name: 'Slabbish',
//     age: 27, 
//     location: {
//       city: 'Amsterdam',
//       temp: 30
//     },
// }

// // Renaming desctructed variable name and then setting a default value John if name from the object isnt available
// const {name: firstname = 'John', age} = person


// console.log(`${firstname} is ${age}.`)

// // Renaming destructured variable temp
// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName) // Penguin, Self-Published

//
// Array destructuring
// 

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [, city, state = 'New York'] = address

console.log(`You are in ${city} ${state}`)



const item = ['Coffee (hot)', '$2.00', '$2.50', '2.75']

const [itemName , , medium] = item

console.log(`A medium ${itemName} costs ${medium}`)