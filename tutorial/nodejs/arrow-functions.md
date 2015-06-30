Arrow function in ecmascript 6
=============================
An arrow function expression (also known as fat arrow function) has a shorter syntax compared to function expressions and lexically binds the `this` value.
Arrow functions are always anonymous. 

Bear in mind that it's not a replacement keyword for `function` keyword because of how `this` is scoped.

Example


```javascript
var arr = [1, 2, 3, 4];

/*
 * Filter numbers (save all numbers over 2)
*/
// Old way
arr.filter(function(o) { 
    // returns [3, 4]
    return o > 2;
}); 

// New shorter way with arrow function.
arr.filter((o) => {
    // returns [3, 4];
    return o > 2;
}); 

/* 
 * Arrow function as callback
 */

// old way
fs.readFile('data.json', 'utf8', function (err, data) {
    ...
});

fs.readFile('data.json', 'utf8', (err, data) => {
    ...
});
```



###Explicit return

```javascript
    
// Same function as below
 
[1,2,3].filter((o) => {
    // Explicit returns [3]
    return o > 2;
}); 
```

####Implicit return
```javascript
// Same funciton as above

// Implicit returns [1, 2]
[1,2,3].filter(0 => o < 3); 
```







Reference and read more
------------------------------

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)    
[Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


Revision history
------------------------------
2015-06-30 (Olund) Small changes     
2015-06-17 (Olund) First try.    
