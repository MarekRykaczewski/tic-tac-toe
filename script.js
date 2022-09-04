const gameBoard = (() => {
    board = ['O', 'X', 'O',
             'O', 'X', 'O',
             'O', 'X', 'O']

    return {
        board: board
    }
})

const gameController = (() => {
    const updateDisplay = function(gameBoard) {
        let boardContainer = document.querySelector("#board-container")
        for (let i = 0; i < gameBoard.length; i++) {

            let cell = document.createElement("div")
            boardContainer.appendChild(cell)

            let cellContent = document.createTextNode(gameBoard[i])
            cell.appendChild(cellContent)
        }

    }

    return {
        updateDisplay: updateDisplay
    }
});

const createPlayer = (id, input) => {
    return {id, input};
};

let newGameBoard = gameBoard()
let newGameController = gameController()


newGameController.updateDisplay(newGameBoard.board)

