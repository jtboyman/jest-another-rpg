const Potion = require('../lib/Potion');
const Character = require('./Character');

//ES6 using class
class Player extends Character {
    constructor(name = '') {
        //call parent constructor here to use "this" and functions
        super(name);
        /* these are being called by the parent constructor - Character
        this.name = name;

        this.health = Math.floor(Math.random() * 10 +95);
        this.strength = Math.floor(Math.random() * 5 + 7);
        this.agility = Math.floor(Math.random() * 5 + 7);*/

        this.inventory = [new Potion('health'), new Potion()];
    }

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility,
        };
    }

    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion) {
        this.inventory.push(potion);
    }

    usePotion(i) {
        const potion = this.inventory.splice(i, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength =+ potion.value;
                break;
        }
    }
}

/* ES5
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random()* 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() *5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

    //inherit prototype methods from character
    Player.prototype = Object.create(Character.prototype);

    //returns an object with various player properties
    Player.prototype.getStats = function() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility,
        };
    };

    //returns inventory array or false if empty
    Player.prototype.getInventory = function() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    };

    //add potion
    Player.prototype.addPotion = function(potion) {
        this.inventory.push(potion);
    };

    //use potion
    Player.prototype.usePotion = function(i) {
        const potion = this.getInventory().splice(i,1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength = +potion.value;
                break;
        }
    };
} */

module.exports = Player;