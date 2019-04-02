import React, { Component } from 'react';
import './main.css';

const Data = function(props) {
  const { element } = props;
  return <td className={'color-' + element}>{element}</td>;
};

const Row = function(props) {
  const {row} = props;
  return (
    <tr>
      {row.map(element => (
        <Data element={element} />
      ))}
    </tr>
  );
};

const Body = function(props) {
  const {board} = props;
  return (
    <tbody>
      {board.map(row => (
        <Row row={row} />
      ))}
    </tbody>
  );
};

class Table extends Component {
  render() {
    return (
      <table className="board" id="board">
        <Body board={this.props.board} />
      </table>
    );
  }
}

export default Table;
