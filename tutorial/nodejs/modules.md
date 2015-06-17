Arrow function in ecmascript 6
=============================
There are two kinds of exports: named exports (several per module) and default exports (one per module)

####Named exports
```javascript

// --file.js--
function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        callback(this.responseText)
    };
    xhr.open("GET", url, true);
    xhr.send();
}

export function getUsefulContents(url, callback) {
    getJSON(url, data => callback(JSON.parse(data)));
}



// --main.js--
import { getUsefulContents } from "file.js";
getUsefulContents("http://www.example.com", data => {
    doSomethingUseful(data);
});

```

####Default exports
```javascript

// AwesomeClass.js
export default class {
    .....
}

// main.js
import AwesomeClass from 'AwesomeClass';

var aC = new AwesomeClass();

```





Reference and read more
------------------------------
 [MDN-import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)                           [MDN-export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)                                         [2ality.com](http://www.2ality.com/2014/09/es6-modules-final.html)                      




Revision history
------------------------------

2015-06-17 (Olund) First try.
