// vars
var inputresponse = document.querySelector(".inputMessage")
var allPlayers = ["X","O"]
var gameInProgress = true 
var button = document.querySelector(".button")
var howManyTurns = 0
var displayedText = document.querySelector(".player")
var currentPlayerNumber = 0
var playerOneSound = new Audio("playerOne.mp3")
var playerTwoSound = new Audio("playerTwo.mp3")
var playerInfo = [
    {
        color: "#70badc",
        icon: "X",
        displayName: "Player one",
        playersound: playerOneSound
    },
    {
        color: "#f090c0",
        icon: "O",
        displayName: "Player two",
        playersound: playerTwoSound
    }
]

// Whose turn is it
function togglePlayer(){
    if (currentPlayerNumber === 0){
        currentPlayerNumber = 1
    }
    else {
        currentPlayerNumber = 0
    }
}

// Is there a winner? 
function isThereAWinner(currentPlayer){
    if (topL.textContent === currentPlayer && topM.textContent === currentPlayer && topR.textContent === currentPlayer ||midL.textContent === currentPlayer && midM.textContent === currentPlayer && midR.textContent === currentPlayer || botL.textContent === currentPlayer && botM.textContent === currentPlayer && botR.textContent === currentPlayer || topL.textContent === currentPlayer && midM.textContent === currentPlayer && botR.textContent === currentPlayer ||botL.textContent === currentPlayer && midM.textContent === currentPlayer && topR.textContent === currentPlayer || topL.textContent === currentPlayer && midL.textContent === currentPlayer && botL.textContent === currentPlayer || topM.textContent === currentPlayer && midM.textContent === currentPlayer && botM.textContent === currentPlayer || topR.textContent === currentPlayer && midR.textContent === currentPlayer && botR.textContent === currentPlayer ){
        displayedText.textContent = `Player ${currentPlayerNumber + 1} wins`
        // add return in here to check to see if winner
        return true
    } 
    return false
}

// which box has been clicked
function boxClicked (event) {
    var thisBox = event.target
    if(gameInProgress){
        if(allPlayers.includes(thisBox.textContent)){
            inputresponse.textContent = "Pick another spot pls"
        }
        else {
            inputresponse.textContent = "Nice spot"
            thisBox.textContent = playerInfo[currentPlayerNumber].icon
            thisBox.style.color = playerInfo[currentPlayerNumber].color
            playerInfo[currentPlayerNumber].playersound.play()
            if (!isThereAWinner(playerInfo[currentPlayerNumber].icon)){
                howManyTurns++
                if(howManyTurns == 9){
                    inputresponse.textContent = "Its a draw"
                    button.style.backgroundImage = "url(Restart.gif)"
                }
                else {
                    togglePlayer();
                    setTimeout (function(){
                    displayedText.textContent = `${playerInfo[currentPlayerNumber].displayName}'s turn`
                    }, 600)
                }
            }
            else {
                inputresponse.textContent = "Good job on winning"
                button.style.backgroundImage = "url(Restart.gif)"
                gameInProgress = false
            }
        }
    }
}

var boxes = document.querySelector(".grid")
boxes.addEventListener("click", boxClicked)

var restartButton = document.querySelector(".button")
var allBoxes = document.querySelectorAll(".boxes")
// Restart game button 
function restartGame(){
    // reset all divs to have nothing in them. 
    for(i = 0; i < allBoxes.length; i++){
        allBoxes[i].textContent = ""
    }

    inputresponse.textContent = `Game restarted`
    setTimeout (function(){
        inputresponse.textContent = `Go again!`}, 2000
    )
    displayedText.textContent =`${playerInfo[currentPlayerNumber].displayName}'s turn`
    button.style = ""
    gameInProgress = true
    howManyTurns = 0
}
restartButton.addEventListener("click", restartGame)
