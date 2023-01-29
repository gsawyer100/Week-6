// The unit test for the war game using mocha and chai
const chai = require('chai');
const expect = chai.expect;
const Card = require('./card');
const Deck = require('./deck');
const Players = require('./players');
const Game = require('./game');

describe('Card class', () => {
  it('should create a card object with facevalue, suite, and rank properties', () => {
    const card = new Card('Ace', 'hearts', 14);
    expect(card).to.have.property('facevalue');
    expect(card).to.have.property('suite');
    expect(card).to.have.property('rank');
  });
});

describe('Deck class', () => {
  it('should create a deck object with suites, facevalues, ranks, and fullDeck properties', () => {
    const deck = new Deck();
    expect(deck).to.have.property('suites');
    expect(deck).to.have.property('facevalues');
    expect(deck).to.have.property('ranks');
    expect(deck).to.have.property('fullDeck');
  });

  it('should create 52 cards in the fullDeck', () => {
    const deck = new Deck();
    deck.createDeck();
    expect(deck.fullDeck.length).to.equal(52);
  });
});

describe('Players class', () => {
  it('should create a players object with player1, player2, and ties properties', () => {
    const players = new Players();
    expect(players).to.have.property('player1');
    expect(players).to.have.property('player2');
    expect(players).to.have.property('ties');
  });

  it('should have a checkTies function that adds a message to the ties array if both players have zero points', () => {
    const players = new Players();
    players.checkTies(0, 0);
    expect(players.ties[0]).to.equal('Both players ended in zero points');
  });
});

describe('Game class', () => {
  it('should create a game object with a score property', () => {
    const game = new Game();
    expect(game).to.have.property('score');
  });
});