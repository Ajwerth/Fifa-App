import React, { Component } from 'react';
import { playerData } from "./data/players_data.js";
import './css/lists.css';
import{ Link } from 'react-router-dom';

class Players extends Component {
  
  render() {

    const playerList = playerData.items.map((item) => {
      let name;
      item.commonName ? name = item.commonName : item.firstName ? name = item.firstName : name = "No Name";
      return(
        <Link to={`/${item.id}`}>
            <li key={item.commonName+item.lastName} >
                    <img scr={item.headshot.imgUrl}/>
                    {name}
            </li>
        </Link>
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

export default Players;