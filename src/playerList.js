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
        <PlayerGrid>
            <Link to={`/${item.id}`}>
                <li key={item.commonName+item.lastName} >
                    <img scr={item.headshot.imgUrl} alt="Player Headshot"/>
                    <h3>{name}</h3>
                </li>
            </Link>
        </PlayerGrid>
      )
    });

    return (
      <div className="App">
          {playerList}
      </div>
    );
  }
}

export default Players;

const PlayerGrid = Styled.ul`
    list-style: none;
    padding: 1rem;
`;