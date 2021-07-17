import Tree from "./tree";

const t = new Tree<String>();

console.log(t.getTotal());

t.addItem('a');
t.addItem('e');
t.addItem('d');
t.addItem('c');
t.addItem('b');

console.log(t.getTotal());

console.log(`'a' exists? ${t.exists('a')}`);
console.log(`'e' exists? ${t.exists('e')}`);
console.log(`'f' exists? ${t.exists('f')}`);

t.print();

//console.log(`Removing 'c': ${t.removeItem('c')}`);
//t.print();
