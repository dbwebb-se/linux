Functions
==============================
Examples in Bash
#### Example of a simple function
```sh
#!/bin/bash

function speak() {
    echo "Hi!"
}

speak
```
The above will result in ```"Hi!"```  
#### Example of multiple functions
```sh
#!/bin/bash

function speak() {
    echo "Hi!"
}

function speakAgain() {
    echo "How are you?"
}

speak
speakAgain
```
The above will result in:  
```
"Hi!"
"How are you?"
```
#### Example of functions with parameters
```sh
#!/bin/bash

# Example of functions with parameters

function sayName() {
    echo "Hello $1!"
}

sayName "Griswold"
```
The above will result in ```"Hello Griswold!"```


Reference and read more
------------------------------

[Functions](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-8.html)



Revision history
------------------------------

2015-06-24 (lew) PA1 First try.
