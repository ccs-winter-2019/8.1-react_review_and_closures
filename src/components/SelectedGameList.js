import React, { Component } from 'react';


class SelectedGameList extends Component{
  render(){
    var collectionItems = this.props.collection.map((game) => {
      return <li key={game.id}>{game.title}</li>;
    });

    return (
      <ul>
        {collectionItems}
      </ul>
    );
  }
}

export default SelectedGameList;
