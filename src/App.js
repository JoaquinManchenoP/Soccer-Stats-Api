import logo from "./logo.svg";
import "./App.css";
import TablePage from "./Pages/TablePage";
import { SoccerProvider } from "./Components/SoccerContext";

function App() {
  return (
    <SoccerProvider>
    <div className="App">
      <TablePage />
    </div>
    </SoccerProvider>
    
  );
}

export default App;
