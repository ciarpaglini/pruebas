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


/*=====================================================*/

console.log('person1: shows entradas');
console.log('person2: shows entradas');

const preMovie = async () => {
    const promiseWifeBringTickets = new Promise((resolve, reject) =>{
        setTimeout(() =>{resolve('entradas');}, 3000)
    });
    let ticket = await promiseWifeBringTickets;
    console.log('husband: vamos');
    console.log('wife: no, tengo  hambre');

    let popcorn = await getpopcorn;

};

preMovie().then((m) => console.log(m));

console.log('person4: shows entradas');
console.log('person5: shows entradas');