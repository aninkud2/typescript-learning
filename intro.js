var myDetails = {
    name: "joshua",
    cls: "ss2",
    age: 72,
    surname: "Aninku",
    isVerified: true
};
// console.log(myDetails)
var myInfo = function (properties, force) {
    if (properties.isVerified && force) {
        return "undefined";
    }
    else {
        return ("my name is ".concat(properties.surname, "  ").concat(properties.name, " i am in ").concat(properties.cls, " i am ").concat(properties.age, " years old"));
    }
};
console.log(myInfo(myDetails));
var superHeroes = [{ name: "joshua",
        cls: "ss2",
        age: 72,
        surname: "Aninku",
        isVerified: true }, { name: "joshua",
        cls: "ss2",
        age: 72,
        surname: "Aninku",
        isVerified: true }];
console.log(superHeroes.length);
