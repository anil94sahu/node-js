
const fs = require('node:fs/promises');

fs.readFile('./greet.txt', "utf-8")
.then(data => console.log(data))
.catch(err => console.error(err));

async function readTheFile(){
    try {
        const data  = await fs.readFile('./greet.txt', "utf-8");
        console.log(data);
    } catch (error) {
        console.log(error);   
    }
}

readTheFile();
/* const fs = require("node:fs");
const fileContent = fs.readFileSync('./file.txt', 'utf-8');
console.log(fileContent);

fs.readFile('./file.txt', "utf-8", (error, data) => {
    console.log(data);
})

fs.writeFileSync('./greet.txt', "Hello world!", {flag: 'a'});

fs.writeFile('./greet.txt', "Hello world!",{flag: 'a'}, (error, data) => {
    if(error){
        console.log(error);
    } else{
        console.log(data);
    }

}); */

/* const EventEmitter = require('node:events');

const event = new EventEmitter();

event.on('order-pizza', (size, topping) => {
    console.log( `order-pizza with ${size} and topping ${topping}` )
})

event.emit('order-pizza', "large", "mushrooms"); */

// const superHero = require('./superhero');
// const hero = new superHero("Batman");
// console.log(hero.getName());
// hero.setName('spiderman')
// const newHero = new superHero("Spiderman")
// console.log(newHero.getName());
