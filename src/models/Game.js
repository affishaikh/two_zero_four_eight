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
  }

  upMove() {
    this.board.upMove();
  }

  rightMove() {
    this.board.rightMove();
  }

  leftMove() {
    this.board.leftMove();
  }

  getBoard() {
    return this.board.getBoard();
  }
}

export default Game;