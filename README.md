# Emascript in 2017

## About
* Ecmascript has come quite away over the years
* Evergreen Browsers are getting caught up with Ecmascript 2015 (Check out https://kangax.github.io/compat-table/es6/)
* Somethings are not there yet (standard modules ¯\\_(ツ)_/¯ )
* This repo contains demos exploring these concepts

## Demo Caveats
* There is some non standard demo code (title() and show())
* Everything else are examples.
* Most of everything will use a webpack live reload setup (need npm and global webpack and wepack-dev-server)
* A preview of an ecmascript 2017 example with use babel as well.

## How To Run Sample Code
* install npm
* install webpack
```
$ npm install -g webpack wepack-dev-server
```

* in a terminal run from the repo root directory

```
$ npm install
```

* run webpack-dev-server from cli

```
$ webpack-dev-server
```

* open a browser to localhost:8080
* open a console on the browser.
* copy contents of example file to src/main.js (ie examples/01_let.js)
* for example 18, copy webpack.babel.config.js to webpack.config.js
