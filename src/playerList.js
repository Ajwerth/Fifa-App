import React, { Component } from 'react';
import { playerData } from "./data/players_data.js";
import{ Link } from 'react-router-dom';
import Styled from 'styled-components';
class Players extends Component {
  
  render() {

    const playerList = playerData.items.map((item) => {
      let name;
      item.commonName ? name = item.commonName : item.firstName ? name = item.firstName : name = "No Name";
      return(
        <li key={item.commonName+item.lastName} >
            <Link to={`/${item.id}`}>
              <img alt="Player Headshot" src={item.headshot.imgUrl}/>
              <h3>{name}</h3>
            </Link>
        </li>
      )
    });

    return (
      <div className="App">
        <PlayerGrid>
          {playerList}
        </PlayerGrid>
      </div>
    );
  }
}

export default Players;

const PlayerGrid = Styled.ul`
    list-style: none;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;