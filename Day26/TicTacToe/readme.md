# Tic-Tac-Toe Game

This is a simple interactive **Tic-Tac-Toe** game implemented using **HTML**, **CSS**, and **JavaScript**. It allows two players to take turns to play on a 3x3 grid, with one player using "O" and the other using "X". The game checks for a winner or a draw and provides the option to restart the game.

## Features:
- Players alternate turns between "O" and "X".
- The game checks for a winner after every turn, based on predefined winning combinations (rows, columns, or diagonals).
- Displays the winner or a draw message once the game is finished.
- Players can restart the game at any time by clicking the "Restart" button.

## How it works:
1. **Grid Setup**: The game board consists of a 3x3 grid. The grid is created dynamically, and each cell is represented by a "block" in the HTML structure.
2. **Game Turns**: The players alternate turns. The "O" player starts first. Clicking on a grid cell places the player's symbol ("O" or "X") in that cell.
3. **Winner Check**: After every move, the game checks for any winning combination:
   - Horizontal, vertical, or diagonal rows where all the symbols are the same.
4. **Draw Condition**: If all cells are filled and no winner is found, the game ends in a draw.
5. **Game Over**: When a player wins or the game ends in a draw, a result message is displayed, and the game stops accepting new moves.
6. **Restart**: The game can be restarted using a "Restart" button, resetting the grid and allowing players to play again.


## Technologies Used:
- **HTML**: Structure of the game grid and result display.
- **CSS**: Styling for the game board and result messages.
- **JavaScript**: Game logic for player turns, winner checking, and event handling.

## Code Walkthrough:

### `board_array`:
This array holds the current state of the game board, with "E" representing an empty cell, "O" representing player O's move, and "X" representing player X's move.

### `winnerCheck()`:
This function checks if there is a winning combination of three "X" or "O" symbols in a row, column, or diagonal.

### `TicTacToe()`:
This is the main function that is triggered on each click. It:
- Checks if the clicked cell is empty.
- Places the current player's symbol in the clicked cell.
- Checks for a winner after each move.
- Switches the turn to the next player ("O" or "X").
- If a winner is found, it displays the result and disables further clicks.

### `restart_butt`:
The restart button listens for a click and resets the game to its initial state, clearing the board and starting a new round.


### Enjoy the game!