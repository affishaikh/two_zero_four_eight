import Board from './Board';

class Game {
  constructor() {
    this.board = new Board();
  }

  startGame() {
    this.performInitialMoves();
  }

  performInitialMoves() {
    this.board.placeNumber();
    this.board.placeNumber();
  }

  downMove() {
    this.board.downMove();
    this.board.placeNumber();
  }

  upMove() {
    this.board.upMove();
    this.board.placeNumber();
  }

  rightMove() {
    this.board.rightMove();
    this.board.placeNumber();
  }

  leftMove() {
    this.board.leftMove();
    this.board.placeNumber();
  }

  getBoard() {
    return this.board.getBoard();
  }
}

export default Game;