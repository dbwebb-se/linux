Class in ecmascript 6
=============================
Ecmascript6 classes are syntactical sugar over javascripts existing prototype-based inheritance. 

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
console.log(p.toString()); // returns 'John doe@doe.se'

var another = new Person('Jane', 'doe@doe.com');
console.log(p.toString()); // returns 'Jane doe@doe.com'

```





Reference and read more
------------------------------

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)



Revision history
------------------------------
2015-06-30 (Olund) Small changes    
2015-06-17 (Olund) First try.     
