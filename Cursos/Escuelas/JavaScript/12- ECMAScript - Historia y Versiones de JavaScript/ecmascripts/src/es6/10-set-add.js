const list = new Set();

list.add("item 1");
list.add("item 2").add("item 3"); // Se pueden ennccadenar varios 'add'

console.log(list);