import React, { Component } from 'react';


class AvailableGameList extends Component{
  render(){
    var games = this.props.games.map((game) => {
      return (
        <li key={game.id}>
          {game.title} <button onClick={(event) => {this.props.addGameToPrivateCollection(game)}}>Add Game</button>
        </li>
      );
    });

    return (
      <ul>
        {games}
      </ul>
    );
  }
}

export default AvailableGameList;