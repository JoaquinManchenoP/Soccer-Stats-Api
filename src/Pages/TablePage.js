import StandingTable from "../Components/StandingTable";
import { useContext } from "react";
import { SoccerContext } from "../Components/SoccerContext";
import requests from "../Components/requests";

export default function TablePage() {
  const [soccerData, setSoccerData] = useContext(SoccerContext);

  return (
    <div>
      <StandingTable fetchUrl={requests.fetchStandings} />
    </div>
  );
}
