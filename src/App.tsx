import Board from "./components/Board";
import GameContextProvider from "./contexts/GameContext";
import './styles/index.css';

function App() {

  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
}

export default App;
