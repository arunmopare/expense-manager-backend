const arr = [
  {
    name: "Arun",
  },
  {
    name: "Vishal",
  },
];

arr.map((obj) => {
  obj.name = `${obj.name} ohh bhai samjha`;
});

console.log(arr);
