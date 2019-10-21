import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASURMENT_ID
  };

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }


















// // child_removed 
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_changed 
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })


// // child_added 
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })



// // database.ref('expenses').push({
// //     description: 'Rent ',
// //     note: 'This is a noteeee again',
// //     amount: 1243,
// //     createdAt: 32523523
// // })

// // database.ref('expenses').on('value', (snapshot) => {
// //     database.ref('expenses')
// //         .once('value')
// //         .then((snapshot) => {
// //             const expenses = []

// //             snapshot.forEach((childSnapshot) => {
// //                 expenses.push({
// //                     id: childSnapshot.key,
// //                     ...childSnapshot.val()
// //                 })
// //             })
// //             console.log(expenses)
// //         })
// // })

// // database.ref('notes').push({
// //     title: 'Course topics',
// //     body: 'React native, angular, py'
// // })

// // const firebaseNotes = {
// //     notes: {
// //         dasdasdasdas: {
// //             title: 'First note!',
// //             body: 'This is my note'
// //         },
// //         asdahfuohuif: {
// //             title: 'Another note!',
// //             body: 'This is my note'
// //         }
// //     }
// // }

// // const notes = [{
// //     id: '12',
// //     title: 'First note!',
// //     body: 'This is my note'
// // }, {
// //     id: '761ase',
// //     title: 'Another note!',
// //     body: 'This is my note'
// // }]

// // database.ref().set(firebaseNotes)

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val())
// // }, (e) => {
// //     console.log('Error with data fetching', e)
// // })

// // setTimeout(() => {
// //     database.ref('age').set(29)
// // }, 3500)

// // setTimeout(() => {
// //     database.ref().off('value',onValueChange)
// // }, 7000)

// // setTimeout(() => {
// //     database.ref('age').set(30)
// // }, 10500)

// // database.ref().on('value', (snapshot) => {
// //     const person = snapshot.val() 
// //     console.log(person.name, 'is a', person.job.title, 'at', person.job.company,'.')
// // })

// // database.ref('name').set('Mike')



// // database.ref('location/city').once('value')
// //     .then((snapshot) => {
// //         console.log(snapshot.val())
// //     }).catch((e) => {
// //         console.log(e)
// //     })


// // database.ref().set({
// //     name: 'Emils Bernhards',
// //     age: 15,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Vertical farmer',
// //         company: 'Eden 365'
// //     },
// //     location: {
// //         city: 'Amsterdam',
// //         country: 'Netherlands'
// //     }
// // }).then(() => {
// //     console.log('Data is saved!')
// // }).catch((e) => {
// //     console.log('This failed', e)
// // })


// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Rotterdam'
// // })

// // database.ref().remove()
// //     .then(() => {
// //         console.log('Removed')
// //     }).catch((e) => {
// //         console.log('Error', e)
// //     })












