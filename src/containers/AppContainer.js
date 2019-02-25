import React, { Component } from 'react';
import AvailableGameList from '../components/AvailableGameList';
import SelectedGameList from '../components/SelectedGameList';


class AppContainer extends Component {
  constructor(props){
    super(props);

    this.availableGames = [
      {id: 1, title: 'Mall Madness' },
      {id: 2, title: 'Candy Lane' },
    ];

    this.state = {
      privateCollection: []
    };
  }

  addGameToPrivateCollection = (game) => {
    var newCollection = this.state.privateCollection;
    newCollection.push(game);
    this.setState({privateCollection: newCollection});
  };

  render() {
    return (
     <div>
       <AvailableGameList games={this.availableGames} addGameToPrivateCollection={this.addGameToPrivateCollection}/>
       <SelectedGameList collection={this.state.privateCollection}/>
     </div>
   );
  }
}

export default AppContainer;
