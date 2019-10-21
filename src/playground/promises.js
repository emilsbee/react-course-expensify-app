const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Emils',
            age: 18
        })
        // reject('Something went wrong!')
    }, 5000)
})

console.log('before');

promise.then((data) => {
    console.log('1', data)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is the other promise')
        }, 5000)
    })
}).then((str) => {
    console.log('does this run?', str)
}).catch((error) => {
    console.log(error)
})

console.log('after');
