import { useGameContext } from '../../contexts/GameContext';


export default function Player() {
  const gameResult = false;
  const { state } = useGameContext();
  const isXNext = state.isXNext;

  return (
    <div className='player'>
        {gameResult ? <h1>Fim de jogo</h1> : <h1>Player: {isXNext ? 'X' : 'O'}</h1>}
    </div>
    );
}