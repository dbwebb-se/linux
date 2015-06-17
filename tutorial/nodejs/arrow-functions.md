Arrow function in ecmascript 6
=============================
Example


```javascript
var arr = [1, 2, 3, 4];

/*
    Filter numbers (save all numbers over 2)
*/
// Old way
arr.filter(function(o) { return o > 2 }); // returns [3, 4]

// New shorter way with arrow function.
arr.filter(o => o > 2); // returns [3, 4];


/*
    Arrow function as callback
*/

// old way
fs.readFile('data.json', 'utf8', function (err, data) {
    ...
});

fs.readFile('data.json', 'utf8', (err, data) => {
    ...
});



```

####Implicit return
```javascript
    [1,2,3].filter(0 => o < 3); // automagically returns [1, 2]
```


###Explicit return
```javascript
    [1,2,3].filter((o) => {
        return o > 2;
    }); // returns [3]
```




Reference and read more
------------------------------

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)



Revision history
------------------------------

2015-06-17 (Olund) First try.
