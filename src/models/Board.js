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
  const result = [[],[],[],[]];
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board.length; column++) {
      result[column][row] = board[row][column];
    }
  }
  return result;
}

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

class Board {
  constructor() {
    this.board = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  }

  placeNumber() {
    const positionsOfEmptyPlaces = getPositionsOfEmptyPlaces(
      this.board.slice()
    );
    const index = getRandomInteger(positionsOfEmptyPlaces.length - 1);
    const place = positionsOfEmptyPlaces[index];
    this.board[place[0]][place[1]] = 2;
  }

  leftMove() {
    this.board = moveNumbersToLeft(this.board.slice());
    this.board = addNumbersTowardsLeft(this.board.slice());
    this.board = moveNumbersToLeft(this.board.slice());
    this.placeNumber();
  }

  upMove() {
    this.board = transpose(this.board.slice());
    this.leftMove();
    this.board = transpose(this.board.slice());
    this.placeNumber();
  }

  getBoard() {
    return this.board.map(row => row.slice());
  }
}

export default Board;