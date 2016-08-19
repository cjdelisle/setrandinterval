# setRandInterval() Execute a function at a randomized interval.

If you are doing some repeating operation like accessing a website, especially
if you have multiple pages which need to be repeatedly accessed, to reduce load
on the server you want to access them at different times. `setRandInterval()`
allows you to run an operation on a given interval plus or minus a percentage.

```javascript
const setRandInterval = require('setrandinterval');
// Print the time every 2 seconds, plus or minus 50% (between 1 second and 3 seconds)
// Stop after 10 times.
let i = 0;
const inter = setRandInterval(() => {
    console.log("plus-minus 50% - the time is " + new Date());
    if (i++ > 10) { inter.clear(); }
}, 2000, 50);


// Setting the "percent" value to zero will make setRandinterval() behave the same as setInterval()
i = 0;
const inter = setRandInterval(() => {
    console.log("plus-minus 0% - the time is " + new Date());
    if (i++ > 10) { inter.clear(); }
}, 2000, 0);


// Not passing the "percent" value will make it default to 20%
i = 0;
const inter = setRandInterval(() => {
    console.log("plus-minus 20% - the time is " + new Date());
    if (i++ > 10) { inter.clear(); }
}, 2000, 0);
```
