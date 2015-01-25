/*
A bit is the basic unit of information in computer. It is
most commonly represented as a 0 or 1. "Bit" is a portmanteu
of "binary digit".

A group of eight bits is commonly called a "byte", though the
actual size of a byte is not standardized.

Buffers in Node
--------------

A buffer is a region of physical memory space that stores
data while it is being moved from one place to another.

JavaScript sucks at dealing with binary data, so Node has
implemented a global Buffer class. This is your access to a
continuous memory chunk.

*/

// Create a 15 byte buffer.
// It is full of random bytes
var buf = new Buffer(15);
for (var i = 0; i < 15; i++){
  console.log(buf[i]);
}

// Buffer has .length property and .toString() method
var helloBuf = new Buffer("HARO KITTAY", 'utf8');
console.log("Length of HARO KITTAY should be 11: ", helloBuf.length);
console.log(helloBuf.toString());
console.log(helloBuf.slice(0, 4).toString());

