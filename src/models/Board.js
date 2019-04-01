const getRandomInteger = function(limit) {
  return Math.round(Math.random() * limit);
};

const getPositionsOfEmptyPlaces = function(board) {
  const positionsOfEmptyPlaces = [];
  for (let row in board) {
    for (let column in board[row]) {
      if (board[row][column] === 0) {
        positionsOfEmptyPlaces.push([row, column]);
      }
    }
  }

  return positionsOfEmptyPlaces;
};

const transpose = function(board) {
  const result = [[], [], [], []];
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board.length; column++) {
      result[column][row] = board[row][column];
    }
  }
  return result;
};

const moveNumbersToLeft = function(board) {
  for (let row = 0; row < board.length; row++) {
    for (let column = 1; column < board.length; column++) {
      for (let column1 = column; column1 > 0; column1--) {
        if (board[row][column1 - 1] === 0) {
          board[row][column1 - 1] = board[row][column1];
          board[row][column1] = 0;
        }
      }
    }
  }

  return board;
};

const moveNumbersToRight = function(board) {
  for (let row = 0; row < board.length; row++) {
    for (let column = 2; column >= 0; column--) {
      for (let column1 = column; column1 < board.length - 1; column1++) {
        if (board[row][column1 + 1] === 0) {
          board[row][column1 + 1] = board[row][column1];
          board[row][column1] = 0;
        }
      }
    }
  }

  return board;
};

const addNumbersTowardsLeft = function(board) {
  for (let row = 0; row < board.length; row++) {
    for (let column = 1; column < board.length; column++) {
      if (board[row][column - 1] === board[row][column]) {
        board[row][column - 1] += board[row][column];
        board[row][column] = 0;
      }
    }
  }

  return board;
};

const addNumbersTowardsRight = function(board) {
  for (let row = 0; row < board.length; row++) {
    for (let column = 2; column >= 0; column--) {
      if (board[row][column + 1] === board[row][column]) {
        board[row][column + 1] += board[row][column];
        board[row][column] = 0;
      }
    }
  }

  return board;
};

class Board {
  constructor() {
    this.board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  }

  placeNumber() {
    const positionsOfEmptyPlaces = getPositionsOfEmptyPlaces(this.getBoard());
    const index = getRandomInteger(positionsOfEmptyPlaces.length - 1);
    const place = positionsOfEmptyPlaces[index];
    this.board[place[0]][place[1]] = 2;
  }

  getBoard() {
    return this.board.map(row => row.slice());
  }

  leftMove() {
    this.board = moveNumbersToLeft(this.getBoard());
    this.board = addNumbersTowardsLeft(this.getBoard());
    this.board = moveNumbersToLeft(this.getBoard());
  }

  upMove() {
    this.board = transpose(this.getBoard());
    this.leftMove();
    this.board = transpose(this.getBoard());
  }

  rightMove() {
    this.board = moveNumbersToRight(this.getBoard());
    this.board = addNumbersTowardsRight(this.getBoard());
    this.board = moveNumbersToRight(this.getBoard());
  }

  downMove() {
    this.board = transpose(this.getBoard());
    this.rightMove();
    this.board = transpose(this.getBoard());
  }
}

export default Board;
