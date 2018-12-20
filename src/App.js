import React, { Component } from 'react';
import { playerData } from "./data/players_data.js"
import './App.css';

console.log(playerData);

class App extends Component {
  
  render() {

    const playerList = playerData.items.map((item) => {
      let name;
      item.commonName ? name = item.commonName : item.firstName ? name = item.firstName : name = "No Name";
      return(
        <li key={item.commonName+item.lastName} >{name}</li>
      )
    });

    return (
      <div className="App">
        <ul>
          {playerList}
        </ul>
      </div>
    );
  }
}

export default App;
