const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;
let player1Score = 0;
let player2Score = 0;
let player1 = ``;
let player2 = ``;


function buildDeck(arr1,arr2) {
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      let card = {
        num: arr1[i],
        suit: arr2[j],
        value: arr1[i]
      }
      deck.push(card);
    }
  }
}

function dealCardsToPlayers() {
  player1Card = deck.splice(Math.floor(Math.random() * 52),1);
  player2Card = deck.splice(Math.floor(Math.random() * 52),1);
}

let suitsFunc = player => {
  player[0].suit === `Clubs` ? player[0].suit =`&clubs;` :
  player[0].suit === `Diamonds` ? player[0].suit =`&diams;` :
  player[0].suit === `Hearts` ? player[0].suit =`&hearts;` :
  player[0].suit =`&spades;`

  console.log(player[0].suit)
}

function announceCards() {
  console.log(`${player1} is showing the ${player1Card[0].value} of ${player1Card[0].suit}.`);
  document.getElementById(`player1suit`).innerText = suitsFunc(player1Card);
  console.log(`${player2} is showing the ${player2Card[0].value} of ${player2Card[0].suit}.`);
}

function cardToRank(card) {
  card[0].num === "Jack" ? card[0].num = 11 : 
  card[0].num === "Queen" ? card[0].num = 12 :
  card[0].num === "King" ? card[0].num = 13 :
  card[0].num === "Ace" ? card[0].num = 14 :
  card[0].num;
}

function announceWinner() {
  if (player1Card[0].num === player2Card[0].num) return console.log(`It's a tie!`);
  else if (player1Card[0].num > player2Card[0].num) {
    console.log(`${player1} Wins!`);
    player1Score++;
  } else {
    console.log(`${player2} wins!`);
    player2Score++;
    }
}

function returnCardsToDeck() {
  deck.push(player1Card);
  deck.push(player2Card);
}

function playGame() {

  player1 = prompt(`Player 1 please enter your name:`) || `Player 1`;
  player2 = prompt(`Player 2 please enter your name:`) || `Player 2`;
  document.getElementById(`player1name`).innerText = player1;
  document.getElementById(`player2name`).innerText = player2;
  document.getElementById(`player1namescores`).innerText = player1;
  document.getElementById(`player2namescores`).innerText = player2;
  dealCardsToPlayers();
  announceCards();
  cardToRank(player1Card);
  cardToRank(player2Card);
  announceWinner();
  returnCardsToDeck();
}

buildDeck(values, suits);

