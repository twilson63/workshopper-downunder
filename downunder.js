#!/usr/bin/env node

const Workshopper = require('workshopper')
    , path        = require('path')

Workshopper({
    name     : 'downunder'
  , title    : 'GO DOWNUNDER AND LEARN SOME UNDERSCORE'
  , appDir   : __dirname
  , helpFile : path.join(__dirname, 'help.txt')
}).init()