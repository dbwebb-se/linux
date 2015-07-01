Instruction to exercise 2
==============================

### Part 1

1. Read chapter 6 in the course literature.
2. Locate the folder called **irc_log** in the course repository. It should contain a file called "ircLog.txt" you will use in this exercise.
3. Use the commands you have learned from the book to solve the questions listed below. You need at least 5 points, and you may choose which ones to solve. The answer should be a one-line command extracting the correct line/lines from the file.
    * Find the last 4 lines in the file (easy, 1p)
    * What is the 3rd thing Wasa enters in the chat? (easy, 1p)
    * How many lines are there when the time is 11:15? (easy, 1p)
    * Find the first 10 lines from April 19th 2015. (medium, 2p)
    * Find the lines inserted at 19pm, from the forum regarding the Python course. (medium, 2p)
    * What line did "Bobbzorzen" enter 2 entries before he says "cewl"? (hard, 3p)
    * How many words are there in the fourth to ninth lines Wednesday 1st of April? (hard, 3p)
4. **TODO - make some use of the answers**

### Part 2

1. Read part 4 - chapter 24 in the course literature
2. Create your own script, called **genie.sh**
    * `touch genie.sh`
    * `chmod u+x genie.sh` (set it to be executable by user, course literature chapter 9)
    * Add your script directory to the PATH, `nano ~/.profile` and add the line `export PATH=$PATH:$HOME/path/to/your/scripts/`, save and exit. Now you can use `genie.sh` instead of `./genie.sh`
    * If you just want to type "genie", add an alias: alias genie="genie.sh" (course literature chapter 11)
        * To permanently use an alias, edit the file ~/.bashrc and put the above line in there
    * open genie.sh in an editor
    * add `#!/bin/bash` at the top of the file, it is called "shebang"
    * On the next line, type `echo "this is my first bash script"`
    * Save and exit the editor
    * Try typing `genie` in the terminal (or `./genie.sh` if you haven't created an alias for it). It should print out "this is my first bash script"


Reference and read more
------------------------------
[shebang, PATH](http://stackoverflow.com/questions/8779951/how-do-i-run-a-shell-script-without-using-sh-or-bash-commands)  
[How to create a script](http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_02_01.html)  




Revision history
------------------------------

2015-06-22 (lew) PA1 First try.
