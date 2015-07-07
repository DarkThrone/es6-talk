// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  keys = require('bespoke-keys'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  nebula = require('bespoke-theme-nebula'),
  camera = require('bespoke-camera');

// Bespoke.js
bespoke.from('article', [
  nebula(),
  keys(),
  bullets('.bullet'),
  backdrop(),
  scale(),
  hash(),
  camera()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

