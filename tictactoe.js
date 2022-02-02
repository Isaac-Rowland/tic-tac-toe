// winner & vars
var xWin ={
    win1: [topl, topm, topr],
    win2: [midl, midm, midr],
    win3: [botl, botm, botr],
    win4: [topl, midm, botr],
    win5: [botl, midm, topr]
} 
var oWin =[]
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

//Is there a winner? 
// function isThereAWinner(){
//     if()
// }
//which box has been clicked
function boxClicked (event) {
    var thisBox = event.target
    if(thisBox.textContent === "X" || thisBox.textContent === "O"){
        inputresponse.textContent = "pick another box pls"
    }
    else {
        inputresponse.textContent = "nice spot"
        thisBox.textContent = currentPlayer
        if(

        )
        togglePlayer()
    }

}
var topl = document.querySelector(".topL")
topl.addEventListener("click", boxClicked)
var topm = document.querySelector(".topM")
topm.addEventListener("click", boxClicked)
var topr = document.querySelector(".topR")
topr.addEventListener("click", boxClicked)
var midl = document.querySelector(".midL")
midl.addEventListener("click", boxClicked)
var midm = document.querySelector(".midM")
midm.addEventListener("click", boxClicked)
var midr = document.querySelector(".midR")
midr.addEventListener("click", boxClicked)
var botl = document.querySelector(".botL")
botl.addEventListener("click", boxClicked)
var botm = document.querySelector(".botM")
botm.addEventListener("click", boxClicked)
var botr = document.querySelector(".botR")
botr.addEventListener("click", boxClicked)