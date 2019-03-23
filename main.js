const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;

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

function announceCards() {
  console.log(`Player 1 is showing the ${player1Card[0].num} of ${player1Card[0].suit}`);
  console.log(`Player 2 is showing the ${player2Card[0].num} of ${player2Card[0].suit}`);
}

function cardToRank(card) {
  card[0].num === "Jack" ? card[0].num = 11 : 
  card[0].num === "Queen" ? card[0].num = 12 :
  card[0].num === "King" ? card[0].num = 13 :
  card[0].num === "Ace" ? card[0].num = 14 :
  card[0].num;
}

function announceWinner() {
  player1Card[0].num === player2Card[0].num ? console.log(`Its a tie`) : 
  player1Card[0].num > player2Card[0].num ? console.log(`Player 1 Wins`) : 
  console.log(`Player 2 wins`);
}

function returnCardsToDeck() {
  deck.push(player1Card);
  deck.push(player2Card);
}

function playGame() {
  dealCardsToPlayers();
  announceCards();
  announceWinner();
  returnCardsToDeck();
}

buildDeck(values, suits);
dealCardsToPlayers()
announceCards();
cardToRank(player1Card);
cardToRank(player2Card);
announceWinner();
returnCardsToDeck();
console.log(deck.length);