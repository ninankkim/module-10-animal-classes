const fs = require('fs');

fs.readFile('animals.csv', 'utf8', function 
(err, content) {
    let data = content.split("\n")
    data = data.map((row) => {
        let values = row.split(",")
        values = values.map((value) => {
            return value.slice(1, -1)
        })
        return values;
        })
        // console.log(data)
        const animals = [];

        for (let i = 0; i < data.length; i++) {
            const row = data[i];
            animals.push(new Animal(row[0], row[1], row[2]))
        }
        console.log(animals);
})


function Animal (name, dob, species) {
    this.name = name;
    this.dob = dob;
    this.species = species;
}

const theAnimal = [
    new Animal ('Sadie', new Date ('2017, 03, 01'), "dog"),
    new Animal ('Sauce', new Date ('2016, 09, 22'), "dog"),
    new Animal ('Teddy', new Date ('2010, 01, 01'), "cat"),
]

Animal.prototype.mostFreq = function() {
    animals.filter()
}

Animal.prototype.getAge = function() {
    let day = new Date()
    let birthday = this.dob
    let actualAge = Math.abs(birthday.getFullYear() - day.getFullYear)
    return actualAge;
}

Animal.prototype.speak = function() {
    if (this.species === "dog") {
        console.log( `${this.name}, says "woof" and is ${this.getAge()} years old.`);
    } else if (this.species === "cat") {
        console.log( `${this.name}, says "meow" and is ${this.getAge()} years old.`);
    } else if (this.species === "bird") {
        console.log( `${this.name}, says "tweet" and is ${this.getAge()} years old.`);
    }
};


theAnimal.forEach((animal) => {
    animal.getAge
})