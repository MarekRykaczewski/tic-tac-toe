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

    // Selectors
    let boardContainer = document.querySelector("#board-container");
    let resetButton = document.querySelector("#reset-button");
    let changeSignButton = document.querySelector('#change-button');
    let modal = document.querySelector(".modal");
    let span = document.querySelector(".close");
    let winnerMessage = document.querySelector("#winner-text")
    let playComputerButton = document.querySelector("#play-computer")

    // Setup game start
    let activePlayer = playerOne; 
    let winner = ''
    let playWithAI = false;

    // Close modal
    span.onclick = function() {
        modal.style.display = "none";
        resetGame()
    }

    // Reset game button
    resetButton.onclick = function(){
        resetGame()
    }

    // Switch players button
    changeSignButton.onclick = function(){
        if (changeSignButton.classList.contains("disabled")) {
            changeSignButton.classList.remove("disabled")
        } else {
            changeSignButton.classList.add("disabled")
        }

        switchPlayers()
    }

    // Play computer button
    playComputerButton.onclick = function() {
        playWithAI = true;
        playComputerButton.classList.add("disabled")
        playComputerButton.disabled = true;
    }

    // Reset game function
    const resetGame = function() {
        board = [' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' ']
        newGameController.clearDisplay(boardContainer);
        newGameController.updateDisplay(board);
        playComputerButton.disabled = false;
        playComputerButton.classList.remove("disabled")
        changeSignButton.classList.remove("disabled")
        playWithAI = false;
        changeSignButton.disabled = false;
    }

    // Update board
    const updateDisplay = function(gameBoard) {
        for (let i = 0; i < gameBoard.length; i++) {

            // Create div for each item in board array
            let cell = document.createElement("div")
            boardContainer.appendChild(cell)

            // Add event listener to each cell
            cell.addEventListener('click', () => {
                changeSignButton.disabled = true;
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
                if (playWithAI == true) {
                    computerMove()
                }
                newGameController.switchPlayers()                
            })

            // Update content of each cell with array content
            let cellContent = document.createElement('p')
            let cellContentText = document.createTextNode(gameBoard[i])
            cellContent.appendChild(cellContentText)
            cell.appendChild(cellContent)
        }
    }

    // Check for draw
    const checkDraw = function() {
        let counter = 0
        for (let i = 0; i < board.length; i++) {
            if (board[i] == 'X' || board[i] == 'O') {
                counter++
            }
        }
        if (counter == 9) {
            winnerMessage.innerHTML = "The game ended in a draw!";
            modal.style.display = "block";
        }
    }

    // Regular AI move (random)
    const computerMove = function() {
        let moveMade = false;
        while (moveMade == false) {
            let move = [Math.floor(Math.random() * board.length)]
            if (board[move] != 'X' && board[move] != 'O') {
                newGameController.switchPlayers()
                board[move] = activePlayer.input
                newGameController.checkWinner()
                moveMade = true;
            } else {
                moveMade = false;
                console.log("AI tried to make illegal move")
            }
        }
        
        newGameController.clearDisplay(boardContainer)
        newGameController.updateDisplay(board)

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
            winnerMessage.innerHTML = "The winner is " + winner;
            modal.style.display = "block";
            winner = ''
        } else {
            newGameController.checkDraw()
        }
    }


    return {
        updateDisplay: updateDisplay,
        clearDisplay: clearDisplay,
        switchPlayers: switchPlayers,
        checkWinner: checkWinner,
        checkDraw: checkDraw,
        resetGame: resetGame,
        computerMove: computerMove,
        board: board
    }
});


let newGameController = gameController()


newGameController.updateDisplay(board)

