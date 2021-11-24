const Potion = require('./Potion');
const Character = require('./Character');

//ES6
class Enemy extends Character {
    constructor(name = '', weapon ='') {
        //call parent constructor here to use "this" and functions
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();

        /* these are being called by the character constructor
        this.name = name;
        this.health = Math.floor(Math.random() * 10 + 85);
        this.strength = Math.floor(Math.random() * 5 + 5);
        this.agility = Math.floor(Math.random() * 5 + 5);*/
    }
    //functions dont go in the constructor :/ lol
    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
}


/* ES5
function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this .health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);

    //inherit prototype methods from character
    Enemy.prototype = Object.create(Character.prototype);

    Enemy.prototype.getDescription = function() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
}*/

module.exports = Enemy;