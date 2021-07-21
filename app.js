const dinos = [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]
    
    // Create creature constructor - parent class
    /**
     * @description represents a creature base object
     * @constructor
     * @param {string} species - The species of the creature. 
     * @param {number} height - The height of the creature in inches. 
     * @param {number} weight - The weight of the creature in lbs.  
     * @param {string} diet - The diet of the creature.
     */
    function Creature(species, height, weight, diet){
        this.species = species;
        this.height = Number.parseFloat(height);
        this.weight = Number.parseFloat(weight);
        this.diet = diet;
    }
    
    // Create Dino Constructor
    /**
     * @description represents a dinosaur object
     * @constructor
     * @param {object} dinoData - dino object with all data.
     */
    function Dino(dinoData){
        Creature.call(this, dinoData.species, dinoData.height, dinoData.weight, dinoData.diet);

        this.where = dinoData.where;
        this.when = dinoData.when;
        this.fact = dinoData.fact;
    };

    // Create Dino Objects
    /**
     * @description An array which stores Dino Objects
     */
    let dinosArray = [];

    dinos.forEach(element => {
        dinosArray.push(new Dino(element));
    })

    // Create Human Object
    /**
     * @description represents ad Human object
     * @constructor
     * @param {string} species 
     * @param {number} height 
     * @param {number} weight 
     * @param {string} diet 
     */
    function Human(species, height, weight, diet){
        Creature.call(this, species, height, weight, diet);
    }
    // Use IIFE to get human data from form
    const getHumanData = (function(){
        const name = document.getElementById('name');
        const feet = document.getElementById('feet');
        const inches = document.getElementById('inches');
        const weight = document.getElementById('weight');
        const diet = document.getElementById('diet');

        return function(){
            const human = new Human(name.value, (Number.parseInt(feet.value)* 12)+ Number.parseInt(inches.value), weight.value, diet.value);
            return human;
        }
    })();

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    Dino.prototype.compareDiet = function (humanDiet) {
        return humanDiet.toLowerCase() == this.diet ? `${this.species} has the same diet as you.` : `
        ${this.species} is ${this.diet === "omnivor" ? "an" : 'a'} ${this.diet}.`
        
        };

    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareWeight = function (humanWeight) {
        if (humanWeight === this.weight) {
            return `${this.species} weight is equal to yours.`;
        } else if(humanWeight < this.weight){
            return `${this.species} weight is ${Math.floor(this.weight / humanWeight)} times bigger than yours.`;
        } else if (humanWeight > this.weight) {
            return `${this.species} weight is ${Math.floor(humanWeight / this.weight)} times less than yours.`;
        }
    };

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareHeight = function (humanHeight) {
        if (humanHeight === this.height) {
            return `${this.species} height is equal to yours.`;
        } else if(humanHeight < this.height){
            return `${this.species} height is ${Number(this.height / humanHeight).toFixed(2)} times bigger than yours.`;
        } else if (humanHeight > this.height) {
            return `${this.species} height is ${Number(humanHeight / this.height).toFixed(2)} times less than yours.`;
        }
    }
    
    /**
     * @description creates a single tile.
     * 
     * @param {Object} creature An instance of a creature
     */
    const createTile = (creature) => {
        const {species, fact} = creature; 
        const isHuman = creature instanceof Human;

        const card = document.createElement('div');
        const h3 = document.createElement('h3');
        const image = document.createElement('img');
        const description = document.createElement('p');

        /**
         * @description returns creature name in lowercase. 
         * Handles human name change.
         * @returns {string} name - creature name
         */
        function imageName () {
            const name =  isHuman ? "human" : String(species).toLowerCase();
            return name;
        };

        /**
         * @description util function which return random fact
        * @param {object} creature - a creature data
        * @param {object} human - a human data
        * @returns {string} fact - random dinos fact
        */
        function generateFact (creature, human) {
            // Generate random number from 1 - 6
            const randomNumber =  Math.floor(Math.random() * (6 - 1 + 1)) + 1;

            if (creature.species == "Pigeon") {
                return creature.fact
            }

            switch (randomNumber) {
                case 1:
                    return creature.compareDiet(human.diet);
                case 2:
                    return creature.compareWeight(human.weight);
                case 3:
                    return creature.compareHeight(human.height);
                case 4:
                    return creature.fact;
                case 5:
                    return `${creature.species} lived in ${creature.when}`;
                case 6:
                    return `${creature.species} lived in ${creature.where}`;
                default:
                    return "default case";
            }
        }

        image.src = `images/${imageName()}.png`;
        h3.textContent = species;
        description.textContent = generateFact(creature, getHumanData());
        card.appendChild(h3);
        card.appendChild(image);
        // Generate description only for dino
        !isHuman && card.appendChild(description);
        card.classList.add('grid-item');

        return card;
    }

    // Generate Tiles for each Dino in Array
    /**
     * @description Generate a tile grid
     */
    const generateTiles = () => {
        const grid = document.getElementById('grid');
        const fragment = document.createDocumentFragment();
        
        const dinosFirstPart = dinosArray.slice(0,4);
        dinosFirstPart.push(getHumanData());
        const dinosSecondPart = dinosArray.slice(4);
        dinosArray = dinosFirstPart.concat(dinosSecondPart);

        dinosArray.forEach(element => {
            fragment.appendChild(createTile(element));
        })

        // Add tiles to DOM
        grid.appendChild(fragment);
    }

    // On button click, prepare and display infographic
    const button = document.getElementById("btn");

    const prepareInfographic = () => {
        const form = document.getElementById('dino-compare');
        // Remove form from screen
        form.style.display = 'none';

        generateTiles();
    }

    button.addEventListener('click', prepareInfographic);
