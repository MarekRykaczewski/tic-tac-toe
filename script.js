const gameBoard = (() => {
    board = ['O', 'X', 'O',
             'O', 'X', 'O',
             'O', 'X', 'O']

    return {
        board: board
    }
})

const displayController = (() => {
    const updateDisplay = function(gameBoard) {
        let boardContainer = document.querySelector("#board-container")
        for (let i = 0; i < gameBoard.length; i++) {
            let cell = document.createElement("div")
            boardContainer.appendChild(cell)
        }

    }

    return {
        updateDisplay: updateDisplay
    }
})

let newGameBoard = gameBoard()
let newDisplayController = displayController()


newDisplayController.updateDisplay(newGameBoard.board)

