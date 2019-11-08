1. Move piece from one stack to another 

2. Check to make sure a piece is allowed to move

3. check to see if game has won; if stack 1 or 2 have the pyramid in right order

4. Get the start stack and end stack values _________ to pass is legal.


1. Get the current startStack and endStack values (either through user input or test values) inside the towersOfHanoi function
  - pass those values to isLegal function
  - pass those values to movePiece function

2. Check that a piece is allowed to move (isLegal function)
  - Use the startStack and endStack values to determine if it would be a legal move based off the rules of the games
      * startStack and endStack should be different letters
      * access the numbers inside the arrays that coresspond to the startStack/endStack values ('a', 'b', or 'c'), these are the keys of the stacks objects
      * A bigger number can not be placed on top of a smaller number
          - Any number can be placed onto an empty stack (0) (array inside the stacks object)
  - Nice to have: return an error message (string) telling the user if their input is invalid (should be 'a', 'b', or 'c')

3. Move a piece from one stack to another
  - Update the stacks object inside of the movePiece function using the startStack and endStack values
  - Take the value from the end of startStack array and add to the end of the endStack array
      * maybe use .pop?, .shift?, or different array methods

4. Check to see if the game is won (checkForWin function
  - When all the blocks are stacked into column 2 or 1 return true otherwise false
  - Nice to have: console log a winning message
