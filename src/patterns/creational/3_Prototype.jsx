const cat = {
  paws: 4,
  name: "Murko",

  init() {
    console.log("Meow!");
  },
};

const pet = Object.create(cat, {
  owner: { value: "Ted" },
});

console.log(pet.owner);
