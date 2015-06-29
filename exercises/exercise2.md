Instruction to exercise 2
==============================

### Part 1

1. Read the chapters 6dbwebb linux literature
 in the course literature
2. Locate the folder called **bigFileWithManyLines** in the course repository
3. Use the commands you have learned from the book to solve the questions listed below. You need at least 5 points, and you may choose which ones to solve.
    * question1 (easy, 1p)
    * question2 (easy, 1p)
    * question3 (easy, 1p)
    * question4 (medium, 2p)
    * question5 (medium, 2p)
    * question6 (hard, 3p)
    * question7 (hard, 3p)
    * med: 5 Find the lines that were inserted at 19pm, from the forum regarding the python-course.
    * ?: 6 Find out how many lines **not** entered by Bobbzorzen. 
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
