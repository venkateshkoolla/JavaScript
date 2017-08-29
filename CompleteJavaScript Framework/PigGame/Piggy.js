// Fundamental Game variables
/*  Game Rules... (PIG Game)

*/

var scores = [0, 0];
var RoundScore = 0;
var activePlayer = 0;

console.log("Called");
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
//init();

//Generate the random number

function btnClick() {
    console.log('Function called.');
    //Do something here!!

    //1. Random number
   var dice = Math.floor((Math.random() * 6) + 1);
    console.log(dice);
    //Display
   var diceDOM = document.querySelector('.dice');
   diceDOM.style.display = 'block';
   diceDOM.src = '/PigGame/Images/dice-' + dice + ".png";
   //document.querySelector('#current-' + activePlayer).textContent = dice;
   if (dice !== 1) {
       // Add Scire
       RoundScore += dice;
       document.querySelector('#current-' + activePlayer).textContent = RoundScore;
   } else {
       //Give to next player
       NextPlayer();
   }
}

function NextPlayer() {
    //Give to next player
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    RoundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'None';
}

function btnHold() {

    //Adds the current scrore to Global variables
    scores[activePlayer] += RoundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    

    // Check if player has won the game...
    if (scores[activePlayer] >= 25) {
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        document.getElementById('.player-' + activePlayer + '-panel').classList.add('winner');
        document.getElementById('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        NextPlayer();
    }
}

//Anonymous function
document.querySelector('.btn-roll').addEventListener('click', btnClick);
document.querySelector('.btn-hold').addEventListener('click', btnHold);