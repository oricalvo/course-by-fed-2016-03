var a = {
    id: 123,
    name: "Ori",
};

var b = Object.create(a);
b.email = "ori@gmail.com";

console.log(b.id);

b.id = "ZZZ";
a.id = "XXX";

//console.log(b.__proto__.id);

//console.log(Object.getPrototypeOf(b).id);


