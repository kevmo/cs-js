/*

How Node.js Modules Work
-------------------------------------

Node uses the CommonJS modules standard. Each module
has its own context. There is no global scope.

Modules and files have a 1:1 relationship.

Attach any module's API to the `exports` object.
- Shorthand for `module.exports`.
- module.exports is initialized as an empty object that you
can populate with any attributes you want to export.

Node caches the module the first time it is loaded. Subsequent
calls to that module will use the cached version.

*/

// how to load a local module
// can use a relative path
// the .js extension is optional
var bar = require('./bar.js');
bar.trill();

// core modules can simply be called by name
var path = require('path');
console.log("Where is bar?", path.join(__dirname, 'bar.js'));

//if a module name is not relative and is not a core module,
// Node will look in a node_modules folder in the current directory
var _ = require('underscore');
console.log("Underscore's map function is now available: ", _.map);
