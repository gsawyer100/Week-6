class Card {
  constructor(facevalue, suite, rank) {
    this.facevalue = facevalue;
    this.suite = suite;
    this.rank = rank;
  }
}
//You need to write an instanceof somewhere around here.

// The deck has everything from Ace to King
class Deck {
  constructor() {
    this.suites = ["hearts", "clubs", "spades", "diamonds"];
    this.facevalues = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];
    this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    this.fullDeck = [];
  }
  createDeck() {
    for (let i = 0; i < this.facevalues.length; i++) {
      // console.log(this.facevalues[i]) 
      for (let s = 0; s < this.suites.length; s++) {
        // console.log(this.suites[s])
        this.fullDeck.push(new Card(this.facevalues[i],this.suites[s],this.ranks[i]))
      }
    }
    console.log(this.fullDeck)
    console.log(this.fullDeck[0].rank)
  }
}
let gameDeck = new Deck()
gameDeck.createDeck()

// class Game {
//     constructor() {
// ends a tie instanceof both players end in zero points}
// }

//Getting Warmer
//Object instanceof class game ends in a tie){
// if both players end in a zero points for both players
//}

//wrong
//class game {
//   game ends in a tie instanceof both players end in a zero points for both players
//  }
//wrong
//Object instanceof class game ends in a tie){
//   (if both players end in a zero points for both players)
//  }
//wrong
//Object instanceof (class game ends in a tie){
//   if both players end in a zero points for both players
//}

//wrong
// Object instanceof {
//   class game ends in a tie
//  if both players end in a zero points for both players
//}

//Nope
//Object instance of class game ends in a tie){
// if both players end in a zero points for both players
//  }

//Still nope
//Object instanceof class game ends in a tie){
//   if both players end in a zero points for both players
//}

//didn't work
//obj instanceof class game ends in a tie) {
//both players end in a zero points for both players
//}

//didn't work
//obj (instanceof class game ends in a tie) {
// both players end in a zero points for both players
//}

//didn't work
//(if instanceof class game ends in a tie) {
//   both players end in a zero points for both players
//}

//didn't work
//obj (if instanceof class game ends in a tie) {
//    both players end in a zero points for both players
//}

//didn't work
//Object (if instance of class game ends in a tie) {
//    both players end in a zero points for both players
//}

//Instructions
// After all cards have been played, the score is displayed and the winner is declared.
// class player
// let ties = [both players end in a zero points for both players]
// let
// console.log(ties)

// class Players {
//   constructor(){
//   this.player1=[player1]
//   this.player2=[player2]
//   let ties = [player1 && player2 end in zero points for both players]
//   console.log(ties)
//   this.ties.push(ties)
//   }
// }

class Players {
  constructor(){
    this.player1 = ['player1'];
    this.player2 = ['player2'];
    this.ties = [ties];
  }

//   checkTies(player1Points, player2Points) {
//     if (player1Points === 0 && player2Points === 0) {
//       this.ties.push('Both players ended in zero points');
//       console.log(checkTies(player1Points, player2Points)
//     }
//   } 
// }

checkTies(player1Points, player2Points) {
  if (player1Points === 0 && player2Points === 0) {
    this.ties.push('Both players ended in zero points');
    console.log(this.ties);
  }
}

// class Game {
//   constructor(){
//     let newgame = [Each player is going to have a score that starts from zero]
//     this.newgame = [newgame],
//     console.log(newgame)
//   }
// }
// let newgame = newgame()
// gameDeck.createGame()

// class Game {
//   constructor(){
//     let newGame = new Game();
//     this.newGame = new Game;
//     instanceof game ending new Game begins
//     console.log(this.newGame);
//   }
// }

class Game {
  constructor(){
    this.newGame = "New game starting";
    console.log(this.newGame);
  }
}

let myGame = new Game();

// this.fullDeck.push(new Card(this.facevalues[i],this.suites[s],this.ranks[i]))
// Each player has a name
// Each player has an empty hand or array
// Each playet is going to have a score that starts from zero


