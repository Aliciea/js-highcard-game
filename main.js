const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const suitChars = [`♣`,`♦`,`♥`,`♠`];
const cardColor = [`Black`,`Red`,`Red`,`Black`];
const deck = [];
let player1Card = null;
let player2Card = null;
let player1Score = 0;
let player2Score = 0;
let player1 = ``;
let player2 = ``;
let temp = null;

function buildDeck(arr1,arr2,arr3,arr4) {
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      let card = {
        num: arr1[i],
        suit: arr2[j],
        suitChar: arr3[j],
        color: arr4[j],
        value: arr1[i]
      }
      deck.push(card);
    }
  }
}

function dealCardsToPlayers() {
  temp = deck.splice(Math.floor(Math.random() * deck.length),1);
  player1Card = temp[0];

  temp = deck.splice(Math.floor(Math.random() * deck.length),1);
  player2Card = temp[0];
}

function announceCards() {
  //console.log(`${player1} is showing the ${player1Card[0].value} of ${player1Card[0].suit}.`);
  document.getElementById(`player1Suit`).innerText = player1Card.suitChar;
  document.getElementById(`player1`).style.color = player1Card.color;
  document.getElementById(`value1`).innerText = player1Card.num;

  //console.log(`${player2} is showing the ${player2Card[0].value} of ${player2Card[0].suit}.`);
  document.getElementById(`player2Suit`).innerText = player2Card.suitChar;
  document.getElementById(`player2`).style.color = player2Card.color;
  document.getElementById(`value2`).innerText = player2Card.num;
}

function cardToRank(card) {
  card.num === "Jack" ? card.num = 11 : 
  card.num === "Queen" ? card.num = 12 :
  card.num === "King" ? card.num = 13 :
  card.num === "Ace" ? card.num = 14 :
  card.num;
}

function announceWinner() {
  if (player1Card.num === player2Card.num) {
    document.getElementById(`winner`).innerText = `It's a Tie!`;
    document.getElementById(`winner`).style.display = `inline-block`;
  } else if (player1Card.num > player2Card.num) {
    player1Score++;
    document.getElementById(`player1score`).innerText = player1Score;
    document.getElementById(`winner`).innerText = `${player1} Wins!`;
    document.getElementById(`winner`).style.display = `inline-block`;
  } else {
    player2Score++;
    document.getElementById(`player2score`).innerText = player2Score;
    document.getElementById(`winner`).innerText = `${player2} Wins!`;
    document.getElementById(`winner`).style.display = `inline-block`;
    }
}

function returnCardsToDeck() {
  deck.push(player1Card);
  deck.push(player2Card);
}

function playGame() {

  player1 = player1 || prompt(`Player 1 please enter your name:`) || `Player 1`;
  player2 = player2 || prompt(`Player 2 please enter your name:`) || `Player 2`;
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

buildDeck(values, suits, suitChars, cardColor);
