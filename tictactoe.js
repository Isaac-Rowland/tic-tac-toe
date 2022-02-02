// winners
// [topl, topm, topr]
// [midl, midm, midr]
// [botl, botm, botr]
// [topl, midm, botr]
// [botl, midm, topr]
// vars
var input = document.querySelector("p")
var inputresponse = document.querySelector(".inputMessage")
var allPlayers = ["X","O"]
var currentPlayer = allPlayers[0]



//Whose turn is it
function togglePlayer(){
    if (currentPlayer === allPlayers[0]){
        currentPlayer = allPlayers[1]
    }
    else {
        currentPlayer = allPlayers[0]
    }
}

// Is there a winner? 
function isThereAWinner(){
    if (topL.textContent === "X" && topM.textContent === "X" && topR.textContent === "X" ||midL.textContent === "X" && midM.textContent === "X" && midR.textContent === "X" || botL.textContent === "X" && botM.textContent === "X" && botR.textContent === "X" || topL.textContent === "X" && midM.textContent === "X" && botR.textContent === "X" ||botL.textContent === "X" && midM.textContent === "X" && topR.textContent === "X"){
        inputresponse.textContent = "Player 1 wins"
    }
    else if (topL.textContent === "O" && topM.textContent === "O" && topR.textContent === "O" ||midL.textContent === "O" && midM.textContent === "O" && midR.textContent === "O" || botL.textContent === "O" && botM.textContent === "O" && botR.textContent === "O" || topL.textContent === "O" && midM.textContent === "O" && botR.textContent === "O" ||botL.textContent === "O" && midM.textContent === "O" && topR.textContent === "O"){
        inputresponse.textContent = "Player 2 wins"
    }
}
//which box has been clicked
function boxClicked (event) {
    var thisBox = event.target
    if(thisBox.textContent === "X" || thisBox.textContent === "O"){
        inputresponse.textContent = "Pick another box pls"
    }
    else {
        inputresponse.textContent = "Nice spot"
        thisBox.textContent = currentPlayer
        isThereAWinner()
        togglePlayer()
    }
}
var topL = document.querySelector(".topL")
topL.addEventListener("click", boxClicked)
var topM = document.querySelector(".topM")
topM.addEventListener("click", boxClicked)
var topR = document.querySelector(".topR")
topR.addEventListener("click", boxClicked)
var midL = document.querySelector(".midL")
midL.addEventListener("click", boxClicked)
var midM = document.querySelector(".midM")
midM.addEventListener("click", boxClicked)
var midR = document.querySelector(".midR")
midR.addEventListener("click", boxClicked)
var botL = document.querySelector(".botL")
botL.addEventListener("click", boxClicked)
var botM = document.querySelector(".botM")
botM.addEventListener("click", boxClicked)
var botR = document.querySelector(".botR")
botR.addEventListener("click", boxClicked)