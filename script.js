const createPlayer = (id, input) => {
    return {id, input};
};

const gameBoard = (() => {
    board = ['O', 'X', 'O',
             'O', 'X', 'O',
             'O', 'X', 'O']

    return {
        board: board
    }
})

const gameController = (() => {


    // Create players
    const playerOne = createPlayer(1, 'O');
    const playerTwo = createPlayer(2, 'X');


    // Update board
    const updateDisplay = function(gameBoard) {
        let boardContainer = document.querySelector("#board-container")
        for (let i = 0; i < gameBoard.length; i++) {

            let cell = document.createElement("div")
            boardContainer.appendChild(cell)

            let cellContent = document.createTextNode(gameBoard[i])
            cell.appendChild(cellContent)
        }

    }

    // Setup game start
    let activePlayer = playerOne; 

    return {
        updateDisplay: updateDisplay
    }
});



let newGameBoard = gameBoard()
let newGameController = gameController()


newGameController.updateDisplay(newGameBoard.board)

