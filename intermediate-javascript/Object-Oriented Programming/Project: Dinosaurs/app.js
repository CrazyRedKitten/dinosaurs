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
    
    // Create Dino Constructor
    
    /**
     * @description represents a dinosaur object
     * @constructor
     * @param {string} species - The species of the dinosaur. 
     * @param {number} height - The height of the dinosaur in inches. 
     * @param {number} weight - The weight of the dinosaur in lbs.  
     * @param {string} diet - The diet of the dinosaur.
     * @param {string} where - The place where dinosaur lived.
     * @param {string} when - The time period in which dinosaur lived.
     * @param {string} fact - The fact about dinosaur.
     */
    function Dino(species, weight, height, diet, where, when, fact){
        this.species = species;
        this.height = height;
        this.weight = weight;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    };

    // Create Dino Objects
    /**
     * @description An array which stores Dino Objects
     */
    const dinosArray = [];

    dinos.forEach(element => {
        const {species, weight, height, diet, where, when, fact} = element;
        dinosArray.push(new Dino(species, weight, height, diet, where, when, fact));
    })

    // TODO: Create Human Object
    const human = Object.assign({}, Dino);
    // TODO: Use IIFE to get human data from form

    // TODO: Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // TODO: Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // TODO: Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // TODO: Generate Tiles for each Dino in Array
  
        // TODO: Add tiles to DOM

    // TODO: Remove form from screen

    //TODO: On button click, prepare and display infographic
    const button = document.getElementById("btn");

    button.addEventListener('click', (function(){
        const form = document.getElementById("dino-compare");

        return function(){
            form.parentNode.removeChild(form);
        }
    })());
