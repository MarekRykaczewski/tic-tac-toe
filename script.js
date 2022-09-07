const createPlayer = (id, input) => {
    return {id, input};
};

const gameController = (() => {

    // Create board
    board = [' ', ' ', ' ',
             ' ', ' ', ' ',
             ' ', ' ', ' ']

    // Create players
    const playerOne = createPlayer(1, 'O');
    const playerTwo = createPlayer(2, 'X');


    // Setup game start
    let activePlayer = playerOne; 
    let winner = '';

    // Selectors
    let boardContainer = document.querySelector("#board-container");
    let resetButton = document.querySelector("#reset-button");
    let changeSignButton = document.querySelector('#change-button');
    let modal = document.querySelector(".modal");
    let span = document.querySelector(".close");
    let currentSign = document.querySelector("#current-sign")

    currentSign.innerHTML = activePlayer.input

    // Close modal
    span.onclick = function() {
        modal.style.display = "none";
        board = [' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' ']
        newGameController.clearDisplay(boardContainer);
        newGameController.updateDisplay(board); 
    }

    // Reset game button
    resetButton.onclick = function(){
        board = [' ', ' ', ' ',
                 ' ', ' ', ' ',
                 ' ', ' ', ' ']
        newGameController.clearDisplay(boardContainer);
        newGameController.updateDisplay(board);
    }

    // Switch players button
    changeSignButton.onclick = function(){
        currentSign.innerHTML = activePlayer.input
        switchPlayers()
    }

    // Update board
    const updateDisplay = function(gameBoard) {
        for (let i = 0; i < gameBoard.length; i++) {

            // Create div for each item in board array
            let cell = document.createElement("div")
            boardContainer.appendChild(cell)

            // Add event listener to each cell
            cell.addEventListener('click', () => {
                console.log(activePlayer.input)
                if (gameBoard[i] != 'X' && gameBoard[i] != 'O') {
                    gameBoard[i] = activePlayer.input
                } else {
                    alert("Please make a legal move!")
                    return
                }
                newGameController.clearDisplay(boardContainer)
                newGameController.updateDisplay(board)
                newGameController.checkWinner()
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

    // Check winner
    const checkWinner = function() {
        if (board[0] == activePlayer.input && board[1] == activePlayer.input && board[2] == activePlayer.input) {
            winner = activePlayer.input
        } else if (board[3] == activePlayer.input && board[4] == activePlayer.input && board[5] == activePlayer.input) {
            winner = activePlayer.input
        } else if (board[6] == activePlayer.input && board[7] == activePlayer.input && board[8] == activePlayer.input) {
            winner = activePlayer.input
        } else if (board[0] == activePlayer.input && board[3] == activePlayer.input && board[6] == activePlayer.input) {
            winner = activePlayer.input
        } else if (board[1] == activePlayer.input && board[4] == activePlayer.input && board[7] == activePlayer.input) {
            winner = activePlayer.input
        } else if (board[2] == activePlayer.input && board[5] == activePlayer.input && board[8] == activePlayer.input) {
            winner = activePlayer.input
        } else if (board[3] == activePlayer.input && board[4] == activePlayer.input && board[5] == activePlayer.input) {
            winner = activePlayer.input
        } else if (board[0] == activePlayer.input && board[4] == activePlayer.input && board[8] == activePlayer.input) {
            winner = activePlayer.input
        } else if (board[2] == activePlayer.input && board[4] == activePlayer.input && board[6] == activePlayer.input) {
            winner = activePlayer.input
        }
        if (winner == 'O' || winner == 'X') {
            modal.style.display = "block";
        }
    }


    return {
        updateDisplay: updateDisplay,
        clearDisplay: clearDisplay,
        switchPlayers: switchPlayers,
        checkWinner: checkWinner
    }
});


let newGameController = gameController()


newGameController.updateDisplay(board)

