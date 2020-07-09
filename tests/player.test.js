/* eslint-disable linebreak-style */
import Player from '../src/player';

const player1 = Player('Arslan', 'X');
const player2 = Player('Mubeen', 'O');

test('should return the name of the player', () => {
  expect(player1.getName()).toBe('Arslan');
  expect(player2.getName()).toBe('Mubeen');
});

test('should return the marker of the player', () => {
  expect(player1.getMarker()).toBe('X');
  expect(player2.getMarker()).toBe('O');
});

test('should increment player1 score', () => {
  for (let i = 0; i < 3; i += 1) {
    player1.increaseScore();
  }
  expect(player1.getScore()).toBe(3);
});

test('should increment player2 score', () => {
  for (let i = 0; i < 2; i += 1) {
    player2.increaseScore();
  }
  expect(player2.getScore()).toBe(2);
});