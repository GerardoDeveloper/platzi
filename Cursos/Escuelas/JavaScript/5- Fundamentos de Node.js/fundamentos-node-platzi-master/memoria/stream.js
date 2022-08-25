const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');
// ------------------Lectura---------------------
// readableStream.on('data', function (chunk) {
//     data += chunk;
// });

// readableStream.on('end', function() {
//     console.log(data);
// });

// ------------------Escritura------------------
// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

// ------------------Escritura y Lectura------------------
<<<<<<< HEAD
const Transform = stream.Transform; // --> permite leer y escribir streams.
=======
const Transform = stream.Transform; // --> permite ller y escribir streams.
>>>>>>> 54bbc1cb103879394343da2c602350ce61e87571

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);