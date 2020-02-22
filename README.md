# Simple vanilla reactivity system

_The code was inspired to the [vue 2 reactivity system](https://vuejs.org/v2/guide/reactivity.html)._

This respository wants to be the result of a didactic exercise with the aim of realizing a simple reactive system from scratch.

**Attention**: The code is just a minimal example to demostrate how a simple reactivity system works and it is not meant to be a sort of javascript library.

I will be very happy if this example can be useful for your learning of javascript and modern frontend framework concepts.

You can test the code in a browser launching the `index.html` file.

## Issues

- For semplicity this code works only with object literals
- The code use some untranspilled code suchas: `new Set()` and `arrow functions`. You must use a modern web browser or you get some javascript error.
