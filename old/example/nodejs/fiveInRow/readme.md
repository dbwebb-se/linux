# Five in row Core API reference

## Place(x, y, forcePlayerMark)
Places a mark in the game board (map).

| Type        | Name          | Desc  |  Node Environment |
| ------------- |-------------| ----- | ------------------- | 
| Integer | x | X position on the gameboard | Production |
| Integer | y | Y position on the gameboard | Production |
| String | forcePlayerMark | Force place a players mark | Test |

<span style="font-size: 18px;color:grey;">Throws</span>     
Error  
*if user tries to place outside the game board area*

## getMap()
Returns the current gameboard as it is.

<span style="font-size: 18px;color:grey;">Returns</span>          
Array

## getWinner()
Calculates if there is a winner and if so it returns the name on the winner

<span style="font-size: 18px;color:grey;">Returns</span>      
Boolean/String

## getCurrentPlayerMarker()
Returns the current players mark

<span style="font-size: 18px;color:grey;">Returns</span>      
Character

## getNrOfMarksPlaced()
Gets the numbers of marks placed. This value is the same as the amount of turns played

<span style="font-size: 18px;color:grey;">Returns</span>      
Integer

## getCurrentPlayer()
Gets a more readable name of the the current player

<span style="font-size: 18px;color:grey;">Returns</span>      
String

## getPlayerName(mark)
Gets the player name from the mark given

| Type        | Name          | Desc  |  Node Environment |
| ------------- |-------------| ----- | ------------------- |
| Char | mark | Char mark | Production |

<span style="font-size: 18px;color:grey;">Returns</span>      
String

## getCurrentSize()
Gets size of the gameboard

<span style="font-size: 18px;color:grey;">Returns</span>      
Integer




Revision history
------------------------------
2015-06-30 (Olund) First draft
