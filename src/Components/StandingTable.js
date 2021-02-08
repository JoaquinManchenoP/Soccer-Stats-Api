import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import StandingTableRow from "./StandingTableRow.js";
import { SoccerContext } from "./SoccerContext.js";
import "../Styles/standingsTable.css";

export default function StandingTable({ fetchUrl }) {
  const [soccerData, setSoccerData] = useContext(SoccerContext);

    useEffect(() => {
      async function fetchData() {
     const request = await axios.get(
          `https://api.football-data.org/v2${fetchUrl}`,
          {
            method: "GET",
            headers: {
              "X-Auth-Token": "5ae02c7803c746e5aa07f8cffe94210f",
            },
          }
        );

        let premierLeagueStandings = request.data.standings[0].table;

        
      }

      fetchData();
    }, []);


      setSoccerData({
          ...soccerData,
          standings: [premierLeagueStandings],
        });

  return (
    <div className="standings__table">
      {console.log(soccerData.standings)}

      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Postition</th>
              <th>Club</th>
              <th>Played</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Draw</th>
              <th>GF</th>
              <th>GA</th>
              <th>Form</th>
            </tr>
          </thead>

            {soccerData.standings[0].map((premierLeagueTeam) => (
                 <tbody>
            <tr>
              <td><p>{premierLeagueTeam.position}</p></td>
              <td>
               <p>{premierLeagueTeam.team.name}</p>
              </td>
              <td><p>{premierLeagueTeam.playedGames}</p></td>
              <td><p>{premierLeagueTeam.won}</p></td>
              <td><p>{premierLeagueTeam.draw}</p></td>
              <td><p>{premierLeagueTeam.lost}</p></td>
              <td><p>{premierLeagueTeam.goalsAgainst}</p></td>
              <td><p>{premierLeagueTeam.points}</p></td>
              <td><p>{premierLeagueTeam.form}</p></td>
            </tr>
          </tbody>

            ))}
    
         
        </table>
      </div>
    </div>
  );
}
