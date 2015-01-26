/*

Node uses a publisher/subscriber pattern.

Built-in EventEmitter.

Many callback functions in node are passed an error (if it
exists) as the first argument.

Two objects
- an event emitter
- an event listener

*/

events = require('events');

em = new events.EventEmitter();

em.emit('trill');

// em.emit('error', new Error("WUPS"));  // spews out an error

/*

USING THE EventEmitter API
-----------------------------

.addListener() == .on()

.once()

.removeEventListener()

.removeAllEventListener()

*/


// Inheriting from node event emitter

var utils = require('util');

var Ticker = function(){
  var self = this;

  setInterval(function(){
    self.emit('tick');
  }, 2000);
};

utils.inherits(Ticker, events.EventEmitter);

ticker = new Ticker();

ticker.on("tick", function(){console.log("Heard a tick")});







