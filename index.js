
const fs = require("node:fs");
const fileContent = fs.readFileSync('./file.txt', 'utf-8');
console.log(fileContent);

const EventEmitter = require('node:events');

const event = new EventEmitter();

event.on('order-pizza', (size, topping) => {
    console.log( `order-pizza with ${size} and topping ${topping}` )
})

event.emit('order-pizza', "large", "mushrooms");

// const superHero = require('./superhero');
// const hero = new superHero("Batman");
// console.log(hero.getName());
// hero.setName('spiderman')
// const newHero = new superHero("Spiderman")
// console.log(newHero.getName());
