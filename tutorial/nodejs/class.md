Class in ecmascript 6
=============================
Example


```javascript

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        return this.name + " " + this.email;
    }
}


var p = new Person('John', 'doe@doe.se');
console.log(p.toString());

```





Reference and read more
------------------------------

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)



Revision history
------------------------------

2015-06-17 (Olund) First try.
