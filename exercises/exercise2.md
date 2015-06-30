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

1. Open `genie.sh` in your editor. Add a function called 'menu' that prints a welcome message and describes what you can do with the script. Continue to fill it with information as your genie grows. The menu should show if the argument is wrong/not existing or with the argument 'menu' i.e. `genie menu`.
2. Move the line with `echo "this is my first script"` into the menu function.  
**For this exercise, use the file bigFileWithManyLines**  
3. Create a function called "getLast" that fetches the last 10 lines from the file and prints them.  
Called upon with: `genie getLast`.
4. Create a function called "getFirst" that fetches the first 7 lines from the file and prints them.  
Called upon with: `genie getFirst`.
5. Create a function called "getSpecial" that fetches the last 5 lines containing the word/number: "5"  
Called upon with: `genie getSpecial`.
6. Create a function called "getLines" that prints the number of lines in the file.  
Called upon with: `genie getLines`.
7. It is always good to provide the current version of the script so create a case that prints the version with `genie -v` or `genie --version`.

Reference and read more
------------------------------

[Functions, tutorial](https://github.com/mosbth/linux/blob/master/tutorial/bash/functions.md)  



Revision history
------------------------------

2015-06-22 (lew) PA1 First try.
