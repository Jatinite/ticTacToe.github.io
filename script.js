let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("click", () => {
        if (!square.innerHTML) {
            square.innerHTML = currentPlayer;
            gameBoard[square.id] = currentPlayer;
            checkForWinner();
            togglePlayer();
        }
    });
});

function checkForWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(`${currentPlayer} wins!`);
            resetBoard();
            break;
        }
    }

    if (!gameBoard.includes("")) {
        alert("It's a tie!");
        resetBoard();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function resetBoard() {
    squares.forEach(square => {
        square.innerHTML = "";
    });
    gameBoard = ["", "", "", "", "", "", "", "", ""];
}
