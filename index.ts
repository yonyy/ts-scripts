import Tree from "./tree";

const t = new Tree<String>();

console.log(t.getTotal());

t.addItem('a');
t.addItem('b');
t.addItem('c');
t.addItem('d');
t.addItem('e');

console.log(t.getTotal());

console.log(`'a' exists? ${t.exists('a')}`);
console.log(`'e' exists? ${t.exists('e')}`);
console.log(`'f' exists? ${t.exists('f')}`);