const createPlayer = (id, input) => {
    return {id, input};
};

const gameController = (() => {

    // Create board
    board = ['O', 'X', 'O',
             'O', 'X', 'O',
             'O', 'X', 'X']

    // Create players
    const playerOne = createPlayer(1, 'O');
    const playerTwo = createPlayer(2, 'X');


    // Setup game start
    let activePlayer = playerOne; 

    // Selectors
    let boardContainer = document.querySelector("#board-container")

    // Update board
    const updateDisplay = function(gameBoard) {
        for (let i = 0; i < gameBoard.length; i++) {

            // Create div for each item in board array
            let cell = document.createElement("div")
            boardContainer.appendChild(cell)

            // Add event listener to each cell
            cell.addEventListener('click', () => {
                console.log(activePlayer.input)
                gameBoard[i] = activePlayer.input
                newGameController.clearDisplay(boardContainer)
                newGameController.updateDisplay(board)
                newGameController.switchPlayers()
            })

            // Update content of each cell with array content
            let cellContent = document.createTextNode(gameBoard[i])
            cell.appendChild(cellContent)
        }
    }

    // Clear board
    const clearDisplay = function(boardContainer) {
        while (boardContainer.firstChild) {
            boardContainer.removeChild(boardContainer.lastChild)
        }
    }

    // Switch players
    const switchPlayers = function() {
        if (activePlayer === playerOne) {
            activePlayer = playerTwo
        } else {
            activePlayer = playerOne
        }
    }

    return {
        updateDisplay: updateDisplay,
        clearDisplay: clearDisplay,
        switchPlayers: switchPlayers
    }
});


let newGameController = gameController()


newGameController.updateDisplay(board)

