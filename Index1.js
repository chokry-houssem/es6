let pets = [{ name: "Max", type: "dog", bornOn: 2018 },
{ name: "Angel", type: "cat", bornOn: 2016 },
{ name: "Jasper", type: "dog", bornOn: 2015 }
];

const getAge = (pet) => {
    return new Date().getFullYear() - pet.bornOn;

}
let petsWithAge = []

pets.forEach(pet => {
    pet.age = getAge(pet)
    petsWithAge.push(pet);
});


console.log(petsWithAge);

let dogs = pets.filter((pet) =>
    pet.type === "dog"
)
console.log(dogs);

let jasper = pets.find(dog => dog.name === "Jasper");
console.log(`Jasper is  ${jasper.age}  years old`);

