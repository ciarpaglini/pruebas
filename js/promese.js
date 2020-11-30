console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringTickets = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('ticketera');
    }, 3000)
});

const getpopcorn = promiseWifeBringTickets.then((t) => {
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
    //console.log(`person3: shows ${t}`);
});

getpopcorn.then((t) => console.log(t));
console.log('person4: shows ticket');
console.log('person5: shows ticket');