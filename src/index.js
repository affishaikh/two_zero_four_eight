import React from 'react';
import ReactDOM from 'react-dom';
import Game from './models/Game';
import './main.css';
import Table from './Table';

const move = function(game, event) {
  if (event.code === 'ArrowLeft') {
    game.leftMove();
  }

  if (event.code === 'ArrowUp') {
    game.upMove();
  }

  if (event.code === 'ArrowRight') {
    game.rightMove();
  }

  if (event.code === 'ArrowDown') {
    game.downMove();
  }
  putValuesInBoard(game);
};

const putValuesInBoard = function(game) {
  const cells = document.getElementsByTagName('td');
  const board = game.getBoard();

  let index = 0;
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board.length; column++) {
      cells[index].innerText = board[row][column];
      cells[index].className = 'color-' + board[row][column];
      index++;
    }
  }
};

const initialize = function() {
  const game = new Game();
  game.startGame();
  const body = document.querySelector('body');
  body.onkeydown = move.bind(null, game);
  putValuesInBoard(game);
};

window.onload = initialize;

ReactDOM.render(<Table />, document.getElementById('root'));
