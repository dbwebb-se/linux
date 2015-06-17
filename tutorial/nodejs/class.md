#A class in ES6.


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

```