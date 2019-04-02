import React from 'react';
import Game from './models/Game';
import './main.css';
import Table from './Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    const game = new Game();
    game.startGame();
    this.state = { game, board: game.getBoard() };
  }

  move(event) {
    const {game} = this.state;
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

    this.setState(() => ({
      board: this.state.game.getBoard()
    }));
  }

  componentDidMount() {
    const body = document.querySelector('body');
    body.onkeydown = this.move.bind(this);
  }

  render() {
    return <Table board={this.state.board} />;
  }
}

export default App;
