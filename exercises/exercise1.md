Instruction to exercise 1
==============================

### Part 1

1. Read the chapters 1-4 in the course literature
2. Locate the folder called **mySite**. It should reside in the course repository
3. The folder **mySite** contains an unstructured website. Try out the commands you learned from step 1 to structure the website folder, shown in step 4. You do not have to alter the content of the files.
5. The result should look like this:
    * mySite/index.html
    * mySite/js/main.js
    * mySite/style/style.css
6. Upload the structured site to your server? **TODO - havent solved this one yet**


### Part 2
1. Read part 4 - chapter 24 in the course literature
2. Create your own script, called **genie.sh**
    * `touch genie.sh`
    * `chmod u+x genie.sh` (set it to be executable by user, course literature chapter 9)
    * If you just want to type "genie", add an alias: alias genie="genie.sh" (course literature chapter 11)
        * To permanently use an alias, edit the file ~/.bashrc and put the above line in there
    * open genie.sh in an editor
    * add `#!/bin/bash` at the top of the file, it is called "shebang"
    * On the next line, type `echo "this is my first bash script"`
    * Save and exit the editor
    * Try typing `genie` in the terminal (or `genie.sh` if you haven't created an alias for it). It should print out "this is my first bash script"

Reference and read more
------------------------------

[shebang, PATH](http://stackoverflow.com/questions/8779951/how-do-i-run-a-shell-script-without-using-sh-or-bash-commands)  
[How to create a script](http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_02_01.html)  


Revision history
------------------------------

2015-06-11 (lew) PA1 First try.
