

console.log("Dir: "+ __dirname + " as " + __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log("My name is" + this.name + " And I am " + this.age);
    }
}

module.exports = Person;