import React from "react";
import './PlayerSearch.css';

export default function PlayerSearch() {
  return <div>
    <center>
        <div>
            <span>PLAYER SEARCH</span>
            <br /><br />
            <select id="dropDownMenu">
                <option value="Offensive Player">Offensive Player</option>
                <option value="Defensive Player">Defensive Player</option>
                <option value="Kicker">Kicker</option>
            </select>
            <br /><br />
            <input type="text" id="textBox" placeholder="Enter a Player's First or Last Name"></input>
            <br /><br />
            <input type="button" id="searchBtn" value="Search"></input>

        </div>
    </center>
  </div>;
}